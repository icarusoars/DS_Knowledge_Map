from flask import Flask, Response
from flask_restplus import Resource, Api, fields

app = Flask(__name__)
# app.wsgi_app = ProxyFix(app.wsgi_app)
api = Api(app,
          version='0.1',
          title='DS Knowledge Map API',
          description='This API returns all information for nodes in the DS Knowledge Map Visualization'
          )


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return {"hello! path is:": path}



if __name__ == '__main__':
    app.run(debug=True)
