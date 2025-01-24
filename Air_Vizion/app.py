from flask import Flask, request, jsonify, render_template
import joblib
import pandas as pd

UPLOAD_FOLDER = 'mysite/static/uploads'

# Initialize Flask app
app = Flask(__name__)

# Load the trained model
model = joblib.load('pollution_model.pkl')

# Home route (UI for input)
@app.route('/')
def home():
    return render_template('index.html')

# API route for predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Get JSON data from the request
    data = request.json
    input_df = pd.DataFrame([data])  # Convert JSON to DataFrame

    # Make predictions
    prediction = model.predict(input_df)[0]
    response = {
        'O3(µg/m³)': prediction[0],
        'NO2(µg/m³)': prediction[1],
        'CO(µg/m³)': prediction[2],
        'SO2(µg/m³)': prediction[3],
        'temperature_mean (°C)': prediction[4]
    }
   

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
