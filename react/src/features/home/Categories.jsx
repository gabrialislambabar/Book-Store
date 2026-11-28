import { BookList } from "../components/Booklist";

export default function Categories() {
  return (
    <main>
      // This will display three columns of books, and they will have to // be
      displayed like, the first column for books, special on store // the books
      that are for kids // the books that are for gift. // Each section will be
      displayed with a title line // and then the store or provider name // and
      then the list of images of books in // row
      <BookList /> //Special on the store
      <BookList /> // For kids
      <BookList /> // For gifts
    </main>
  );
}
