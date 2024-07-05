import React from "react";
import "./home.css";
import background from "./images/Hero_Section_Background_Choice2.jpg";
import home1 from "./images/Home-1.png";
import home2 from "./images/Home-2.png";
import home3 from "./images/Home-3.png";
import home4 from "./images/Home-4.png";

const Home = () => {
  return (
    <>
      <div id="home" className="hero-section">
        <div className="hero-background">
          <img src={background} alt="hero" className="hero-image" />
        </div>
        <div className="hero-overlay">
          <div className="text-content">
            <h1 className="main-title">
              Permanent Instant <p>Solutions</p>
            </h1>

            <p className="author">By Madhavan Poduval(Tantri)</p>
            <p className="slogan">
              Give us an opportunity to change your life.
            </p>
            <h1 className="call-now">Call Now!</h1>
            <p className="address1">ಕೇರಳ ಕುಟ್ಟಿಚಾತನ್ ಜ್ಯೋತಿಷ್ಯಾಲಯ</p>
            <p className="address2">ಬಂಟ್ಸ್ ಹಾಸ್ಟೆಲ್, ಮಂಗಳೂರು</p>
          </div>
        </div>
      </div>
      <div className="section-title">
        <h1 className="title-text">No. 1 Astrologer In Dakshina Kannada</h1>
      </div>
      <div className="services-section">
        <div className="service-item-result">
          <div className="service-card">
            <img src={home1} alt="home" className="service-image" />
            <div className="service-text">
              <p className="service-label-nobold">100% Result</p>
              <p className="service-label">Guaranteed Results</p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="service-card">
            <img src={home2} alt="home" className="service-image" />
            <div className="service-text">
              <p className="service-label">Worldwide</p>
              <p className="service-label-nobold">Services</p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="service-card">
            <img src={home3} alt="home" className="service-image" />
            <div className="service-text">
              <p className="service-label-nobold">Friendly</p>
              <p className="service-label"> Astrologer</p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="service-card">
            <img src={home4} alt="home" className="service-image" />
            <div className="service-text">
              <p className="service-label">Free For</p>
              <p className="service-label-nobold">Students</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
