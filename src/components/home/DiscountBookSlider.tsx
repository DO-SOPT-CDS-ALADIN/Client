import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import { IcEnter } from '../../assets/icons';

interface BookSliderProps {
  section_title: string;
  books: DiscountBookProps[];
}

interface DiscountBookProps {
  img: string;
  title: string;
  original_price: string;
  discount_price: string;
}

function DiscountBookSlider({ section_title, books }: BookSliderProps) {
  return (
    <BookSliderWrapper>
      <SectionHeader title={section_title} icon={<IcEnter />}></SectionHeader>
      <BooksContainer>
        <BooksWrapper style={{ width: `${books.length * 14.7}rem` }}>
          {books.map(({ img, title, original_price, discount_price }, index) => (
            <DiscountBook
              key={index}
              img={img}
              title={title}
              original_price={original_price}
              discount_price={discount_price}
            />
          ))}
        </BooksWrapper>
      </BooksContainer>
    </BookSliderWrapper>
  );
}

export function DiscountBook({ img, title, original_price, discount_price }: DiscountBookProps) {
  return (
    <BookWrapper>
      <BookImg src={img} />
      <BookTitle>{title}</BookTitle>
      <BookPrice>
        <OriginalPrice>{original_price}</OriginalPrice>
        <DiscountPrice>{discount_price}</DiscountPrice>
      </BookPrice>
    </BookWrapper>
  );
}

export default DiscountBookSlider;

const BookSliderWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const BookWrapper = styled.div`
  width: 12.8rem;
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

const BookPrice = styled.div`
  display: flex;
  column-gap: 0.7rem;
  align-items: center;
  width: 100%;
`;

const OriginalPrice = styled.p`
  ${({ theme }) => theme.fonts.detail2};

  color: ${({ theme }) => theme.colors.grey_400};
  text-decoration: line-through;
`;

const DiscountPrice = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};

  color: ${({ theme }) => theme.colors.pink_400};
`;
