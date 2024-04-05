import React from "react";
import Mood from "../../components/Mood";
import QuotesCarousel from "../../components/QuotesCarousel";

const Home = () => {
  return (
    <div className="w-full h-full divide-y-2 divide-black flex flex-col">
      <Mood />
      <div className="w-full py-5 flex flex-col items-center justify-center flex-1 h-full ">
        <h1 className="font-semibold text-xl m-0 text-center">
          Quotes of the day
        </h1>
        <QuotesCarousel />
      </div>
    </div>
  );
};

export default Home;
