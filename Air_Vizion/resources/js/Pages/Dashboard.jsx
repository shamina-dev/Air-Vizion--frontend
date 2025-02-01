import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import Chart from "chart.js/auto";
import "./../../css/dashboard.css";

const firebaseConfig = {
    apiKey: "AIzaSyD8Kk8Wl7dMuGwmgOntRLXamKx2QkAKW5g",
    authDomain: "form-d37db.firebaseapp.com",
    databaseURL:
        "https://form-d37db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "form-d37db",
    storageBucket: "form-d37db.firebasestorage.app",
    messagingSenderId: "171222384552",
    appId: "1:171222384552:web:94a2f71766d376dd92a79d",
    measurementId: "G-H8V7DWDRME",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Dashboard() {
    const [latestData, setLatestData] = useState({});
    const [chartData, setChartData] = useState({
        timestamps: [],
        O3: [],
        NO2: [],
        SO2: [],
        CO: [],
        temperature: [],
    });
    const [showTable, setShowTable] = useState(false);
    useEffect(() => {
        const dataRef = ref(database, "AirQualityData");
        onValue(dataRef, (snapshot) => {
            const fetchedData = snapshot.val();
            if (!fetchedData) return;

            const dataArray = Object.values(fetchedData);
            const latestEntry = dataArray[dataArray.length - 1];

            const timestamps = [];
            const O3 = [];
            const NO2 = [];
            const SO2 = [];
            const CO = [];
            const temperature = [];

            dataArray.slice(-20).forEach((entry) => {
                timestamps.push(
                    new Date(entry.timestamp).toLocaleString("en-GB")
                );
                O3.push(entry.O3 || 0);
                NO2.push(entry.NO2 || 0);
                SO2.push(entry.SO2 || 0);
                CO.push(entry.CO || 0);
                temperature.push(entry.temperature_mean || 0);
            });

            setLatestData(latestEntry);
            setChartData({ timestamps, O3, NO2, SO2, CO, temperature });
        });
    }, []);

    useEffect(() => {
        if (chartData.timestamps.length > 0) {
            const chartConfigs = [
                {
                    id: "chartO3",
                    label: "O3 (µg/m³)",
                    data: chartData.O3,
                    color: "#FF6384",
                },
                {
                    id: "chartNO2",
                    label: "NO2 (µg/m³)",
                    data: chartData.NO2,
                    color: "#36A2EB",
                },
                {
                    id: "chartSO2",
                    label: "SO2 (µg/m³)",
                    data: chartData.SO2,
                    color: "#FFCE56",
                },
                {
                    id: "chartCO",
                    label: "CO (µg/m³)",
                    data: chartData.CO,
                    color: "#4BC0C0",
                },
                {
                    id: "chartTemperature",
                    label: "Temperature (°C)",
                    data: chartData.temperature,
                    color: "#9966FF",
                },
            ];

            chartConfigs.forEach(({ id, label, data, color }) => {
                const ctx = document.getElementById(id);
                if (ctx) {
                    new Chart(ctx, {
                        type: "bar",
                        data: {
                            labels: chartData.timestamps,
                            datasets: [
                                {
                                    label,
                                    data,
                                    backgroundColor: color + "99",
                                    borderColor: color,
                                    borderWidth: 1,
                                },
                            ],
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                    },
                                },
                                y: { beginAtZero: true },
                            },
                        },
                    });
                }
            });
        }
    }, [chartData]);

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="dashboard-container">
                <h1 className="text-center">Air Quality Monitoring</h1>

                {/*  Latest Values Summary Section with Button */}
                <div className="summary-container flex justify-between items-center">
                    <div className="flex flex-wrap gap-4">
                        <div className="summary-card">
                            <h3>O3</h3>
                            <p>{latestData.O3 || "N/A"} µg/m³</p>
                        </div>
                        <div className="summary-card">
                            <h3>NO2</h3>
                            <p>{latestData.NO2 || "N/A"} µg/m³</p>
                        </div>
                        <div className="summary-card">
                            <h3>SO2</h3>
                            <p>{latestData.SO2 || "N/A"} µg/m³</p>
                        </div>
                        <div className="summary-card">
                            <h3>CO</h3>
                            <p>{latestData.CO || "N/A"} µg/m³</p>
                        </div>
                        <div className="summary-card">
                            <h3>Temperature</h3>
                            <p>{latestData.temperature_mean || "N/A"} °C</p>
                        </div>
                    </div>
                    <button
                        className="show-table-btn"
                        onClick={() => setShowTable(!showTable)}
                    >
                        {showTable ? "Hide Table" : "Show Full Data"}
                    </button>
                </div>

                {showTable && (
                    <div className={`table-container show`}>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Date & Time</th>
                                    <th>O3 (µg/m³)</th>
                                    <th>NO2 (µg/m³)</th>
                                    <th>SO2 (µg/m³)</th>
                                    <th>CO (µg/m³)</th>
                                    <th>Temperature (°C)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chartData.timestamps.map((entry, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0 ? "even-row" : ""
                                        }
                                    >
                                        <td>{entry}</td>
                                        <td>{chartData.O3[index] || "N/A"}</td>
                                        <td>{chartData.NO2[index] || "N/A"}</td>
                                        <td>{chartData.SO2[index] || "N/A"}</td>
                                        <td>{chartData.CO[index] || "N/A"}</td>
                                        <td>
                                            {chartData.temperature[index] ||
                                                "N/A"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/*  Bar Charts */}
                <div className="chart-container">
                    <div className="chart-box">
                        <canvas id="chartO3"></canvas>
                    </div>
                    <div className="chart-box">
                        <canvas id="chartNO2"></canvas>
                    </div>
                    <div className="chart-box">
                        <canvas id="chartSO2"></canvas>
                    </div>
                    <div className="chart-box">
                        <canvas id="chartCO"></canvas>
                    </div>
                    <div className="chart-box">
                        <canvas id="chartTemperature"></canvas>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
