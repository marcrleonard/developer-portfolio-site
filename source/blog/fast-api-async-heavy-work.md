Title: Running a CPU heavy task, asyncronously, in FastAPI
Date: 2024-07-19 10:00:00 MST
Category: Python, FastAPI, Async, Multiprocessing
Tags: Python, FastAPI, Async, Multiprocessing
Slug: fast-api-async-heavy-work
Authors: Marc Leonard
Summary: Running a CPU heavy task, asyncronously, in FastAPI

## Running a CPU heavy task, asyncronously, in FastAPI

    import time
    import asyncio
    import uuid
    from concurrent.futures.process import ProcessPoolExecutor
    from concurrent.futures.thread import ThreadPoolExecutor
    
    import fastapi
    from fastapi import HTTPException, Depends
    from fastapi.security import APIKeyHeader
    from fastapi import Security
    from pydantic import BaseModel, Field
    import uvicorn
    
    app = fastapi.FastAPI()
    
    NUM_SECONDS_TO_WORK = 20
    API_HEADER = APIKeyHeader(name="X-API-KEY")
    
    def saturate_cpu(name):
        print(f"[{name}] - saturating CPU")
        s = time.time()
        while True:
            if time.time() - s > NUM_SECONDS_TO_WORK:
                print(f"[{name}] - {NUM_SECONDS_TO_WORK} seconds of work has completed.")
                return True
    class DB:
        def __init__(self):
            self.work = {}
        async def get_work(self):
            return self.work
    
    db = DB()
    
    @app.get("/")
    def get_work():
        loop = asyncio.new_event_loop()
        resp = loop.run_until_complete(db.get_work())
        return resp
    
    class WorkPayload(BaseModel):
        num_cps:int = Field(1, description="The amount of CPUs to saturate while doing work.")
        
    @app.post("/do-work", description="Work will be done to saturate a CPU.")
    async def do_work(work_payload:WorkPayload):
        work_id = str(uuid.uuid4())
        db.work[work_id] = "Working!"
        event_loop = asyncio.get_event_loop()
    
        with ProcessPoolExecutor() as p:
    
            workers = []
            for work_num in range(work_payload.num_cps):
                working_proc = event_loop.run_in_executor(p, saturate_cpu, work_num)
                workers.append(working_proc)
    
            await asyncio.gather(*workers)
        db.work[work_id] = "Done"
        return {"msg": "work has completed."}
    
    
    if __name__ == "__main__":
        uvicorn.run(app, workers=1)
    
