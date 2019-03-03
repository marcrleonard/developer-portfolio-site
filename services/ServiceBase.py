import cerberus
from stackOverflowRequests import StackOverflow

class Service:
    def __init__(self, post_data):
        self.validator_schema = None

        self.request_payload = post_data

    def validate_request(self):
        if self.validator_schema == None:
            raise NotImplementedError('Please add cerberus validator for incoming payload.')

        validator = cerberus.Validator(self.validator_schema)

        valid = validator.validate(self.request_payload)
        if not valid:
            return validator.errors



    def process_request(self) -> dict:
        raise NotImplementedError('This should be implemented through the subclass')



class SnippetService(Service):
    def __init__(self, post_data):
        super().__init__(post_data)

        self.validator_schema = {}


    def process_request(self):
        s = StackOverflow()
        resp = s.get_favorites()
        return resp

# s = SnippetService()