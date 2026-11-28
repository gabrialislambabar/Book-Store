import { BookList } from "../../components/Booklist";

export default function Categories() {
  return (
    <main>
      {/* This will display three columns of books: special on store, for kids, for gifts */}
      <BookList title="Specials on the Store" />
      <BookList title="For Kids" />
      <BookList title="For Gifts" />
    </main>
  );
}
