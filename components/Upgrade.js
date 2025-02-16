'use client'
import React, { useEffect, useState } from "react";

const Upgrade = () => {
  const [activeTab, setActiveTab] = useState("Email");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {

    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div
      className="w-full pl-10 sm:pl-64 pt-12 pb-4 px-4 my-20"
      style={{
        backgroundImage: "url('/upgrade-ring.png')",
        backgroundSize: "contain",
        backgroundPosition: isSmallScreen?"bottom center":"right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-md flex flex-col mb-4 ">
        <h3 className="text-3xl text-white mb-6">Already have the X1 ring?</h3>
        <p className="text-[16px] text-white mb-8">
          Check eligibility to upgrade from the older X1 ring to the brand new
          X2 ring and enjoy a 50% discount!
        </p>

        <div className="inline-grid text-left flex-col justify-start">
          {/* Tabs */}
          <div className="flex rounded-full p-1 border border-[#161e24]">
            {["Email", "Order ID", "Other smart ring"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 text-sm rounded-full transition ${
                  activeTab === tab ? "bg-white text-black" : "bg-transparent text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="mt-6 w-80">
            {activeTab === "Email" && (
              <input
                type="email"
                placeholder="Enter your email id"
                className="w-full p-4 rounded-full bg-[#273138]/50 backdrop-blur-sm text-white border border-transparent focus:outline-none"
              />
            )}
            {activeTab === "Order ID" && (
              <input
                type="text"
                placeholder="Enter your order ID"
                className="w-full p-4 rounded-full bg-[#273138]/50 backdrop-blur-sm text-white border border-transparent focus:outline-none"
              />
            )}
            {activeTab === "Other smart ring" && (
              <input
                type="text"
                placeholder="Enter other details"
                className="w-full p-4 rounded-full bg-[#273138]/50 backdrop-blur-sm text-white border border-transparent focus:outline-none"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
