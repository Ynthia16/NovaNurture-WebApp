import React, { useState, useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const QuotesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteObjects, setQuoteObjects] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const promises = Array.from({ length: 5 }, async () => {
          const response = await fetch(
            "https://api.api-ninjas.com/v1/quotes?category=happiness&X-Api-Key=U0Hpe7jYhowUqsqyG7WjBA==igUSbuQSzfpGBV6w"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch quotes");
          }
          const data = await response.json();
          return { quote: data[0].quote, author: data[0].author };
        });
        const quotesArray = await Promise.all(promises);
        setQuoteObjects(quotesArray);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quoteObjects.length - 1 : prevIndex - 1
    );
  };

  const forward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quoteObjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="grid w-full place-content-center ">
      <div className="relative mx-auto max-w-2xl rounded-md sm:p-4">
        <div className="relative h-[20vh]" style={{ width: "30rem" }}>
          {quoteObjects.map((quoteObj, index) => (
            <div
              key={index}
              className={`absolute top-0 py-5 px-5 text-xl h-[25vh] w-[31.5vw] flex flex-col gap-4 items-center justify-center border border-black overflow-auto ${
                currentIndex === index ? "" : "hidden"
              }`}
            >
              <p className="text-center overflow-auto">{quoteObj.quote}</p>
              <p className="text-center ">{quoteObj.author}</p>
            </div>
          ))}

          <button
            onClick={previous}
            className="absolute -left-20 top-[60%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full  shadow-md"
          >
            <BiChevronLeft size={30} />
          </button>
          <button
            onClick={forward}
            className="absolute z-10 -right-20 top-[60%] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full  shadow-md"
          >
            <BiChevronRight size={30} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default QuotesCarousel;
