import Layout from "@/Layouts/Layout";
import "./../../css/contact.css"

const Contact = () => {
    document.title = "Contact - Air Vizion";
    return (
        <Layout>
             <section className="contact-section">
                <div className="container">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">We’d love to hear from you! Fill out the form below, or contact us via the details provided.</p>

                    <div className="row">
                    {/* Contact Form */}
                    <div className="col-md-6">
                        <form className="contact-form">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Type your message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="col-md-6">
                        <div className="contact-details">
                        <h4>Contact Information</h4>
                        <p><strong>📍 Address:</strong> 123 Street, City, Country</p>
                        <p><strong>📞 Phone:</strong> +123 456 7890</p>
                        <p><strong>📧 Email:</strong> contact@airvizion.com</p>
                        <p><strong>⏰ Working Hours:</strong> Mon-Fri, 9 AM - 6 PM</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </Layout>
    );
};
export default Contact;
