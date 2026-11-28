import { BookCard } from "./BookCard";

export function BookList({ title, store, books = [] }) {
  return (
    <section className="py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
        {title}
      </h1>
      <p className="mt-1 text-sm text-[#6e6e73]">List by {store}</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
