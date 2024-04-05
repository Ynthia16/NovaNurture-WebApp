import React from "react";
import { FaPlus } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className="container max-w-[1200px] pb-20 mx-auto select-none">
      <p className="text-base font-semibold pb-5 text-center">FAQ</p>
      <h1 className="text-4xl font-semibold text-center m-0">
        Navigate the frequently asked questions across
      </h1>

      <div className="pt-10">
        <details className="pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-lg cursor-pointer pr-7">
            Do I have to allow the use of cookies?
            <div className="absolute top-0 right-0 bg-secondaryDark rounded-full p-1 cursor-pointer visible open:invisible">
              <FaPlus color="white" className="font-thin" />
            </div>
          </summary>
          <p className="text-base pt-3 pl-10">
            Yes, in order to use My Page, you must allow the use of cookies in
            your browser.
            <br />
            <br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
        <details className="pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-lg cursor-pointer pr-7">
            How do I change my My Page Password?
            <div className="absolute top-0 right-0 bg-secondaryDark rounded-full p-1 cursor-pointer visible open:invisible">
              <FaPlus color="white" className="font-thin" />
            </div>
          </summary>
          <p className="text-base pt-3 pl-10">
            Yes, in order to use My Page, you must allow the use of cookies in
            your browser.
            <br />
            <br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
        <details className="pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-lg cursor-pointer pr-7">
            What is BankID?
            <div className="absolute top-0 right-0 bg-secondaryDark rounded-full p-1 cursor-pointer visible open:invisible">
              <FaPlus color="white" className="font-thin" />
            </div>
          </summary>
          <p className="text-base pt-3 pl-10">
            Yes, in order to use My Page, you must allow the use of cookies in
            your browser.
            <br />
            <br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
        <details className="pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-lg cursor-pointer pr-7">
            Whose birth number can I use?
            <div className="absolute top-0 right-0 bg-secondaryDark rounded-full p-1 cursor-pointer visible open:invisible">
              <FaPlus color="white" className="font-thin" />
            </div>
          </summary>
          <p className="text-base pt-3 pl-10">
            Yes, in order to use My Page, you must allow the use of cookies in
            your browser.
            <br />
            <br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
        <details className="pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
          <summary className="list-none font-semibold relative text-lg cursor-pointer pr-7">
            When do I receive a password ordered by letter?
            <div className="absolute top-0 right-0 bg-secondaryDark rounded-full p-1 cursor-pointer visible open:invisible">
              <FaPlus color="white" className="font-thin" />
            </div>
          </summary>
          <p className="text-base pt-3 pl-10">
            Yes, in order to use My Page, you must allow the use of cookies in
            your browser.
            <br />
            <br />
            See also: What is a cookie and what does it do?
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
