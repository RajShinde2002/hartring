import Cardsection from "@/components/CardSection";

const Wellbeing = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="text-6xl flex justify-center text-white font-semibold">
          Wellbeing, comfortably yours
        </h3>
        <p className="text-[#9da6b2] text-xl max-w-4xl text-center my-4">
          Get actionable insights and implement them into your life to enhance
          your fitness and holistic well-being.
        </p>
      </div>
      <Cardsection />
    </div>
  );
};

export default Wellbeing;
