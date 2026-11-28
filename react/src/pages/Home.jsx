import ImageSlider from "../components/ImageSlider";
import { BookList } from "../components/Booklist";
import Hero from "../features/home/Hero";

const books = [
  { id: 1, title: "The Great Gatsby", shopname: "Downtown Books", image: hero },
  { id: 2, title: "Atomic Habits", shopname: "City Reads", image: reactLogo },
  { id: 3, title: "Dune", shopname: "Corner Store", image: viteLogo },
  { id: 4, title: "Clean Code", shopname: "Tech Shelf", image: hero },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <ImageSlider images={images} />
      <BookList books={books} /> //Special on the store
      <BookList /> // For kids
      <BookList /> // For gifts
    </main>
  );
}
