import { BookCard } from "./BookCard";

export default function LatestArrival() {
  return (
    <main>
      <h1>Fresh Off the Shelves</h1>
      <p>Explore the latest additions to our growing collection.</p>
      // This should display the books that have been latest added to the //
      website by the books // not the genre
      <BookCard />
    </main>
  );
}
