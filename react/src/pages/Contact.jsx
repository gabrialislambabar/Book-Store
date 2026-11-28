import { faqData } from "../data/faqData";
import ContactForm from "../features/contact/ContactForm";
import ContactInfo from "../features/contact/ContactInfo";
import FAQ from "../features/contact/FAQ";

export default function Contact() {
  return (
    <main>
      <ContactForm />
      <div className="py-16">
        <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
          Frequently Asked Questions
        </h1>
        <div className="mt-8 divide-y divide-black/[0.06] overflow-hidden rounded-[2rem] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04]">
          {faqData.map((faq) => (
            <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      <div className="pb-20">
        <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
          Contact details
        </h1>

        <ContactInfo />
      </div>
    </main>
  );
}
