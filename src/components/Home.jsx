import React from "react";
import Navbar from "./NavBar";
import "../App.css";
import Section from "./Section";
import Footer from "./Footer";
import Slider from "./Slider";

function Home() {
  return (
    <div>
      <Navbar />
      <Section
        title="E-Commerce"
        description="Order Online for Touchless Delivery"
        backgroundImg="Landing.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Slider />
      <Footer />
    </div>
  );
}

export default Home;
