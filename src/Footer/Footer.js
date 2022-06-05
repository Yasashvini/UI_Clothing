import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="mainfooter" role="contentinfo">
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="footer-pad">
                <ul class="list-unstyled">
                  <li class="mb-2 ">
                    {" "}
                    <a href="#" className="footerText">
                      {" "}
                    </a>{" "}
                  </li>
                  <li class="mb-2">
                    {" "}
                    <a href="#" className="footerText">
                      About Us
                    </a>
                  </li>
                  <li class="mb-2">
                    {" "}
                    <a href="#" className="footerText">
                      Delivery Information
                    </a>
                  </li>
                  <li class="mb-2">
                    {" "}
                    <a href="#" className="footerText">
                      Returns & Exchange
                    </a>
                  </li>
                  <li class="mb-2">
                    {" "}
                    <a href="#" className="footerText">
                      Technical & Privacy
                    </a>
                  </li>
                  <li class="mb-2">
                    {" "}
                    <a href="#" className="footerText">
                      Order Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <span className="madeUPFooter">MadeUp</span>
              <p className="text">Stay in touch with us </p>
              <ul class="social-network social-circle">
                <li>
                  {" "}
                  <a href="#" class="icoFacebook" title="Facebook">
                    {" "}
                    <i className="fa fa-facebook"> </i>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#" class="icoInstagram" title="Instagram">
                    {" "}
                    <i class="fa fa-instagram"> </i>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <i class="fa fa-youtube-play" aria-hidden="true">
                      {" "}
                    </i>{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="footer-pad">
                {/* <ul class="list-unstyled">
                  <li>
                    <a href="#"> Blog </a>{" "}
                  </li>
                  <li>
                    <a href="#">Accessibility</a>{" "}
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Webmaster</a>
                  </li>
                </ul> */}
                <p className="footerText">Our Corporate Office</p>
                <p className="footerText">
                  No: 7,A2B road, Adayar Rajpuram, T-Nagar, Chennai - 642002.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
