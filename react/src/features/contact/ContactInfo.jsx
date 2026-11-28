import ContactInfoLink from "./ContactInfolinks";
import { contactlinks } from "../../data/contactlinks";

export default function ContactInfo() {
  return (
    <main className="py-10">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
          We'd Love to Hear From You
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
          Have a question about a book, need assistance with an order, or simply
          want to share your thoughts? We're always happy to hear from fellow book
          lovers. Reach out to our team, and we'll get back to you as soon as
          possible.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {contactlinks.map((contact) => (
          <ContactInfoLink
            key={contact.id}
            logosrc={contact.logosrc}
            text1={contact.text1}
            text2={contact.text2}
            text3={contact.text3}
          />
        ))}
      </div>
    </main>
  );
}
