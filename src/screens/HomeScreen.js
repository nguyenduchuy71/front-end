import React from "react";
import AboutUs from "../components/home/AboutUs";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Chat from "../components/home/Chat";
import Fade from "react-reveal/Fade";

function HomeScreen() {
  return (
    <>
      <Banner />
      <Fade top>
        <Features />
        <AboutUs />
      </Fade>
      <Chat />
    </>
  );
}

export default HomeScreen;
