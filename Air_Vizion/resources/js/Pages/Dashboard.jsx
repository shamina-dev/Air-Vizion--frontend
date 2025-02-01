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
    const [selectedParameter, setSelectedParameter] = useState("all");
    const [pieChartData, setPieChartData] = useState({});


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

    //new charts
    useEffect(() => {
        if (chartData.timestamps.length > 0) {
            const chartConfigs = [
                { id: "chartHumidityVsTemp", label: "Humidity vs. Temperature", type: "line", data: chartData.humidity, secondaryData: chartData.temperature, color1: "#36A2EB", color2: "#9966FF" },
                { id: "chartGasScatter", label: "SO2/NO2 vs. CO/O3", type: "scatter", data: chartData.mq135, secondaryData: chartData.mq9, color: "#FF6384" },
                { id: "chartAvgReadings", label: "Average Readings", type: "line", avgData: true, color: "#4BC0C0" },
            ];

            chartConfigs.forEach(({ id, label, type = "bar", data, secondaryData, color, color1, color2, avgData }) => {
                const ctx = document.getElementById(id);
                if (ctx) {
                    const existingChart = Chart.getChart(id);
                    if (existingChart) {
                        existingChart.destroy();
                    }

                    let datasets = [{
                        label,
                        data,
                        borderColor: color,
                        backgroundColor: color,
                        fill: true,
                    }];

                    if (type === "line" && secondaryData) {
                        datasets.push({
                            label: "Temperature (°C)",
                            data: secondaryData,
                            borderColor: color2,
                            backgroundColor: color2,
                            fill: false,
                        });
                    }

                    if (type === "scatter") {
                        datasets = [{
                            label,
                            data: data.map((value, index) => ({ x: value, y: secondaryData[index] })),
                            borderColor: color,
                            backgroundColor: color,
                            pointRadius: 5,
                        }];
                    }

                    if (avgData) {
                        const avgValues = chartData.timestamps.map((_, index) => (
                            (chartData.humidity[index] + chartData.mq135[index] + chartData.mq9[index] + chartData.temperature[index]) / 4
                        ));
                        datasets = [{
                            label: "Average Sensor Readings",
                            data: avgValues,
                            borderColor: color,
                            backgroundColor: color,
                            fill: false,
                        }];
                    }

                    new Chart(ctx, {
                        type,
                        data: { labels: chartData.timestamps, datasets },
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

    //Displaying warning Parameter section
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

      const getCardStyle = (value, type) => {
        if (type === "humidity") {
          return value < 40 || value > 50 ? "danger" : "safe";
        }
        if (type === "mq135") {
          return value > 5000 ? "danger" : value > 1000 ? "warning" : "safe";
        }
        if (type === "mq9") {
          return value > 300 ? "danger" : "safe";
        }
        if (type === "temperature") {
          return value > 35 ? "danger" : "safe";
        }
        return "safe";
      };


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
                    <div className="flex btn-summary flex-wrap gap-4">
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

                {/* Warning Parameter section */}
                <div className="d-container">
                    <div className="card-con">
                        <div className={`cards ${getCardStyle(latestData.humidity, "humidity")}`}>
                        <h3>Humidity</h3>
                        <p>{latestData.humidity}%</p>
                        <span>{getCardStyle(latestData.humidity, "humidity") === "danger" ? "Danger" : "Normal"}</span>
                        </div>

                        <div className={`cards ${getCardStyle(latestData.mq135, "mq135")}`}>
                        <h3>SO2/NO2 Gas (ppm)</h3>
                        <p>{latestData.mq135} ppm</p>
                        <span>{getCardStyle(latestData.mq135, "mq135") === "danger" ? "Danger" : "Normal"}</span>
                        </div>

                        <div className={`cards ${getCardStyle(latestData.mq9, "mq9")}`}>
                        <h3>CO/O3 Gas (ppm)</h3>
                        <p>{latestData.mq9} ppm</p>
                        <span>{getCardStyle(latestData.mq9, "mq9") === "danger" ? "Danger" : "Normal"}</span>
                        </div>

                        <div className={`cards ${getCardStyle(latestData.temperature, "temperature")}`}>
                        <h3>Temperature</h3>
                        <p>{latestData.temperature}°C</p>
                        <span>{getCardStyle(latestData.temperature, "temperature") === "danger" ? "Danger" : "Normal"}</span>
                        </div>
                    </div>
                </div>


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

                {/* new charts  */}
                <div className="pcharts-container">
                    {/* New Charts */}
                    <div className="pcharts-box"><canvas id="chartHumidityVsTemp"></canvas></div>
                    <div className="pcharts-box"><canvas id="chartGasScatter"></canvas></div>
                    <div className="pcharts-box"><canvas id="chartAvgReadings"></canvas></div>
                </div>


            </div>
        </AuthenticatedLayout>
    );
}
