import React from "react";
import { loadLegacyScripts } from "../legacyScripts";

export default function HomePage() {
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
<section id={"section-intro"} className={"text-light relative overflow-hidden mh-700"}>
<div className={"relative z-4"} style={{"backgroundColor": "rgba"}}>
<div className={"container z-2"}>
<div className={"row g-4 align-items-center justify-content-center"}>
<div className={"col-lg-7 text-center"}>
<div className={"spacer-double"}></div>
<h1>Powering African Homes and Businesses with the Sun.</h1>
<p>
                  Sungrid delivers reliable, affordable solar and backup power solutions built for African homes,
                  businesses, and communities. Enjoy greater energy independence with systems designed for local needs.
                </p>
<a className={"btn-main fx-slide"} href={"solar_calculator_module/calculator-page.html"}><span>Get a calculator </span></a>
</div>
</div>
<div className={"spacer-double sm-hide"}></div>
<div className={"spacer-double"}></div>
<div className={"row g-4 justify-content-between"}>
<div className={"col-md-6"}>
<div className={"p-4 bg-blur rounded-1 h-100"}>
<div className={"row g-4 align-items-center"}>
<div className={"col-lg-6"}>
<img src={"images/misc/cst-1.webp"} className={"w-100 rounded-1"} alt={"Sungrid clean energy logo"} />
</div>
<div className={"col-lg-6"}>
<h3>When Sustainability Meets Style</h3>
<p>
                        Clean energy solutions designed to look great and
                        perform efficiently that fits your lifestyle
                        perfectly.
                      </p>
<a className={"btn-main btn-line fx-slide"} href={"services.html"}><span>View Services</span></a>
</div>
</div>
</div>
</div>
<div className={"col-md-6"}>
<div className={"row g-4"}>
<div className={"col-lg-6"}>
<div className={"p-4 h-100 bg-blur rounded-1"}>
<div>
<div className={"relative wow fadeInUp"}>
<img src={"images/icons-dark/1.png"} className={"bg-color w-30 p-2 rounded-1 mb-3 wow scaleIn"} alt={"Sungrid clean energy logo"} />
<h4>Clean Energy for a Future</h4>
<p className={"mb-0"}>
                            Choosing solar is a step toward a future powered
                            by clean, renewable, and reliable energy for
                            generations to come.
                          </p>
</div>
</div>
</div>
</div>
<div className={"col-lg-6"}>
<div className={"bg-color text-dark rounded-1 h-100 w-100 p-4 py-5 z-3 overflow-hidden wow zoomIn"}>
<div className={"text-end"}>
<img src={"images/icons-dark/solar-panel.png"} className={"w-80px mb-3"} alt={"Sungrid clean energy logo"} />
</div>
<h5 className={"mb-0"}>100K+</h5>
<h2 className={"mb-0 fs-32"}>home installed solar panel</h2>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className={"swiper hero-swiper"} aria-label={"Sungrid solar energy highlights"}>
<div className={"swiper-wrapper"}>
<div className={"swiper-slide"}>
<div className={"swiper-inner"} data-bgimage={"url(\"images/background/teamg2.jpeg\") center"}>
<div className={"sw-overlay op-3"}></div>
<div className={"gradient-edge-top op-8"}></div>
</div>
</div>
<div className={"swiper-slide"}>
<div className={"swiper-inner"} data-bgimage={"url(\"images/background/teamg1.jpeg\") center"}>
<div className={"sw-overlay op-3"}></div>
<div className={"gradient-edge-top op-8"}></div>
</div>
</div>
<div className={"swiper-slide"}>
<div className={"swiper-inner"} data-bgimage={"url(\"images/background/WhatsApp Image 2026-10-09 at 10.26.52.jpeg\") center"}>
<div className={"sw-overlay op-3"}></div>
<div className={"gradient-edge-top op-8"}></div>
</div>
</div>
<div className={"swiper-slide"}>
<div className={"swiper-inner"} data-bgimage={"url(\"images/background/WhatsApp Image 2026-10-09 at 10.26.52 (2).jpeg\") center"}>
<div className={"sw-overlay op-3"}></div>
<div className={"gradient-edge-top op-8"}></div>
</div>
</div>
<div className={"swiper-slide"}>
<div className={"swiper-inner"} data-bgimage={"url(\"images/background/WhatsApp Image 2026-10-09 at 10.26.52 (3).jpeg\") center"}>
<div className={"sw-overlay op-3"}></div>
<div className={"gradient-edge-top op-8"}></div>
</div>
</div>
<div className={"swiper-slide"}>
<div className={"swiper-inner"} data-bgimage={"url(\"images/background/WhatsApp Image 2026-10-09 at 10.26.53.jpeg\") center"}>
<div className={"sw-overlay op-3"}></div>
<div className={"gradient-edge-top op-8"}></div>
</div>
</div>
<div className={"swiper-slide"}>
<div className={"swiper-inner"} data-bgimage={"url(\"images/background/4.webp\") center"}>
<div className={"sw-overlay op-3"}></div>
<div className={"gradient-edge-top op-8"}></div>
</div>
</div>
</div>
<div className={"swiper-pagination"}></div>
</div>
</section>
<section>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-3"}>
<h5 className={"wow fadeInRight"}>About Us</h5>
</div>
<div className={"col-lg-9"}>
<h3 className={"wow fadeInRight"} data-wow-delay={".2s"}>
                Switch to solar and save money while saving the planet. Our
                expert team provides clean, reliable energy solutions for
                homes and businesses.
                <span className={"op-3"}>Go green, reduce your bills, and enjoy energy independence
                  today!</span>
</h3>
<div className={"spacer-single"}></div>
<div className={"row g-4 gx-5"}>
<div className={"col-md-3 col-sm-6"}>
<div className={"de_count lh-1-6 wow fadeInRight"} data-wow-delay={".2s"}>
<h3 className={"fs-40 mb-0"}>
<span className={"timer"} data-to={"100"} data-speed={"3000"}>0</span>K+
                    </h3>
                    Solar Panels Installed
                  </div>
</div>
<div className={"col-md-3 col-sm-6"}>
<div className={"de_count lh-1-6 wow fadeInRight"} data-wow-delay={".4s"}>
<h3 className={"fs-40 mb-0"}>
<span className={"timer"} data-to={"25"} data-speed={"3000"}>0</span>K+
                    </h3>
                    Homes Powered
                  </div>
</div>
<div className={"col-md-3 col-sm-6"}>
<div className={"de_count lh-1-6 wow fadeInRight"} data-wow-delay={".6s"}>
<h3 className={"fs-40 mb-0"}>
<span className={"timer"} data-to={"16"} data-speed={"3000"}>0</span>+
                    </h3>
                    Years of Solar Expertise
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"border-top"}>
<div className={"container"}>
<div className={"row gy-4 gx-5 align-items-center"}>
<div className={"col-lg-6"}>
<div className={"relative"}>
<div className={"relative overflow-hidden z-2 mb-5 rounded-1 mb-4 w-60 soft-shadow wow zoomIn"}>
<img src={"images/misc/p1.webp"} className={"w-100 wow scaleIn"} data-wow-duration={"1s"} alt={"Sungrid clean energy logo"} />
</div>
<div className={"abs overflow-hidden top-0 end-0 mt-5 rounded-1 mb-4 w-60 wow zoomIn"} data-wow-delay={".2s"}>
<img src={"images/misc/p2.webp"} className={"w-100 wow scaleIn"} data-wow-duration={"1s"} alt={"Sungrid clean energy logo"} />
</div>
</div>
</div>
<div className={"col-lg-6"}>
<div className={"subtitle id-color wow fadeInUp"} data-wow-delay={".0s"}>
                Solar Power for Smarter Future
              </div>
<h2 className={"wow fadeInUp"} data-wow-delay={".2s"}>
                Clean, Reliable Energy Made
                <span className={"op-3"}>Simple and Affordable</span>
</h2>
<p className={"wow fadeInUp"} data-wow-delay={".4s"}>
                Discover the power of the sun with our end-to-end solar energy
                solutions. Whether you're looking to reduce your electricity
                bills, increase property value, or lower your carbon
                footprint, we make it easy to go solar.
              </p>
<div className={"border-bottom mb-4"}></div>
<ul className={"ul-check fw-600 mb-4 wow fadeInUp"} data-wow-delay={".6s"}>
<li>Save money by generating your own power.</li>
<li>Reduce your carbon footprint and protect the planet.</li>
<li>Solar homes often see a higher resale value.</li>
<li>Reduce reliance on the grid and rising utility costs.</li>
</ul>
{/* <a class="btn-main fx-slide wow fadeInUp" data-wow-delay=".9s" href="get-a-quote.html"><span>Get a
                  Quote</span></a> */}
</div>
</div>
</div>
</section>
<section className={"section-dark p-0"} aria-label={"section"}>
<div className={"bg-color text-dark d-flex py-4 lh-1"}>
<div className={"de-marquee-list-2 wow fadeIn"}>
<span className={"fs-40 fw-600 mx-3"}>Solar Panel Installation</span>
<span className={"fs-40 fw-600 mx-3"}><img src={"images/logo-icon-dark.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3"}>Energy Storage Systems</span>
<span className={"fs-40 fw-600 mx-3"}><img src={"images/logo-icon-dark.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3"}>Off-Grid Solutions</span>
<span className={"fs-40 fw-600 mx-3"}><img src={"images/logo-icon-dark.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3"}>System Maintenance</span>
<span className={"fs-40 fw-600 mx-3"}><img src={"images/logo-icon-dark.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3"}>Solar Financing</span>
<span className={"fs-40 fw-600 mx-3"}><img src={"images/logo-icon-dark.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3"}>Energy Efficiency Audit</span>
<span className={"fs-40 fw-600 mx-3"}><img src={"images/logo-icon-dark.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3"}>EV Charger Installation</span>
<span className={"fs-40 fw-600 mx-3"}><img src={"images/logo-icon-dark.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
</div>
</div>
</section>
<section className={"bg-light"}>
<div className={"container"}>
<div className={"row g-4 justify-content-center"}>
<div className={"col-lg-6 text-center"}>
<div className={"subtitle wow fadeInUp mb-3"}>
                Solar Energy Services
              </div>
<h2 className={"wow fadeInUp"} data-wow-delay={".2s"}>
                Reliable, Renewable, and
                <span className={"op-3"}>Cost-Effective Energy</span>
</h2>
<p className={"lead mb-0 wow fadeInUp"}>
                Switch to solar and enjoy lower bills, clean energy, and
                expert service designed for homes, businesses, and beyond.
              </p>
<div className={"spacer-single"}></div>
<div className={"spacer-half"}></div>
</div>
</div>
<div className={"row g-4"}>
<div className={"col-lg-4 col-sm-6"}>
<div className={"hover"}>
<div className={"relative overflow-hidden"}>
<a href={"service-single.html"} className={"d-block hover"}>
<div className={"relative overflow-hidden rounded-1"}>
<img src={"images/services/1.webp"} className={"w-100 hover-scale-1-2"} alt={"Sungrid clean energy logo"} />
</div>
</a>
<div className={"p-30 relative bg-white rounded-1 mx-4 mt-min-100"}>
<div className={"abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px"}>
<a href={"project-single.html"}>
<img src={"images/misc/up-right-arrow.webp"} className={"w-60px p-20"} alt={"Sungrid clean energy logo"} />
</a>
</div>
<h4>Solar Panel Installation</h4>
<p className={"mb-0"}>
                      Fast, safe, and certified installation by experienced
                      technicians.
                    </p>
</div>
</div>
</div>
</div>
<div className={"col-lg-4 col-sm-6"}>
<div className={"hover"}>
<div className={"relative overflow-hidden"}>
<a href={"service-single.html"} className={"d-block hover"}>
<div className={"relative overflow-hidden rounded-1"}>
<img src={"images/services/2.webp"} className={"w-100 hover-scale-1-2"} alt={"Sungrid clean energy logo"} />
</div>
</a>
<div className={"p-30 relative bg-white rounded-1 mx-4 mt-min-100"}>
<div className={"abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px"}>
<a href={"project-single.html"}>
<img src={"images/misc/up-right-arrow.webp"} className={"w-60px p-20"} alt={"Sungrid clean energy logo"} />
</a>
</div>
<h4>Solar Panel Maintenance</h4>
<p className={"mb-0"}>
                      Ensure peak performance with regular inspections and
                      cleaning.
                    </p>
</div>
</div>
</div>
</div>
<div className={"col-lg-4 col-sm-6"}>
<div className={"hover"}>
<div className={"relative overflow-hidden"}>
<a href={"service-single.html"} className={"d-block hover"}>
<div className={"relative overflow-hidden rounded-1"}>
<img src={"images/services/3.webp"} className={"w-100 hover-scale-1-2"} alt={"Sungrid clean energy logo"} />
</div>
</a>
<div className={"p-30 relative bg-white rounded-1 mx-4 mt-min-100"}>
<div className={"abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px"}>
<a href={"project-single.html"}>
<img src={"images/misc/up-right-arrow.webp"} className={"w-60px p-20"} alt={"Sungrid clean energy logo"} />
</a>
</div>
<h4>Custom System Design</h4>
<p className={"mb-0"}>
                      We create efficient solar setups tailored to your energy
                      goals.
                    </p>
</div>
</div>
</div>
</div>
<div className={"text-center"}>
<a className={"btn-main fx-slide"} href={"services.html"}><span>View All Services</span></a>
</div>
</div>
</div>
</section>
<section className={"bg-dark text-light"}>
<div className={"container relative z-1"}>
<div className={"row g-4 gx-5 align-items-center"}>
<div className={"col-lg-6"}>
<div className={"relative"}>
<div className={"bg-blur text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden wow zoomIn"}>
<h2 className={"mb-0"}>325%</h2>
<p className={"lh-1-5"}>Average increase in solar panel</p>
</div>
<div className={"rounded-1 w-90 overflow-hidden wow zoomIn"}>
<img src={"images/misc/s4.webp"} className={"w-100 wow scaleIn"} alt={"Sungrid clean energy logo"} />
</div>
<div className={"rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn"} data-wow-delay={".2s"}>
<img src={"images/background/WhatsApp Image 2026-10-09 at 10.26.53.jpeg"} className={"w-100"} data-wow-delay={".2s"} alt={"Sungrid clean energy logo"} />
</div>
</div>
</div>
<div className={"col-lg-6"}>
<div className={"subtitle id-color wow fadeInUp"}>
                Trusted & Affordable
              </div>
<h2 className={"wow fadeInUp"} data-wow-delay={".2s"}>
                Why Choose Us?
              </h2>
<div className={"row g-4"}>
<div className={"col-lg-6"}>
<div className={"h-100 rounded-1"}>
<div className={"relative wow fadeInUp"} data-wow-delay={".0s"}>
<h4>Professional Team</h4>
<p className={"mb-0"}>
                        Certified professionals with years of solar
                        installation experience.
                      </p>
</div>
</div>
</div>
<div className={"col-lg-6"}>
<div className={"h-100 rounded-1"}>
<div className={"relative wow fadeInUp"} data-wow-delay={".2s"}>
<h4>Customized Solutions</h4>
<p className={"mb-0"}>
                        Systems tailored to your energy needs and property
                        layout.
                      </p>
</div>
</div>
</div>
<div className={"col-lg-6"}>
<div className={"h-100 rounded-1"}>
<div className={"relative wow fadeInUp"} data-wow-delay={".4s"}>
<h4>Affordable Plans</h4>
<p className={"mb-0"}>
                        Flexible financing and guidance on maximizing
                        incentives.
                      </p>
</div>
</div>
</div>
<div className={"col-lg-6"}>
<div className={"h-100 rounded-1"}>
<div className={"relative wow fadeInUp"} data-wow-delay={".6s"}>
<h4>Ongoing Support</h4>
<p className={"mb-0"}>
                        Full-service maintenance and system monitoring after
                        installation.
                      </p>
</div>
</div>
</div>
<div className={"col-lg-6"}>
<div className={"h-100 rounded-1"}>
<div className={"relative wow fadeInUp"} data-wow-delay={".8s"}>
<h4>Top-Tier Equipment</h4>
<p className={"mb-0"}>
                        We use premium solar panels and inverters for maximum
                        efficiency.
                      </p>
</div>
</div>
</div>
<div className={"col-lg-6"}>
<div className={"h-100 rounded-1"}>
<div className={"relative wow fadeInUp"} data-wow-delay={"1s"}>
<h4>Fast Installation</h4>
<p className={"mb-0"}>
                        Efficient project turnaround without compromising on
                        safety or quality.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className={"spacer-double"}></div>
</section>
<section>
<div className={"container"}>
<div className={"row g-4 justify-content-center"}>
<div className={"col-lg-6 text-center"}>
<div className={"subtitle wow fadeInUp mb-3"}>Our Solar Projects</div>
<h2 className={"wow fadeInUp"} data-wow-delay={".2s"}>
                Powering a Brighter Future
                <span className={"op-3"}>with Clean Energy</span>
</h2>
<p className={"lead mb-0 wow fadeInUp"}>
                Explore our latest solar installations—from residential
                rooftops to commercial systems—each designed for maximum
                efficiency and sustainability.
              </p>
<div className={"spacer-single"}></div>
<div className={"spacer-half"}></div>
</div>
</div>
<div className={"row g-4"}>
<div className={"col-lg-12 wow fadeInUp"}>
<div className={"overflow-hidden rounded-1"}>
<div className={"relative wow fadeIn"}>
<div className={"owl-custom-nav menu-float"} data-target={"#project-single-carousel"}>
<a className={"btn-next"}></a>
<a className={"btn-prev"}></a>
<div id={"project-single-carousel"} className={"owl-3-cols owl-carousel owl-theme"}>
<div className={"item"}>
<a href={"project-single.html"}>
<div className={"hover rounded-1 relative overflow-hidden text-light"}>
<div className={"abs p-40 top-0 z-3"}>
<img src={"images/misc/up-right-arrow-white.webp"} className={"w-10 mb-3 wow scaleIn"} alt={"Sungrid clean energy logo"} />
</div>
<div className={"abs p-40 bottom-0 z-3"}>
<h3>BrightHome Energy</h3>
<p className={"mb-0 hover-mh-60"}>
                                Home Installation
                              </p>
</div>
<div className={"hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"}></div>
<img src={"images/projects/1.webp"} className={"w-100 hover-scale-1-2"} alt={"Sungrid clean energy logo"} />
<div className={"gradient-edge-bottom h-50"}></div>
</div>
</a>
</div>
<div className={"item"}>
<a href={"project-single.html"}>
<div className={"hover rounded-1 relative overflow-hidden text-light"}>
<div className={"abs p-40 top-0 z-3"}>
<img src={"images/misc/up-right-arrow-white.webp"} className={"w-10 mb-3 wow scaleIn"} alt={"Sungrid clean energy logo"} />
</div>
<div className={"abs p-40 bottom-0 z-3"}>
<h3>GreenMart Supermarket</h3>
<p className={"mb-0 hover-mh-60"}>
                                Solar Panel Upgrades
                              </p>
</div>
<div className={"hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"}></div>
<img src={"images/projects/2.webp"} className={"w-100 hover-scale-1-2"} alt={"Sungrid clean energy logo"} />
<div className={"gradient-edge-bottom h-50"}></div>
</div>
</a>
</div>
<div className={"item"}>
<a href={"project-single.html"}>
<div className={"hover rounded-1 relative overflow-hidden text-light"}>
<div className={"abs p-40 top-0 z-3"}>
<img src={"images/misc/up-right-arrow-white.webp"} className={"w-10 mb-3 wow scaleIn"} alt={"Sungrid clean energy logo"} />
</div>
<div className={"abs p-40 bottom-0 z-3"}>
<h3>EcoSchool Initiative</h3>
<p className={"mb-0 hover-mh-60"}>
                                Custom System Design
                              </p>
</div>
<div className={"hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"}></div>
<img src={"images/projects/3.webp"} className={"w-100 hover-scale-1-2"} alt={"Sungrid clean energy logo"} />
<div className={"gradient-edge-bottom h-50"}></div>
</div>
</a>
</div>
<div className={"item"}>
<a href={"project-single.html"}>
<div className={"hover rounded-1 relative overflow-hidden text-light"}>
<div className={"abs p-40 top-0 z-3"}>
<img src={"images/misc/up-right-arrow-white.webp"} className={"w-10 mb-3 wow scaleIn"} alt={"Sungrid clean energy logo"} />
</div>
<div className={"abs p-40 bottom-0 z-3"}>
<h3>UrbanSolar 360</h3>
<p className={"mb-0 hover-mh-60"}>
                                System Monitoring & Reporting
                              </p>
</div>
<div className={"hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"}></div>
<img src={"images/projects/4.webp"} className={"w-100 hover-scale-1-2"} alt={"Sungrid clean energy logo"} />
<div className={"gradient-edge-bottom h-50"}></div>
</div>
</a>
</div>
<div className={"item"}>
<a href={"project-single.html"}>
<div className={"hover rounded-1 relative overflow-hidden text-light"}>
<div className={"abs p-40 top-0 z-3"}>
<img src={"images/misc/up-right-arrow-white.webp"} className={"w-10 mb-3 wow scaleIn"} alt={"Sungrid clean energy logo"} />
</div>
<div className={"abs p-40 bottom-0 z-3"}>
<h3>Sungrid Cares</h3>
<p className={"mb-0 hover-mh-60"}>
                                Community Project
                              </p>
</div>
<div className={"hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"}></div>
<img src={"images/projects/5.webp"} className={"w-100 hover-scale-1-2"} alt={"Sungrid clean energy logo"} />
<div className={"gradient-edge-bottom h-50"}></div>
</div>
</a>
</div>
<div className={"item"}>
<a href={"project-single.html"}>
<div className={"hover rounded-1 relative overflow-hidden text-light"}>
<div className={"abs p-40 top-0 z-3"}>
<img src={"images/misc/up-right-arrow-white.webp"} className={"w-10 mb-3 wow scaleIn"} alt={"Sungrid clean energy logo"} />
</div>
<div className={"abs p-40 bottom-0 z-3"}>
<h3>SunSmart Office</h3>
<p className={"mb-0 hover-mh-60"}>
                                Solar Battery Storage
                              </p>
</div>
<div className={"hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"}></div>
<img src={"images/projects/6.webp"} className={"w-100 hover-scale-1-2"} alt={"Sungrid clean energy logo"} />
<div className={"gradient-edge-bottom h-50"}></div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"bg-color no-top no-bottom overflow-hidden"}>
<div className={"container-fluid relative half-fluid"}>
<div className={"container"}>
<div className={"row"}>
{/* Image */}
<div className={"col-lg-6 position-lg-absolute left-half h-100"}>
<div className={"image wow fadeInLeft"} data-bgimage={"url(images/misc/s2.webp) center"}></div>
</div>
{/* Text */}
<div className={"col-lg-5 offset-lg-7"}>
<div className={"me-lg-3"}>
<div className={"py-5 my-5"}>
<div className={"owl-single-dots owl-carousel owl-theme"}>
<div className={"item"}>
<i className={"icofont-quote-left text-dark fs-40 d-block mb-4 wow fadeInUp"}></i>
<h3 className={"mb-4 wow fadeInUp"}>
                          Switching to solar with Sungrid was the
                          best decision we made. Lower bills, clean energy,
                          and outstanding support every step of the way.
                        </h3>
<span className={"wow fadeInUp"}>Alex Morgan</span>
</div>
<div className={"item"}>
<i className={"icofont-quote-left text-dark fs-40 d-block mb-4 wow fadeInUp"}></i>
<h3 className={"mb-4 wow fadeInUp"}>
                          Thanks to their expert team, our business now runs
                          on 100% solar power. Reliable, affordable, and
                          eco-friendly—highly recommended!
                        </h3>
<span className={"wow fadeInUp"}>Jamie Chen</span>
</div>
<div className={"item"}>
<i className={"icofont-quote-left text-dark fs-40 d-block mb-4 wow fadeInUp"}></i>
<h3 className={"mb-4 wow fadeInUp"}>
                          The installation was smooth and the results were
                          instant. We've seen a huge reduction in our energy
                          costs. Go solar—it’s worth it!
                        </h3>
<span className={"wow fadeInUp"}>Priya Kumar</span>
</div>
<div className={"item"}>
<i className={"icofont-quote-left text-dark fs-40 d-block mb-4 wow fadeInUp"}></i>
<h3 className={"mb-4 wow fadeInUp"}>
                          I never imagined powering my home with sunlight
                          could be this easy. The team made everything clear
                          and seamless.
                        </h3>
<span className={"wow fadeInUp"}>Liam Stewart</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className={"p-0"} aria-label={"section"}>
<div className={"bg-dark d-flex py-4 lh-1"}>
<div className={"de-marquee-list-2 wow fadeIn"}>
<span className={"fs-40 fw-600 mx-3 id-color"}>Solar Panel Installation</span>
<span className={"fs-40 mx-3"}><img src={"images/logo-icon.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3 id-color"}>Energy Storage Systems</span>
<span className={"fs-40 mx-3"}><img src={"images/logo-icon.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3 id-color"}>Off-Grid Solutions</span>
<span className={"fs-40 mx-3"}><img src={"images/logo-icon.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3 id-color"}>System Maintenance</span>
<span className={"fs-40 mx-3"}><img src={"images/logo-icon.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3 id-color"}>Solar Financing</span>
<span className={"fs-40 mx-3"}><img src={"images/logo-icon.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3 id-color"}>Energy Efficiency Audit</span>
<span className={"fs-40 mx-3"}><img src={"images/logo-icon.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
<span className={"fs-40 fw-600 mx-3 id-color"}>EV Charger Installation</span>
<span className={"fs-40 mx-3"}><img src={"images/logo-icon.webp"} className={"w-40px"} alt={"Sungrid clean energy logo"} /></span>
</div>
</div>
</section>
<section>
<div className={"container"}>
<div className={"row g-4"}>
<div className={"col-lg-5"}>
<div className={"subtitle id-color wow fadeInUp"} data-wow-delay={".0s"}>
                Everything You Need to Know
              </div>
<h2 className={"wow fadeInUp"} data-wow-delay={".2s"}>
                Frequently Asked Questions
              </h2>
</div>
<div className={"col-lg-7"}>
<div className={"accordion s2 wow fadeInUp"}>
<div className={"accordion-section"}>
<div className={"accordion-section-title"} data-tab={"#accordion-a1"}>
                    How does solar energy work?
                  </div>
<div className={"accordion-section-content"} id={"accordion-a1"}>
                    Solar panels absorb sunlight using photovoltaic (PV)
                    cells, which convert it into direct current (DC)
                    electricity. An inverter then transforms that into
                    alternating current (AC), which powers your home or
                    business.
                  </div>
<div className={"accordion-section-title"} data-tab={"#accordion-a2"}>
                    Will solar panels reduce my energy bills?
                  </div>
<div className={"accordion-section-content"} id={"accordion-a2"}>
                    Yes. By generating your own electricity, you can
                    significantly reduce or even eliminate your monthly
                    utility bills, depending on your system size and energy
                    usage.
                  </div>
<div className={"accordion-section-title"} data-tab={"#accordion-a3"}>
                    Is my home suitable for solar panels?
                  </div>
<div className={"accordion-section-content"} id={"accordion-a3"}>
                    Most homes are. Ideally, you'll need a roof with good sun
                    exposure (minimal shade), enough space for the panels, and
                    a structure in good condition. We provide a free
                    assessment to confirm suitability.
                  </div>
<div className={"accordion-section-title"} data-tab={"#accordion-a4"}>
                    What’s the lifespan of a solar system?
                  </div>
<div className={"accordion-section-content"} id={"accordion-a4"}>
                    Solar panels typically last 25–30 years or more. Inverters
                    and batteries may need replacement sooner, but most
                    systems continue to function well with minimal
                    maintenance.
                  </div>
<div className={"accordion-section-title"} data-tab={"#accordion-a5"}>
                    Do solar panels work on cloudy days?
                  </div>
<div className={"accordion-section-content"} id={"accordion-a5"}>
                    Yes, solar panels still generate electricity in cloudy
                    conditions—just at a lower output. Efficiency may drop by
                    10–25%, but you'll still be producing power.
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section aria-label={"section"} className={"p-0 position-relative overflow-hidden bg-dark"}>
<div className={"container-fluid p-0"}>
<div className={"row g-0"}>
<div className={"col-lg-12"}>
<div className={"position-relative overflow-hidden w-100"} style={{"maxHeight": "600px", "background": "#000"}}>
<video autoplay={true} loop={true} muted={true} playsinline={true} className={"w-100 d-block"} style={{"objectFit": "cover", "width": "100%", "maxHeight": "600px", "minHeight": "380px"}}>
<source src={"images/background/v1.mp4"} type={"video/mp4"} />
                  Your browser does not support the video tag.
                </video>
<div className={"position-absolute w-100 h-100 top-0 start-0"} style={{"background": "rgba(0, 0, 0, 0.25)", "pointerEvents": "none"}}></div>
</div>
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
<i className={"icofont-location-pin me-2 op-5"}></i>Plot 1504, Cadzone B06, after the Ministry of Transportation,
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
