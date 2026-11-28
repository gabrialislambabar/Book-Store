export function BookCard({ book }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <img
        src={book.image}
        alt={book.title}
        className="h-40 w-full rounded-md bg-gray-100 object-cover"
      />
    </div>
  );
}
