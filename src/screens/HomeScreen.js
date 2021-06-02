import React from "react";
import AboutUs from "../components/home/AboutUs";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Chat from "../components/home/Chat";

function HomeScreen() {
  return (
    <div className="home">
      <Banner />
      <Features />
      <AboutUs />
      <Chat />
    </div>
  );
}

export default HomeScreen;
