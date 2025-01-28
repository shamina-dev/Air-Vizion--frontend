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
                <div className="ct1">
                <p className="contents">Air pollution is a major environmental health risk, 
                  impacting both short-term and long-term health. Exposure to poor air quality can lead to a 
                  variety of health problems, particularly for vulnerable groups such as children, the elderly, 
                  and those with pre-existing health conditions. Studies show that long-term exposure to pollutants such 
                  as particulate matter (PM), nitrogen dioxide (NO2), and ozone (O3) can contribute to respiratory and cardiovascular 
                  diseases, exacerbate asthma, and even increase the risk of stroke and heart attacks.
                </p></div>
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
          <div className="pcontent2">
          <p className="contents conttex2">
          When air pollution levels rise, it becomes crucial to take preventive measures to protect your health. 
          Wearing masks designed to filter fine particles can significantly reduce exposure. Staying indoors, especially 
          during high pollution hours, can also help minimize the impact. In addition, using air purifiers and ensuring proper
          ventilation in living spaces can improve indoor air quality and reduce health risks. Regular health check-ups, especially 
          for individuals with respiratory issues or chronic illnesses, can help in early detection and management of pollution-related
          health problems.
          </p></div>
          </div>
        </section>
  
        {/* Health Solutions Section */}
        <section className="health-solutions-section">
          <div className="container3-title">
          <h2 cl>Health Solutions to Combat Pollution</h2></div>
          <div className="content-placeholder  ct3">
            <div className="contents ct3-child full-width">
              <p>
              In regions with frequent or seasonal air quality issues,
              healthcare systems and public health organizations are critical in raising awareness and providing resources. 
              Some healthcare solutions include:</p> <br /> 
            <ul className="ct3-2ndchild">
              <li><strong>
              Emergency Medical Response Systems:</strong> Establishing protocols for quick medical interventions when 
              pollution levels are dangerously high, particularly for those with respiratory issues.
              </li>
              <br />
              <li><strong>
              Telemedicine for Consultation:</strong> Offering online consultations allows patients to avoid venturing outdoors 
              while still receiving professional medical advice, particularly important during pollution spikes.
              </li>
              <br />
              <li><strong>
              Public Health Campaigns and Education:</strong> Encouraging people to stay informed about air quality levels 
              through real-time monitoring systems. Providing education on the health effects of pollution and how to minimize 
              exposure is key to long-term health improvements.
              </li>
            </ul>
            </div>
          </div>
        </section>
  
        {/* Healthier Future Section */}
        <section className="healthier-future-section full-width">
          <h2>Creating a Healthier Future</h2>

          <div className="image-section container5">
          </div>
          <div className="content-placeholder ct4">
            <p className="contents">In the fight against air pollution, both prevention and treatment play vital roles. Implementing healthcare solutions that reduce exposure and improve early detection will ensure better health outcomes for individuals living in polluted environments. By combining education, technology, and smart healthcare interventions, we can create safer, 
                healthier communities that thrive despite air quality challenges.</p>
          </div>
        </section>
      </div>
      </Layout>
    );
  };
  
  export default Solution;