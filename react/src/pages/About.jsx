import AboutHero from "../features/about/AboutHero";
import Mission from "../features/about/Mission";
import OurStory from "../features/about/OurStory";
import OurValues from "../features/about/OurValues";
export default function About() {
  return (
    <main>
      <AboutHero />
      <div className="divide-y divide-black/[0.06]">
        <Mission />
        <section className="grid grid-cols-1 gap-6 py-16 md:grid-cols-2">
          <OurStory />
          <OurValues />
        </section>
      </div>
    </main>
  );
}
