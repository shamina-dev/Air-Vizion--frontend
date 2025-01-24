import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import sys
import joblib

sys.stdout.reconfigure(encoding='utf-8')  # Set UTF-8 encoding for printing

# Load the dataset
data = pd.read_csv('F:/Ml model/Air-quality-predictor/kandydata.csv',encoding="utf-8")  # Replace with your dataset


# Clean column names
data.columns = (
    data.columns
    .str.replace("�", "µ", regex=False)  # Replace � with µ
    .str.replace("Â", "", regex=False)  # Remove Â
    .str.replace("(�C)", "(°C)", regex=False)  # Replace �C with °C
    .str.strip()  # Remove leading/trailing spaces
)

# Print cleaned column names safely
print(data.columns.tolist())



features = [
    'temperature_2m_max (°C)',
    'temperature_2m_min (°C)',
    'sunshine_duration (s)',
    'rain_sum (mm)',
    'shortwave_radiation_sum (MJ/m²)'
]

targets = [
    'O3(µg/m³)',
    'NO2(µg/m³)',
    'CO(µg/m³)',
    'SO2(µg/m³)',
    'temperature_2m_mean (°C)'
]


X = data[features]
y = data[targets]

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)



# Train the model
model = RandomForestRegressor(random_state=42)
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'pollution_model.pkl')
print("Model saved as 'pollution_model.pkl'")

