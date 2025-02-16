import Hero from "@/components/Hero";
import Wellbeing from "@/components/Wellbeing";
import Reviews from "@/components/Reviews";
import ScrollSection from "@/components/ScrollSection";
import Specifications from "@/components/Specifications";
import ConsumerProtection from "@/components/ConsumerProtection";
import FloatingButton from '@/components/FloatingButton';
import FAQs from "@/components/FAQs";
import HARTforeveryone from "@/components/HartForEveryone";
import Upgrade from "@/components/Upgrade";

export default function Home() {
  return (
    <>
        <Hero />
        <ScrollSection />
        <Wellbeing />
        <Reviews />
        <Specifications />
        <Upgrade />
        <HARTforeveryone />
        <FAQs />
        <ConsumerProtection />
        <FloatingButton />
    </>
  );
}
