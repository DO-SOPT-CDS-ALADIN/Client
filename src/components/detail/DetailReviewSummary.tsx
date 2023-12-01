import React from 'react';
import styled from 'styled-components';
import { IcEllipse51 } from '../../assets/icons';

interface DetailReviewProps {
  reviewRef: React.RefObject<HTMLDivElement>;
}

function DetailReviewSummary({ reviewRef }: DetailReviewProps) {
  return (
    <DetailReviewSummaryWrapper ref={reviewRef}>
      <Title1BoldText>리뷰</Title1BoldText>
      <ReviewSummaryWrapper>
        <DetailCountsWrapper>
          <CountsWrapper>
            <ReviewNumber>11</ReviewNumber>
            <ReviewCategory>100자평</ReviewCategory>
          </CountsWrapper>
          <CountsWrapper>
            <ReviewNumber>3</ReviewNumber>
            <ReviewCategory>리뷰</ReviewCategory>
          </CountsWrapper>
          <CountsWrapper>
            <ReviewNumber className="grey">0</ReviewNumber>
            <ReviewCategory>마이페이퍼</ReviewCategory>
          </CountsWrapper>
        </DetailCountsWrapper>
        <DetailEtcCountsWrapper>
          <EtcCountsWrapper>
            <IcEllipse51 />
            <Body2Text>읽고 싶어요 24명</Body2Text>
          </EtcCountsWrapper>
          <EtcCountsWrapper>
            <IcEllipse51 />
            <Body2Text>읽고 있어요 7명</Body2Text>
          </EtcCountsWrapper>
          <EtcCountsWrapper>
            <IcEllipse51 />
            <Body2Text>100자평 11편</Body2Text>
          </EtcCountsWrapper>
        </DetailEtcCountsWrapper>
      </ReviewSummaryWrapper>
    </DetailReviewSummaryWrapper>
  );
}

export default DetailReviewSummary;

const DetailReviewSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;

  height: 15.4rem;
  margin-top: 1.2rem;
  padding: 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  ${({ theme }) => theme.fonts.title1_bold};
`;

const ReviewSummaryWrapper = styled.div`
  display: flex;
  column-gap: 2.8rem;
  align-items: center;
`;

const DetailCountsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 21.2rem;
`;

const CountsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewNumber = styled.p`
  ${({ theme }) => theme.fonts.head1};

  &.grey {
    color: ${({ theme }) => theme.colors.grey_300};
  }
`;

const ReviewCategory = styled.p`
  ${({ theme }) => theme.fonts.body2};
`;

const DetailEtcCountsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  justify-content: space-between;
`;

const EtcCountsWrapper = styled.div`
  display: flex;
  column-gap: 0.4rem;
  align-items: center;
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};
`;
