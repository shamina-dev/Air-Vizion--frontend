import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import Chart from "chart.js/auto";
import "./../../css/dashboard.css"; // Keep existing styles

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhGtbH3mBn3oNvGr3s1O1_vdOaJtEwM_w",
    authDomain: "air-quality-monitor-b9d21.firebaseapp.com",
    databaseURL:
        "https://air-quality-monitor-b9d21-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "air-quality-monitor-b9d21",
    storageBucket: "air-quality-monitor-b9d21.firebasestorage.app",
    messagingSenderId: "354638688761",
    appId: "1:354638688761:web:b8e56d1fac220515064d28",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Dashboard() {
    const [latestData, setLatestData] = useState({});
    const [chartData, setChartData] = useState({
        timestamps: [],
        humidity: [],
        mq135: [],
        mq9: [],
        temperature: [],
    });
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        const dataRef = ref(database, "TemperatureHumidity");
        onValue(dataRef, (snapshot) => {
            const fetchedData = snapshot.val();
            if (!fetchedData) return;

            const dataArray = Object.values(fetchedData);
            const latestEntry = dataArray[dataArray.length - 1];

            const timestamps = [];
            const humidity = [];
            const mq135 = [];
            const mq9 = [];
            const temperature = [];

            dataArray.slice(-20).forEach((entry) => {
                timestamps.push(`${entry.date || "N/A"} ${entry.time || ""}`);
                humidity.push(entry.humidity || 0);
                mq135.push(entry.mq135_gas || 0);
                mq9.push(entry.mq9_gas || 0);
                temperature.push(entry.temperature || 0);
            });

            setLatestData(latestEntry);
            setChartData({ timestamps, humidity, mq135, mq9, temperature });
        });
    }, []);

    useEffect(() => {
        if (chartData.timestamps.length > 0) {
            const chartConfigs = [
                { id: "chartHumidity", label: "Humidity (%)", data: chartData.humidity, color: "#36A2EB" },
                { id: "chartMQ135", label: "SO2/NO2 Gas (ppm)", data: chartData.mq135, color: "#FF6384" },
                { id: "chartMQ9", label: "CO/O3 Gas (ppm)", data: chartData.mq9, color: "#FFCE56" },
                { id: "chartTemperature", label: "Temperature (°C)", data: chartData.temperature, color: "#9966FF" },
            ];

            chartConfigs.forEach(({ id, label, data, color }) => {
                const ctx = document.getElementById(id);
                if (ctx) {
                    const existingChart = Chart.getChart(id);
                    if (existingChart) {
                        existingChart.destroy();
                    }
                    new Chart(ctx, {
                        type: "bar",
                        data: {
                            labels: chartData.timestamps,
                            datasets: [{
                                label,
                                data,
                                borderColor: color,
                                backgroundColor: color,
                                fill: true,
                            }],
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: { x: { ticks: { autoSkip: true, maxTicksLimit: 10 } } },
                        },
                    });
                }
            });
        }
    }, [chartData]);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                    <button
                        onClick={() => (window.location.href = "http://127.0.0.1:5000")}
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                        aria-label="Predict Air Quality"
                    >
                        Predict
                    </button>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="dashboard-container">
                <h1 className="text-center">Air Quality Monitoring</h1>

                {/* Summary Section + Toggle Button */}
                <div className="summary-container flex justify-between items-center">
                    <div className="flex flex-wrap gap-4">
                        <div className="summary-card"><h3>Humidity</h3><p>{latestData.humidity || "N/A"}%</p></div>
                        <div className="summary-card"><h3>SO2/NO2 Gas</h3><p>{latestData.mq135_gas || "N/A"} ppm</p></div>
                        <div className="summary-card"><h3>CO/O3 Gas</h3><p>{latestData.mq9_gas || "N/A"} ppm</p></div>
                        <div className="summary-card"><h3>Temperature</h3><p>{latestData.temperature || "N/A"} °C</p></div>
                    </div>
                    <button className="show-table-btn" onClick={() => setShowTable(!showTable)}>
                        {showTable ? "Hide Table" : "Show Full Data"}
                    </button>
                </div>

                {/* Table */}
                {showTable && (
                    <div className="table-container show">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Date & Time</th>
                                    <th>Humidity (%)</th>
                                    <th>SO2/NO2 Gas (ppm)</th>
                                    <th>CO/O3 Gas (ppm)</th>
                                    <th>Temperature (°C)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chartData.timestamps.map((entry, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "even-row" : ""}>
                                        <td>{entry}</td>
                                        <td>{chartData.humidity[index] || "N/A"}</td>
                                        <td>{chartData.mq135[index] || "N/A"}</td>
                                        <td>{chartData.mq9[index] || "N/A"}</td>
                                        <td>{chartData.temperature[index] || "N/A"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Information Section */}
                <div className="info-container">
                    <ul className="info-list">
                        <li>
                            SO2/NO2 Gas (ppm) - Bad air quality is above 1000–2000 ppm (indicates poor ventilation). Above 5000 ppm can be hazardous.
                        </li>
                        <li>
                            CO/O3 Gas (ppm) - Above 300 ppm (may cause severe health effects).
                        </li>
                        <li>
                            Temperature (°C) - Above 35°C: Risk of heat exhaustion and dehydration increases, especially with high humidity (heat index can feel hotter).
                        </li>
                        <li>
                            The recommended indoor humidity range is 40%–50% RH to balance comfort, health, and air quality.
                        </li>
                    </ul>
                </div>

                {/* Charts */}
                <div className="chart-container">
                    <div className="chart-box"><canvas id="chartHumidity"></canvas></div>
                    <div className="chart-box"><canvas id="chartMQ135"></canvas></div>
                    <div className="chart-box"><canvas id="chartMQ9"></canvas></div>
                    <div className="chart-box"><canvas id="chartTemperature"></canvas></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}