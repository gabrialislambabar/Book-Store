import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-medium text-[#1d1d1f] transition hover:bg-black/[0.02]"
      >
        <span>{question}</span>
        <span className="text-lg text-[#86868b]">{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-[15px] leading-relaxed text-[#6e6e73]">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQ;
