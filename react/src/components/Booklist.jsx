import { BookCard } from "./BookCard";

export function BookList({ title, store, books = [] }) {
  return (
    <section className="py-14">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
          {title}
        </h1>
        <p className="text-sm text-[#6e6e73]">List by {store}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
