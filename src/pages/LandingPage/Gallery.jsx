import React from "react";
import Whale from "../../assets/grey-whale-8563340_1280.png";
import Ocean from "../../assets/ocean-8408693_1280.jpg";
import Elif from "../../assets/elif.jpg";
import Baek from "../../assets/pexels-eunjin-baek-20696167.jpg";
import Semmer from "../../assets/pexels-finn-semmer.jpg";
import Igra from "../../assets/pexels-igra-11379269.jpg";
import Starry from "../../assets/starry-sky-8041247_1280 (1).jpg";
import Woman from "../../assets/woman-8643502_1280.png";

const Gallery = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-20 max-h-screen">
      <div className="flex justify-between">
        <div className="w-3/6">
          <p className="text-base font-semibold pb-5">Gallery</p>
          <h1 className="text-4xl font-semibold m-0">
            Start with refreshing images today
          </h1>
        </div>
        <p className="w-2/6 text-base self-center">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet at quam.
        </p>
      </div>

      {/* images */}

      <div className="grid grid-cols-4 gap-4 py-5 h-min ">
        <img src={Whale} alt="" className="object-cover h-[35vh] w-full " />
        <img src={Baek} alt="" className="object-cover h-[35vh] w-full object-center "  />
        <img src={Semmer} alt="" className="object-cover h-[35vh] w-full object-center "  />
        <img src={Elif} alt="" className="object-cover h-[35vh] w-full object-center "  />
        <img src={Ocean} alt="" className="object-cover h-[35vh] w-full object-center self-start"  />
        <img src={Woman} alt="" className="object-cover h-[35vh] w-full object-center"  />
        <img src={Igra} alt="" className="object-cover h-[35vh] w-full object-center"  />
        <img src={Starry} alt="" className="object-cover h-[35vh] w-full object-center"  />
      </div>    </div>
  );
};

export default Gallery;
