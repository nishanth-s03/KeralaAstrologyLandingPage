import React from "react";
import "./App.css";
import Navbar from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Footer />
    </>
  );
};

export default App;
