import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import Chart from "chart.js/auto";

// Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState({
        timestamps: [],
        O3: [],
        NO2: [],
        SO2: [],
        CO: [],
        temperature: [],
    });

    useEffect(() => {
        const dataRef = ref(database, "AirQualityData");
        onValue(dataRef, (snapshot) => {
            const fetchedData = snapshot.val();
            const dataArray = Object.values(fetchedData).slice(-20);

            const timestamps = [];
            const O3 = [];
            const NO2 = [];
            const SO2 = [];
            const CO = [];
            const temperature = [];

            dataArray.forEach((entry) => {
                timestamps.push(
                    entry.timestamp
                        ? new Date(entry.timestamp).toLocaleString("en-GB")
                        : "N/A"
                );
                O3.push(entry.O3 || 0);
                NO2.push(entry.NO2 || 0);
                SO2.push(entry.SO2 || 0);
                CO.push(entry.CO || 0);
                temperature.push(entry.temperature_mean || 0);
            });

            setData(dataArray);
            setChartData({ timestamps, O3, NO2, SO2, CO, temperature });
        });
    }, []);

    useEffect(() => {
        if (chartData.timestamps.length > 0) {
            // Render charts
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
                new Chart(document.getElementById(id), {
                    type: "line",
                    data: {
                        labels: chartData.timestamps,
                        datasets: [
                            {
                                label,
                                data,
                                borderColor: color,
                                backgroundColor: color + "33", // Add transparency to the background color
                                fill: true,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false, // Allows custom height and width
                        scales: {
                            x: {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                },
                            },
                        },
                    },
                });
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
                        onClick={() =>
                            (window.location.href = "http://127.0.0.1:5000")
                        }
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Predict
                    </button>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow-sm rounded-lg">
                        <h1 className="text-center text-2xl font-bold mb-6">
                            Air Quality Data
                        </h1>

                        {/* Data Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3">
                                            Date & Time
                                        </th>
                                        <th className="px-6 py-3">
                                            O3 (µg/m³)
                                        </th>
                                        <th className="px-6 py-3">
                                            NO2 (µg/m³)
                                        </th>
                                        <th className="px-6 py-3">
                                            SO2 (µg/m³)
                                        </th>
                                        <th className="px-6 py-3">
                                            CO (µg/m³)
                                        </th>
                                        <th className="px-6 py-3">
                                            Temperature (°C)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((entry, index) => (
                                        <tr
                                            key={index}
                                            className={
                                                index % 2 === 0
                                                    ? "bg-gray-50"
                                                    : ""
                                            }
                                        >
                                            <td className="px-6 py-4 text-center">
                                                {entry.timestamp}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {entry.O3 || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {entry.NO2 || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {entry.SO2 || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {entry.CO || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {entry.temperature_mean ||
                                                    "N/A"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Charts */}
                        <div className="grid grid-cols-1 gap-4 mt-6">
                            {/* Top Charts */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="w-full h-48">
                                    <canvas id="chartO3"></canvas>
                                </div>
                                <div className="w-full h-48">
                                    <canvas id="chartNO2"></canvas>
                                </div>
                            </div>

                            {/* Middle Temperature Chart */}
                            <div className="w-full h-64">
                                <canvas id="chartTemperature"></canvas>
                            </div>

                            {/* Bottom Charts */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="w-full h-48">
                                    <canvas id="chartSO2"></canvas>
                                </div>
                                <div className="w-full h-48">
                                    <canvas id="chartCO"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
