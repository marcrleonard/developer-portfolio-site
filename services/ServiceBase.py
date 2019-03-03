

class Service:
    def __init__(self, endpoint):
        self.endpoint=endpoint
        self.validator = None

    def _validate_request(self):
        if self.validator == None:
            raise NotImplementedError('Please add cerberus validator for incoming payload.')



    def process_request(self):
        pass