import { BookCard } from "../../components/BookCard";

// This should display books based on the highest number of purchases on the website, not the genre
export default function PopularEbook() {
  return (
    <section className="py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
        Fresh Off the Shelves
      </h1>
      <p className="mt-1 text-sm text-[#6e6e73]">
        Explore the latest additions to our growing collection.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <BookCard />
      </div>
    </section>
  );
}
