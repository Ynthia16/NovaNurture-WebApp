import React from "react";
import ImageTextCard from "../../components/ImageTextCard";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaHandcuffs } from "react-icons/fa6";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex flex-col items-center justify-center pt-20">
        <p className="text-base font-semibold pb-5">About</p>
        <h1 className="text-4xl font-semibold w-1/2 text-center m-0">
          Why Should NovaNurture be your Best Choice
        </h1>

        <div className="flex pt-20 pb-28 gap-4">
          <ImageTextCard
            title={"Freedom of speech"}
            icon={
              <FaHandcuffs
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris.
          </ImageTextCard>
          <ImageTextCard
            title={"Daily refreshment"}
            icon={
              <FaHeadSideVirus
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris.
          </ImageTextCard>
          <ImageTextCard
            title={"Tour others life"}
            icon={
              <FaPersonWalkingLuggage
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris.
          </ImageTextCard>
        </div>
      </div>
    </div>
  );
};

export default About;
