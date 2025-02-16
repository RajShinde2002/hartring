"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CardSection = () => {
  const cardRefs = useRef([]);
  const wrapperRefs = useRef([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const cards = [
    {
      id: 3,
      seq: "01.",
      title: "High Precision",
      description:
        "Proximity to pulse points ensures unparalleled reliability and precision",
      backgroundImage: "url('/ringlight.png')",
      backgroundSize: "contain"
    },
    {
      id: 2,
      seq: "02.",
      title: "Effortless Comfort",
      description:
        "10X lighter than your average smartwatch. Designed to be worn for extended periods of time giving unmatched comfort",
      backgroundImage: "url('/ringmove.png')",
      backgroundSize: "contain"
    },
    {
      id: 1,
      seq: "03.",
      title: "Battery for Days",
      description:
        "Leave the charger behind. Get 8 days of tracking and unlock your full potential",
      backgroundImage: "url('/8days.png')",
      backgroundSize: "210px"
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      wrapperRefs.current.forEach((wrapper, i) => {
        if (!wrapper || !cardRefs.current[i]) return;

        const scale = i === wrapperRefs.current.length - 1 ? 1 : 0.9 + 0.025 * i;

        gsap.to(cardRefs.current[i], {
          scale: scale,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: `top ${60 + 10 * i}px`,
            end: "bottom 550px",
            endTrigger: wrapper.parentElement,
            scrub: true,
            pin: true,
            pinSpacing: false,
            id: `card-${i + 1}`,
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0c1319] mb-32">
      <div className="wrapper-container relative pt-10 flex justify-center">
        <div className="w-2/3 mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={el => (wrapperRefs.current[index] = el)}
              className="relative w-full mb-12"
              style={{ perspective: "500px" }}
            >
              <div
                ref={el => (cardRefs.current[index] = el)}
                className="w-full h-96 flex flex-col justify-center text-3xl font-bold text-white shadow-lg rounded-3xl bg-black/30 backdrop-blur-xl border border-[#fff6]"
                style={{
                  backgroundImage: card.backgroundImage,
                  backgroundSize: card.backgroundSize,
                  backgroundPosition: isSmallScreen ? "bottom center" : "right center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex flex-col justify-start items-start max-w-lg gap-2 px-5 sm:px-14">
                  <p className="pb-2 text-[#9da6b2]">{card.seq}</p>
                  <h2>{card.title}</h2>
                  <p className="text-lg font-normal text-[#9da6b2]">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20">
        <div className="flex gap-8 max-w-sm">
          <img
            src="/waterresistant.png"
            className="w-16 h-16"
            alt="Water resistant"
          />
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl text-white font-semibold">
              Water Resistant
            </h3>
            <p className="text-sm text-[#9dabb2]">
              Dive in with 30ATM waterproofing, knowing your ring can handle
              anything
            </p>
          </div>
        </div>
        <div className="flex gap-8 max-w-sm">
          <img src="/trendsetter.png" className="w-16 h-16" alt="Trendsetter" />
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl text-white font-semibold">Trendsetter</h3>
            <p className="text-sm text-[#9dabb2]">
              Crafted for comfort and style, you'll never want to take it off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;