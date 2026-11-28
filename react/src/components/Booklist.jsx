import { BookCard } from "./BookCard";

export function BookList({ books }) {
  return (
    <main>
      <h1>{Bookgrid.title}</h1>
      <p>List by{bookstore.name}</p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
