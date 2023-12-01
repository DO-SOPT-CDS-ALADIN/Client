import styled from 'styled-components';
import { Book } from './BookSlider';

interface PureBookSliderProps {
  books: BookProps[];
}

interface BookProps {
  img: string;
  title: string;
}

function PureBookSlider({ books }: PureBookSliderProps) {
  return (
    <BookSliderWrapper>
      <BooksContainer>
        <BooksWrapper style={{ width: `${books.length * 14.7}rem` }}>
          {books.map(({ img, title }, index) => (
            <Book key={index} img={img} title={title} />
          ))}
        </BooksWrapper>
      </BooksContainer>
    </BookSliderWrapper>
  );
}

export default PureBookSlider;

const BookSliderWrapper = styled.div`
  width: 100%;
  margin-top: 1.6rem;
`;

const BooksContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  margin-top: 0.8rem;
  white-space: nowrap;
`;

const BooksWrapper = styled.div`
  display: flex;
  column-gap: 1.6rem;
  padding-left: 1.5rem;
`;
