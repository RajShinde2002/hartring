import { ChevronDown } from "lucide-react";
import { useState } from "react";

const accordionData = [
  {
    id: "01",
    question:
      "What's the difference between the Old HART charger and the New HART charger?",
    answer:
      "While both chargers perform equally well, the new HART charger comes with a fresh, upgraded design that feels more modern and refined. Its sleek appearance not only complements the FITTR HART ring's aesthetic but also enhances your overall experience with a more sophisticated look.",
  },
  {
    id: "02",
    question: "What is the sizing kit process?",
    answer:
      "We have a convenient way to help you find the perfect fit: Physical Sizing Kit - For the most accurate fit, select our physical sizing kit.",
  },
  {
    id: "03",
    question: "How do I purchase an additional charging case?",
    answer:
      "Just reach out to our customer support team, and they'll assist you with ordering an extra HART Ring charging case. They'll ensure your request is handled quickly and smoothly!",
  },
];

const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      {accordionData.map(({ id, question, answer }, index) => (
        <div key={id}>
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 text-white border border-b-0 border-r-0 border-l-0 border-[#161e24] hover:bg-gradient-to-r from-[#0c1319] via-[#161e24] to-[#0c1319]" ${
                index === 0 ? "border-t-0" : ""
              } ${index === accordionData.length - 1 ? "border-b-0" : ""}`}
              onClick={() => toggleAccordion(id)}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl text-[#6c7880]">{id}</span>
                <span className="text-xl text-left font-semibold px-3 py-5">
                  {question}
                </span>
              </div>

              <div>
                <ChevronDown
                  className={`w-8 h-8 transition-transform ${
                    openId === id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>
          </h2>
          {openId === id && (
            <div className="pb-5 dark:bg-gray-900">
              <p className="text-white dark:text-gray-400 text-md pl-16 max-w-3xl">
                {answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
