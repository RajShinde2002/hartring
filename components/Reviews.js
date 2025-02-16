"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "heart.svg", label: "Heart Rate" },
  { icon: "drop.png", label: "Blood Oxygen" },
  { icon: "run.png", label: "Body Recovery" },
  { icon: "thermo.png", label: "Temperature" },
];

const reviewData = [
  {
    id: 1,
    title: "Feel Every Beat: Track Heart Rate Live with Fittr Hart Ring",
    bg: "/reviewbg2.png",
    description:
      "Stay ahead of the game track blood oxygen in real-time. Swim, run, or go about your day confidently. Fittr Hart Ring keeps your health in check.",
    buttonText: "Buy X2 @ 20% off",
    reviewer: "Deepak Bardiya",
    review:
      "After 2 weeks with the HART ring, I'm impressed! Accurate steps, heart rate, and sleep tracking. Sturdy, scratch-free, and a 2-week battery life — highly recommend!",
    image: "/rohit.png",
  },
  {
    id: 2,
    title: "Stay Active, Stay Safe with Fittr Hart Ring",
    bg: "/reviewbg4.jpg",
    description:
      "Monitor your heart rate, steps, and oxygen levels seamlessly. Stay on top of your fitness goals with ease.",
    buttonText: "Buy X2 @ 20% off",
    reviewer: "Vishal Patel",
    review:
      "Premium build, lightweight, and scratch-free even with 24/7 wear. 9-day battery life, quick charging, and a sleek design—perfect for workouts!",
    image: "/puja.png",
  },
  {
    id: 3,
    title: "Recover Better, Live Better with Fittr Hart Ring",
    bg: "/reviewbg3.jpg",
    description:
      "Advanced AI-driven insights keep you informed about your health metrics. Get real-time alerts for better well-being.",
    buttonText: "Buy X2 @ 20% off",
    reviewer: "Satish Shivnani",
    review:
      "Loving my HART ring! Premium, light, and seamless Bluetooth connectivity. Accurate steps, excellent sleep monitoring, and still 46% battery left after 8 days.",
    image: "/nusier.png",
  },
  {
    id: 4,
    title: "Cool Down Smarter with Fittr Hart Ring",
    bg: "/reviewbg1.jpg",
    description:
      "Engineered for accuracy and comfort, this smart ring blends seamlessly into your daily routine while tracking essential health stats.",
    buttonText: "Buy X2 @ 20% off",
    reviewer: "Srinivas Polavarapu",
    review:
      "My first smart ring, and it's amazing! The HART ring is light, comfy, and has great battery life. Accurate sleep tracking and easy setup—syncs instantly with Google Fit!",
    image: "/banda.png",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedFeature((prev) =>
        prev === features.length - 1 ? 0 : prev + 1
      );

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === reviewData.length - 1 ? 0 : prevIndex + 1
        );
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[100vh] flex flex-col items-center justify-center transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url('${reviewData[currentIndex].bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div
        key={reviewData[currentIndex].id}
        className="relative w-full py-6 px-5 sm:px-20 rounded-3xl transition-all duration-700 ease-in-out"
      >
        <div className="sm:flex gap-4 mb-8 justify-start hidden">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative rounded-full ${
                expandedFeature === index
                  ? "bg-black/20 backdrop-blur-md"
                  : "bg-black/40"
              } transition-colors duration-300`}
            >
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-white"
                animate={{
                  width: expandedFeature === index ? "auto" : "60px",
                  height: "60px",
                }}
                transition={{ duration: 0.8 }}
              >
                <img
                  className="flex items-center justify-center object-contain w-8 h-8"
                  src={feature.icon}
                  alt={feature.label}
                />
                {expandedFeature === index && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="whitespace-nowrap overflow-hidden"
                  >
                    {feature.label}
                  </motion.span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center sm:gap-6 gap-12">
          {/* Left */}
          <motion.div
            className="max-w-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-5xl font-bold">
              {reviewData[currentIndex].title}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              {reviewData[currentIndex].description}
            </p>
            <button className="bg-white text-black py-4 px-8 rounded-full flex justify-center items-center hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-2xl gap-2 group mt-4">
              {reviewData[currentIndex].buttonText}
              <ArrowRight className="group-hover:-rotate-45 transition-all duration-300" />
            </button>
          </motion.div>

          {/* Right */}
          <motion.div
            className="bg-black/40 backdrop-blur-lg p-6 rounded-3xl max-w-sm shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 border-b border-b-gray-600 pb-2">
              <Image
                src={reviewData[currentIndex].image}
                width={50}
                height={50}
                alt={reviewData[currentIndex].reviewer}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {reviewData[currentIndex].reviewer}
                </h3>
                <div className="flex text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p className="mt-4 text-gray-300 text-[16px]">
              {reviewData[currentIndex].review}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
