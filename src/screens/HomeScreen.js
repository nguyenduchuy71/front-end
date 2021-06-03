import React from "react";
import AboutUs from "../components/home/AboutUs";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Chat from "../components/home/Chat";
import Fade from "react-reveal/Fade";

function HomeScreen() {
  return (
    <div className="home">
      <Banner />
      <Fade top>
        <Features />
        <AboutUs />
      </Fade>
      <Chat />
    </div>
  );
}

export default HomeScreen;
