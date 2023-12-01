import { useNavigate } from 'react-router-dom';
import { useBest } from '../../hooks/useBest';
import Book from './Book';

function BookList() {
  const { bestBookList } = useBest();
  const navigate = useNavigate();

  const onClickItem = (bookId: number) => {
    navigate(`/detail/${bookId}`);
  };

  return (
    <>
      {bestBookList.map((book, index) => (
        <Book
          key={book.bookId}
          bookId={book.bookId}
          rank={index + 1}
          imgUrl={book.imgUrl}
          title={book.title}
          subtitle={book.subtitle}
          painter={book.painter}
          writer={book.writer}
          publisher={book.publisher}
          pubDate={book.pubDate}
          score={book.score}
          tag={book.score}
          discountPrice={book.discountPrice}
          mileage={book.mileage}
          heart={book.heart}
          onClick={() => onClickItem(book.bookId)}
        />
      ))}
    </>
  );
}
export default BookList;
