import React from "react";
import { loadLegacyScripts } from "../legacyScripts";
import "./product.css";

export default function ProductsPage() {
  React.useEffect(() => {
    document.title = 'Solar Products & Accessories | Sungrid Clean Energy';
    let cancelled = false;
    loadLegacyScripts().then(() => {
      if (cancelled) return;
      
      import("./product.js").then(({ initProductsPage }) => initProductsPage());
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
{/* HERO SUBHEADER */}
<section id={"subheader"} className={"bg-dark text-light relative jarallax"}>
<img src={"images/background/teamg3.jpg"} className={"jarallax-img"} alt={"SunGrid Solar Products"} />
<div className={"container relative z-2"}>
<div className={"row gy-4 gx-5 align-items-center"}>
<div className={"col-lg-7"}>
<div className={"spacer-double sm-hide"}></div>
<div className={"d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill wow fadeInUp"}>
<h5 className={"wow fadeInUp"} style={{"color": "#A3B878", "marginBottom": "0"}}>Clean Energy Hardware
                                </h5>
</div>
<h1 className={"mb-3 wow fadeInUp"} data-wow-delay={".2s"} style={{"fontSize": "clamp(2.4rem, 4.5vw, 3.8rem)", "lineHeight": "1.15", "fontWeight": "800", "letterSpacing": "-0.5px"}}>
                                OUR PRODUCTS
                            </h1>
<p className={"lead mb-4 wow fadeInUp"} data-wow-delay={".3s"} style={{"fontSize": "1.15rem", "lineHeight": "1.65", "maxWidth": "580px", "color": "rgba(255, 255, 255, 0.88)"}}>
                                Premium tier-1 solar panels, intelligent hybrid inverters, long-life lithium battery
                                storage, solar generators, and precision accessories.
                            </p>
<div className={"d-flex flex-wrap align-items-center gap-3 mb-4 wow fadeInUp"} data-wow-delay={".4s"}>
<a href={"#solar-panels"} className={"btn-main fx-slide"}><span>Explore Products</span></a>
<a href={"contact.html"} className={"btn-main btn-line fx-slide hover-white"}><span>Get a
                                        Quote</span></a>
</div>
<div className={"border-bottom mb-3 opacity-25"} style={{"maxWidth": "480px"}}></div>
<ul className={"crumb mb-0 wow fadeInUp"} data-wow-delay={".5s"} style={{"marginBottom": "0"}}>
<li><a href={"index.html"}>Home</a></li>
<li className={"active"}>Our Products</li>
</ul>
</div>
{/* Right Column: Featured Product Showcase Banner (Plain Style) */}
<div className={"col-lg-5 wow fadeInRight"} data-wow-delay={".3s"}>
<div className={"position-relative p-0 rounded-4 overflow-hidden"}>
<div className={"rounded-3 overflow-hidden text-center p-3 mb-3"} style={{"background": "rgba(255, 255, 255, 0.04)", "border": "1px solid rgba(255, 255, 255, 0.09)", "minHeight": "220px", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
<img src={"images/products/Gennex-Solar-Generator-Mobile-View.png"} alt={"All-In-One Solar Generators & Inverters"} className={"img-fluid"} style={{"maxHeight": "195px", "objectFit": "contain"}} />
</div>
<div className={"d-flex align-items-center justify-content-between pt-1"}>
<div className={"pe-2"}>
<h5 className={"text-white mb-1 fs-18 fw-bold"}>All-In-One Solar Generators &
                                            Inverters</h5>
<p className={"text-white-50 mb-0 fs-13"}>Lithium Storage • Pure Sine Wave •
                                            Up to 30 Yrs Life</p>
</div>
<a href={"#solar-generators"} className={"btn-main btn-sm px-4 py-2 fx-slide"} style={{"borderRadius": "8px"}}>
<span>View</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div className={"gradient-edge-bottom h-50"}></div>
<div className={"sw-overlay"} style={{"background": "linear-gradient(135deg, rgba(14, 34, 18, 0.88) 0%, rgba(10, 25, 12, 0.72) 60%, rgba(5, 15, 8, 0.6) 100%)"}}>
</div>
</section>
{/* STICKY CATEGORY NAV */}
<div className={"product-nav-bar"}>
<div className={"container"}>
<div className={"product-nav-scroll"}>
<a href={"#solar-panels"} className={"product-nav-link active"}>Solar Panels</a>
<a href={"#hybrid-inverters"} className={"product-nav-link"}>Hybrid Inverters</a>
<a href={"#solar-batteries"} className={"product-nav-link"}>Batteries</a>
<a href={"#solar-generators"} className={"product-nav-link"}>Solar Generators</a>
<a href={"#solar-street-lights"} className={"product-nav-link"}>Street Lights</a>
<a href={"#online-ups"} className={"product-nav-link"}>Online UPS</a>
<a href={"#mppt-controllers"} className={"product-nav-link"}>MPPT Controllers</a>
<a href={"#power-gateway"} className={"product-nav-link"}>Power Gateway</a>
<a href={"#led-bulbs"} className={"product-nav-link"}>LED Bulbs</a>
<a href={"#solar-fans"} className={"product-nav-link"}>Solar Fans</a>
<a href={"#solar-mounts"} className={"product-nav-link"}>Mount Accessories</a>
<a href={"#mc4-connectors"} className={"product-nav-link"}>MC4 Connectors</a>
<a href={"#other-products"} className={"product-nav-link"}>Surge & Protection</a>
<a href={"#order-inquiry-section"} className={"product-nav-link"} style={{"background": "var(--button-color)", "color": "#fff"}}>Inquire / Order</a>
</div>
</div>
</div>
{/* SECTION 1: SOLAR PANELS (4 COLUMNS) */}
<section id={"solar-panels"} className={"product-category-section"}>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-12"}>
<div className={"category-header"}>
<span className={"category-badge"}>High-Efficiency Photovoltaic</span>
<h2 className={"category-title"}>Solar Panels</h2>
<p className={"text-secondary"} style={{"fontSize": "16px", "maxWidth": "700px"}}>
                                    Tier-1 photovoltaic modules designed for superior high-power performance, extreme
                                    durability, and industry-leading 30-plus year warranties.
                                </p>
</div>
</div>
</div>
<div className={"row g-4"}>
{/* Card 1: Jinko */}
<div className={"col-lg-3 col-md-6"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/Jinko-solar-panel.jpg"} alt={"Jinko Solar Panels"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>Jinko Solar Panels</h4>
<p className={"gennex-card-text"}>
                                        Range of quality Jinko solar panels with 30-plus years warranty, enhanced
                                        reliability, outstanding low light performance, lower operating temperature,
                                        exceptional PID resistance, and high compatibility.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
{/* Card 2: Astronergy */}
<div className={"col-lg-3 col-md-6"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/5-ASTRO-N5-600W.jpg"} alt={"Astronergy Solar Panel"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>Astronergy Solar Panel</h4>
<p className={"gennex-card-text"}>
                                        Astronergy is a leading global solar energy company, specializing in the
                                        production of high-quality solar panels and renewable energy solutions with
                                        cutting-edge n-type TOPCon module cell architecture.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
{/* Card 3: Canadian Solar */}
<div className={"col-lg-3 col-md-6"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/Canadian-solar-panel.jpg"} alt={"Canadian Solar Panels"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>Canadian Solar Panels</h4>
<p className={"gennex-card-text"}>
                                        Canadian Solar Panel’s innovative Mono and Poly Crystalline Panels module cell
                                        technology can now offer small format high-density modules of very high
                                        efficiency with comprehensive 30+ years warranty.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
{/* Card 4: JA Solar */}
<div className={"col-lg-3 col-md-6"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/JA-Solar-Panels-1.jpg"} alt={"JA Solar Panels"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>JA Solar Panels</h4>
<p className={"gennex-card-text"}>
                                        JA Solar is a globally trusted leader in photovoltaic (PV) technology, dedicated
                                        to delivering high-efficiency, long-lasting solar solutions that help homes,
                                        businesses, and communities transition smoothly to clean power.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 2: HYBRID INVERTERS (4 COLUMNS) */}
<section id={"hybrid-inverters"} className={"product-category-section"}>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-12"}>
<div className={"category-header"}>
<span className={"category-badge"}>Power Conversion & Management</span>
<h2 className={"category-title"}>Hybrid Inverters</h2>
<p className={"text-secondary"} style={{"fontSize": "16px", "maxWidth": "700px"}}>
                                    Smart energy storage and conversion inverters ranging from 1.2KVA to 15KVA,
                                    compatible with on-grid, off-grid, and generator hybrid configurations.
                                </p>
</div>
</div>
</div>
<div className={"row g-4"}>
{/* Inverter 1: Gennex Inverters */}
<div className={"col-lg-3 col-md-6"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/Inverters2.png"} alt={"Gennex Hybrid Inverters"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>Gennex Inverters</h4>
<p className={"gennex-card-text"}>
                                        Gennex Hybrid Inverters are manufactured from the very latest technology used in
                                        the industry globally. Ranging from 1.2KVA – 15KVA, applicable with both on-grid
                                        and off-grid PV systems with user-friendly features.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
{/* Inverter 2: Growatt Inverters */}
<div className={"col-lg-3 col-md-6"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/growatt-inverters.png"} alt={"Growatt Inverters"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>Growatt Inverters</h4>
<p className={"gennex-card-text"}>
                                        Growatt offers a comprehensive lineup of intelligent solar inverter solutions
                                        suitable for residential, commercial and utility-scale solar installations with
                                        robust remote app monitoring and MPPT trackers.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
{/* Inverter 3: Sorotec Inverters */}
<div className={"col-lg-3 col-md-6"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/3-2kva-REVO-VM-II-PRO-inverter-front-view.jpg"} alt={"Sorotec Inverters"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>Sorotec Inverters</h4>
<p className={"gennex-card-text"}>
                                        High-performance power solutions designed to provide reliable and efficient
                                        energy backup for homes, offices, and industrial applications with seamless
                                        automatic changeover and high surge resilience.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
{/* Inverter 4: LuxPower Inverters */}
<div className={"col-lg-3 col-md-6"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/Luxpower-kwh-hybrid-inverter.png"} alt={"LuxPower Inverters"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>LuxPower Inverters</h4>
<p className={"gennex-card-text"}>
                                        Lux Power hybrid inverters provide intelligent power management for residential
                                        and commercial solar installations, offering parallel stacking, generator
                                        auto-start, and seamless lithium battery integration.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 3: BATTERIES & SOLAR GENERATORS (2-COLUMN CARDS) */}
<section id={"solar-batteries"} className={"product-category-section"}>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-12"}>
<div className={"category-header"}>
<span className={"category-badge"}>Energy Storage & Portability</span>
<h2 className={"category-title"}>Batteries & All-in-One Solar Generators</h2>
<p className={"text-secondary"} style={{"fontSize": "16px", "maxWidth": "700px"}}>
                                    Deep cycle battery storage and integrated plug-and-play solar power generators for
                                    residential, commercial, and emergency backup power.
                                </p>
</div>
</div>
</div>
<div className={"row g-4"}>
{/* Battery Card */}
<div className={"col-lg-6"}>
<div className={"gennex-feature-card"}>
<div className={"gennex-feature-img-wrap"}>
<img src={"images/products/Batteries.png"} alt={"Solar Inverter Batteries"} loading={"lazy"} />
</div>
<h3 className={"gennex-feature-title"}>Solar Inverter Batteries</h3>
<p className={"gennex-card-text"}>
                                    Our deep cycle solar batteries are created for optimum efficiency and extended
                                    lifespan. Lithium (LiFePO4), Trojan, and Newmax inverter batteries with 10-plus
                                    years life span and industry-leading warranties. We sell and supply dry cell,
                                    tubular, and lithium solar batteries of various capacities engineered for extreme
                                    cycles.
                                </p>
<div className={"mt-3"}>
<a href={"contact.html"} className={"btn-main fx-slide"}><span>Learn More</span></a>
</div>
</div>
</div>
{/* Generator Card */}
<div className={"col-lg-6"} id={"solar-generators"}>
<div className={"gennex-feature-card"}>
<div className={"gennex-feature-img-wrap"}>
<img src={"images/products/Gennex-Solar-Generator-Mobile-View.png"} alt={"All in One Solar Generators"} loading={"lazy"} />
</div>
<h3 className={"gennex-feature-title"}>All in One Solar Generators</h3>
<p className={"gennex-card-text"}>
                                    Best quality solar generators available in different sizes. From 1.2Kw for powering
                                    your essential household and office appliances to 11Kw for powering all heavy
                                    electrical appliances. Prime-quality solar generators with zero fuel, zero
                                    emissions, quiet operation, and extended durability.
                                </p>
<div className={"mt-3"}>
<a href={"contact.html"} className={"btn-main fx-slide"}><span>Learn More</span></a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 4: STREET LIGHTS & ONLINE UPS (2-COLUMN CARDS) */}
<section id={"solar-street-lights"} className={"product-category-section"}>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-12"}>
<div className={"category-header"}>
<span className={"category-badge"}>Lighting & Critical Power</span>
<h2 className={"category-title"}>Solar Street Lights & Online UPS</h2>
<p className={"text-secondary"} style={{"fontSize": "16px", "maxWidth": "700px"}}>
                                    Smart outdoor street lighting solutions and enterprise-grade uninterruptible power
                                    supplies for sensitive IT, hospital, and mission-critical installations.
                                </p>
</div>
</div>
</div>
<div className={"row g-4"}>
{/* Street Lights */}
<div className={"col-lg-6"}>
<div className={"gennex-feature-card"}>
<div className={"gennex-feature-img-wrap"}>
<img src={"images/products/Solar-Street-Light-With-Motion-Sensor.png"} alt={"All in One Solar Street Lights"} loading={"lazy"} />
</div>
<h3 className={"gennex-feature-title"}>All in One Solar Street Lights</h3>
<p className={"gennex-card-text"}>
                                    Anern All-in-One Solar Street Lights offer a streamlined and efficient solution for
                                    outdoor lighting needs. By integrating solar panels, long-life lithium batteries,
                                    high-lumen LED light sources, and intelligent microwave motion sensors into a single
                                    compact unit, these street lights simplify installation and eliminate cabling.
                                </p>
<div className={"mt-3"}>
<a href={"contact.html"} className={"btn-main fx-slide"}><span>Learn More</span></a>
</div>
</div>
</div>
{/* Online UPS */}
<div className={"col-lg-6"} id={"online-ups"}>
<div className={"gennex-feature-card"}>
<div className={"gennex-feature-img-wrap"}>
<img src={"images/products/ups-battery-backup.png"} alt={"Online Uninterruptible Power Supply"} loading={"lazy"} />
</div>
<h3 className={"gennex-feature-title"}>Online Uninterruptible Power Supply (UPS)</h3>
<p className={"gennex-card-text"}>
                                    Online double-conversion UPS systems manufactured using the latest inverter
                                    technologies. Designed to deliver true sine wave power and zero-millisecond transfer
                                    protection for critical loads such as data center servers, healthcare medical
                                    machinery, IT networks, telecoms towers, and banking institutions.
                                </p>
<div className={"mt-3"}>
<a href={"contact.html"} className={"btn-main fx-slide"}><span>Learn More</span></a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 5: MPPT CONTROLLERS & POWER GATEWAY (SPLIT ROWS) */}
<section id={"mppt-controllers"} className={"product-category-section"}>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-12"}>
<div className={"category-header"}>
<span className={"category-badge"}>Solar Charge & Smart Automation</span>
<h2 className={"category-title"}>Charge Controllers & Power Gateways</h2>
</div>
</div>
</div>
{/* MPPT Controller Row */}
<div className={"gennex-split-row"}>
<div className={"row g-0 align-items-center"}>
<div className={"col-lg-5"}>
<div className={"gennex-split-img-box"}>
<img src={"images/products/MPPT-solar-charge-controller.jpg"} alt={"External MPPT Solar Charge Controllers"} loading={"lazy"} />
</div>
</div>
<div className={"col-lg-7"}>
<div className={"gennex-split-content"}>
<span className={"category-badge mb-2"}>Efficiency Up To 98%</span>
<h3 className={"gennex-feature-title"}>External MPPT Solar Charge Controllers</h3>
<p className={"gennex-card-text mb-3"}>
                                        Compared to traditional PWM solar charge controllers, Maximum Power Point
                                        Tracking (MPPT) technology allows your solar panels to operate at their optimum
                                        power output voltage continuously, providing higher efficiency up to 98% with
                                        minimal thermal loss.
                                    </p>
<p className={"gennex-card-text mb-4"}>
                                        When integrated with inverters, solar panels, and external battery packs, it
                                        forms an autonomous, high-yield standalone solar power system that guarantees
                                        faster recharge cycles and battery longevity.
                                    </p>
<div>
<a href={"contact.html"} className={"btn-main fx-slide"}><span>Learn More</span></a>
</div>
</div>
</div>
</div>
</div>
{/* Multi-Functional Power Gateway Row */}
<div className={"gennex-split-row"} id={"power-gateway"}>
<div className={"row g-0 align-items-center flex-lg-row-reverse"}>
<div className={"col-lg-5"}>
<div className={"gennex-split-img-box"}>
<img src={"images/products/Multi-functional-power-gateway-gennex-solar-installation.png"} alt={"Multi-Functional Power Gateway"} loading={"lazy"} />
</div>
</div>
<div className={"col-lg-7"}>
<div className={"gennex-split-content"}>
<span className={"category-badge mb-2"}>Intelligent Changeover Box</span>
<h3 className={"gennex-feature-title"}>Multi-Functional Power Gateway</h3>
<p className={"gennex-card-text mb-3"}>
                                        The multi-functional power gateway protects your home and industrial appliances
                                        from destructive power surges of all kinds while functioning as the perfect
                                        automatic changeover box.
                                    </p>
<p className={"gennex-card-text mb-4"}>
                                        Engineered for seamless interconnection between multiple power sources (utility
                                        grid, generator, and solar PV). The device enables safe, prioritized, and
                                        automatic selection between available energy sources without manual
                                        intervention.
                                    </p>
<div>
<a href={"contact.html"} className={"btn-main fx-slide"}><span>Learn More</span></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 6: LED BULBS & RECHARGEABLE FANS (2-COLUMN CARDS) */}
<section id={"led-bulbs"} className={"product-category-section"}>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-12"}>
<div className={"category-header"}>
<span className={"category-badge"}>Energy Saving Appliances</span>
<h2 className={"category-title"}>LED Lighting & Rechargeable Solar Fans</h2>
<p className={"text-secondary"} style={{"fontSize": "16px", "maxWidth": "700px"}}>
                                    Energy-efficient indoor and outdoor illumination, paired with multi-hour
                                    rechargeable solar cooling fans.
                                </p>
</div>
</div>
</div>
<div className={"row g-4"}>
{/* LED Bulbs */}
<div className={"col-lg-6"}>
<div className={"gennex-feature-card"}>
<div className={"gennex-feature-img-wrap"}>
<img src={"images/products/led-bulb.jpg"} alt={"Variety of LED Bulbs"} loading={"lazy"} />
</div>
<h3 className={"gennex-feature-title"}>Variety of LED Bulbs</h3>
<p className={"gennex-card-text"}>
                                    Energy-saving LED bulbs designed with state-of-the-art thermal heatsinks to give
                                    your home and commercial facility a brilliant luminous shine while dramatically
                                    cutting electricity and battery consumption. Our range includes indoor downlights,
                                    tube lamps, floodlights, and outdoor fixtures engineered to last over 30,000
                                    operational hours.
                                </p>
<div className={"mt-3"}>
<a href={"contact.html"} className={"btn-main fx-slide"}><span>Learn More</span></a>
</div>
</div>
</div>
{/* Rechargeable Fans */}
<div className={"col-lg-6"} id={"solar-fans"}>
<div className={"gennex-feature-card"}>
<div className={"gennex-feature-img-wrap"}>
<img src={"images/products/Gennex_Solar_Fans-1.png"} alt={"Rechargeable Fans With Solar Panel"} loading={"lazy"} />
</div>
<h3 className={"gennex-feature-title"}>Rechargeable Fans With Solar Panel</h3>
<p className={"gennex-card-text"}>
                                    Innovative solar rechargeable fans equipped with dedicated solar PV charging panels
                                    and built-in lithium battery packs. Provides cooling comfort all day directly
                                    powered by sunlight, and delivers up to 10–11 hours of whisper-quiet breeze at night
                                    on a single full charge. Includes USB phone charging ports and multi-speed controls.
                                </p>
<div className={"mt-3"}>
<a href={"contact.html"} className={"btn-main fx-slide"}><span>Learn More</span></a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 7: SOLAR MOUNTS, MC4 & PROTECTION (3 COLUMNS) */}
<section id={"solar-mounts"} className={"product-category-section"}>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-12"}>
<div className={"category-header"}>
<span className={"category-badge"}>Hardware & Protection</span>
<h2 className={"category-title"}>Mount Accessories, MC4 Connectors & Protection</h2>
<p className={"text-secondary"} style={{"fontSize": "16px", "maxWidth": "700px"}}>
                                    Industrial-grade mounting hardware, certified solar connectors, and critical DC
                                    surge protection devices for safety compliance.
                                </p>
</div>
</div>
</div>
<div className={"row g-4"}>
{/* Mount Accessories */}
<div className={"col-lg-4 col-md-6"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/solar-mount.png"} alt={"Solar Mount Accessories"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>Solar Mount Accessories</h4>
<p className={"gennex-card-text"}>
                                        We stock corrosion-resistant anodized aluminium mounting hardware including
                                        aluminium rails, end clamps, mid clamps, splice bars, serrated L-feet, hanger
                                        bolts, and tile roof brackets for roof and ground-mount installations.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
{/* MC4 Connectors */}
<div className={"col-lg-4 col-md-6"} id={"mc4-connectors"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/MC4-Connectors-BM21-2.png"} alt={"MC4 Connectors"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>MC4 Solar Connectors</h4>
<p className={"gennex-card-text"}>
                                        Heavy-duty IP68 waterproof MC4 connectors including BA21, BM21, BM31 branch
                                        connectors, CC4K, and CC10K solar cable connectors with UV resistance and secure
                                        snap-in locking mechanisms for reliable high-voltage connections.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
{/* Other Products / Surge Arrestor */}
<div className={"col-lg-4 col-md-6"} id={"other-products"}>
<div className={"gennex-card"}>
<div className={"gennex-card-img-wrap"}>
<img src={"images/products/DC-surge-arrestor-1.png"} alt={"DC Surge Arrestors & Protection"} loading={"lazy"} />
</div>
<div className={"gennex-card-body"}>
<h4 className={"gennex-card-title"}>Surge Protection & Accessories</h4>
<p className={"gennex-card-text"}>
                                        Critical circuit protection hardware to safeguard installations: AC Surge
                                        Arrestors (Single & 3-Phase), DC Circuit Breakers 1000V-20A, DC Surge Arrestors
                                        120V & 800V, enclosed battery racks, and DC isolator disconnect switches.
                                    </p>
<div className={"gennex-card-footer"}>
<a href={"contact.html"} className={"btn-main btn-line fx-slide w-100 text-center"}><span>Learn
                                                More</span></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 8: ORDER / INQUIRY FORM & OFFICE CONTACTS */}
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
