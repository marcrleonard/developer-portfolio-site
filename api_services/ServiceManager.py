
from flask import Flask, jsonify, request
from services.SnippetService import SnippetService
from secrets import db_name
from services.stackOverflowRequests import StackOverflow
from pathlib import Path

# gather all services
services = [
	SnippetService()
]

service_handler = {}

p = Path('stores')
p.mkdir(parents=True, exist_ok=True)

for service in services:
	service_handler[service.name] = service

	service.init_db()



app = Flask(__name__)

@app.route('/<endpoint>', methods=['POST'])
def post_handler(endpoint):

	# this requires auth!

	post_data = request.get_json()
	if post_data == None:
		post_data = {}


@app.route('/<endpoint>', methods=['GET'])
def get_handler(endpoint):

	post_data = request.args

	service_object = service_handler.get(endpoint, None)
	if service_object == None:
		return jsonify({'error': 'endpoint not available.'})


	service_object.field_request(post_data)
	service_object.validate_request()

	response = service_object.process_request()

	return jsonify(response)


if __name__ == '__main__':
	app.run(debug=True)
