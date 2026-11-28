import ContactInfoLink from "./ContactInfolinks";
import { contactlinks } from "../../data/contactlinks";

export default function ContactInfo() {
  return (
    <main>
      <h1>We'd Love to Hear From You</h1>
      <p>
        Have a question about a book, need assistance with an order, or simply
        want to share your thoughts? We're always happy to hear from fellow book
        lovers. Reach out to our team, and we'll get back to you as soon as
        possible.
      </p>

      <div>
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
