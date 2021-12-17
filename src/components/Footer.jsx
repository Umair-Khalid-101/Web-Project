import React from "react";

const Footer = () => {
  return (
    <div className="main-footer" style={{ backgroundColor: "#F6F6F6" }}>
      <div className="contaier mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-6` text-center">
            <h4 className="mt-5 fw-bold fs-3">Help</h4>
            <ul className="list-unstyled">
              <li className="fs-6" style={{ cursor: "pointer" }}>
                FAQS
              </li>
              <li className="fs-6" style={{ cursor: "pointer" }}>
                Reviews
              </li>
              <li className="fs-6" style={{ cursor: "pointer" }}>
                My Account
              </li>
              <li className="fs-6" style={{ cursor: "pointer" }}>
                Contact Us
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6` text-center">
            <h4 className="mt-5 fw-bold fs-3">Shop</h4>
            <ul className="list-unstyled">
              <li className="fs-6" style={{ cursor: "pointer" }}>
                Accessories
              </li>
              <li className="fs-6" style={{ cursor: "pointer" }}>
                Jewelery
              </li>
              <li className="fs-6" style={{ cursor: "pointer" }}>
                Clothing
              </li>
              <li className="fs-6" style={{ cursor: "pointer" }}>
                Sports
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6` text-center">
            <h4 className="mt-5 fw-bold fs-3">About</h4>
            <ul className="list-unstyled">
              <li className="fs-6" style={{ cursor: "pointer" }}>
                E-Commerce
              </li>
              <li className="fs-6" style={{ cursor: "pointer" }}>
                Email
              </li>
              <li className="fs-6" style={{ cursor: "pointer" }}>
                Team
              </li>
              <li className="fs-6" style={{ cursor: "pointer" }}>
                Technology
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
