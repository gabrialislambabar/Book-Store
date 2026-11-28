export function BookCard({ book }) {
  if (!book) return null;

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
      <div className="aspect-[3/4] overflow-hidden bg-[#f5f5f7]">
        <img
          src={book.image}
          alt={book.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}
