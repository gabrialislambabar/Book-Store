import FAQ from "../features/contact/FAQ";
import { faqData } from "../data/faqData";
import ContactForm from "../features/contact/ContactForm";

export default function Contact() {
  return (
    <main>
      <ContactForm />
      <div>
        <h1>Frequently Asked Questions</h1>
        <div>
          {faqData.map((faq) => (
            <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </main>
  );
}
