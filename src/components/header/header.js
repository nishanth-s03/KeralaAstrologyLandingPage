import React , { useState }from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaEnvelopeSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import mahakali from "./images/Mahakali_Maa.png";
import "./header.css";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="header-up">
          <div className="address-mail">
            <ul className="contact-info">
              <li>
                <a
                  href="https://www.google.com/maps/place/https://g.co/kgs/fMNaEU2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt />
                </a>
                &nbsp; Near Bunts Hostel, Mangaluru
              </li>

              <li>
                <a href="mailto:madhavanpodval@gmail.com">
                  <FaEnvelopeSquare />
                </a>
                &nbsp; info@kerakakuttichathanjyothisyalaya.com
              </li>
            </ul>
          </div>
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="https://youtu.be/h_SAEb22id0">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a
                  href=" https://www.instagram.com/madhavan_podval?igsh=MWg5Z2RhYmpubDlmZw=="
                  target="madhavan_podval"
                >
                  <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a href="https://youtu.be/h_SAEb22id0" target="Madhavan Podval">
                  <FaYoutube />
                </a>
              </li>
            </ul>
        
          </div>
        </div>
        <div className="logo">
          <div className="logo-content">
            <img className="logo-img" src={mahakali} alt="logo" />
            <div className="logo-text">
              <h2>Kerala Kuttichathan Jyothisyalaya</h2>
              <p className="logo-tag">Madhavan poduval (thantri)</p>
            </div>
          </div>
        </div>

        {/* <div className="menu-link"> */}
        <div
          className={
            showMediaIcons ? "mobile-menu-link" : " menu-link"
          }>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
            <li>
            </li>
          </ul>
          
        </div>
        <div className="hamburger-menu"  onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu className="ham"/>
          </div>
      </nav>
    </>
  );
};
export default Navbar;
