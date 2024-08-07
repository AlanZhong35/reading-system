from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
import logging
import os
import prediction
import find_players
from flask import request, jsonify
from sklearn.preprocessing import StandardScaler
from joblib import load
import pandas as pd
import numpy as np

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


class FindSimilarPlayers(Resource):
    def __init__(self):
        self.kmeans = load('kmeans_model.joblib')
        self.scaler = load('scaler.joblib')  # Load the scaler used during training
        self.player_data = pd.read_csv('player_data.csv')

        # Note: No need to load X_scaled.csv; it will be calculated dynamically

    def post(self):
        app.logger.debug("Processing request for closest players")
        try:
            if request.content_type != 'application/json':
                return {"error": "Content-Type must be application/json"}, 415

            data = request.get_json()
            app.logger.debug(f"Received data: {data}")

            if not isinstance(data, dict) or 'player_name' not in data:
                return {"error": "'player_name' key is missing in the request data"}, 400

            player_name = data.get('player_name')
            if not player_name:
                return {"error": "Player name is required"}, 400

            try:
                # Extract the features for the given player
                player_features = self.player_data.loc[self.player_data['Player Name'] == player_name].drop(
                    'Player Name', axis=1)

                # Ensure all features are numeric
                player_features = player_features.select_dtypes(include=np.number)

                # Scale the features
                player_features_scaled = self.scaler.transform(player_features)
                app.logger.debug(f"Player features (scaled): {player_features_scaled}")

                # Get all player features
                all_features = self.player_data.drop('Player Name', axis=1).select_dtypes(include=np.number)
                all_features_scaled = self.scaler.transform(all_features)

                # Use find_closest_players to find similar players
                closest_players = find_players.find_closest_players(player_name, self.player_data, all_features_scaled,
                                                                    self.kmeans)
                return jsonify(closest_players.to_dict(orient='records'))
            except ValueError as ve:
                return {"error": str(ve)}, 404
            except Exception as e:
                app.logger.error(f"Error occurred: {str(e)}")
                return {'error': str(e)}, 500

        except Exception as e:
            app.logger.error(f"Error occurred: {str(e)}")
            return {'error': str(e)}, 500


class GetPlayerNames(Resource):
    def __init__(self):
        self.player_data = pd.read_csv('player_data.csv')

    def get(self):
        try:
            # Extract player names from the DataFrame
            player_names = self.player_data['Player Name'].tolist()
            return jsonify(player_names)
        except Exception as e:
            return {'error': str(e)}, 500


api.add_resource(Test, '/')
api.add_resource(GetPredictionOutput, '/getPredictionOutput')
api.add_resource(FindSimilarPlayers, '/findSimilarPlayers')
api.add_resource(GetPlayerNames, '/getPlayerNames')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
