import React from 'react';
import styled from 'styled-components';
import { IcBigcircleLeft, IcBigcircleRight, IcBook, IcShare, IcHeartOff } from '../../assets/icons';

function DetailBookSummary() {
  return (
    <BookSummaryWrapper>
      <BookCoverImageWrapper>
        <BookCoverImage />
        <IcBigcircleLeft />
        <IcBigcircleRight />
      </BookCoverImageWrapper>
      <BookTitle>설자은, 금성으로 돌아오다</BookTitle>
      <BookInfo>정세랑(지은이) 문학동네 2023-10-30</BookInfo>
      <BookGifts>
        설자은 환귀금성 공책, 정세랑 작가 노트, 작가 메시지 엽서 삽지 + 유리 찻잔 세트 (소설/시
        2만원 이상)
      </BookGifts>
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
  width: 27rem;
  height: 40rem;
`;

const BookCoverImage = styled.div`
  width: 27rem;
  height: 40rem;

  background-color: ${({ theme }) => theme.colors.yellow};
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const BookTitle = styled.p`
  ${({ theme }) => theme.fonts.head3};
`;
const BookInfo = styled.p`
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
