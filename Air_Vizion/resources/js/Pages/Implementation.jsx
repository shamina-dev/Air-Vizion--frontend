import Layout from "@/Layouts/Layout";
import "./../../css/implementation.css"

const Implementation = () => {
    document.title = "Implementation - Air Vizion";
    return (
        <Layout>
            {/* Page Title */}
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
            <h3 className="titel">Implementation</h3>

            <div className="container mt-5">

            {/* Overview Section */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <h4 className="card-title">Introduction to Our Implementation</h4>
                <p className="card-text">
                    Our air quality monitoring system integrates IoT sensors, cloud-based data storage,
                    and a React-based web application. It provides real-time air quality analysis,
                    temperature, and humidity monitoring while leveraging predictive machine learning models.
                </p>
                </div>
            </div>

            {/* System Architecture Section */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <h4 className="card-title">How Our System Works</h4>
                <p className="card-text">
                    The system consists of hardware components like sensors and microcontrollers,
                    cloud storage for data management, and a web application for visualization.
                    Data is collected using sensors, transmitted via the ESP32 microcontroller,
                    stored in Firebase, and displayed through a user-friendly React interface.
                </p>
                </div>
            </div>

            {/* Software Used Section */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <h4 className="card-title">Technologies Powering the System </h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Frontend:</strong> ReactJS with Bootstrap for UI</li>
                    <li className="list-group-item"><strong>Backend:</strong> Node.js for API integration</li>
                    <li className="list-group-item"><strong>Database:</strong> Firebase Realtime Database</li>
                    <li className="list-group-item"><strong>Machine Learning:</strong> Python-based prediction models</li>
                </ul>
                </div>
            </div>

            {/* Hardware Components Section */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <h4 className="card-title">Essential Hardware Components</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Sensors:</strong> MQ135, MQ9, DHT11</li>
                    <li className="list-group-item"><strong>Microcontroller:</strong> ESP32</li>
                    <li className="list-group-item"><strong>Power Supply:</strong> 5V power source</li>
                    <li className="list-group-item"><strong>Display Units:</strong> LED panels (optional)</li>
                </ul>
                </div>
            </div>

            {/* Conclusion Section */}
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                <h4 className="card-title">Final Thoughts & Future Scope</h4>
                <p className="card-text">
                    By integrating sensors, cloud computing, and machine learning, our system ensures
                    accurate air quality monitoring. The combination of real-time data and predictive analysis
                    makes this solution effective for environmental safety and public health awareness.
                </p>
                </div>
            </div>
            </div>
        </Layout>
    );
};
export default Implementation;
