import OurValues from "../about/OurValues";
import OurStory from "../about/OurStory";

export default function WhyChooseus() {
  return (
    <section className="py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
        About us
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <OurStory />
        <OurValues />
      </div>
    </section>
  );
}
