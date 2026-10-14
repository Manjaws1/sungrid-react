import React from "react";
import { loadLegacyScripts } from "../legacyScripts";

const services = [
    {
        title: "Solar Panel Installation",
        category: "residential",
        label: "Residential Solar",
        image: "images/services/1.webp",
        icon: "fa-solar-panel",
        subtitle: "Turnkey Solar",
        description:
            "Fast, safe, and certified installation custom-engineered for private homes, duplexes, and estates.",
        feature: "Tier-1 Monocrystalline & 25-Yr Warranty",
    },
    {
        title: "Solar Panel Maintenance",
        category: "maintenance",
        label: "Maintenance",
        image: "images/services/2.webp",
        icon: "fa-screwdriver-wrench",
        subtitle: "Peak Performance",
        description:
            "Ensure peak output with routine deionized washing, string testing, and preventative electrical checks.",
        feature: "Dust Clearing & Rapid 24h Response",
    },
    {
        title: "Custom System Design",
        category: "commercial residential",
        label: "Engineering",
        image: "images/services/3.webp",
        icon: "fa-compass-drafting",
        subtitle: "CAD & Modeling",
        description:
            "Tailored architectural engineering, 3D irradiance simulations, and electrical schematics for optimal yield.",
        feature: "3D Sun Path Modeling & Payback Plan",
    },
    {
        title: "Solar Battery Storage",
        category: "storage",
        label: "Energy Storage",
        image: "/images/services/4.jpg",
        icon: "fa-battery-full",
        subtitle: "Zero Blackouts",
        description:
            "Capture surplus clean power with high-capacity Lithium (LiFePO4) storage for 24/7 overnight autonomy.",
        feature: "6,000+ Cycle Life & 10ms UPS Transfer",
    },
    {
        title: "System Monitoring & Reporting",
        category: "maintenance",
        label: "Smart Telemetry",
        image: "/images/services/6.jpg",
        icon: "fa-chart-line",
        subtitle: "Live Telemetry",
        description:
            "Track generation and consumption in real-time on your phone, with automated health and fault alerts.",
        feature: "24/7 Mobile App & Automated Diagnostics",
    },
    {
        title: "Energy & Thermal Audit",
        category: "maintenance commercial",
        label: "Auditing",
        image: "/images/services/06.jpg",
        icon: "fa-magnifying-glass-chart",
        subtitle: "Thermal Imaging",
        description:
            "Advanced FLIR infrared scans, phase balance checks, and energy leak detection to maximize efficiency.",
        feature: "Infrared Hotspot & Leakage Analysis",
    },
    {
        title: "Solar EV Charging",
        category: "residential commercial",
        label: "EV Mobility",
        image: "images/services/7.jpg",
        icon: "fa-charging-station",
        subtitle: "Clean Mobility",
        description:
            "Level 2 and DC fast-charging wallboxes connected to your solar array for 100% fuel-free vehicle commuting.",
        feature: "Universal Type 2 / CCS & Excess Routing",
    },
    {
        title: "Commercial & Industrial Solar",
        category: "commercial",
        label: "Commercial",
        image: "images/services/8.webp",
        icon: "fa-building",
        subtitle: "C&I Solutions",
        description:
            "MW-scale solar photovoltaic systems engineered for factories, corporate plazas, and schools to slash diesel costs.",
        feature: "Peak Shaving & Diesel Displacement",
    },
    {
        title: "Off-Grid Microgrids",
        category: "storage",
        label: "Off-Grid",
        image: "images/services/9.webp",
        icon: "fa-tower-cell",
        subtitle: "100% Autonomous",
        description:
            "Autonomous clean power microgrids and solar pumping solutions built for remote estates, lodges, and farms.",
        feature: "Zero Grid Reliance & Generator Sync",
    },
];

const filters = [
    { label: "All Services (9)", value: "all" },
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Storage & Off-Grid", value: "storage" },
    { label: "Maintenance & Care", value: "maintenance" },
];

const statCardStyle = {
    background: "rgba(0, 0, 0, 0.35)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(8px)",
};

const serviceLabelStyle = {
    background: "rgba(14, 34, 18, 0.78)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    zIndex: 2,
};

export default function ServicePage() {
    const [activeFilter, setActiveFilter] = React.useState("all");

    React.useEffect(() => {
        document.title = "SunGrid Energy Nigeria - Our Services";

        let cancelled = false;

        loadLegacyScripts()
            .then(() => {
                if (cancelled) return;
            })
            .catch((error) => console.error(error));

        return () => {
            cancelled = true;
        };
    }, []);

    const visibleServices = services.filter((service) => {
        if (activeFilter === "all") return true;
        return service.category.split(" ").includes(activeFilter);
    });

    return (
        <>
            <a href="#" id="back-to-top" aria-label="Back to top"></a>
            {/* Preloader */}
            {/* <div id="de-loader"></div> */}

            {/* Content */}
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                {/* Hero */}
                <section
                    id="subheader"
                    className="bg-dark text-light relative jarallax"
                >
                    <img
                        src="images/background/teamg4.jpg"
                        className="jarallax-img"
                        alt="SunGrid Clean Energy Services"
                    />

                    <div className="container relative z-2">
                        <div className="row gy-4 gx-5 align-items-center">
                            <div className="col-lg-7">
                                <div className="spacer-double sm-hide"></div>

                                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill wow fadeInUp">
                                    <h5 className="wow fadeInUp">Clean Energy Solutions</h5>
                                </div>

                                <h1
                                    className="mb-3 wow fadeInUp"
                                    data-wow-delay=".2s"
                                    style={{
                                        fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                                        lineHeight: 1.15,
                                        fontWeight: 800,
                                        letterSpacing: "-0.5px",
                                    }}
                                >
                                    Our Services
                                </h1>

                                <p
                                    className="lead mb-4 wow fadeInUp"
                                    data-wow-delay=".3s"
                                    style={{
                                        fontSize: "1.15rem",
                                        lineHeight: 1.65,
                                        maxWidth: "580px",
                                        color: "rgba(255, 255, 255, 0.88)",
                                    }}
                                >
                                    Engineered for maximum efficiency, sustainability, and zero
                                    downtime. Discover our end-to-end solar installations, battery
                                    storage, and 24/7 maintenance solutions.
                                </p>

                                <div
                                    className="d-flex flex-wrap align-items-center gap-3 mb-4 wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <a href="#services-grid" className="btn-main fx-slide">
                                        <span>Explore Services</span>
                                    </a>
                                    <a
                                        href="contact.html"
                                        className="btn-main btn-line fx-slide hover-white"
                                    >
                                        <span>Contact Us</span>
                                    </a>
                                </div>

                                <div
                                    className="border-bottom mb-3 opacity-25"
                                    style={{ maxWidth: "480px" }}
                                ></div>

                                <ul
                                    className="crumb mb-0 wow fadeInUp"
                                    data-wow-delay=".5s"
                                    style={{ marginBottom: 0 }}
                                >
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="active">Our Services</li>
                                </ul>
                            </div>

                            <div className="col-lg-5 wow fadeInRight" data-wow-delay=".3s">
                                <div className="row g-3">
                                    <div className="col-6">
                                        <div
                                            className="p-3 p-lg-4 rounded-3 h-100"
                                            style={statCardStyle}
                                        >
                                            <div className="d-flex align-items-center gap-2 mb-1">
                                                <i className="fa-solid fa-solar-panel text-warning fs-18"></i>
                                                <h3 className="text-white mb-0 fw-bold fs-24">
                                                    <span
                                                        className="timer"
                                                        data-to="50"
                                                        data-speed="2500"
                                                    >
                                                        0
                                                    </span>
                                                    +
                                                </h3>
                                            </div>
                                            <p className="text-white-50 mb-0 fs-13">
                                                Installations Done
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div
                                            className="p-3 p-lg-4 rounded-3 h-100"
                                            style={statCardStyle}
                                        >
                                            <div className="d-flex align-items-center gap-2 mb-1">
                                                <i className="fa-solid fa-shield-halved text-warning fs-18"></i>
                                                <h3 className="text-white mb-0 fw-bold fs-24">
                                                    <span className="timer" data-to="2" data-speed="2000">
                                                        0
                                                    </span>{" "}
                                                    Yrs
                                                </h3>
                                            </div>
                                            <p className="text-white-50 mb-0 fs-13">Panel Warranty</p>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div
                                            className="p-3 p-lg-4 rounded-3 h-100"
                                            style={statCardStyle}
                                        >
                                            <div className="d-flex align-items-center gap-2 mb-1">
                                                <i className="fa-solid fa-bolt-lightning text-warning fs-18"></i>
                                                <h3 className="text-white mb-0 fw-bold fs-24">
                                                    <span
                                                        className="timer"
                                                        data-to="100"
                                                        data-speed="2500"
                                                    >
                                                        0
                                                    </span>
                                                    %
                                                </h3>
                                            </div>
                                            <p className="text-white-50 mb-0 fs-13">
                                                Power Reliability
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div
                                            className="p-3 p-lg-4 rounded-3 h-100"
                                            style={statCardStyle}
                                        >
                                            <div className="d-flex align-items-center gap-2 mb-1">
                                                <i className="fa-solid fa-headset text-warning fs-18"></i>
                                                <h3 className="text-white mb-0 fw-bold fs-24">
                                                    <span
                                                        className="timer"
                                                        data-to="24"
                                                        data-speed="2000"
                                                    >
                                                        0
                                                    </span>
                                                    /7
                                                </h3>
                                            </div>
                                            <p className="text-white-50 mb-0 fs-13">
                                                Support &amp; Care
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-edge-bottom h-50"></div>
                    <div
                        className="sw-overlay"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(14, 34, 18, 0.88) 0%, rgba(10, 25, 12, 0.72) 60%, rgba(5, 15, 8, 0.6) 100%)",
                        }}
                    ></div>
                </section>

                {/* Services grid */}
                <section id="services-grid" className="bg-light">
                    <div className="container">
                        <div className="row g-4 justify-content-center mb-5">
                            <div className="col-lg-7 text-center">
                                <div className="subtitle wow fadeInUp mb-2">
                                    Clean Energy Solutions
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".1s">
                                    Engineered for Peak Efficiency{" "}
                                    <span className="op-3">&amp; Zero Downtime</span>
                                </h2>
                                <p
                                    className="lead mb-0 wow fadeInUp text-muted"
                                    data-wow-delay=".2s"
                                >
                                    Turnkey residential, commercial, and off-grid solar energy
                                    solutions designed for Nigerian homes and businesses.
                                </p>
                            </div>
                        </div>

                        {/* React-powered category filter */}
                        <div
                            className="text-center mb-5 pb-2 wow fadeInUp"
                            data-wow-delay=".25s"
                        >
                            <div
                                className="d-inline-flex flex-wrap justify-content-center gap-2 p-2 bg-white rounded-pill shadow-sm"
                                style={{ border: "1px solid rgba(184, 201, 154, 0.4)" }}
                            >
                                {filters.map((filter) => (
                                    <button
                                        key={filter.value}
                                        type="button"
                                        className={`btn-service-filter ${activeFilter === filter.value ? "active" : ""}`}
                                        data-filter={filter.value}
                                        aria-pressed={activeFilter === filter.value}
                                        onClick={() => setActiveFilter(filter.value)}
                                    >
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="row g-4" id="servicesGridRow">
                            {visibleServices.map((service) => (
                                <div
                                    className="col-lg-4 col-sm-6 service-item"
                                    data-category={service.category}
                                    key={service.title}
                                >
                                    <div className="hover service-card-wrap">
                                        <div className="relative overflow-hidden">
                                            <span
                                                className="abs top-0 start-0 m-3 px-3 py-1 rounded-pill text-white fs-12 fw-700"
                                                style={serviceLabelStyle}
                                            >
                                                {service.label}
                                            </span>

                                            <a href="service-single.html" className="d-block hover">
                                                <div className="relative overflow-hidden rounded-1">
                                                    <img
                                                        src={service.image}
                                                        className="w-100 hover-scale-1-2"
                                                        alt={service.title}
                                                        style={{ height: "250px", objectFit: "cover" }}
                                                    />
                                                </div>
                                            </a>

                                            <div className="p-30 relative bg-white rounded-1 mx-4 mt-min-100">
                                                <div className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px">
                                                    <a
                                                        href="service-single.html"
                                                        className="w-100 h-100 d-flex align-items-center justify-content-center"
                                                        aria-label={service.title}
                                                    >
                                                        <i
                                                            className={`fa-solid ${service.icon} text-dark`}
                                                            style={{ fontSize: "24px" }}
                                                        ></i>
                                                    </a>
                                                </div>

                                                <div className="subtitle s2 mb-1 fs-12">
                                                    {service.subtitle}
                                                </div>
                                                <a href="service-single.html" className="text-dark">
                                                    <h4 className="mb-2">{service.title}</h4>
                                                </a>
                                                <p className="mb-2 text-muted fs-14">
                                                    {service.description}
                                                </p>

                                                <div className="d-flex align-items-center gap-2 mb-3 fs-13 text-secondary">
                                                    <i className="fa-solid fa-circle-check text-success fs-13"></i>
                                                    <span>{service.feature}</span>
                                                </div>

                                                <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                                                    <a
                                                        href="service-single.html"
                                                        className="fw-bold fs-13 text-dark d-inline-flex align-items-center gap-1 hover-color"
                                                    >
                                                        <span>Learn Details</span>
                                                        <i className="fa-solid fa-arrow-right fs-11"></i>
                                                    </a>
                                                    <a
                                                        href="contact.html"
                                                        className="fs-12 fw-600 px-3 py-1 rounded-pill service-quote-pill"
                                                    >
                                                        Get Quote
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {visibleServices.length === 0 && (
                                <div className="col-12 text-center">
                                    <p>No services found in this category.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Contact information strip */}
                <section className="bg-dark text-light pt-60 pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="relative">
                                    <div className="row g-4 grid-divider sm-hide">
                                        <div className="col-lg-4 col-md-6 mb-sm-30">
                                            <div className="d-flex justify-content-center">
                                                <i className="fa-solid fa-phone-volume fs-60 id-color"></i>
                                                <div className="ms-3">
                                                    <h4 className="mb-0">Need Our Services?</h4>
                                                    <p>Call: +234 9076660060</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 mb-sm-30">
                                            <div className="d-flex justify-content-center">
                                                <i className="fa-solid fa-clock fs-60 id-color"></i>
                                                <div className="ms-3">
                                                    <h4 className="mb-0">Work Hours</h4>
                                                    <p>Mon to Sat 08:00 - 17:00</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 mb-sm-30">
                                            <div className="d-flex justify-content-center">
                                                <i className="fa-solid fa-envelope fs-60 id-color"></i>
                                                <div className="ms-3">
                                                    <h4 className="mb-0">Email Us</h4>
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
        </>
    );
}
