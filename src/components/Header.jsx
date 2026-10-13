import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const isProductPage = pathname === "/product.html" || pathname === "/products";
  return (
    <>
      <header className={"transparent"}>
<div id={"topbar"}>
<div className={"container"}>
<div className={"row"}>
<div className={"col-lg-12"}>
<div className={"d-flex justify-content-between xs-hide"}>
<div className={"d-flex"}>
<div className={"topbar-widget me-5"}>
<a href={"#"}><i className={"icofont-location-pin"}></i>Mabushi, F.C.T., Abuja</a>
</div>
<div className={"topbar-widget me-5"}>
<a href={"#"}><i className={"icofont-phone"}></i>+234 9076660060</a>
</div>
<div className={"topbar-widget me-5"}>
<a href={"#"}><i className={"icofont-envelope"}></i>hello@sungrid.com</a>
</div>
</div>
{isProductPage && (
  <div className={"d-flex"}>
    <div className={"topbar-widget me-3"}>
      <a href={"https://wa.me/2349076660060"} target={"_blank"} rel={"noopener noreferrer"}>
        <i className={"fa-brands fa-whatsapp text-white"}></i> WhatsApp Sales
      </a>
    </div>
  </div>
)}
</div>
</div>
<div className={"clearfix"}></div>
</div>
</div>
</div>
<div className={"container"}>
<div className={"row"}>
<div className={"col-md-12"}>
<div className={"de-flex sm-pt10"}>
<div className={"de-flex-col"}>
{/* logo begin */}
<div id={"logo"}>
<a href={"index.html"}>
<img className={"logo-main"} src={"images/sungrid-logo.png"} alt={"Sungrid clean energy logo"} />
{/* <img class="logo-mobile" src="images/sungrid-logo.png" alt="Sungrid clean energy logo" /> */}
</a>
</div>
{/* logo end */}
</div>
<div className={"de-flex-col header-col-mid"}>
{/* mainemenu begin */}
<ul id={"mainmenu"}>
<li>
<a className={"menu-item"} href={"index.html"}>Home</a>
</li>
<li>
<a className={"menu-item"} href={"about.html"}>About Us</a>
</li>
<li>
<a className={"menu-item"} href={"services.html"}>Services</a>
</li>
<li>
<a className={isProductPage ? "menu-item active" : "menu-item"} href={"product.html"}>{isProductPage ? "Products" : "Product"}</a>
</li>
<li>
<a className={"menu-item"} href={"contact.html"}>Contact</a>
</li>
</ul>
{/* mainmenu end */}
</div>
<div className={"de-flex-col"}>
<div className={"menu_side_area"}>
<a href={"solar_calculator_module/calculator-page.html"} className={"btn-main btn-line fx-slide hover-white"}><span>Get a
                      Calculator</span></a>
<span id={"menu-btn"}></span>
</div>
<div id={"btn-extra"}>
<span></span>
<span></span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>
    </>
  );
}
