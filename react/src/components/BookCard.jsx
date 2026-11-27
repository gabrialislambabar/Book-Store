export function BookCard() {
  return (
    <>
      {book.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
}
