import ParallaxBalls from "@/components/ParallaxBalls";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <main className="relative bg-gradient-to-b from-[#80A8CA] via-[#91B5D0] via-[#A3C2D6] via-[#B7CFDD] to-[#CBDCE4] w-full h-screen overflow-hidden">
      <ParallaxBalls />
      <div className="absolute inset-0 flex items-center justify-start mt-44 sm:mt-20 gap-5 flex-col" style={{
      backgroundImage: "url('/ringhome.png')",
      backgroundSize: "300px",
      backgroundPosition: "bottom center",
      backgroundRepeat: "no-repeat",
    }}>
        <h1 className="text-4xl sm:text-7xl font-bold text-white text-center">Wellbeing Reimagined.</h1>
        <p className="text-white text-lg sm:text-3xl text-center">powered by data and innovation</p>
        <button className="bg-gradient-to-b from-black/70 to-black py-6 font-semibold px-12 text-white rounded-full flex justify-center items-center hover:-translate-y-1 transition-all duration-300 hover:drop-shadow-2xl gap-2 group">
          Buy X2 @ 20% off
          <ArrowRight className="group-hover:-rotate-45 transition-all duration-300" />
        </button>
      </div>
    </main>
  );
}

export default Hero;
