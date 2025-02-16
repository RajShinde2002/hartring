import Hero from "@/components/Hero";
import Wellbeing from "@/components/wellbeing";
import Reviews from "@/components/reviews";
import ScrollSection from "@/components/scrollsection";
import Specifications from "@/components/specifications";
import ConsumerProtection from "@/components/consumerprotection";
import FloatingButton from '@/components/floatingbutton';
import FAQs from "@/components/FAQs";
import HARTforeveryone from "@/components/hartforeveryone";
import Upgrade from "@/components/upgrade";

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
