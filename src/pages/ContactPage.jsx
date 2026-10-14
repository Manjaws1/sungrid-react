import React, { useState } from "react";
import { loadLegacyScripts } from "../legacyScripts";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  React.useEffect(() => {
    document.title = 'Sungrid | Clean Energy, Brighter Tomorrow';
    let cancelled = false;
    loadLegacyScripts().then(() => {
      if (cancelled) return;
    }).catch((error) => console.error(error));
    return () => { cancelled = true; };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowPopup(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitted(false);
    setShowPopup(false);
  };

  return (
    <>
      <div id="wrapper">
        <a href="#" id="back-to-top" />
        <div id="de-loader" />
        
        {/* Popup Modal for Success Message */}
        {showPopup && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}>
            <div style={{
              background: '#fff',
              padding: '30px',
              borderRadius: '8px',
              textAlign: 'center',
              maxWidth: '400px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ color: '#28a745', marginBottom: '15px' }}>Message Sent!</h3>
              <p style={{ marginBottom: '20px', color: '#333' }}>
                Your message has been sent successfully. We will respond shortly.
              </p>
              <button 
                onClick={handleReset}
                className="btn-main"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                Send Another Message
              </button>
            </div>
          </div>
        )}

       

        {/* content begin */}
        <div className="no-bottom no-top" id="content">
          <div id="top" />
          <section id="subheader" className="bg-dark text-light relative jarallax">
            <img src="images/background/6.webp" className="jarallax-img" alt="" />
            <div className="container relative z-2">
              <div className="row gy-4 gx-5 align-items-center">
                <div className="col-lg-12">
                  <div className="spacer-double sm-hide" />
                  <h5 className="wow fadeInUp">Power Your Future with Clean Energy</h5>
                  <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">Contact</h1>
                  <div className="border-bottom mb-3" />
                  <ul className="crumb wow fadeInUp">
                    <li><a href="index.html">Home</a></li>
                    <li className="active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="gradient-edge-bottom h-50" />
            <div className="sw-overlay" />
          </section>

          <section>
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="subtitle">Get In Touch</div>
                  <h2 className="wow fadeInUp">
                    We are always ready to help you and answer your questions
                  </h2>
                  <p>
                    Whether you have a question, a suggestion, or just want to say
                    hello, this is the place to do it. Please fill out the form below
                    with your details and message, and we'll get back to you as soon
                    as possible.
                  </p>
                  <div className="row g-4 gx-5">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-clock-time me-2 id-color" />
                        <span>We're Open</span>
                      </div>
                      Monday - Friday 08.00 - 18.00
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-location-pin me-2 id-color" />
                        <span>Office Location</span>
                      </div>
                      Mabushi, F.C.T., Abuja
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-phone me-2 id-color" />
                        <span>Call Us Directly</span>
                      </div>
                      +234 9076660060
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-envelope me-2 id-color" />
                        <span>Send a Message</span>
                      </div>
                      help@sungrid.com
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-40 bg-light rounded-1">
                    <h3>Get In Touch</h3>
                    <form
                      name="contactForm"
                      id="contact_form"
                      className="position-relative z1000"
                      onSubmit={handleSubmit}
                    >
                      <div className="row gx-4">
                        <div className="col-lg-12 col-md-6 mb10">
                          <div className="field-set">
                            <span className="d-label">Name</span>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="field-set">
                            <span className="d-label">Email</span>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="field-set">
                            <span className="d-label">Phone</span>
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className="form-control"
                              placeholder="Your Phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="field-set mb20">
                            <span className="d-label">Message</span>
                            <textarea
                              name="message"
                              id="message"
                              className="form-control"
                              placeholder="Your Message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div id="submit" className="mt20">
                        <button
                          type="submit"
                          id="send_message"
                          className="btn-main"
                          disabled={isSubmitting || isSubmitted}
                        >
                          {isSubmitting ? "Sending..." : isSubmitted ? "Sent" : "Send Message"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Google Map Section */}
        <section className="no-top no-bottom" aria-label="Office Location Map">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12">
                <div className="map-container" style={{ height: 460, width: "100%", position: "relative" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Plot+1504+Mabushi+Abuja+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SunGrid Energy Nigeria - Office Location in Mabushi, Abuja"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

      

      </div>
    </>
  );
}