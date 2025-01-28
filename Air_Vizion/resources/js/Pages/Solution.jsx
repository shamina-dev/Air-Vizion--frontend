import React from "react";
import Layout from "@/Layouts/Layout";
import "./../../css/solution.css";

const Solution = () => {
    document.title = "Solution - Air Vision";
  
    return (
        <Layout>
      <div className="solution-page">
        {/* Solution Section */}
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
        <h3 className="titel">Solution</h3>
  
        {/* Health Risks Section */}
        <div className="health-risks-section">
                <h2>Healthcare Solutions for Air Pollution</h2>
                <p className="contents">Health Risks of Air Pollution
                Air pollution is a serious health risk, particularly for children, the elderly, and people with pre-existing conditions.
                 Exposure to pollutants like particulate matter, nitrogen dioxide, and ozone can lead to respiratory
                  issues, cardiovascular diseases, and aggravate asthma.</p>
                <div className="media-symbols">
                    <div className="symbol symbol-1"></div>
                    <div className="symbol symbol-2"></div>
                    <div className="symbol symbol-3"></div>
                </div>
            </div>
  
        {/* Protective Measures Section */}
        <section className="protective-measures-section">
            <div className="ct2">
          <h2>Protective Measures During Pollution Peaks</h2></div>
          <div className="content-placeholder con2">
          <div className="image-section-container2"> </div>
          <p className="contents conttex2">
          During high pollution levels, it’s important to limit outdoor exposure, wear 
          protective masks, and use air purifiers indoors. Vulnerable individuals should stay indoors as much a
          s possible and seek regular health check-ups to manage the impact of pollution.
          </p>
          </div>
        </section>
  
        {/* Health Solutions Section */}
        <section className="health-solutions-section">
          <h2 cl>Health Solutions to Combat Pollution</h2>
          <div className="content-placeholder">
            <p className="contents ct3">Emergency Medical Services: Quick response systems for people affected by pollution-related health issues.
Telemedicine: Online healthcare services to minimize outdoor exposure while providing professional medical advice.
Health Education Campaigns: Public initiatives to raise awareness about the effects of air pollution and ways to reduce exposure.</p>
          </div>
        </section>
  
        {/* Healthier Future Section */}
        <section className="healthier-future-section full-width">
          <h2>Creating a Healthier Future</h2>

          <div className="image-section container5">
          </div>
          <div className="content-placeholder">
            <p className="contents">In the fight against air pollution, both prevention and treatment play vital roles. Implementing healthcare solutions that reduce exposure and improve early detection will ensure better health outcomes for individuals living in polluted environments. By combining education, technology, and smart healthcare interventions, we can create safer, 
                healthier communities that thrive despite air quality challenges.</p>
          </div>
        </section>
      </div>
      </Layout>
    );
  };
  
  export default Solution;