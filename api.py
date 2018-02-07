from flask import Flask, jsonify, send_from_directory, render_template



APP = Flask(__name__, static_folder='build/static')

@APP.route("/")
def index():
    return send_from_directory('build', 'index.html')


@APP.route("/hello")
def hello():
    rv = jsonify({'key_name':'hello'})
    print('hit!')

    return rv

if __name__ == '__main__':
    APP.run(debug=False, use_reloader=True, port=5000, threaded=True)