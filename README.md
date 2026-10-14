# SunGrid Energy Nigeria
## React Web Platform & Solar Sizing Engine

**Project:** SunGrid Energy Nigeria Website  
**Team:** Green Team  
**Organization:** Tech4Youth Abuja  
**Head Office:** Plot 1504, Cadzone B06, after the Ministry of Transportation, Mabushi, F.C.T., Abuja, Nigeria  
**Phone:** +234 907 666 0060  
**Email:** hello@sungrid.com  

---

## 1. Project Overview

**SunGrid Energy Nigeria** is a responsive renewable-energy web platform built to serve Nigerian households, businesses, and industrial facilities. The platform presents solar installation services, energy-storage solutions, solar products, project information, and an interactive Solar Sizing Calculator with quote-generation functionality.

The website uses React to organize the interface into reusable components and page-level modules while retaining the original website's design, content, styling, and image assets.

The platform showcases equipment and products associated with Jinko, Canadian Solar, Astronergy, Growatt, LuxPower, and Gennex.

## 2. Green Team Members

| Member | Role | Specialization |
|---|---|---|
| Ruth Amedu | Managing Director | Executive Leadership & Strategic Vision |
| Yusrah Yusuf | Head of Operations | Project Execution & Supply Chain Logistics |
| Igwe Uchenna | Lead Solar Engineer | Solar PV System Design & Technical Architecture |
| Gbenle Kamolideen Ajibola | Solar Technical Specialist | Inverter Systems, Battery Sizing & Quality Verification |
| David Igoche | Project Manager | Client Delivery, Milestone Oversight & Site Coordination |
| Chiemela Emmanuel | Project & Quality Consultant | Standards Compliance, Performance Testing & Quality Assurance |

## 3. Key Features

### Brand and Design System

- Sage Green and Warm Cream palette.
- Primary color: `#718447`.
- Accent color: `#536B2E`.
- Background color: `#F1EBD7`.
- Inter Tight typography for headings.
- Manrope typography for body text.
- Responsive layouts, animations, hero banners, glassmorphism overlays, and counters.

### Solar Sizing Calculator

The `solar_calculator_module/` provides a three-step solar-sizing and quote-request workflow.

**Step 1: Energy Estimation**
- Estimate daily electricity consumption using appliance quantities, power ratings, and usage hours.
- Support lighting, fans, televisions, air conditioners, freezers, pumps, and other configured appliances.
- Provide quick load presets.
- Estimate consumption from monthly electricity bills using the configured reference tariff.
- Configure battery backup duration from 4 to 24 hours.

**Step 2: Recommended System and Pricing**
- Estimate solar PV capacity in kWp.
- Calculate the approximate number of 550 W solar panels.
- Recommend an inverter rating in kVA.
- Estimate LiFePO4 battery capacity in kWh.
- Display an estimated turnkey investment range in Nigerian naira.

**Step 3: Engineering Quote Request**
- Collect customer contact details and installation-site information.
- Prepare quote requests for submission through the Resend email integration.

Calculator estimates are for preliminary planning. Final equipment selection, pricing, battery runtime, and installation design require professional assessment and verification.

### Contact and Location

- Company contact information and enquiry form.
- Embedded Google Map targeting the Mabushi, Abuja office location.
- Direct telephone contact information.

### Responsive Experience

- Desktop, laptop, tablet, and mobile layouts.
- Responsive navigation and touch-friendly controls.
- Flexible calculator and form layouts.

## 4. Technology Stack

- **Frontend:** React
- **Routing:** React Router, where configured in the project
- **Markup:** JSX and semantic HTML
- **Styling:** CSS3, CSS custom properties, Bootstrap utilities, and existing stylesheets
- **JavaScript:** Modern JavaScript (ES6+)
- **Animations and effects:** Existing Designesia scripts, Jarallax, Swiper.js, and WOW.js where retained and integrated
- **Icons:** Font Awesome 6, IcoFont, and Elegant Icons
- **External integrations:** Google Maps embed and Resend email integration
- **Solar calculator:** Custom JavaScript modules within `solar_calculator_module/`

## 5. React Project Structure

The following is the intended organization. Exact filenames may differ slightly depending on the current project implementation.

```text
SUNGRID-React-Project/
├── public/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   ├── plugins.css
│   │   ├── style.css
│   │   └── scheme-1.css
│   ├── js/
│   │   ├── designesia.js
│   │   └── plugins/
│   ├── images/
│   │   ├── logo/
│   │   ├── background/
│   │   ├── projects/
│   │   └── team/
│   ├── fonts/
│   └── solar_calculator_module/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ServicePage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProjectPage.jsx
│   │   └── ContactPage.jsx
│   ├── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

**Note:** This structure is illustrative. Keep the actual folders and filenames already present in your React project; do not rename or remove assets simply to match this example.

## 6. React Architecture

### Reusable Components

Shared interface elements are organized into reusable components.

- **Header:** Site logo, navigation, and responsive menu.
- **Footer:** Company details, navigation links, and contact information.
- **Page components:** Individual website pages and their specific content.

This organization reduces duplication and makes future maintenance easier.

### Routing

React Router can provide client-side navigation between the main pages:

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/service` — Individual Service
- `/products` — Products
- `/project` — Project Details
- `/contact` — Contact

If the application intentionally retains compatibility routes ending in `.html`, document and maintain those aliases in `