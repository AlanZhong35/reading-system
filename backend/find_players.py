import numpy as np

def find_closest_players(player_name, data, X_scaled, kmeans_model, n_top=6):
    if player_name not in data['Player Name'].values:
        raise ValueError("Player not found in the dataset")

    player_index = data[data['Player Name'] == player_name].index[0]
    player_scaled = X_scaled[player_index]

    cluster_labels = kmeans_model.predict(X_scaled)
    player_cluster = kmeans_model.predict(player_scaled.reshape(1, -1))[0]

    players_in_cluster = data[cluster_labels == player_cluster].copy()
    distances = np.linalg.norm(X_scaled - player_scaled, axis=1)

    players_in_cluster['Distance_to_Player'] = distances[cluster_labels == player_cluster]

    closest_players = players_in_cluster.sort_values(by='Distance_to_Player').head(n_top)

    return closest_players