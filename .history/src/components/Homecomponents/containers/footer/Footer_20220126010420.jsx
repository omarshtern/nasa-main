import React from "react";
import gpt3Logo from "../../../../assets/safed.png";
import "./footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p className="footer_links">
          <AiOutlineInstagram />
        </p>
        <p className="footer_links">
          <BsFacebook />
        </p>
        <p className="footer_links">
          <BsTelegram />
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p className="footer_contact">
          <span>
            <AiFillPhone />
          </span>
          +9989 99 049 76 79{" "}
        </p>
        <p className="footer_contact">
          <span>
            <AiOutlineMail />
          </span>
          forfirebasejs@gmail.com
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>NASA</h4>
        <p>Everyone has their own creative world</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 NASA.io. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
