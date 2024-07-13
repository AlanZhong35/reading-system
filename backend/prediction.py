import pickle
import pandas as pd

def predict_mpg(config):
    # Load the model from the saved file
    pkl_filename = "model.pkl"
    with open(pkl_filename, 'rb') as f_in:
        model = pickle.load(f_in)
    if isinstance(config, dict):
        df = pd.DataFrame(config)
    else:
        raise ValueError("Input config should be a dictionary")

    y_pred = model.predict(df)
    return y_pred.tolist()  # Convert numpy array to list for JSON serialization
