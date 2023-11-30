import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import { IcEnter } from '../../assets/icons';

interface BookSliderProps {
  section_title: string;
  books: BookProps[];
}

interface BookProps {
  img: string;
  title: string;
}

function BookSlider({ section_title, books }: BookSliderProps) {
  return (
    <BookSliderWrapper>
      <SectionHeader title={section_title} icon={<IcEnter />}></SectionHeader>
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

export function Book({ img, title }: BookProps) {
  return (
    <BookWrapper>
      <BookImg src={img} />
      <BookTitle>{title}</BookTitle>
    </BookWrapper>
  );
}

export default BookSlider;

const BookSliderWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const BookWrapper = styled.div`
  width: 12.8rem;
`;

const BooksContainer = styled.div`
  width: 100%;
  margin-top: 0.8rem;

  overflow-x: auto;
  white-space: nowrap;
`;

const BooksWrapper = styled.div`
  display: flex;
  column-gap: 1.6rem;

  padding-left: 1.5rem;
`;

const BookImg = styled.img`
  width: 12.8rem;
  height: 17.4rem;

  object-fit: cover;
`;

const BookTitle = styled.p`
  ${({ theme }) => theme.fonts.title2_reg};

  width: 100%;
  margin-top: 1.2rem;

  white-space: initial;
`;
