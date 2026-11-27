import ImageSlider from "./components/ImageSlider";
import { BookList } from "./components/Booklist";

import hero from "../../assets/hero.png";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";

const images = [hero, reactLogo, viteLogo];

const books = [
  { id: 1, title: "The Great Gatsby", shopname: "Downtown Books", image: hero },
  { id: 2, title: "Atomic Habits", shopname: "City Reads", image: reactLogo },
  { id: 3, title: "Dune", shopname: "Corner Store", image: viteLogo },
  { id: 4, title: "Clean Code", shopname: "Tech Shelf", image: hero },
];

export default function Home() {
  return (
    <main>
      <ImageSlider images={images} />
      <BookList books={books} />
    </main>
  );
}
