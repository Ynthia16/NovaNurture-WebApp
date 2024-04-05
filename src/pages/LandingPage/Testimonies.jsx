import React from "react";
import ImageTextCard from "../../components/ImageTextCard";
import { FaHandcuffs, FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaHeadSideVirus, FaUser, FaUserCircle } from "react-icons/fa";

const Testimonies = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex flex-col items-center justify-center pt-20">
        <p className="text-base font-semibold pb-5">Testimonies</p>
        <h1 className="text-4xl font-semibold w-1/2 text-center m-0">
          Top inspiring stories for you
        </h1>

        <div className="flex pt-20 pb-28 gap-4">
          <ImageTextCard
            userName="John Doe"
            icon={
              <FaUserCircle
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
            userName="John Doe"
            icon={
              <FaUserCircle
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
            userName="John Doe"
            icon={
              <FaUserCircle
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

export default Testimonies;
