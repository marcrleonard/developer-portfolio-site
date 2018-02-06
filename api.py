from flask import Flask, jsonify, send_from_directory, render_template



APP = Flask(__name__, static_folder='build/static')

@APP.route("/")
def index():
    return send_from_directory('build', 'index.html')


@APP.route("/hello")
def hello():

    return jsonify({'response':'hello'})

if __name__ == '__main__':
    APP.run(use_reloader=True, port=5000, threaded=True)
    