import React from 'react';
import styled from 'styled-components';
import { IcStar1, IcStar2, IcStar3, IcStar4, IcStar5 } from '../../assets/icons';

interface StarIcons {
  [key: number]: React.FC<React.SVGProps<SVGSVGElement>>;
}

function DetailReviewGraph() {
  const starIcons: StarIcons = {
    1: IcStar1,
    2: IcStar2,
    3: IcStar3,
    4: IcStar4,
    5: IcStar5,
  };

  const FillReviewRateGraph = (starCount: number, percentage: number) => {
    const IconStar = starIcons[starCount];

    return (
      <ReviewRateGraphWrapper>
        <IconStar />
        <GraphWrapper className="rate" direction="left">
          <GraphPink percentage={percentage} />
        </GraphWrapper>
        <PercentageText>{percentage}%</PercentageText>
      </ReviewRateGraphWrapper>
    );
  };

  const FillBuyerGraph = (percentage_female: number, percentage_male: number, age: string) => {
    return (
      <DetailGraphWrapper>
        <PercentageText>{percentage_female}%</PercentageText>
        <GraphWrapper direction="right">
          <GraphPink percentage={percentage_female} />
        </GraphWrapper>
        <AgeText>{age}</AgeText>
        <GraphWrapper direction="left">
          <GraphPink percentage={percentage_male} />
        </GraphWrapper>
        <PercentageText>{percentage_male}%</PercentageText>
      </DetailGraphWrapper>
    );
  };

  return (
    <DetailReviewGraphWrapper>
      <Title2BoldText>구매자 분포</Title2BoldText>
      <TotalBuyerGraphWrapper>
        {FillBuyerGraph(7, 17, '10대')}
        {FillBuyerGraph(40, 33, '20대')}
        {FillBuyerGraph(21, 20, '30대')}
        {FillBuyerGraph(19, 18, '40대')}
        {FillBuyerGraph(13, 12, '50대')}
        {FillBuyerGraph(0, 0, '60대+')}
      </TotalBuyerGraphWrapper>
      <GenderWrapper>
        <Detail2Text>여성</Detail2Text>
        <Detail2Text>남성</Detail2Text>
      </GenderWrapper>
      <Divider />
      <ReviewRateTitleWrapper>
        <Title2BoldText>평점 분포</Title2BoldText>
        <StarsWrapper>
          <IcStar5 />
          <Head4PinkText>4.5</Head4PinkText>
        </StarsWrapper>
      </ReviewRateTitleWrapper>
      <TotalReviewRateGraphWrapper>
        {FillReviewRateGraph(5, 85)}
        {FillReviewRateGraph(4, 7)}
        {FillReviewRateGraph(3, 7)}
        {FillReviewRateGraph(2, 0)}
        {FillReviewRateGraph(1, 0)}
      </TotalReviewRateGraphWrapper>
    </DetailReviewGraphWrapper>
  );
}

export default DetailReviewGraph;

const DetailReviewGraphWrapper = styled.div`
  height: 49.3rem;
  margin-top: 1rem;
  padding: 2.4rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title2BoldText = styled.p`
  margin-bottom: 1.2rem;
  ${({ theme }) => theme.fonts.title2_bold};
`;

const TotalBuyerGraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailGraphWrapper = styled.div`
  display: flex;
  justify-content: ce;
  margin-bottom: 0.8rem;
`;

const PercentageText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.8rem;
  height: 2rem;

  text-align: center;
  ${({ theme }) => theme.fonts.detail2};
`;
const GraphWrapper = styled.div<{ direction: string }>`
  display: flex;
  justify-content: ${({ direction }) => direction};
  width: 10.6rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
  &.rate {
    width: 20rem;
  }
`;

const GraphPink = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  background-color: ${({ theme }) => theme.colors.pink_400};
`;

const AgeText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5.4rem;

  line-height: normal;
  text-align: center;
  letter-spacing: -0.6px;

  ${({ theme }) => theme.fonts.detail1};
`;

const GenderWrapper = styled.div`
  display: flex;
  column-gap: 5.4rem;
  justify-content: center;
  margin-bottom: 1.6rem;
`;

const Detail2Text = styled.span`
  ${({ theme }) => theme.fonts.detail2};

  letter-spacing: -0.6px;
`;

const Divider = styled.div`
  width: 34.3rem;
  height: 0.1rem;
  margin-bottom: 1.7rem;
  background-color: ${({ theme }) => theme.colors.grey_300};
`;

const ReviewRateTitleWrapper = styled.div`
  display: flex;
  column-gap: 3.8rem;
  height: 2rem;
  margin-bottom: 1.3rem;
`;

const TotalReviewRateGraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

const StarsWrapper = styled.div`
  display: inline-flex;
  column-gap: 0.5rem;
  align-items: center;
`;

const Head4PinkText = styled.span`
  display: flex;

  ${({ theme }) => theme.fonts.head4};

  color: ${({ theme }) => theme.colors.pink_400};
`;
const ReviewRateGraphWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
`;
