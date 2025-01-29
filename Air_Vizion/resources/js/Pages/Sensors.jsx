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
                    <h4 className="sensor-name">MQ135 Sensor</h4>
                    <p className="sensor-desc">The MQ135 is a versatile gas sensor designed to detect harmful pollutants in the air, such as ammonia, benzene, alcohol, smoke, and other hazardous gases. Its wide detection range and high sensitivity make it a crucial component in monitoring both indoor and outdoor air quality. The sensor is cost-effective and seamlessly integrates with IoT-based systems, enabling real-time analysis of air quality. In our system, the MQ135 provides data on the concentration of harmful gases, helping identify pollution trends and potential health hazards.</p>
                </div>
                <div className="sensor-box-mq135"></div>
            </div>

            <div className="sensor-section">
                <div className="sensor-details">
                    <h4 className="sensor-name">MQ9 Sensor</h4>
                    <p className="sensor-desc">The MQ9 gas sensor specializes in detecting carbon monoxide (CO), methane (CH4), and liquefied petroleum gas (LPG). Its dual heating modes and rapid response time make it highly reliable for identifying hazardous gases in the environment. The MQ9 sensor is particularly valuable in ensuring safety by detecting gas leaks and monitoring the presence of toxic gases. Within our air quality monitoring system, this sensor contributes to public safety by delivering precise measurements of these dangerous pollutants.</p>
                </div>
                <div className="sensor-box-mq9"></div>
            </div>

            <div className="sensor-section">
                <div className="sensor-details">
                    <h4 className="sensor-name">DHT-11 Sensor</h4>
                    <p className="sensor-desc">The DHT11 sensor is a compact and energy-efficient device that measures temperature and humidity levels with high accuracy. By providing readings in degrees Celsius and relative humidity percentage, this sensor helps paint a clearer picture of environmental conditions. In our system, the DHT11 complements the gas sensors by offering insights into how temperature and humidity influence air quality, enabling a more comprehensive understanding of the environment.</p>
                </div>
                <div className="sensor-box-dht11"></div>
            </div>

            <div className="full-width-placeholder"></div>
        </Layout>
    );
};

export default Sensors;
