"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const ParallaxBalls = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const balls = [
    { size: "w-48 h-48", top: "10%", left: "5%", factor: 0.45 },
    { size: "w-32 h-32", top: "30%", left: "70%", factor: 0.2 },
    { size: "w-24 h-24", top: "60%", left: "20%", factor: 0.12 },
    { size: "w-40 h-40", top: "75%", left: "60%", factor: 0.25 },
    { size: "w-20 h-20", top: "40%", left: "40%", factor: 0.1 },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;

      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {balls.map((ball, i) => {
        const ballX = useTransform(
          smoothX,
          [-100, 100],
          [-100 * ball.factor, 100 * ball.factor]
        );
        const ballY = useTransform(
          smoothY,
          [-100, 100],
          [-100 * ball.factor, 100 * ball.factor]
        );

        return (
          <motion.img
            key={i}
            src="/ball.webp"
            alt="Fuzzy ball"
            className={`absolute ${ball.size} object-cover`}
            style={{
              top: ball.top,
              left: ball.left,
              x: ballX,
              y: ballY,
              opacity: 0.9,
            }}
          />
        );
      })}
    </div>
  );
}

export default ParallaxBalls;
