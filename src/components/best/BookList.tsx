import Book from './Book';

function BookList() {
  const totalBooks = 9;
  const books = Array.from({ length: totalBooks }, (_, index) => index + 1);
  return (
    <>
      {books.map(index => (
        <Book key={index} rank={index} tagCount={1} />
      ))}
    </>
  );
}
export default BookList;
