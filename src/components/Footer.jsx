import React from "react";

export default function Footer() {
  return (
    <>
      <footer className={"section-dark"}>
        <div className={"container relative z-2"}>
          <div className={"row gx-5"}>
            <div className={"col-lg-4 col-sm-6"}>
              <img src={"images/sungrid-logo.png"} className={"logo-footer"} alt={"Sungrid clean energy logo"} />
              <div className={"spacer-20"}></div>
              <p>
                At Sungrid, we’re committed to delivering reliable, efficient,
                and sustainable solar energy solutions. From residential
                installations to commercial systems, we help you harness the
                power of the sun and reduce your energy bills while protecting
                the planet.
              </p>
            </div>
            <div className={"col-lg-5 col-sm-12 order-lg-1 order-sm-2"}>
              <div className={"row"}>
                <div className={"col-lg-7 col-sm-6"}>
                  <div className={"widget"}>
                    <h5>Our Services</h5>
                    <ul>
                      <li>
                        <a href={"/service-single"}>Solar Panel Installation</a>
                      </li>
                      <li>
                        <a href={"/service-single"}>Solar Panel Maintenance</a>
                      </li>
                      <li>
                        <a href={"/service-single"}>Custom System Design</a>
                      </li>
                      <li>
                        <a href={"/service-single"}>Solar Battery Storage</a>
                      </li>
                      <li>
                        <a href={"/service-single"}>System Monitoring & Reporting</a>
                      </li>
                      <li>
                        <a href={"/service-single.html"}>Solar Panel Upgrades</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={"col-lg-5 col-sm-6"}>
                  <div className={"widget"}>
                    <h5>Company</h5>
                    <ul>
                      <li><a href={"/index"}>Home</a></li>
                      <li><a href={"/about"}>About Us</a></li>
                      <li><a href={"/services"}>Our Services</a></li>
                      <li><a href={"/product"}>Products</a></li>
                      <li><a href={"/contact"}>Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-sm-6 order-lg-2 order-sm-1"}>
              <div className={"widget"}>
                <h5>Contact Us</h5>
                <div className={"fw-bold text-white d-flex align-items-center"}>
                  <i className={"icofont-location-pin me-2 id-color"}></i><span>Head Office</span>
                </div>
                Plot 1504, Cadzone B06, after the Ministry of Transportation,
                Mabushi, Abuja

                <div className={"spacer-20"}></div>
                <div className={"fw-bold text-white d-flex align-items-center"}>
                  <i className={"icofont-phone me-2 id-color"}></i><span>Call Us</span>
                </div>
                +234 9076660060

                <div className={"spacer-20"}></div>
                <div className={"fw-bold text-white d-flex align-items-center"}>
                  <i className={"icofont-envelope me-2 id-color"}></i><span>Email Us</span>
                </div>
                hello@sungrid.com
              </div>
            </div>
          </div>
        </div>
        <div className={"subfooter"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"col-md-12"}>
                <div className={"de-flex"}>
                  <div className={"de-flex-col"}>
                    © 2026 - Sungrid
                  </div>
                  <ul className={"menu-simple"}>
                    <li><a href={"#"}>Terms & Conditions</a></li>
                    <li><a href={"#"}>Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"abs w-50 end-0 bottom-0 op-3"}>
          <img src={"images/misc/c1.webp"} className={"w-100 rtl-hide wow fadeInRight"} data-wow-duration={"2s"} alt={"Sungrid clean energy logo"} />
          <img src={"images/misc/c1-flip.webp"} className={"w-100 rtl-show wow fadeInLeft"} data-wow-duration={"2s"} alt={"Sungrid clean energy logo"} />
        </div>
      </footer>
    </>
  );
}
