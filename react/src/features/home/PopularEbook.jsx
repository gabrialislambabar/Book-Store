import { BookCard } from "./BookCard";

export default function LatestArrival() {
  return (
    <main>
      <h1>Fresh Off the Shelves</h1>
      <p>Explore the latest additions to our growing collection.</p>
      // This should display books based on the highest number of purchase on
      the website // Not genre
      <BookCard />
    </main>
  );
}
