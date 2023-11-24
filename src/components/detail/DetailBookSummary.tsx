import React from 'react';
import styled from 'styled-components';
import { IcBigcircleLeft, IcBigcircleRight, IcBook, IcShare, IcHeartOff } from '../../assets/icons';
import DetailBookInfoBox from './DetailbookInfoBox';

const BOOK_INFO = {
  title: '설자은, 금성으로 돌아오다',
  src: '',
  author: '정세랑',
  company: '문학동네',
  date: '2023-10-30',
  price: '16,800원',
  discount_price: '15,120원',
  mileage: '840원',
  heart: false,
};

function DetailBookSummary() {
  return (
    <BookSummaryWrapper>
      <BookCoverImageWrapper>
        <BookCoverImage />
        <IconWrapper>
          <IcBigcircleLeft />
          <IcBigcircleRight />
        </IconWrapper>
      </BookCoverImageWrapper>
      <BookMainInfoWrapper>
        <BookTitle>{BOOK_INFO.title}</BookTitle>
        <BookInfo>
          {BOOK_INFO.author}(지은이) {BOOK_INFO.company} {BOOK_INFO.date}
        </BookInfo>
        <BookGifts>
          설자은 환귀금성 공책, 정세랑 작가 노트, 작가 메시지 엽서 삽지 + 유리 찻잔 세트 (소설/시
          2만원 이상)
        </BookGifts>
      </BookMainInfoWrapper>
      <ButtonsWrapper>
        <ButtonImageWrapper>
          <IcBook />
        </ButtonImageWrapper>
        <ButtonImageWrapper>
          <IcShare />
        </ButtonImageWrapper>
        <ButtonImageWrapper>
          <IcHeartOff />
        </ButtonImageWrapper>
      </ButtonsWrapper>
      <DetailBookInfoBox
        price={BOOK_INFO.price}
        discount_price={BOOK_INFO.discount_price}
        mileage={BOOK_INFO.mileage}
      />
    </BookSummaryWrapper>
  );
}

export default DetailBookSummary;

const BookSummaryWrapper = styled.article`
  width: 100%;
  height: 87.8rem;
  margin-top: 4.8rem;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.white};
`;

const BookCoverImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 40rem;
`;

const BookCoverImage = styled.div`
  width: 27rem;
  height: 40rem;

  position: relative;
  margin-top: 2.77rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const IconWrapper = styled.div`
  display: flex;
  width: 27rem;
  padding: 0 0.45rem;

  position: absolute;
  margin-top: 17.2rem;

  justify-content: space-between;
`;

const BookMainInfoWrapper = styled.div`
  width: 100%;

  padding: 0 1.6rem;
  margin-bottom: 0.9rem;
`;

const BookTitle = styled.p`
  margin-top: 5.17rem;
  ${({ theme }) => theme.fonts.head3};
`;

const BookInfo = styled.p`
  margin: 1.2rem 0;
  ${({ theme }) => theme.fonts.body1};
`;

const BookGifts = styled.p`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.pink_400};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;
  padding: 0.8rem;
  margin-right: 0.8rem;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.grey_300};
  background: ${({ theme }) => theme.colors.white};
`;
