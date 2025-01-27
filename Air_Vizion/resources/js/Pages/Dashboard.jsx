import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import Chart from "chart.js/auto";

// New Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function Dashboard() {
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState({
        times: [],
        humidity: [],
        mq135: [],
        mq9: [],
        temperature: [],
    });

    useEffect(() => {
        const dataRef = ref(database, "TemperatureHumidity");
        onValue(dataRef, (snapshot) => {
            const fetchedData = snapshot.val();
            if (!fetchedData) return;

            const dataArray = Object.values(fetchedData).slice(-20);

            const times = [];
            const humidity = [];
            const mq135 = [];
            const mq9 = [];
            const temperature = [];

            dataArray.forEach((entry) => {
                times.push(entry.time || "N/A");
                humidity.push(entry.humidity || 0);
                mq135.push(entry.mq135_gas || 0);
                mq9.push(entry.mq9_gas || 0);
                temperature.push(entry.temperature || 0);
            });

            setData(dataArray);
            setChartData({ times, humidity, mq135, mq9, temperature });
        });
    }, []);

    useEffect(() => {
        if (chartData.times.length > 0) {
            const chartConfigs = [
                {
                    id: "chartHumidity",
                    label: "Humidity (%)",
                    data: chartData.humidity,
                    color: "#36A2EB",
                },
                {
                    id: "chartMQ135",
                    label: "SO2/NO2 Gas (ppm)",
                    data: chartData.mq135,
                    color: "#FF6384",
                },
                {
                    id: "chartMQ9",
                    label: "CO/O3 Gas (ppm)",
                    data: chartData.mq9,
                    color: "#FFCE56",
                },
                {
                    id: "chartTemperature",
                    label: "Temperature (°C)",
                    data: chartData.temperature,
                    color: "#9966FF",
                },
            ];

            chartConfigs.forEach(({ id, label, data, color }) => {
                const chartElement = document.getElementById(id);
                if (chartElement) {
                    new Chart(chartElement, {
                        type: "line",
                        data: {
                            labels: chartData.times,
                            datasets: [
                                {
                                    label,
                                    data,
                                    borderColor: color,
                                    backgroundColor: color + "33",
                                    fill: true,
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
                                    title: {
                                        display: true,
                                        text: "Time",
                                    },
                                },
                            },
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
                                        <th className="px-6 py-3">Time</th>
                                        <th className="px-6 py-3">Humidity</th>
                                        <th className="px-6 py-3">
                                            SO2/NO2 Gas (ppm)
                                        </th>
                                        <th className="px-6 py-3">
                                            CO/O3 Gas (ppm)
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
                                                {entry.time || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {entry.humidity || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {entry.mq135_gas || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {entry.mq9_gas || "N/A"}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {entry.temperature || "N/A"}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <br />
                            <br />
                            <li>
                                SO2/NO2 Gas (ppm) - Bad air quality is above
                                1000–2000 ppm (indicates poor ventilation).
                                Above 5000 ppm can be hazardous.
                            </li>
                            <br />
                            <li>
                                CO/O3 Gas (ppm) - Above 300 ppm (may cause
                                severe health effects).
                            </li>
                            <br />
                            <li>
                                Temperature (°C) - Above 35°C: Risk of heat
                                exhaustion and dehydration increases, especially
                                with high humidity (heat index can feel hotter).
                            </li>
                            <br />
                            <li>
                                The recommended indoor humidity range is 40%–50%
                                RH to balance comfort, health, and air quality.
                            </li>
                            <br />
                            <br />
                        </div>

                        {/* Charts */}
                        <div className="grid grid-cols-1 gap-4 mt-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="w-full h-48">
                                    <canvas id="chartHumidity"></canvas>
                                </div>
                                <div className="w-full h-48">
                                    <canvas id="chartMQ135"></canvas>
                                </div>
                            </div>
                            <div className="w-full h-64">
                                <canvas id="chartTemperature"></canvas>
                            </div>
                            <div className="w-full h-48">
                                <canvas id="chartMQ9"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
