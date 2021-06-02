import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import CourseScreen from "./screens/CourseScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Route path="/signup" component={SignUpScreen}></Route>
        <Route path="/signin" component={SignInScreen}></Route>
        <Route path="/course" component={CourseScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
