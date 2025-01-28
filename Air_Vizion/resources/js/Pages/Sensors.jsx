import React from "react";
import Layout from "@/Layouts/Layout";
import "./../../css/sensors.css";

const Sensors = () => {
    document.title = "Sensors - Air Vizion";

    return (
        <Layout>
            <h3 className="title">Sensors</h3>

            {/* Sensor Icons Section  */}
            <div className="sensor-icons">
                <div className="icon-row">
                    <div className="sensor-icon icon1"></div>
                    <div className="sensor-icon icon2"></div>
                    <div className="sensor-icon icon3"></div>
                </div>
                <div className="icon-row">
                    <div className="sensor-icon icon4"></div>
                    <div className="sensor-icon icon5"></div>
                    <div className="sensor-icon icon6"></div>
                </div>
            </div>

            {/* Sensor Details Sections */}
            <div className="sensor-section">
                <div className="sensor-details">
                    <h4>MQ135 Sensor</h4>
                    <p>Details about MQ135 sensor...</p>
                </div>
                <div className="sensor-box"></div>
            </div>

            <div className="sensor-section">
                <div className="sensor-details">
                    <h4>MQ9 Sensor</h4>
                    <p>Details about MQ9 sensor...</p>
                </div>
                <div className="sensor-box"></div>
            </div>

            <div className="sensor-section">
                <div className="sensor-details">
                    <h4>DHT-11 Sensor</h4>
                    <p>Details about DHT-11 sensor...</p>
                </div>
                <div className="sensor-box"></div>
            </div>

            {/* Full-Width Image ekata  Placeholder */}
            <div className="full-width-placeholder">pinthurayak danna </div>
        </Layout>
    );
};

export default Sensors;
