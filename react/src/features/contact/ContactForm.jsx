export default function ContactForm() {
  return (
    <main className="pt-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0071e3]">
          SEND US A MESSAGE
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#1d1d1f] sm:text-5xl">
          Let's Start a Conversation
        </h1>
        <p className="mt-5 text-base leading-relaxed text-[#6e6e73]">
          Whether you're looking for a particular title, need help with an order,
          or have a suggestion for us, drop us a message. Fill out the form below,
          and our team will be happy to assist you.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl space-y-5 rounded-[2rem] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] sm:p-10">
        <div>
          <label
            htmlFor="name"
            className="text-[13px] font-medium text-[#6e6e73]"
          >
            Enter yout Full Name
          </label>
          <input
            id="name"
            type="text"
            className="mt-1.5 w-full rounded-xl border border-black/[0.12] bg-[#f5f5f7] px-4 py-2.5 text-[15px] text-[#1d1d1f] transition placeholder:text-[#86868b] focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/15"
          />
        </div>

        <div>
          <label
            htmlFor="email-input"
            className="text-[13px] font-medium text-[#6e6e73]"
          >
            Email
          </label>
          <input
            id="email-input"
            type="email"
            className="mt-1.5 w-full rounded-xl border border-black/[0.12] bg-[#f5f5f7] px-4 py-2.5 text-[15px] text-[#1d1d1f] transition placeholder:text-[#86868b] focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/15"
          />
        </div>

        <div>
          <label
            htmlFor="telephone"
            className="text-[13px] font-medium text-[#6e6e73]"
          >
            Ph no:
          </label>
          <input
            id="telephone"
            type="tel"
            className="mt-1.5 w-full rounded-xl border border-black/[0.12] bg-[#f5f5f7] px-4 py-2.5 text-[15px] text-[#1d1d1f] transition placeholder:text-[#86868b] focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/15"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="text-[13px] font-medium text-[#6e6e73]"
          >
            Choose or type a subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="fiction"
            className="mt-1.5 w-full rounded-xl border border-black/[0.12] bg-[#f5f5f7] px-4 py-2.5 text-[15px] text-[#1d1d1f] transition placeholder:text-[#86868b] focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/15"
          />

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

        <div>
          <label
            htmlFor="message"
            className="text-[13px] font-medium text-[#6e6e73]"
          >
            Enter your message
          </label>
          <textarea
            id="message"
            rows="5"
            cols="40"
            placeholder="Type your message here"
            className="mt-1.5 w-full resize-none rounded-xl border border-black/[0.12] bg-[#f5f5f7] px-4 py-2.5 text-[15px] text-[#1d1d1f] transition placeholder:text-[#86868b] focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/15"
          ></textarea>
        </div>
      </div>
    </main>
  );
}
