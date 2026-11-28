export default function ContactForm() {
  return (
    <main>
      <p>SEND US A MESSAGE</p>
      <h1>Let's Start a Conversation</h1>
      <p>
        Whether you're looking for a particular title, need help with an order,
        or have a suggestion for us, drop us a message. Fill out the form below,
        and our team will be happy to assist you.
      </p>
      <div>
        <label htmlFor="name">Enter yout Full Name</label>
        <input id="name" type="text" />

        <label htmlFor="email-input">Email</label>
        <input id="email-input" type="email" />

        <label htmlFor="telephone">Ph no:</label>
        <input id="telephone" type="tel" />
        <div>
          <label htmlFor="subject">Choose or type a subject</label>
          <input id="subject" type="text" placeholder="fiction" />

          <datalist id="subject">
            <option value="General Inquiry / Question"></option>
            <option value="Customer Support / Technical Help"></option>
            <option value="Sales / Pricing / Quotes"></option>
            <option value="Billing / Refunds / Orders"></option>
            <option value="Partnerships / Collaborations"></option>
            <option value="Feedback / Suggestions"></option>
            <option value="Careers / Job Inquiries"></option>
            <option value="Legal / Privacy / Compliance"></option>
            <option value="Other"></option>
          </datalist>
        </div>

        <label htmlFor="message">Enter your message</label>
        <textarea
          id="message"
          rows="5"
          cols="40"
          placeholder="Type your message here"
        ></textarea>
      </div>
    </main>
  );
}
