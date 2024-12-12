function Home() {
    return (
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
                <p className="main-part">Air Quality</p>
                <p className="small-part">Stay informed about the air you breathe. Get real-time updates on air quality in your surroundings and tailored alerts to help you take proactive measures for your health and safety.</p>
            </div>

            <div className="image-background">
                <div className="inner-box">
                    <h2>Why Air Quality Matters</h2>
                    <p>
                        Breathe cleaner, live better. Stay ahead with real-time updates on the air quality in your area, powered by advanced monitoring technologies. Our system not only alerts you to rising pollution levels but also provides actionable insights to minimize exposure. From daily air quality forecasts to health recommendations, we help you make informed decisions to protect yourself and your loved ones in an ever-changing environment.
                    </p>
                </div>
            </div>

            <section className="containerr">
                <div className="card-grid">

                    <a className="card" href="#">
                        <div className="background" id="hotel-background"></div>
                        <div className="content">
                            <p className="category">Air Quality Solution For Hotels</p>
                            <h3 className="heading">Ensure guest comfort and safety with our air quality monitoring and purification systems tailored for hotels.</h3>
                        </div>
                    </a>

                    <a className="card" href="#">
                        <div className="background" id="smart-city-background"></div>
                        <div className="content">
                            <p className="category">Air Quality Solution For Smart City</p>
                            <h3 className="heading">Improve urban living with smart air quality solutions that enable proactive measures for cleaner air.</h3>
                        </div>
                    </a>

                    <a className="card" href="#">
                        <div className="background" id="office-background"></div>
                        <div className="content">
                            <p className="category">Air Quality Solution For Offices</p>
                            <h3 className="heading">Foster a healthier workspace with continuous air quality monitoring and insights for safer environments.</h3>
                        </div>
                    </a>

                    <a className="card" href="#">
                        <div className="background" id="school-background"></div>
                        <div className="content">
                            <p className="category">Air Quality Solution For Schools</p>
                            <h3 className="heading">Protect students and staff with solutions that ensure clean air in classrooms and promote better learning.</h3>
                        </div>
                    </a>  

                </div>
            </section>
        </div>
    );
}

export default Home;