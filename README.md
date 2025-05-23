# NBA Salary Predictor + Player Similarity Tracker

## Overview
This site is also hosted at [https://alanzhong35.github.io/reading-system/](https://alanzhong35.github.io/reading-system/). This project has evolved from a reading tracker to a machine learning application that predicts NBA player salaries based on their statistics. The application uses a trained model to estimate a player's salary given their performance metrics as well as K-means player similarity.

## Project Structure
```
.
├── backend/         # Flask backend server
└── my-app/         # Frontend application
```

## Features
- Input NBA player statistics
- Predict player salary based on performance metrics
- Interactive web interface
- REST API backend

## Prerequisites
- Python 3.7 or above
- Node.js and npm
- Required Python packages (see Installation)
- Required npm packages (see Installation)

## Installation

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

3. Install required packages:
```bash
pip install -r requirements.txt
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd my-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Start the Backend Server
1. From the project root, navigate to the backend directory:
```bash
cd backend
```

2. Run the Flask server:
```bash
python app.py
```

The backend server should now be running on localhost

### Start the Frontend Application
1. In a new terminal, navigate to the frontend directory:
```bash
cd my-app
```

2. Start the development server:
```bash
npm run dev
```

The frontend application should now be accessible at localhost

## Usage
1. Open your web browser and navigate to localhost
2. Enter the player statistics in the provided form
3. Submit the form to receive a salary prediction

## Model Information
The machine learning model used in this application is hosted on Kaggle. You can find the detailed implementation and training process in our Kaggle notebook: [https://www.kaggle.com/code/alantrex35/notebook2a22a63115/edit/run/187284474](https://www.kaggle.com/code/alantrex35/notebook2a22a63115/edit/run/187284474) .  
