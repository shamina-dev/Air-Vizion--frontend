import React from "react";
import Layout from "@/Layouts/Layout";
import "./../../css/system.css";

const System = () => {
  document.title = "System - Air Vision";
  return (
    <Layout>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      <h3 className="titel-system">System</h3>

      {/* First container */}
      <div className="system-container">
        <div className="image-section container1">
        </div>
        <div className="text-section">
          <p className="container-titel">Overview Section</p>
          <p className="contents">
            Our air quality monitoring system leverages advanced IoT
            technologies and predictive analytics to provide real-time insights
            and forecasts. By monitoring air quality effectively, we aim to
            ensure a healthier environment and safeguard public health.
          </p>
        </div>
      </div>

      {/* Second container */}
      <div className="system-container reverse-layout">
        <div className="image-section container2">
        </div>
        <div className="text-section">
          <p className="container-titel">System Architecture</p>
          <p className="contents">
            Our system integrates cutting-edge technologies for seamless air
            quality monitoring. Data flows from sensors to the ESP32
            microcontroller, which sends it to the Firebase cloud for storage.
            Machine learning models analyze this data to provide predictions,
            displayed on a user-friendly web platform.
          </p>
        </div>
      </div>

      {/* Third container */}
      <div className="system-container">
        <div className="image-section container3">
        </div>
        <div className="text-section">
          <p className="container-titel">Key Components</p>
          <p className="contents">Hardware:</p>
          <ul >
            <li>MQ135 and MQ9 sensors detect harmful gases and pollutants in the air.</li>
            <li>DHT11 sensor monitors temperature and humidity.</li>
            <li>ESP32 microcontroller ensures real-time data transmission to the cloud.</li>
          </ul>
          <p className="contents">Software:</p>
          <ul >
            <li>Firebase Realtime Database for secure and scalable data storage.</li>
            <li>Machine Learning models for accurate predictions and analytics.</li>
            <li>Web platform designed for intuitive data visualization and user interaction.</li>
          </ul>
        </div>
      </div>

      {/* Fourth container */}
      <div className="system-container reverse-layout">
        <div className="image-section container4">
        </div>
        <div className="text-section">
          <p className="container-titel">Features</p>
          <p className="contents">Our system offers unparalleled features, including:</p>
          <ul>
            <li>Real-time air quality monitoring for immediate insights.</li>
            <li>Predictive analytics powered by machine learning.</li>
          </ul>
        </div>
      </div>

      {/* Fifth container */}
      <div className="system-container full-width">
        <div className="image-section container-img">
        </div>
        <div className="text-section">
          <p className="last-con-titel">Benefits of the System</p>
          <p className="contents">Our air quality monitoring system delivers:</p>
          <p className="contents">Our air quality monitoring system delivers comprehensive benefits, including health protection by identifying
            hazardous air conditions, enabling informed decision-making for individuals and communities, and supporting policymakers
            in implementing effective pollution control measures</p>
        </div>
      </div>
    </Layout>
  );
};

export default System;
