import cerberus
from pathlib import Path
import json

class Service:
    def __init__(self):
        self.name = None
        self.validator_schema = None
        self.request_payload = None
        self.store = {}

        self.store_path = None

    def field_request(self, request_payload):
        self.request_payload = request_payload

        # check tables...

    def init_db(self):
        self.store_path = Path('stores', self.name + '.json')
        print('loading "{}" store...'.format(self.name))

        if self.store_path.exists():
            print('"{}" store found.'.format(self.name))
            with open(self.store_path, 'r') as f:
                self.store = json.loads(f.read())
        else:
            print('no persistent store found. creating...')
            with open(self.store_path, 'w') as f:
                f.write(json.dumps({}))

    def sync_data(self):
        with open(self.store_path, 'r') as f:
            f.write(json.dumps(self.store))

    def validate_request(self):
        if self.validator_schema == None:
            raise NotImplementedError('Please add cerberus validator for incoming payload.')

        validator = cerberus.Validator(self.validator_schema)

        valid = validator.validate(self.request_payload)
        if not valid:
            return validator.errors

    def process_request(self) -> dict:
        raise NotImplementedError('This should be implemented through the subclass')



# s = SnippetService()