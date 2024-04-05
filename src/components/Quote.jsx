import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Quote = () => {
  return (
    <div className="bg-secondaryDark flex flex-col items-center justify-center py-10">
      <p className="text-4xl font-semibold text-white w-3/5 m-0 flex flex-col gap-4">
        <FaQuoteLeft className="self-start" />
        <p className="text-center ">
          Self-care is not a luxury. It's a necessity. Without it, we cannot be
          our best selves, mentally, emotionally, or physically.
        </p>
        <FaQuoteRight className="self-end" />
      </p>
    </div>
  );
};

export default Quote;
