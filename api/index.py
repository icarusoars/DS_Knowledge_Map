from flask import Flask, Response
from flask_restplus import Resource, Api, fields
import markdown
import requests

PROD_URL = "https://ds-knowledge-map.now.sh/"

app = Flask(__name__)
# app.wsgi_app = ProxyFix(app.wsgi_app)
api = Api(app,
          version='0.1',
          title='DS Knowledge Map API',
          description='API for Data Science Knowledge Map',
          doc='/api/doc'
          )

# all api functionality for knowledge map visualization & information will be in this namespace
ns_kmap = api.namespace(
    'api/kmap', description='Powers frontend\'s circle packing visualization')


@app.route('/api/hello_world')
def hello_world():
    return {'hello': 'hello world!'}


@ns_kmap.route('/viz_json')
class KmapStructure(Resource):
    def get(self):
        response = requests.get(PROD_URL + "kmap_static/circlemap.json")
        return response.json()


@ns_kmap.route('/<path:resource_path>')
class KmapNodeInfo(Resource):
    def get(self, resource_path):
        resource_path = PROD_URL + 'kmap_static/' + resource_path

        response = requests.get(resource_path)
        print(response.text)
        html_string = markdown.markdown(
            response.text, extensions=["fenced_code"]
        )
        # print(html_string)

        return html_string


if __name__ == '__main__':
    app.run(debug=True)
