import React from "react";
import "./services.css";
import { Data } from "./Data";
import Modal from "./modal";

import { useState, useRef } from "react";
const Services = () => {
  const [index, setIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  let service = Data[index];
  function handleMoreClick(service) {
    setSelectedService(service);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setSelectedService(null);
  }
   
  return (
    <section id="services" className="our-services">
      <div className="container">
        <h1 className="heading">Our Services</h1>
        <div className="card-container">
       
          {Data.map((service, index) => (
            <div className="card" key={index}>
              <img src={service.src} alt={service.alt} />
              <div className="information">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>

              <div className="btn-container">
                <button
                  className="btn"
                  onClick={() => handleMoreClick(service)}
                >
                  Read more
                </button>
              </div> 
            </div> 
          ))}
        </div><div class="arrow">
  <div class="arrow-top"></div>
  <div class="arrow-bottom"></div>
</div>
      </div>
      {showModal && selectedService && (
        <Modal
          isOpen={showModal}
          onClose={handleCloseModal}
          content={
            <div>
              <img src={selectedService.src} alt={selectedService.alt} />

              <h2>{selectedService.name}</h2>
              <p>{selectedService.longdescription}</p>
            </div>
          }
        />
      )}
    </section>
  );
};
export default Services;
