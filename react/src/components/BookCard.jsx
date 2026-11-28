export function BookCard({ book }) {
  if (!book) return null;

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
      <img
        src={book.image}
        alt={book.title}
        className="h-40 w-full bg-[#f5f5f7] object-cover"
      />
    </div>
  );
}
