import React from "react";
import LogoWhite from "../assets/logoWhite.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-secondaryDark text-white">
      <div className="max-w-[1200px] mx-auto py-10 divide-y-2">
        <div className="grid grid-cols-4 justify-items-end mb-10">
          <div className="flex flex-col gap-6 w-[90%] justify-self-start ">
            <div className="flex gap-4 items-center ">
              <img
                src={LogoWhite}
                alt="logo"
                className="w-12 h-12 brightness-200 invert-0"
              />
              <h3 className="font-semibold text-xl text-white m-0">
                NovaNarture
              </h3>
            </div>
            <p className="text-white ">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna.
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-self-center">
            <h1 className="font-semibold text-xl text-white m-0">Services</h1>
            <div className="flex flex-col gap-3">
              <p>Freedom of speech </p>
              <p>Tour others lives</p>
              <p>Daily refreshment</p>
              <p>Interactive platform</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-xl text-white m-0">Contact</h1>
            <div className="flex flex-col gap-3">
              <p className="flex gap-2">
                <FaPhone />
                +14 5464 8272
              </p>
              <p className="flex gap-2">
                <FaEnvelope />
                rona@domain.com
              </p>
              <p className="flex gap-2">
                <FaMapLocation />
                Lazyy Tower 192,Burn Swiss
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-xl text-white m-0">Links</h1>
            <div className="flex flex-col gap-3">
              <p>Privacy Policy</p>
              <p>Term of use</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 flex flex-col gap-4">
          <div className="text-secondaryDark text-xl flex justify-center gap-4">
            <p className="rounded-full bg-white p-1.5 w-fit ">
              <FaInstagram />
            </p>
            <p className="rounded-full bg-white p-1.5 w-fit ">
              <FaFacebook />
            </p>

            <p className="rounded-full bg-white p-1.5 w-fit ">
              <FaYoutube />
            </p>

            <p className="rounded-full bg-white p-1.5 w-fit ">
              <FaTwitter />
            </p>

            <p className="rounded-full bg-white p-1.5 w-fit ">
              <FaLinkedin />
            </p>
          </div>
          <p>copyright 2023 @novanurture all right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
