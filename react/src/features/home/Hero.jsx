import Button from "./components/Button";
export function Hero() {
  return (
    <main>
      <h1>Stories That Inspire. Knowledge That Lasts.</h1>
      <p>
        Discover a carefully curated collection of fiction, literature, academic
        resources, and digital books. Find your next great read at The Reading
        Haven.Discover a carefully curated collection of fiction, literature,
        academic resources, and digital books. Find your next great read at The
        Reading Haven.
      </p>
      <img src="" alt="Bestselling book of the century" />
      <Button to="/page/Books.jsx">Explore Books</Button>
      <Button to="/page/Newbook">Discover New Arrivals</Button>
    </main>
  );
}
