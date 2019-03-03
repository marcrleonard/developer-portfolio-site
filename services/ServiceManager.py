
from flask import Flask, jsonify, request
from ServiceBase import SnippetService

service_handler = {
	'snippets': SnippetService,
	# 'timelines': NotImplemented
}


app = Flask(__name__)

@app.route('/<endpoint>', methods=['POST'])
def handler(endpoint):

	post_data = request.get_json()
	if post_data == None:
		post_data = {}


	_service_object = service_handler.get(endpoint, None)
	if _service_object == None:
		return jsonify({'error': 'endpoint not available.'})


	service_object = _service_object(post_data)
	service_object.validate_request()

	response = service_object.process_request()

	return jsonify(response)


if __name__ == '__main__':
	app.run(debug=True)
