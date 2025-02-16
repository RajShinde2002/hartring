"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, Flame, Siren } from "lucide-react";

const ScrollSection = () => {
  const cardRefs = useRef(new Array(3).fill(null));
  const wrapperRefs = useRef(new Array(3).fill(null));

  const cards = [
    {
      id: 3,
      seq: "01.",
      icon: <Siren />,
      title: "Rest easy, power up your mornings",
      description: "",
      backgroundImage: "url('/scrollcard1.png')",
      carddesc:
        "This could affect your overall productivity throughout the day. Try taking up lighter tasks.",
      cardtitle: "Low sleep score detected",
      titleColor: "#ff7676",
    },
    {
      id: 2,
      seq: "02.",
      icon: <Flame />,
      title: "Track your wellness journey",
      description:
        "It adapts to you, moves with you and tracks your performance effortlessly",
      backgroundImage: "url('/scrollcard2.png')",
      carddesc:
        "Ready for more? Your health stats suggest you can push your limits.",
      cardtitle: "Peak Achieved!",
      titleColor: "#99e0a5",
    },
    {
      id: 1,
      seq: "03.",
      icon: <Brain />,
      title: "Stay on top of your health through the day",
      description: "",
      backgroundImage: "url('/scrollcard3.png')",
      carddesc: "70 (55-75)",
      cardtitle: "Stressed",
      titleColor: "#ffffff",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      wrapperRefs.current.forEach((wrapper, i) => {
        if (!wrapper || !cardRefs.current[i]) return;

        let scale = 1;
        if (i !== wrapperRefs.current.length - 1) {
          scale = 0.9 + 0.025 * i;
        }

        gsap.to(cardRefs.current[i], {
          scale: scale,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: `top ${i}px`,
            end: "bottom 550px",
            endTrigger: ".wrapper",
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
    <div className="w-full min-h-screen bg-[#0c1319]">
      <div className="wrapper relative pb-24 flex justify-center">
        <div className="w-full mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (wrapperRefs.current[index] = el)}
              className="relative w-full mb-12"
              style={{ perspective: "500px" }}
            >
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className="w-full h-[100vh] flex flex-col sm:flex-row justify-around sm:justify-between items-center text-3xl font-bold text-white shadow-lg rounded-3xl bg-black/30 backdrop-blur-xl border border-[#fff6] p-10"
                style={{
                  backgroundImage: card.backgroundImage,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex flex-col justify-start items-start max-w-3xl gap-4 sm:px-14">
                  <h2 className="text-4xl sm:text-7xl font-semibold tracking-tighter text-center sm:text-left">{card.title}</h2>
                  <p className="text-2xl font-normal text-center sm:text-left">{card.description}</p>
                </div>
                <div className="flex items-center gap-2 border-2 border-[#45545ed3] bg-black/50 backdrop-blur-lg max-w-sm rounded-2xl p-5">
                  <div className="flex flex-col">
                    <h3
                      className={`text-xl font-normal flex`}
                      style={{ color: card.titleColor }}
                    >
                      <span
                        width={50}
                        height={50}
                        alt={card.title}
                        className="w-12 h-12 rounded-full"
                      >
                        {card.icon}
                      </span>
                      {card.cardtitle}
                    </h3>
                    <p className="text-sm text-[#b8c3c5] font-normal">
                      {card.carddesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
