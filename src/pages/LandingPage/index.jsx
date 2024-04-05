import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Button from "../../components/Button";
import Doctor from "../../assets/doctor.png";
import About from "./About";
import Quote from "../../components/Quote";
import Subscribe from "../../components/Subscribe";
import Testimonies from "./Testimonies";
import FAQ from "./FAQ";
import Footer from "../../components/Footer";
import Gallery from "./Gallery";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        id="home"
        className="flex flex-col h-screen justify-between max-w-[1300px] mx-auto px-10"
      >
        {/* navBar */}
        <div className="flex justify-between items-center py-8">
          <div className="flex gap-4 items-center ">
            <img src={Logo} alt="Not Found" className="w-12 h-12" />
            <h3 className="font-semibold text-2xl">NovaNurture</h3>
          </div>

          {/* Navmenu */}
          <div className="flex gap-8 ">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonies">Testimonies</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="#footer">
            <Button title={"Contact Us"} styles="bg-secondaryDark" />
          </a>
        </div>

        {/* Hero section */}
        <div className="grid grid-cols-2 gap-10">
          {/* Intro text */}
          <div className="flex flex-col gap-12 self-center ">
            <h1 className="text-[55px] font-bold m-0">
              Healthy Minds, Happy Lives{" "}
              <span className="text-secondaryLight">Mental Health</span>
            </h1>
            <p className="w-5/6 text-base">
              Welcome to NovaNurture – your source for inspiration, empowerment, and positivity. Join our vibrant community for growth, support, and wellness.
              Explore affirmations, self-care, and more on your journey of reflection and mindfulness. Start transforming with us today!
            </p>
            <div className="flex justify-start gap-6">
              <Button
                title={"Register"}
                styles="bg-secondaryDark w-2/5"
                onClick={() => navigate("/signup")}
              />
              <Button
                title={"Login"}
                styles="bg-secondaryDark w-2/5"
                onClick={() => navigate("/login")}
              />
            </div>
          </div>
          <img src={Doctor} alt="Doctor" />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="quote">
        <Quote />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="subscribe">
        <Subscribe />
      </div>
      <div id="testimonies">
        <Testimonies />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
