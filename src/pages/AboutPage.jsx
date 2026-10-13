import React from "react";
import { loadLegacyScripts } from "../legacyScripts";

export default function AboutPage() {
  React.useEffect(() => {
    document.title = 'SunGrid Energy Nigeria - About Us';
    let cancelled = false;
    loadLegacyScripts().then(() => {
      if (cancelled) return;
      
      
    }).catch((error) => console.error(error));
    return () => { cancelled = true; };
  }, []);
  return (
    <>
      
<a href={"#"} id={"back-to-top"}></a>
{/* Preloader */}
<div id={"de-loader"}></div>
{/* header begin */}

{/* header end */}
{/* Content */}
<div className={"no-bottom no-top"} id={"content"}>
<div id={"top"}></div>
{/* Hero */}
<section id={"subheader"} className={"bg-dark text-light relative jarallax"}>
<img src={"images/background/teamg2.jpeg"} className={"jarallax-img"} alt={"SunGrid Clean Energy Team"} />
<div className={"container relative z-2"}>
<div className={"row gy-4 gx-5 align-items-center"}>
<div className={"col-lg-7"}>
<div className={"spacer-double sm-hide"}></div>
<h5 className={"wow fadeInUp"}>Powering a Cleaner Nigeria</h5>
<h1 className={"mb-3 wow fadeInUp"} data-wow-delay={".2s"} style={{"fontSize": "clamp(2.4rem, 4.5vw, 3.8rem)", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.5px"}}>
                About SunGrid Energy
              </h1>
<p className={"lead mb-4 wow fadeInUp"} data-wow-delay={".3s"} style={{"fontSize": "1.15rem", "lineHeight": "1.65", "maxWidth": "580px", "color": "rgba(255, 255, 255, 0.88)"}}>
                Pioneering reliable, sustainable, and high-efficiency solar energy solutions for homes and businesses
                across Nigeria.
              </p>
<div className={"d-flex flex-wrap align-items-center gap-3 mb-4 wow fadeInUp"} data-wow-delay={".4s"}>
<a href={"services.html"} className={"btn-main fx-slide"}><span>Our Services</span></a>
<a href={"contact.html"} className={"btn-main btn-line fx-slide hover-white"}><span>Contact Us</span></a>
</div>
<div className={"border-bottom mb-3 opacity-25"} style={{"maxWidth": "480px"}}></div>
<ul className={"crumb mb-0 wow fadeInUp"} data-wow-delay={".5s"} style={{"marginBottom": "0"}}>
<li>
<a href={"index.html"}>Home</a>
</li>
<li className={"active"}>About Us</li>
</ul>
</div>
<div className={"col-lg-5 wow fadeInRight"} data-wow-delay={".3s"}>
<div className={"row g-3"}>
<div className={"col-6"}>
<div className={"p-3 p-lg-4 rounded-3 h-100"} style={{"background": "rgba(0, 0, 0, 0.35)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(8px)"}}>
<div className={"d-flex align-items-center gap-2 mb-1"}>
<i className={"fa-solid fa-solar-panel text-warning fs-18"}></i>
<h3 className={"text-white mb-0 fw-bold fs-24"}><span className={"timer"} data-to={"50"} data-speed={"2500"}>0</span>+</h3>
</div>
<p className={"text-white-50 mb-0 fs-13"}>Installations Done</p>
</div>
</div>
<div className={"col-6"}>
<div className={"p-3 p-lg-4 rounded-3 h-100"} style={{"background": "rgba(0, 0, 0, 0.35)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(8px)"}}>
<div className={"d-flex align-items-center gap-2 mb-1"}>
<i className={"fa-solid fa-shield-halved text-warning fs-18"}></i>
<h3 className={"text-white mb-0 fw-bold fs-24"}><span className={"timer"} data-to={"2"} data-speed={"2000"}>0</span> Yrs</h3>
</div>
<p className={"text-white-50 mb-0 fs-13"}>Panel Warranty</p>
</div>
</div>
<div className={"col-6"}>
<div className={"p-3 p-lg-4 rounded-3 h-100"} style={{"background": "rgba(0, 0, 0, 0.35)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(8px)"}}>
<div className={"d-flex align-items-center gap-2 mb-1"}>
<i className={"fa-solid fa-bolt-lightning text-warning fs-18"}></i>
<h3 className={"text-white mb-0 fw-bold fs-24"}><span className={"timer"} data-to={"100"} data-speed={"2500"}>0</span>%</h3>
</div>
<p className={"text-white-50 mb-0 fs-13"}>Power Reliability</p>
</div>
</div>
<div className={"col-6"}>
<div className={"p-3 p-lg-4 rounded-3 h-100"} style={{"background": "rgba(0, 0, 0, 0.35)", "border": "1px solid rgba(255, 255, 255, 0.1)", "backdropFilter": "blur(8px)"}}>
<div className={"d-flex align-items-center gap-2 mb-1"}>
<i className={"fa-solid fa-headset text-warning fs-18"}></i>
<h3 className={"text-white mb-0 fw-bold fs-24"}><span className={"timer"} data-to={"24"} data-speed={"2000"}>0</span>/7</h3>
</div>
<p className={"text-white-50 mb-0 fs-13"}>Support & Care</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className={"gradient-edge-bottom h-50"}></div>
<div className={"sw-overlay"} style={{"background": "linear-gradient(135deg, rgba(14, 34, 18, 0.88) 0%, rgba(10, 25, 12, 0.72) 60%, rgba(5, 15, 8, 0.6) 100%)"}}>
</div>
</section>
{/* Introduction */}
<section>
<div className={"container"}>
<div className={"row gy-5 gx-5 align-items-center"}>
{/* Images */}
<div className={"col-lg-6"}>
<div className={"relative"}>
<div className={"bg-dark text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden wow zoomIn"}>
<h2 className={"mb-0"}>100%</h2>
<p className={"lh-1-5 mb-0"}>
                    Cleaner energy for a brighter future
                  </p>
</div>
<div className={"rounded-1 w-90 overflow-hidden wow zoomIn"} style={{"height": "480px", "maxHeight": "500px"}}>
<img src={"images/team/img1.jpeg"} className={"w-100 h-100 wow scaleIn"} alt={"Solar energy installation"} style={{"objectFit": "cover", "objectPosition": "center 15%"}} />
</div>
<div className={"rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn"} data-wow-delay={".2s"}>
<img src={"images/misc/s4.webp"} className={"w-100 wow scaleIn"} data-wow-delay={".2s"} alt={"Solar panels"} />
</div>
</div>
</div>
{/* Content */}
<div className={"col-lg-6"}>
<div className={"subtitle s2 mb-3 wow fadeInUp"}>Who We Are</div>
<h2 className={"wow fadeInUp"} data-wow-delay={".2s"}>
                Reliable Solar Power Built for Nigeria
              </h2>
<p>
                SunGrid Energy Nigeria is a renewable energy company based in
                Abuja, focused on helping homes, businesses and organisations
                take control of their energy needs through dependable solar
                power solutions.
              </p>
<p>
                We understand the challenges that unreliable electricity can
                create for families and businesses. Our approach combines
                quality solar technology, professional installation and
                practical energy planning to deliver systems designed around
                the actual needs of our customers.
              </p>
<p>
                From residential solar installations and battery storage to
                commercial energy systems and maintenance, we make the
                transition to clean energy simple, practical and sustainable.
              </p>
<a href={"services.html"} className={"btn-main mt-3"}>
<span> Explore Our Services </span>
</a>
</div>
</div>
</div>
<div className={"spacer-double"}></div>
</section>
{/* Why Choose Us */}
<section className={"bg-light"}>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-12 text-center"}>
<div className={"subtitle s2 mb-3"}>Why SunGrid</div>
<h2>More Than Solar Panels</h2>
<p className={"lead"}>
                We design complete energy solutions that help our customers
                achieve greater reliability, efficiency and independence.
              </p>
</div>
</div>
<div className={"spacer-single"}></div>
<div className={"row g-4"}>
{/* Card 1 */}
<div className={"col-lg-4 col-md-6"}>
<div className={"bg-white p-4 rounded-1 h-100 border-gray"}>
<i className={"fs-60 id-color fa-solid fa-sun"} aria-hidden={"true"}></i>
<h4 className={"mt-3"}>Clean Energy</h4>
<p className={"mb-0"}>
                  Harness the power of sunlight to reduce dependence on
                  conventional energy sources and move towards a cleaner
                  energy future.
                </p>
</div>
</div>
{/* Card 2 */}
<div className={"col-lg-4 col-md-6"}>
<div className={"bg-white p-4 rounded-1 h-100 border-gray"}>
<i className={"fs-60 id-color fa-solid fa-screwdriver-wrench"} aria-hidden={"true"}></i>
<h4 className={"mt-3"}>Expert Installation</h4>
<p className={"mb-0"}>
                  Our systems are planned and installed with attention to
                  safety, performance and the unique requirements of every
                  property.
                </p>
</div>
</div>
{/* Card 3 */}
<div className={"col-lg-4 col-md-6"}>
<div className={"bg-white p-4 rounded-1 h-100 border-gray"}>
<i className={"fs-60 id-color fa-solid fa-headset"} aria-hidden={"true"}></i>
<h4 className={"mt-3"}>Ongoing Support</h4>
<p className={"mb-0"}>
                  We remain available beyond installation with system
                  monitoring, maintenance and technical support.
                </p>
</div>
</div>
</div>
</div>
</section>
{/* Our Team */}
<section className={"bg-light"}>
<div className={"container"}>
<div className={"row justify-content-center text-center mb-5"}>
<div className={"col-lg-8"}>
<div className={"subtitle s2 mb-2 wow fadeInUp"} style={{"color": "#405521 !important", "fontWeight": "700", "fontSize": "14px", "textTransform": "uppercase", "letterSpacing": "1.5px"}}>
                Our Team</div>
<h2 className={"wow fadeInUp mb-3"} style={{"color": "#263517", "fontWeight": "800"}}>Meet the People Behind SunGrid
              </h2>
<p className={"lead wow fadeInUp"} style={{"fontSize": "1.15rem", "lineHeight": "1.75", "color": "#263517 !important", "fontWeight": "500", "maxWidth": "740px", "margin": "0 auto"}}>
                Our multidisciplinary team brings together technical expertise, local knowledge,
                and a shared commitment to making reliable solar energy accessible to homes,
                businesses, and organisations across Nigeria.
              </p>
</div>
</div>
<div className={"row g-4"}>
{/* Member 1 */}
<div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={".1s"}>
<div className={"p-3 rounded-4 h-100 transition-all bg-white shadow-sm"} style={{"border": "1px solid rgba(0, 0, 0, 0.08)"}}>
<div className={"rounded-3 overflow-hidden position-relative mb-3"} style={{"height": "340px"}}>
<img src={"images/team/p6.jpg"} className={"w-100 h-100 transition-all"} alt={"Ruth Amedu"} style={{"objectFit": "cover", "objectPosition": "top center"}} />
<a href={"https://linkedin.com"} target={"_blank"} rel={"noopener noreferrer"} className={"position-absolute bottom-0 end-0 m-3 d-inline-flex align-items-center justify-content-center rounded-circle"} style={{"width": "38px", "height": "38px", "background": "#0a66c2", "color": "#fff", "boxShadow": "0 4px 10px rgba(10, 102, 194, 0.35)"}} aria-label={"LinkedIn profile of Ruth Amedu"}>
<i className={"fa-brands fa-linkedin-in text-white fs-15"}></i>
</a>
</div>
<div className={"px-2 pb-1"}>
<h4 className={"text-dark mb-1 fs-18 fw-bold"}>Ruth Amedu</h4>
<p className={"mb-0 fs-13 fw-600"} style={{"color": "#2e7d32"}}>Managing Director</p>
</div>
</div>
</div>
{/* Member 2 */}
<div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={".2s"}>
<div className={"p-3 rounded-4 h-100 transition-all bg-white shadow-sm"} style={{"border": "1px solid rgba(0, 0, 0, 0.08)"}}>
<div className={"rounded-3 overflow-hidden position-relative mb-3"} style={{"height": "340px"}}>
<img src={"images/team/p1.jpeg"} className={"w-100 h-100 transition-all"} alt={"⁠Yusrah Yusuf"} style={{"objectFit": "cover", "objectPosition": "top center"}} />
<a href={"https://linkedin.com"} target={"_blank"} rel={"noopener noreferrer"} className={"position-absolute bottom-0 end-0 m-3 d-inline-flex align-items-center justify-content-center rounded-circle"} style={{"width": "38px", "height": "38px", "background": "#0a66c2", "color": "#fff", "boxShadow": "0 4px 10px rgba(10, 102, 194, 0.35)"}} aria-label={"LinkedIn profile of ⁠Yusrah Yusuf"}>
<i className={"fa-brands fa-linkedin-in text-white fs-15"}></i>
</a>
</div>
<div className={"px-2 pb-1"}>
<h4 className={"text-dark mb-1 fs-18 fw-bold"}>⁠Yusrah Yusuf</h4>
<p className={"mb-0 fs-13 fw-600"} style={{"color": "#2e7d32"}}>Head of Operations</p>
</div>
</div>
</div>
{/* Member 3 */}
<div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={".3s"}>
<div className={"p-3 rounded-4 h-100 transition-all bg-white shadow-sm"} style={{"border": "1px solid rgba(0, 0, 0, 0.08)"}}>
<div className={"rounded-3 overflow-hidden position-relative mb-3"} style={{"height": "340px"}}>
<img src={"images/team/p2.jpeg"} className={"w-100 h-100 transition-all"} alt={"⁠Igwe Uchenna"} style={{"objectFit": "cover", "objectPosition": "top center"}} />
<a href={"https://linkedin.com"} target={"_blank"} rel={"noopener noreferrer"} className={"position-absolute bottom-0 end-0 m-3 d-inline-flex align-items-center justify-content-center rounded-circle"} style={{"width": "38px", "height": "38px", "background": "#0a66c2", "color": "#fff", "boxShadow": "0 4px 10px rgba(10, 102, 194, 0.35)"}} aria-label={"LinkedIn profile of ⁠Igwe Uchenna"}>
<i className={"fa-brands fa-linkedin-in text-white fs-15"}></i>
</a>
</div>
<div className={"px-2 pb-1"}>
<h4 className={"text-dark mb-1 fs-18 fw-bold"}>⁠Igwe Uchenna</h4>
<p className={"mb-0 fs-13 fw-600"} style={{"color": "#2e7d32"}}>Lead Solar Engineer</p>
</div>
</div>
</div>
{/* Member 4 */}
<div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={".4s"}>
<div className={"p-3 rounded-4 h-100 transition-all bg-white shadow-sm"} style={{"border": "1px solid rgba(0, 0, 0, 0.08)"}}>
<div className={"rounded-3 overflow-hidden position-relative mb-3"} style={{"height": "340px"}}>
<img src={"images/team/p3.png"} className={"w-100 h-100 transition-all"} alt={"Blessing Adeyemi"} style={{"objectFit": "cover", "objectPosition": "top center"}} />
<a href={"https://www.linkedin.com/in/gbenle-kamolideen"} target={"_blank"} rel={"noopener noreferrer"} className={"position-absolute bottom-0 end-0 m-3 d-inline-flex align-items-center justify-content-center rounded-circle"} style={{"width": "38px", "height": "38px", "background": "#0a66c2", "color": "#fff", "boxShadow": "0 4px 10px rgba(10, 102, 194, 0.35)"}} aria-label={"LinkedIn profile of Gbenle Kamolideen"}>
<i className={"fa-brands fa-linkedin-in text-white fs-15"}></i>
</a>
</div>
<div className={"px-2 pb-1"}>
<h4 className={"text-dark mb-1 fs-18 fw-bold"}>Gbenle Kamolideen Ajibola</h4>
<p className={"mb-0 fs-13 fw-600"} style={{"color": "#2e7d32"}}>Solar Technical Specialist</p>
</div>
</div>
</div>
{/* Member 5 */}
<div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={".5s"}>
<div className={"p-3 rounded-4 h-100 transition-all bg-white shadow-sm"} style={{"border": "1px solid rgba(0, 0, 0, 0.08)"}}>
<div className={"rounded-3 overflow-hidden position-relative mb-3"} style={{"height": "340px"}}>
<img src={"images/team/p7.jpg"} className={"w-100 h-100 transition-all"} alt={"David Igoche "} style={{"objectFit": "cover", "objectPosition": "top center"}} />
<a href={"https://www.linkedin.com/in/david-igoche-a35210210"} target={"_blank"} rel={"noopener noreferrer"} className={"position-absolute bottom-0 end-0 m-3 d-inline-flex align-items-center justify-content-center rounded-circle"} style={{"width": "38px", "height": "38px", "background": "#0a66c2", "color": "#fff", "boxShadow": "0 4px 10px rgba(10, 102, 194, 0.35)"}} aria-label={"LinkedIn profile of David Igoche "}>
<i className={"fa-brands fa-linkedin-in text-white fs-15"}></i>
</a>
</div>
<div className={"px-2 pb-1"}>
<h4 className={"text-dark mb-1 fs-18 fw-bold"}>David Igoche </h4>
<p className={"mb-0 fs-13 fw-600"} style={{"color": "#2e7d32"}}>Project Manager</p>
</div>
</div>
</div>
{/* Member 6 */}
<div className={"col-lg-4 col-md-6 wow fadeInUp"} data-wow-delay={".6s"}>
<div className={"p-3 rounded-4 h-100 transition-all bg-white shadow-sm"} style={{"border": "1px solid rgba(0, 0, 0, 0.08)"}}>
<div className={"rounded-3 overflow-hidden position-relative mb-3"} style={{"height": "340px"}}>
<img src={"images/team/p5.webp"} className={"w-100 h-100 transition-all"} alt={" Chiemela Emmanuel"} style={{"objectFit": "cover", "objectPosition": "top center"}} />
<a href={"https://linkedin.com"} target={"_blank"} rel={"noopener noreferrer"} className={"position-absolute bottom-0 end-0 m-3 d-inline-flex align-items-center justify-content-center rounded-circle"} style={{"width": "38px", "height": "38px", "background": "#0a66c2", "color": "#fff", "boxShadow": "0 4px 10px rgba(10, 102, 194, 0.35)"}} aria-label={"LinkedIn profile of  Chiemela Emmanuel"}>
<i className={"fa-brands fa-linkedin-in text-white fs-15"}></i>
</a>
</div>
<div className={"px-2 pb-1"}>
<h4 className={"text-dark mb-1 fs-18 fw-bold"}> Chiemela Emmanuel</h4>
<p className={"mb-0 fs-13 fw-600"} style={{"color": "#2e7d32"}}>Project & Quality Consultant</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Our Team End */}
{/* Our Approach */}
<section>
<div className={"container"}>
<div className={"row g-5 align-items-center"}>
<div className={"col-lg-6"}>
<div className={"subtitle s2 mb-3"}>Our Approach</div>
<h2>Solar Energy Designed Around You</h2>
<p>
                Every property has different energy requirements. That's why
                we don't believe in one-size-fits-all solar systems.
              </p>
<p>
                We begin by understanding your energy consumption, available
                space and power requirements. We then recommend a solution
                that balances performance, reliability and long-term value.
              </p>
<ol className={"ol-style-1"}>
<li>
<span className={"fw-bold text-dark"}> Assess </span>
                  your energy requirements and current power usage.
                </li>
<li>
<span className={"fw-bold text-dark"}> Design </span>
                  a solar system suited to your property and budget.
                </li>
<li>
<span className={"fw-bold text-dark"}> Install </span>
                  quality equipment using professional installation practices.
                </li>
<li>
<span className={"fw-bold text-dark"}> Support </span>
                  your system with maintenance and ongoing technical
                  assistance.
                </li>
</ol>
</div>
<div className={"col-lg-6"}>
<div className={"row g-4"}>
<div className={"col-6"}>
<div className={"bg-dark text-light p-4 rounded-1 h-100"}>
<i className={"fs-50 id-color fa-solid fa-house"} aria-hidden={"true"}></i>
<h4 className={"mt-3"}>Residential</h4>
<p className={"mb-0"}>
                      Reliable power solutions for homes and apartments.
                    </p>
</div>
</div>
<div className={"col-6"}>
<div className={"bg-light p-4 rounded-1 h-100"}>
<i className={"fs-50 id-color fa-solid fa-building"} aria-hidden={"true"}></i>
<h4 className={"mt-3"}>Commercial</h4>
<p className={"mb-0"}>
                      Energy solutions for offices, businesses and
                      organisations.
                    </p>
</div>
</div>
<div className={"col-6"}>
<div className={"bg-light p-4 rounded-1 h-100"}>
<i className={"fs-50 id-color fa-solid fa-battery-full"} aria-hidden={"true"}></i>
<h4 className={"mt-3"}>Battery Storage</h4>
<p className={"mb-0"}>
                      Store solar energy and keep essential appliances
                      running.
                    </p>
</div>
</div>
<div className={"col-6"}>
<div className={"bg-dark text-light p-4 rounded-1 h-100"}>
<i className={"fs-50 id-color fa-solid fa-screwdriver-wrench"} aria-hidden={"true"}></i>
<h4 className={"mt-3"}>Maintenance</h4>
<p className={"mb-0"}>
                      Keep your solar system operating efficiently for longer.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Vision & Mission */}
<section className={"relative jarallax overflow-hidden"}>
<img src={"images/background/gradient-2.webp"} className={"jarallax-img"} alt={"Solar energy background"} />
<div className={"container"}>
<div className={"row g-5"}>
<div className={"col-lg-6"}>
<div className={"subtitle s2 mb-3"}>Our Vision</div>
<h2>A Future Powered by Clean Energy</h2>
<p className={"fs-24 fw-600 lh-1-4"}>
                To contribute to a Nigeria where homes and businesses can
                access dependable, affordable and sustainable energy while
                reducing their impact on the environment.
              </p>
</div>
<div className={"col-lg-6"}>
<div className={"subtitle s2 mb-3"}>Our Mission</div>
<h2>Making Solar Simple and Accessible</h2>
<ol className={"ol-style-1"}>
<li>
<span className={"fw-bold text-dark"}> Accessibility: </span>
                  Make reliable solar solutions practical for more Nigerian
                  homes and businesses.
                </li>
<li>
<span className={"fw-bold text-dark"}> Reliability: </span>
                  Deliver systems designed for dependable everyday energy use.
                </li>
<li>
<span className={"fw-bold text-dark"}> Sustainability: </span>
                  Encourage cleaner energy adoption and reduce dependence on
                  fossil-fuel-powered electricity.
                </li>
<li>
<span className={"fw-bold text-dark"}> Customer First: </span>
                  Build long-term relationships through transparency, quality
                  service and technical support.
                </li>
</ol>
</div>
</div>
</div>
</section>
{/* CTA */}
<section className={"bg-dark text-light"}>
<div className={"container"}>
<div className={"row align-items-center"}>
<div className={"col-lg-8"}>
<div className={"subtitle s2 mb-3"}>Start Your Solar Journey</div>
<h2 className={"text-light"}>
                Ready to Take Control of Your Energy?
              </h2>
<p className={"mb-0"}>
                Let's design a solar solution that works for your home,
                business or organisation.
              </p>
</div>
<div className={"col-lg-4 text-lg-end mt-4 mt-lg-0"}>
<a href={"contact.html"} className={"btn-main"}>
<span> Talk to Our Team </span>
</a>
</div>
</div>
</div>
</section>
</div>
{/* footer begin */}

{/* footer end */}
{/* Extra Menu */}
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
{/* JavaScript */}






    </>
  );
}
