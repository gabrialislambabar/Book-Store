import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {isOpen && <div>{answer}</div>}
    </div>
  );
};

export default FAQ;
