import ImageSlider from "../components/ImageSlider";
import Hero from "../features/home/Hero";
import LatestArrival from "../features/home/LatestArrival";
import PopularEbook from "../features/home/PopularEbook";
import WhyChooseus from "../features/home/WhyChooseus";
// const books = [
//   { id: 1, title: "The Great Gatsby", shopname: "Downtown Books", image: hero },
//   { id: 2, title: "Atomic Habits", shopname: "City Reads", image: reactLogo },
//   { id: 3, title: "Dune", shopname: "Corner Store", image: viteLogo },
//   { id: 4, title: "Clean Code", shopname: "Tech Shelf", image: hero },
// ];

export default function Home() {
  return (
    <main>
      <Hero />
      <ImageSlider />
      <LatestArrival />
      <PopularEbook />
      <WhyChooseus />
    </main>
  );
}
