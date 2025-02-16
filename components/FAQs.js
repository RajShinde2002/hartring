"use client";
import { useEffect, useState } from "react";
import Accordion from "./Accordion.js";


const FAQs = () => {
  const words = ["Compatibility", "Battery", "Maintenance"];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    let timeout;
    const typingSpeed = deleting ? 50 : 100;

    if (hold) {
      timeout = setTimeout(() => setHold(false), 1000);
    } else {
      timeout = setTimeout(() => {
        if (!deleting) {
          if (letterIndex < words[index].length) {
            setDisplayedText((prev) => prev + words[index][letterIndex]);
            setLetterIndex(letterIndex + 1);
          } else {
            setHold(true);
          }
        } else {
          if (letterIndex > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
            setLetterIndex(letterIndex - 1);
          } else {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, deleting, index, words, hold]);

  useEffect(() => {
    if (!hold && displayedText === words[index]) {
      setTimeout(() => setDeleting(true), 500); 
    }
  }, [displayedText, hold, words, index]);

  return (
    <div className="my-20">
      <h3 className="text-3xl sm:text-6xl flex justify-center text-white font-semibold pb-12 px-5 text-center sm:text-left font-manrope">
        Frequently asked questions
      </h3>
      <div className="flex items-center mx-auto p-2 rounded-full w-full max-w-lg bg-gradient-to-r from-[#161e24] to-[#1a232a] transition duration-300 pr-[12px] pl-[32px] py-[12px] ">
        <input
          type="text"
          placeholder={`Search for ${displayedText}`}
          className="flex-grow bg-transparent text-white text-lg px-4 py-2 outline-none"
        />
        <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200">
          Search
        </button>
      </div>
      <div className="py-10">
      <Accordion />
      </div>
    </div>
  );
};

export default FAQs;
