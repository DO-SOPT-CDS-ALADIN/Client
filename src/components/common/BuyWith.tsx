import styled from 'styled-components';
import { IcEnterXs } from '../../assets/icons';
import book1 from '../../assets/imgs/buy_with_book_1.png';
import book2 from '../../assets/imgs/buy_with_book_2.png';
import book3 from '../../assets/imgs/buy_with_book_3.png';
import PAGE from '../../constants/page';

interface BuyWithProps {
  page: number;
}

function BuyWith({ page }: BuyWithProps) {
  return (
    <BuyWithWrapper page={page}>
      <BuyWithHeader>
        <Title>함께 구매한 도서</Title>
        <ShowMoreWrapper>
          <ShowMore>더보기</ShowMore>
          <IcEnterXs />
        </ShowMoreWrapper>
      </BuyWithHeader>
      <List>
        <BookWrapper>
          <BuyWithImg src={book1} />
          <BookTitle>붉은 궁</BookTitle>
        </BookWrapper>
        <BookWrapper>
          <BuyWithImg src={book2} />
          <BookTitle>단 한 사람</BookTitle>
        </BookWrapper>
        <BookWrapper>
          <BuyWithImg src={book3} />
          <BookTitle>파견자들</BookTitle>
        </BookWrapper>
      </List>
    </BuyWithWrapper>
  );
}
export default BuyWith;

const BuyWithWrapper = styled.div<{ page: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;

  padding: ${({ page }) => (page === PAGE.DETAIL ? '1.5rem' : '2.4rem')} 0rem 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const BuyWithHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.title1_bold};
`;

const ShowMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5.8rem;
  height: 4rem;
  margin-right: 0.8rem;
  padding: 1rem 0rem 1rem 0.1rem;
`;

const ShowMore = styled.p`
  color: ${({ theme }) => theme.colors.grey_400};
  ${({ theme }) => theme.fonts.body2};
`;

const List = styled.div`
  overflow-y: auto;
  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;

  width: 12.8rem;
  margin: 0.4rem 1.6rem 0 0;
`;

const BookTitle = styled.p`
  ${({ theme }) => theme.fonts.title2_reg};
`;

const BuyWithImg = styled.img`
  width: 12.8rem;
  height: 17.4rem;
`;
