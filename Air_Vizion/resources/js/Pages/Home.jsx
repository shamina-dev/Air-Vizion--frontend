import React from "react";
import Layout from "../layouts/Layout";

const Home = () => {
    document.title = "Home - Air Vizion";
    return (
        <Layout>
            <div>
                <div className="maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31660.211944001076!2d80.6051818616217!3d7.294587402089857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1733927956517!5m2!1sen!2slk&zoomControl=false&disableDefaultUI=true"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="under-map-div">
                    <p className="main-part">Air Quality Monitoring</p>
                    <p className="small-part">
                    In today’s world, air quality is a critical factor in maintaining overall health and well-being. With our air quality monitoring system, you can access real-time data that tracks the pollution levels in your environment, helping you make informed decisions. Whether you're at home, at work, or on the go, stay updated with personalized alerts about harmful pollutants such as PM2.5, CO2, and volatile organic compounds (VOCs). By understanding the air around you, you can take proactive steps to reduce exposure, protect your respiratory health, and create a safer environment for you and your loved ones.
                    </p>
                </div>

                <div className="image-background">
                    <div className="inner-box">
                        <h2>Why Air Quality Matters</h2>
                        <p>
                            Breathe cleaner, live better. Stay ahead with
                            real-time updates on the air quality in your area,
                            powered by advanced monitoring technologies. Our
                            system not only alerts you to rising pollution
                            levels but also provides actionable insights to
                            minimize exposure. From daily air quality forecasts
                            to health recommendations, we help you make informed
                            decisions to protect yourself and your loved ones in
                            an ever-changing environment.
                        </p>
                    </div>
                </div>
                <footer className="bg-[rgba(16,37,66,0.8)] backdrop-blur-md text-gray-300 text-sm h-20 flex items-center justify-center">
                    <p className="mb-1">&copy; {new Date().getFullYear()} Air Vizion. All rights reserved.</p>
                </footer>





                {/* <section className="containerr">
                    <div className="card-grid">
                        <a className="card" href="#">
                            <div
                                className="background"
                                id="hotel-background"
                            ></div>
                            <div className="content">
                                <p className="category">
                                    Air Quality Solution For Hotels
                                </p>
                                <h3 className="heading">
                                    Ensure guest comfort and safety with our air
                                    quality monitoring and purification systems
                                    tailored for hotels.
                                </h3>
                            </div>
                        </a>

                        <a className="card" href="#">
                            <div
                                className="background"
                                id="smart-city-background"
                            ></div>
                            <div className="content">
                                <p className="category">
                                    Air Quality Solution For Smart City
                                </p>
                                <h3 className="heading">
                                    Improve urban living with smart air quality
                                    solutions that enable proactive measures for
                                    cleaner air.
                                </h3>
                            </div>
                        </a>

                        <a className="card" href="#">
                            <div
                                className="background"
                                id="office-background"
                            ></div>
                            <div className="content">
                                <p className="category">
                                    Air Quality Solution For Offices
                                </p>
                                <h3 className="heading">
                                    Foster a healthier workspace with continuous
                                    air quality monitoring and insights for
                                    safer environments.
                                </h3>
                            </div>
                        </a>

                        <a className="card" href="#">
                            <div
                                className="background"
                                id="school-background"
                            ></div>
                            <div className="content">
                                <p className="category">
                                    Air Quality Solution For Schools
                                </p>
                                <h3 className="heading">
                                    Protect students and staff with solutions
                                    that ensure clean air in classrooms and
                                    promote better learning.
                                </h3>
                            </div>
                        </a>
                    </div>
                </section>  */}
            </div>
        </Layout>
    );
};

export default Home;
