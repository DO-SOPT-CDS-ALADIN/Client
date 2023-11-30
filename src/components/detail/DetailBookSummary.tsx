import React from 'react';
import styled from 'styled-components';
import {
  IcBigcircleLeft,
  IcBigcircleRight,
  IcBook,
  IcShare,
  IcHeartOff,
  IcHeartOn,
} from '../../assets/icons';
import DetailBookInfoBox from './DetailBookInfoBox';

interface DetailBookSummaryProps {
  title: string;
  src: string;
  author: string;
  company: string;
  date: string;
  price: string;
  discount_price: string;
  mileage: string;
  heartOn: boolean;
  handleHeartClick: () => Promise<void>;
}

function DetailBookSummary({
  title,
  src,
  author,
  company,
  date,
  price,
  discount_price,
  mileage,
  heartOn,
  handleHeartClick,
}: DetailBookSummaryProps) {
  return (
    <BookSummaryWrapper>
      <BookCoverImageWrapper>
        <BookCoverImage src={src} />
        <IconWrapper>
          <IcBigcircleLeft />
          <IcBigcircleRight />
        </IconWrapper>
      </BookCoverImageWrapper>
      <BookMainInfoWrapper>
        <BookTitle>{title}</BookTitle>
        <BookInfo>
          {author}(지은이) {company} {date}
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
        <ButtonImageWrapper onClick={handleHeartClick}>
          {heartOn ? <IcHeartOn /> : <IcHeartOff />}
        </ButtonImageWrapper>
      </ButtonsWrapper>
      <DetailBookInfoBox price={price} discount_price={discount_price} mileage={mileage} />{' '}
    </BookSummaryWrapper>
  );
}

export default DetailBookSummary;

const BookSummaryWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 87.8rem;
  margin-top: 4.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const BookCoverImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40rem;
`;

const BookCoverImage = styled.img`
  position: relative;

  width: 27rem;
  height: 40rem;
  margin-top: 2.77rem;

  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.yellow};
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const IconWrapper = styled.div`
  position: absolute;

  display: flex;
  justify-content: space-between;

  width: 27rem;
  margin-top: 17.2rem;
  padding: 0 0.45rem;
`;

const BookMainInfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.9rem;
  padding: 0 1.6rem;
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
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  margin-right: 0.8rem;
  padding: 0.8rem;

  background: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
`;
