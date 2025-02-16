"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

function Specifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startAnimation, setStartAnimation] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); 
    };
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (inView && !startAnimation) {
    setStartAnimation(true);
  }

  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center text-white my-20"
    >
      {/* Left */}
      <motion.div
            initial={isSmallScreen ? { opacity: 1, x: 0 } : { x: -100, opacity: 0 }}
            animate={isSmallScreen ? { opacity: 1, x: 0 } : (startAnimation ? { x: -50, opacity: 1 } : {})}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xs order-2 md:order-1"
      >
        <h2 className="text-sm mb-3 text-gray-400">Name</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">HART Smart Fitness Tracker Ring</p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">Features</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">
          Real-Time Heart Rate Monitor, Blood Oxygen Level, Body Recovery, Body
          Temperature, Sleep, Stress, Step Counter, Calories Burnt, Activity
          Tracking, VO2 Max, Recovery and Strain
        </p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">Size</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">6, 7, 8, 9, 10, 11, 12, 13</p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">Material</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">Titanium</p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">Color</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">Gunmetal Black, Sterling Gold, Frost Silver</p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">Battery</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">
          Rechargeable 24 mAh non-replaceable LiPo battery
        </p>
      </motion.div>

      {/* Ring Images and Specifications */}
      <div className="flex flex-col items-center gap-32 order-1 md:order-2">
        <div className="relative flex flex-col items-center justify-center w-[150px] sm:w-[200px]">
          <motion.img
            src="/ringfull.png"
            initial={{ opacity: 1 }}
            animate={startAnimation ? { opacity: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="absolute"
          />

          <motion.img
            src="/ring1.png"
            initial={{ x: 0, opacity: 0 }}
            animate={startAnimation ? { x: -120, y: 30, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute"
          />

          <motion.img
            src="/ring2.png"
            initial={{ opacity: 0, scale: 1 }}
            animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute"
          />

          <motion.img
            src="/ring3.png"
            initial={{ x: 0, opacity: 0 }}
            animate={startAnimation ? { x: 120, y: -30, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute"
          />
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={startAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bottom-10 max-w-xs"
        >
          <div className="flex flex-col items-center gap-6 mt-5">
            <h3 className="text-3xl sm:text-6xl font-bold">At a glance</h3>
            <h5 className="text-lg sm:text-2xl text-gray-400">Specifications</h5>
            <button className="bg-white py-6 font-semibold px-12 text-black rounded-full flex justify-center items-center gap-2 group">
              Buy X2 <ArrowRight className="group-hover:-rotate-45 transition-all duration-300"/>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right */}
      <motion.div
       initial={isSmallScreen ? { opacity: 1, x: 0 } : { x: 100, opacity: 0 }}
       animate={isSmallScreen ? { opacity: 1, x: 0 } : (startAnimation ? { x: 50, opacity: 1 } : {})}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xs sm:text-right order-3"
      >
        <h2 className="text-sm mb-3 text-gray-400">What's in The Box</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">
          1 Unit Smart Ring, 1 Unit USB Cable, 1 Unit Charging Case, 1 Unit
          Instruction Manual
        </p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">Certifications</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">
          5ATM Water Resistant, CE, EU RoHS, FCC, REACH, CP65, BIS
        </p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">Country of Origin</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">China</p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">Connectivity</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">Low powered BLE</p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">WATER RESISTANT</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">Yes (50 mtr)</p>

        <h2 className="text-sm mb-3 text-gray-400 mt-6">Marketed by</h2>
        <p className="text-lg sm:mb-20 mb-8 text-[dfe7eb]">FITTR Life Care Private Limited</p>
      </motion.div>
    </div>
  );
}

export default Specifications;