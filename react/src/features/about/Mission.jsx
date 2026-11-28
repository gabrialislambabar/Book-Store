import AboutImage from "../../assets/death.jpg";

export default function Mission() {
  return (
    <main className="py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
            Our Mission: Making Knowledge Accessible to Everyone
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#6e6e73]">
            Our mission is to make reading an accessible, inspiring, and
            meaningful part of everyday life.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
            We strive to connect readers with books that educate, challenge
            perspectives, spark imagination, and encourage personal growth.
            Through thoughtfully curated collections and accessible digital
            reading experiences, we aim to create opportunities for everyone to
            discover the transformative power of knowledge.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#6e6e73]">
            We don't simply want to sell books. We want to cultivate a community
            of curious minds and lifelong learners.
          </p>
        </div>

        <div>
          <img
            src={AboutImage}
            alt="Our mission"
            className="w-full rounded-[2rem] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.16)]"
          />
        </div>
      </div>
    </main>
  );
}
