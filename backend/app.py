from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
import logging
import os
import prediction

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)
logging.basicConfig(level=logging.DEBUG)
class Test(Resource):
    def get(self):
        return 'Welcome to, Test App API!'

    def post(self):
        try:
            value = request.get_json()
            if value:
                return {'Post Values': value}, 201

            return {"error": "Invalid format."}

        except Exception as error:
            return {'error': str(error)}

class GetPredictionOutput(Resource):
    def get(self):
        return {"error": "Invalid Method."}

    def post(self):
        app.logger.debug("trying data")
        try:
            app.logger.debug("trying data")
            data = request.get_json()
            app.logger.debug("trying data")
            if not data:
                return {"error": "No input data provided"}, 400

            app.logger.debug("data loaded successfully")
            predict = prediction.predict_mpg(data)
            return jsonify({'predict': predict[0]})  # Return the first element as a single float

        except Exception as error:
            return {'error': str(error)}, 501

api.add_resource(Test, '/')
api.add_resource(GetPredictionOutput, '/getPredictionOutput')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
