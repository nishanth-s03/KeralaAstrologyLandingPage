import React from "react";
import NoProfile from "./images/noprofile.jpg";
import MsgIcon from "./images/speech-bubble.png";
import Mahakali from "./images/Mahakali_Maa.png";
import Whatsapp from "./images/whatsapp.png";
import Call from "./images/telephone.png";
import { useState } from "react";
import { MockData } from "../content/MockData";
import "./footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaEnvelopeSquare,
  FaMapMarkerAlt,
  FaPhoneSquare,
  // FaWhatsappSquare,
} from "react-icons/fa";

const Footer = () => {
  const [custmValue, setCustmValue] = useState(MockData[0]);
  const [custmKey, setCustmKey] = useState(0);

  const year = 2022;
  const handleDivClick = (key) => {
    setCustmValue(MockData[key]);
    setCustmKey(key); // Update custmKey to the clicked key
  };

  const handleClick = () => {
    window.open('https://www.google.com/maps/place/https://g.co/kgs/fMNaEU2%22'); // Opens link in new tab
  };

  return (
    <div id="footer" className="body">
      <div className="happycust">
        {/* <div className="side-bubble">
          <div></div>
        </div> */}

        {/* <div className="side-bubble-2">
          <div></div>
        </div> */}
        <h1>Happy Customers</h1>
        <p className="mock-msg">{custmValue.content}</p>
        <div className="UserName">
          <img src={MsgIcon}></img>
          <div> {custmValue.name}</div>
        </div>
        <div className="custmr-pics">
          {MockData.map((_, key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  handleDivClick(key);
                }}
                // className={custmKey === key ? border : ""}
                style={{ opacity: custmKey === key ? "100%" : "50%" }}
              >
                <img src={NoProfile}></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className="info-footer">
        <div className="info">
          <div className="container-1">
            <div className="getintouch-upper">
              <div className="title">
                <h1>Get in touch</h1>
              </div>
              <div className="logo">
                <div className="logo-content">
                  <img className="logoimg" src={Mahakali} alt="logo" />
                  <div className="logotext">
                    <p>Kerala Kuttichathan Jyothisyalaya</p>
                    <h2>Madhavan Poduval (Thanthri)</h2>
                  </div>
                </div>
              </div>
              <hr className="line" />
            </div>
            <div className="getintouch-lower">
              <div className="contact">
                <h3>Contact Information</h3>
              </div>
              <div className="details">
                <a
                  className="icon"
                  href="https://www.google.com/maps/place/https://g.co/kgs/fMNaEU2%22"
                >
                  <FaMapMarkerAlt />
                  Near bunts Hostel, Mangalore
                </a>{" "}
                <a className="icon" href="tel:+919844897669">
                  <FaPhoneSquare />
                  +91 9844 897 669
                </a>{" "}
                <a className="icon" href="mailto:madhavanpodval@gmail.com">
                  <FaEnvelopeSquare />
                  info@keralakuttichathanjyothisyalaya.com
                </a>{" "}
              </div>
            </div>

            <button className="direction" onClick={handleClick}>
      Get direction
    </button>
          </div>

          <div className="container-2">
            <div className="title-2">
              <h4>Contact form</h4>
            </div>
            <div className="form-email">
              <div className="form-in-detail">
                <p>Or,you can just send an email: </p>
                <a className="form-mail" href="mailto:madhavanpodval@gmail.com">
                  info@Keralakuttichathanjyothisyalaya.com
                </a>{" "}
              </div>
            </div>

            <form className="outer-form"action="/submit-form-handler" method="POST">
              <div className="upper-box">
                <div className="forms">
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="First Name"
                      id="name"
                      name="name"
                      required
                    ></input>
                  </div>
                  <div className="input-form">
                    <input
                      type="text"
                      placeholder="Phone"
                      id="phone"
                      name="phone"
                      required
                    ></input>
                  </div>
                </div>
              </div>
              <div className="input-form email-id">
                     <textarea
                  placeholder="Email ID"
                  className="email2"
                  cols="48"
                  // cols="500"
                ></textarea>
              </div>

              <div className="input-form help-box">
                <textarea
                  placeholder="What can we help?"
                  className="textarea"
                  rows="4"
                  cols="500"
                ></textarea>
              </div>
              <br></br>
              <div className="send-submit">
                <input
                  className="submit"
                  type="submit"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="sb_footer section_padding">
            <div className="sb_footer-links">
              <div className="mahakali-png">
                <img className="mahakaliimg" src={Mahakali} alt="logo" />
              </div>
              <div className="sb_footer-links_div" id="service-1">
                <p>Love Problem</p>
                <p>Career Problem</p>
                <p>Business Problem</p>
              </div>
              <div className="sb_footer-links_div" id="service-2">
                <p> Marriage Problem</p>
                <p>Black Magic</p>
                <p>Financial Problem</p>
              </div>
              <div className="sb_footer-links_div" id="service-3">
                <a className="icon-2" href="tel:+919844897669">
                  <FaPhoneSquare />
                  &nbsp; +91 9844 897 669
                </a>{" "}
                <a className="icon-2" href="mailto:madhavanpodval@gmail.com">
                  <FaEnvelopeSquare />
                  &nbsp; info@shreemaharshithanthri.in
                </a>{" "}
                <a
                  className="icon-2"
                  href=" https://www.google.com/maps/place/https://g.co/kgs/fMNaEU2%22"
                >
                  <FaMapMarkerAlt />
                  &nbsp; Near Bunts Hostel , Mangalore
                </a>{" "}
                {/* <div className="socialmedia"></div> */}
              </div>
            </div>

            {/* <div className="below-direction">Get direction</div> */}

            <div className="sb_footer-below">
              <div className="whatsapp-icon">
                <a className="whatsapp" href="#">
                  <img src={Whatsapp} alt="WhatsApp Icon" />
                </a>
              </div>
              <div className="sb_footer-copyright">
                <p>
                  Copyright @{year} Kerala Kuttichathan Jyothisyalaya| Design:
                  Almoite Technologies.
                </p>
              </div>
              <div className="sb_footer-below-links">
                <a className="below-links" href="https://youtu.be/h_SAEb22id0">
                  <FaFacebookSquare />
                </a>
                <a
                  className="below-links"
                  href=" https://www.instagram.com/madhavan_podval?igsh=MWg5Z2RhYmpubDlmZw=="
                  target="madhavan_podval"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  className="below-links"
                  href="https://youtu.be/h_SAEb22id0"
                  target="Madhavan Podval"
                >
                  <FaYoutube />
                </a>
              </div>
              <div className="call-icon">
                <a className="call" href="tel:+919844897669">
                  <img src={Call} alt="call Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
