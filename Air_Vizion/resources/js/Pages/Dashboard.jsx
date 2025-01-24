import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import { getDatabase, ref, onValue } from "firebase/database";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                    <button
                        onClick={() =>
                            (window.location.href = " http://127.0.0.1:5000")
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
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
