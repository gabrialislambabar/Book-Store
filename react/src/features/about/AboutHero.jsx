import Button from "../../components/Button";
export default function AboutHero() {
  return (
    <main className="px-4 pt-24 pb-16 text-center">
      <h1 className="mx-auto max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#1d1d1f] sm:text-6xl">
        Every Book Has a Story. So Do We
      </h1>
      <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-[#6e6e73] sm:text-lg">
        <p>
          The Reading Haven was built on a simple idea: the right book can
          change the way you see the world. We bring together stories, ideas,
          and knowledge from across generations, creating a space where
          curiosity meets discovery.
        </p>
        <p>
          Whether you're searching for your next favourite novel, expanding your
          knowledge, or introducing someone to the joy of reading, we're here to
          help you find the perfect book.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button to="/newbook/popular">Explore Our Collection</Button>
        <Button to="/contactus">Get in Touch</Button>
      </div>
    </main>
  );
}
