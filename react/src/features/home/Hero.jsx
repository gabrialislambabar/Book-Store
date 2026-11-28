import Button from "../../components/Button";
import heroImage from "../../assets/death.jpg";

export function Hero() {
  return (
    <section className="px-4 pt-24 pb-16 text-center">
      <h1 className="mx-auto max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#1d1d1f] sm:text-6xl">
        Stories That Inspire. Knowledge That Lasts.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6e6e73] sm:text-lg">
        Discover a carefully curated collection of fiction, literature, academic
        resources, and digital books. Find your next great read at The Reading
        Haven.
      </p>
      <img
        src={heroImage}
        alt="Bestselling book of the century"
        className="mx-auto mt-12 w-full max-w-4xl rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.16)]"
      />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Button to="/newbook/popular">Explore Books</Button>
        <Button to="/newbook/see-all">Discover New Arrivals</Button>
      </div>
    </section>
  );
}

export default Hero;
