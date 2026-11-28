import Button from "../../components/Button";
import heroImage from "../../assets/hero.png";

export function Hero() {
  return (
    <section className="px-4 pt-20 pb-12 text-center">
      <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl">
        Stories That Inspire. Knowledge That Lasts.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-[#6e6e73]">
        Discover a carefully curated collection of fiction, literature, academic
        resources, and digital books. Find your next great read at The Reading
        Haven.
      </p>
      <img
        src={heroImage}
        alt="Bestselling book of the century"
        className="mx-auto mt-10 w-full max-w-4xl rounded-3xl"
      />
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button to="/newbook/see-all">Explore Books</Button>
        <Button to="/newbook/see-all">Discover New Arrivals</Button>
      </div>
    </section>
  );
}

export default Hero;
