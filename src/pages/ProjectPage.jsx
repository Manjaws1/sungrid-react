import React from "react";
import { loadLegacyScripts } from "../legacyScripts";
import "./project-single.css";

export default function ProjectPage() {
  React.useEffect(() => {
    document.title = 'Sungrid | Solar Energy';
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
<div id={"de-loader"}></div>
{/* preloader end */}
{/* header begin */}

{/* header end */}
{/* content begin */}
<div className={"no-bottom no-top"} id={"content"}>
<div id={"top"}></div>
<section id={"subheader"} className={"bg-dark text-light relative jarallax"}>
<img src={"images/background/5.webp"} className={"jarallax-img"} alt={""} />
<div className={"container relative z-2"}>
<div className={"row gy-4 gx-5 align-items-center"}>
<div className={"col-lg-12"}>
<div className={"spacer-double sm-hide"}></div>
<h2 className={"mb-3 wow fadeInUp"} data-wow-delay={".2s"}>BrightHome Energy – Residential Solar
                                Panel Installation</h2>
<div className={"border-bottom mb-3"}></div>
<ul className={"crumb wow fadeInUp"}>
<li><a href={"index.html"}>Home</a></li>
<li><a href={"projects.html"}>Projects</a></li>
<li className={"active"}>Bright Home Energy – Residential Solar Panel Installation</li>
</ul>
</div>
</div>
</div>
<div className={"gradient-edge-bottom h-50"}></div>
<div className={"sw-overlay"}></div>
</section>
<section>
<div className={"container"}>
<div className={"row g-4"}>
{/* Category */}
<div className={"col-md-1-5"}>
<div className={"border-gray p-30 h-100 rounded-1 wow fadeInRight"} data-wow-delay={".0s"}>
<div className={"project-info-icon"}>
<i className={"fa-solid fa-solar-panel"}></i>
</div>
<h4 className={"mb-0"}>Category</h4>
                                Home Installation

                            </div>
</div>
{/* Location */}
<div className={"col-md-1-5"}>
<div className={"border-gray p-30 h-100 rounded-1 wow fadeInRight"} data-wow-delay={".2s"}>
<div className={"project-info-icon"}>
<i className={"fa-solid fa-location-dot"}></i>
</div>
<h4 className={"mb-0"}>Location</h4>
                                Residential Property

                            </div>
</div>
{/* Status */}
<div className={"col-md-1-5"}>
<div className={"border-gray p-30 h-100 rounded-1 wow fadeInRight"} data-wow-delay={".4s"}>
<div className={"project-info-icon"}>
<i className={"fa-solid fa-circle-check"}></i>
</div>
<h4 className={"mb-0"}>Status</h4>
                                Completed

                            </div>
</div>
{/* Client */}
<div className={"col-md-1-5"}>
<div className={"border-gray p-30 h-100 rounded-1 wow fadeInRight"} data-wow-delay={".6s"}>
<div className={"project-info-icon"}>
<i className={"fa-solid fa-user"}></i>
</div>
<h4 className={"mb-0"}>Client</h4>
                                Envato Corps

                            </div>
</div>
{/* Completion Date */}
<div className={"col-md-1-5"}>
<div className={"border-gray p-30 h-100 rounded-1 wow fadeInRight"} data-wow-delay={".8s"}>
<div className={"project-info-icon"}>
<i className={"fa-solid fa-calendar-check"}></i>
</div>
<h4 className={"mb-0"}>Completion Date</h4>
                                30 May 2026

                            </div>
</div>
</div>
<div className={"spacer-double"}></div>
<div className={"row g-4"}>
<div className={"col-md-12"}>
<h3 className={"fs-24 wow fadeInUp"}>BrightHome Energy successfully completed the installation of
                                a full-scale residential solar panel system on a modern sloped-roof home. This project
                                supports the homeowner’s commitment to sustainability, energy independence, and
                                long-term savings.</h3>
</div>
</div>
<div className={"spacer-double"}></div>
<div className={"row g-4"}>
<div className={"col-md-6 wow fadeInUp"} data-wow-delay={".0s"}>
<h3>Client Goal</h3>
<ul className={"ul-check text-dark"}>
<li>Reduce monthly electricity bills</li>
<li>Transition to renewable energy</li>
<li>Increase property value</li>
<li>Gain energy independence with minimal maintenance</li>
</ul>
</div>
<div className={"col-md-6 wow fadeInUp"} data-wow-delay={".2s"}>
<h3>Impact & Results</h3>
<ul className={"ul-check text-dark"}>
<li>60% electricity cost reduction</li>
<li>5.2 tons CO₂ offset annually</li>
<li>Energy self-sufficiency</li>
<li>Increased home resale value</li>
</ul>
</div>
</div>
<div className={"spacer-double"}></div>
<div className={"row g-4"}>
<div className={"col-lg-12 wow fadeInUp"}>
<div className={"overflow-hidden rounded-1"}>
<div className={"relative wow fadeIn"}>
<div className={"owl-custom-nav menu-float"} data-target={"#project-single-carousel"}>
<a className={"btn-next"}></a>
<a className={"btn-prev"}></a>
<div id={"project-single-carousel"} className={"owl-2-cols-center owl-carousel owl-theme"}>
{/* project image begin */}
<div className={"item"}>
<div className={"hover relative rounded-1 overflow-hidden text-light"}>
<img src={"images/project-single/1.webp"} className={"w-100"} alt={""} />
</div>
</div>
{/* project image end */}
{/* project image begin */}
<div className={"item"}>
<div className={"hover relative rounded-1 overflow-hidden text-light"}>
<img src={"images/project-single/2.webp"} className={"w-100"} alt={""} />
</div>
</div>
{/* project image end */}
{/* project image begin */}
<div className={"item"}>
<div className={"hover relative rounded-1 overflow-hidden text-light"}>
<img src={"images/project-single/3.webp"} className={"w-100"} alt={""} />
</div>
</div>
{/* project image end */}
{/* project image begin */}
<div className={"item"}>
<div className={"hover relative rounded-1 overflow-hidden text-light"}>
<img src={"images/project-single/4.webp"} className={"w-100"} alt={""} />
</div>
</div>
{/* project image end */}
</div>
</div>
</div>
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
<img src={"images/sungrid-logo.png"} className={"w-150px"} alt={"Sungrid clean energy logo"} /></div>
</div>
    </>
  );
}
