import React from "react";
import { loadLegacyScripts } from "../legacyScripts";

export default function ServicePage() {
  React.useEffect(() => {
    document.title = 'Sungrid | Clean Energy, Brighter Tomorrow';
    let cancelled = false;
    loadLegacyScripts().then(() => {
      if (cancelled) return;


    }).catch((error) => console.error(error));
    return () => { cancelled = true; };
  }, []);
  return (
    <>

      <a href={"#"} id={"back-to-top"}></a>
      {/* preloader begin */}
      {/* <div id={"de-loader"}></div> */}
      {/* preloader end */}
      {/* header begin */}

      {/* header end */}
      {/* content begin */}
      <div className={"no-bottom no-top"} id={"content"}>
        <div id={"top"}></div>
        <section id={"subheader"} className={"bg-dark text-light relative jarallax"}>
          <img src={"images/background/w2.webp"} className={"jarallax-img"} alt={""} />
          <div className={"container relative z-2"}>
            <div className={"row gy-4 gx-5 align-items-center"}>
              <div className={"col-lg-12"}>
                <div className={"spacer-double sm-hide"}></div>
                <h5 className={"wow fadeInUp"}>Power Your Future with Clean Energy</h5>
                <h1 className={"mb-3 wow fadeInUp"} data-wow-delay={".2s"}>Solar Panel Installation</h1>
                <div className={"border-bottom mb-3"}></div>
                <ul className={"crumb wow fadeInUp"}>
                  <li><a href={"index.html"}>Home</a></li>
                  <li><a href={"services.html"}>Services</a></li>
                  <li className={"active"}>Solar Panel Installations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={"gradient-edge-bottom h-50"}></div>
          <div className={"sw-overlay"}></div>
        </section>
        <section>
          <div className={"container"}>
            <div className={"row g-4 align-items-center"}>
              <div className={"col-lg-6"}>
                <div className={"relative"}>
                  <div className={"w-100 pe-5 pb-5 wow scaleIn"}>
                    <img src={"images/misc/l1.webp"} className={"w-100 rounded-1"} alt={""} />
                  </div>
                  <img src={"images/team/p3.png"} className={"w-40 rounded-1 abs end-0 bottom-0 z-2 soft-shadow wow scaleIn"} data-wow-delay={".2s"} alt={""} />
                </div>
              </div>
              <div className={"col-lg-6"}>
                <div className={"ps-lg-3"}>
                  <div className={"subtitle id-color wow fadeInUp"} data-wow-delay={".2s"}>Professional Workers
                  </div>
                  <h2 className={"wow fadeInUp"} data-wow-delay={".4s"}>Expert Solar Installation</h2>
                  <p>
                    At Sungrid, we provide safe, efficient, and certified solar panel installation
                    services designed to meet your unique energy needs. Our process begins with a
                    thorough consultation and site assessment to ensure that every system we install is
                    optimized for maximum performance and long-term savings. Whether you're looking to
                    power a residential rooftop or a large-scale commercial facility, our team of
                    experienced professionals is equipped with the latest technology and industry best
                    practices to deliver a seamless installation experience.
                  </p>
                </div>
              </div>
            </div>
          </div></section>
        <section className={"bg-light"}>
          <div className={"container"}>
            <div className={"row g-4"}>
              <div className={"col-lg-3 col-md-6 wow fadeInUp"}>
                <div className={"relative"}>
                  <i className={"abs fs-40 p-2 bg-color icon_check rounded-1 text-dark"}></i>
                  <div className={"ps-5 ms-4"}>
                    <h4>Certified installers with years of experience</h4>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6 wow fadeInUp"}>
                <div className={"relative"}>
                  <i className={"abs fs-40 p-2 bg-color icon_check rounded-1 text-dark"}></i>
                  <div className={"ps-5 ms-4"}>
                    <h4>Residential & commercial system compatibility</h4>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6 wow fadeInUp"}>
                <div className={"relative"}>
                  <i className={"abs fs-40 p-2 bg-color icon_check rounded-1 text-dark"}></i>
                  <div className={"ps-5 ms-4"}>
                    <h4>Grid-tied and off-grid options</h4>
                  </div>
                </div>
              </div>
              <div className={"col-lg-3 col-md-6 wow fadeInUp"}>
                <div className={"relative"}>
                  <i className={"abs fs-40 p-2 bg-color icon_check rounded-1 text-dark"}></i>
                  <div className={"ps-5 ms-4"}>
                    <h4>End-to-end service from planning to activation</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-lg-12 text-center"}>
                <div className={"subtitle"}>How It Works</div>
                <h2>Installation Process</h2>
              </div>
            </div>
            <div className={"row g-4 justify-content-center"}>
              <div className={"col-6 col-md-3 de-step de-step-arrow"}>
                <div className={"de-step-icon"}>
                  <i className={"fas fa-search-location fa-2x"}></i>
                </div>
                <h4 className={"fw-bold"}>Site Evaluation & Design</h4>
                <p>We assess your roof structure and energy usage, then create a custom solar system
                  tailored to your needs.</p>
              </div>
              <div className={"col-6 col-md-3 de-step de-step-arrow"}>
                <div className={"de-step-icon"}>
                  <i className={"fas fa-file-alt fa-2x"}></i>
                </div>
                <h4 className={"fw-bold"}>Permitting & Approvals</h4>
                <p>Our team manages all necessary paperwork, including local permits and utility approvals.
                </p>
              </div>
              <div className={"col-6 col-md-3 de-step de-step-arrow"}>
                <div className={"de-step-icon"}>
                  <i className={"fas fa-tools fa-2x"}></i>
                </div>
                <h4 className={"fw-bold"}>Professional Installation</h4>
                <p>We install high-quality solar panels, inverters, and safety components with precision and
                  care.</p>
              </div>
              <div className={"col-6 col-md-3 de-step"}>
                <div className={"de-step-icon"}>
                  <i className={"fas fa-bolt fa-2x"}></i>
                </div>
                <h4 className={"fw-bold"}>Inspection & Activation</h4>
                <p>After final inspection and grid approval, your system goes live—ready to power your home
                  or business.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={"bg-dark text-light pt-60 pb-40"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-lg-12"}>
                <div className={"relative"}>
                  <div className={"row g-4 grid-divider sm-hide"}>
                    <div className={"col-lg-4 col-md-6 mb-sm-30"}>
                      <div className={"d-flex justify-content-center"}>
                        <i className={"fa-solid fa-phone-volume fs-60 id-color"}></i>
                        <div className={"ms-3"}>
                          <h4 className={"mb-0"}>Need Our Services?</h4>
                          <p>Call: +234 9076660060</p>
                        </div>
                      </div>
                    </div>
                    <div className={"col-lg-4 col-md-6 mb-sm-30"}>
                      <div className={"d-flex justify-content-center"}>
                        <i className={"fa-solid fa-clock fs-60 id-color"}></i>
                        <div className={"ms-3"}>
                          <h4 className={"mb-0"}>Work Hours</h4>
                          <p>Mon to Sat 08:00 - 17:00</p>
                        </div>
                      </div>
                    </div>
                    <div className={"col-lg-4 col-md-6 mb-sm-30"}>
                      <div className={"d-flex justify-content-center"}>
                        <i className={"fa-solid fa-envelope fs-60 id-color"}></i>
                        <div className={"ms-3"}>
                          <h4 className={"mb-0"}>Email Us</h4>
                          <p>hello@sungrid.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* content end */}
      {/* footer begin */}

      {/* footer end */}
      <div id={"extra-wrap"} className={"text-light"}>
        <div id={"btn-close"}>
          <span></span>
          <span></span>
        </div>
        <div id={"extra-content"}>
          <img src={"images/sungrid-logo.png"} className={"w-150px"} alt={"Sungrid clean energy logo"} />
          <div className={"spacer-30-line"}></div>
          <h5>Our Services</h5>
          <ul className={"ul-check"}>
            <li>Solar Panel Installation</li>
            <li>Solar Panel Maintenance</li>
            <li>Custom System Design</li>
            <li>Solar Battery Storage</li>
            <li>System Monitoring & Reporting</li>
            <li>Solar Panel Upgrades</li>
          </ul>
          <div className={"spacer-30-line"}></div>
          <h5>Contact Us</h5>
          <div>
            <i className={"icofont-clock-time me-2 op-5"}></i>Monday - Friday 08.00 -
            18.00
          </div>
          <div>
            <i className={"icofont-location-pin me-2 op-5"}></i>Plot 1504, Cadzone B06, after the Ministry of
            Transportation,
            Mabushi, Abuja
          </div>
          <div><i className={"icofont-envelope me-2 op-5"}></i>hello@sungrid.com</div>
          <div className={"spacer-30-line"}></div>
          <h5>About Us</h5>
          <p>
            At Sungrid, we’re committed to delivering reliable, efficient, and
            sustainable solar energy solutions. From residential installations to
            commercial systems, we help you harness the power of the sun and
            reduce your energy bills while protecting the planet.
          </p>
        </div>
      </div>
    </>
  );
}
