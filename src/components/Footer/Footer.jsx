import React from "react";
import { assets } from "../../assets/assets";
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est
            totam explicabo cum nihil tempora non debitis eveniet iste. Porro
            error nostrum eveniet unde quam nihil dolorum vero. Cum, nisi?
          </p>
          <div className="footer-social_icon">
              <img src={assets.facebook_icon}/>
              <img src={assets.twitter_icon}/>
              <img src={assets.linkedin_icon}/>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-958465222</li>
            <li>contact@ecommerce.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 Ecommerce.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;
