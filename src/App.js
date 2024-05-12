import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import MyCarousel from "./components/MyCarousel";
import CoreValue from "./components/CoreValue";
import Cards from "./components/Cards";
import Slogan from "./components/Slogan";
import Footer from "./components/Footer";
import HomeAbout from "./components/HomeAbout";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import VerificationForm from "./components/VerificationForm";
import EmailVerificationSuccess from "./components/EmailVerificationSuccess";






function App() {
 

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>
           <MyCarousel />
           <CoreValue />
           <Cards />
           <HomeAbout />
           <Slogan />
          </div>
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Registration">
          <RegistrationForm />
        </Route>
        <Route path="/Login">
          <LoginForm />
        </Route>
        <Route path="/Verification">
          <VerificationForm />
        </Route>
        <Route path="/verificationSuccess">
          <EmailVerificationSuccess />
        </Route>
        
        
        
        
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;