import styled from 'styled-components';
import { IcEnterXs } from '../../assets/icons';
import book1 from '../../assets/imgs/click_with_book_1.jpg';
import book2 from '../../assets/imgs/click_with_book_2.jpg';
import book3 from '../../assets/imgs/click_with_book_3.jpg';

function ClickWith() {
  return (
    <ClickWithWrapper>
      <ClickWithHeader>
        <Title>함께 클릭한 도서</Title>
        <ShowMoreWrapper>
          <ShowMore>더보기</ShowMore>
          <IcEnterXs />
        </ShowMoreWrapper>
      </ClickWithHeader>
      <List>
        <BookWrapper>
          <ClickWithImg src={book1} />
          <BookTitle>66일 자존감 대화법</BookTitle>
        </BookWrapper>
        <BookWrapper>
          <ClickWithImg src={book2} />
          <BookTitle>기적의 자세요정</BookTitle>
        </BookWrapper>
        <BookWrapper>
          <ClickWithImg src={book3} />
          <BookTitle>더 마인드</BookTitle>
        </BookWrapper>
      </List>
    </ClickWithWrapper>
  );
}
export default ClickWith;

const ClickWithWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;

  margin-top: 1.2rem;
  padding: 2.4rem 0rem 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ClickWithHeader = styled.div`
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

const ClickWithImg = styled.img`
  width: 12.8rem;
  height: 17.4rem;
`;
