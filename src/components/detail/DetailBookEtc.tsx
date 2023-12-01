import React from 'react';
import styled from 'styled-components';
import { IcEllipse51, IcEllipse51Grey, IcStar5 } from '../../assets/icons';

interface DetailBookEtcProps {
  star: number;
}

function DetailBookEtc({ star }: DetailBookEtcProps) {
  return (
    <BookEtcWrapper>
      <BookScoreWrapper>
        <StarWrapper>
          <IcStar5 />
          <ReviewScore>{star}.0</ReviewScore>
        </StarWrapper>
        <ReviewNumWrapper>
          <ReviewNum>
            <IcEllipse51 />
            <Body2Text>100자평 11편</Body2Text>
          </ReviewNum>
          <ReviewNum>
            <IcEllipse51 /> <Body2Text>리뷰 3편</Body2Text>
          </ReviewNum>
        </ReviewNumWrapper>
      </BookScoreWrapper>
      <BookDescriptionWrapper>
        <DescriptionWrapper>
          <IcEllipse51Grey /> <Body2Text>세일즈포인트</Body2Text>
          <Body1Text>76,390</Body1Text>
          <IcEllipse51Grey />
          <Body2Text className="blue">종합 주간 9위</Body2Text>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <IcEllipse51Grey /> <Body2Text>296쪽</Body2Text>
          <IcEllipse51Grey /> <Body2Text>133*200mm</Body2Text>
          <IcEllipse51Grey /> <Body2Text>362g</Body2Text>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <IcEllipse51Grey /> <Body2Text>ISBN 8214908231409</Body2Text>
        </DescriptionWrapper>
      </BookDescriptionWrapper>
      <Divider />
      <TopicTitleWrapper>
        <Title1Text>주제분류</Title1Text>
        <Detail2Text>신간알리미 신청</Detail2Text>
      </TopicTitleWrapper>
      <DescriptionWrapper className="category">
        <IcEllipse51Grey /> <Body2Text>소설/시/희곡 &gt; 역사소설</Body2Text>
      </DescriptionWrapper>
      <DescriptionWrapper className="category">
        <IcEllipse51Grey />
        <Body2Text>소설/시/희곡 &gt; 추리/미스터리소설 &gt; 한국 추리/미스터리소설</Body2Text>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <IcEllipse51Grey />
        <Body2Text>소설/시/희곡 &gt; 한국소설 &gt; 2000년대 이후 한국소설</Body2Text>
      </DescriptionWrapper>
    </BookEtcWrapper>
  );
}

export default DetailBookEtc;

const BookEtcWrapper = styled.div`
  width: 100%;
  margin-top: 1.2rem;
  padding: 2.4rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
const BookScoreWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.7rem;
`;

const StarWrapper = styled.span`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  line-height: 2rem;
`;

const ReviewScore = styled.span`
  ${({ theme }) => theme.fonts.head4};

  color: ${({ theme }) => theme.colors.pink_400};
`;

const ReviewNumWrapper = styled.span`
  display: flex;
  column-gap: 0.8rem;
`;

const DescriptionWrapper = styled.p`
  display: flex;
  column-gap: 0.4rem;
  align-items: center;
  justify-content: left;

  line-height: 1.96rem;

  &.category {
    margin-bottom: 0.8rem;
  }
`;

const Body1Text = styled.span`
  ${({ theme }) => theme.fonts.body1};

  color: ${({ theme }) => theme.colors.black};
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};

  color: ${({ theme }) => theme.colors.black};

  &.blue {
    color: ${({ theme }) => theme.colors.blue_500};
  }
`;

const ReviewNum = styled.span`
  display: flex;
  column-gap: 0.4rem;
  align-items: center;
`;

const BookDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;

const Divider = styled.div`
  width: 34.3rem;
  height: 0.1rem;
  margin: 1.6rem 0;
  background-color: ${({ theme }) => theme.colors.grey_300};
`;

const TopicTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

const Title1Text = styled.span`
  ${({ theme }) => theme.fonts.title1_bold};
`;

const Detail2Text = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.detail2};

  color: ${({ theme }) => theme.colors.blue_500};
`;
