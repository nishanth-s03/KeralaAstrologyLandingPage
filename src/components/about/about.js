import React from "react";
import "./about.css";
import astro from "./images/Mid_Card_Horo.jpg";

const About = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us-content">
        <img src={astro} className="about-us-image" />
        <div className="about-us-text">
          <div className="our-story">
            <h2>Our Story</h2>
            <h3>Kerala Kuttichathan Jyothisyalaya</h3>
            <p>
              Madhavan Poduval (Thantri) who present oneself from a family of
              astrologists and features a rich amount of data throughout. He has
              studied astrology from his forefathers as his prime subjects.
            </p>
          </div>
          <div className="mission-statistics">
            <div className="our-mission">
              <h2>Our Mission</h2>
              <p>
                Madhavan Poduval (Thantri) alongside his father and forefathers
                have to preserve their lives by lending a hand to people with
                their Vedic puja's, prayers and rituals based social conduct on
                Hindu customs and other religions.
              </p>
            </div>
            <div className="statistics">
              <div className="statistic-content">
                <h1>403</h1>
                <p>Founded</p>
              </div>
              <div className="statistic-content">
                <h1>1001+</h1>
                <p>Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
