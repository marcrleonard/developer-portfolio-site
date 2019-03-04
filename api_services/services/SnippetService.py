from services.ServiceBase import Service

class SnippetService(Service):
    def __init__(self):

        super().__init__()

        self.name = 'snippet'
        self.validator_schema = {}


    def process_request(self):
        s = StackOverflow()
        resp = s.get_favorites()
        return resp
