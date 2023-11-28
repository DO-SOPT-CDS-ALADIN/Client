import React, { useState } from 'react';
import styled from 'styled-components';
import { IcCheckboxGray, IcEnterXsGrey, IcStarLargePink } from '../../assets/icons';

function DetailPostReview() {
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <DetailPostReviewWrapper>
      <Title1BoldText>100자평</Title1BoldText>
      <Body2Wrapper>
        <Body2Text className="grey">게시물 운영 원칙</Body2Text>
        <IcEnterXsGrey />
      </Body2Wrapper>
      <StarClickWrapper>
        <Head3PinkText>5</Head3PinkText>
        <StarsWrapper>
          <IcStarLargePink />
          <IcStarLargePink />
          <IcStarLargePink />
          <IcStarLargePink />
          <IcStarLargePink />
        </StarsWrapper>
        <Detail2Text>별점을 선택하세요.</Detail2Text>
      </StarClickWrapper>
      <ReviewTextarea
        value={textAreaValue}
        onChange={handleTextAreaChange}
        maxLength={280}
        placeholder="배송 문의나 욕설 및 인신공격성 글은 상품 페이지에서 노출 제외처리됩니다."
      />
      <ByteCountText>현재 {textAreaValue.length}/280byte</ByteCountText>
      <SpoilerCheckboxWrapper>
        <IcCheckboxGray />
        <Body2Text>스포일러 포함</Body2Text>
      </SpoilerCheckboxWrapper>
      <PostButton type="button">등록</PostButton>
    </DetailPostReviewWrapper>
  );
}

export default DetailPostReview;

const DetailPostReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 38.6rem;
  padding: 2.4rem 1.6rem;
  margin-top: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  line-height: normal;
  font-style: normal;
  ${({ theme }) => theme.fonts.title1_bold};
`;

const Body2Wrapper = styled.div`
  position: relative;
  top: -2.6rem;
  right: -24.3rem;

  display: flex;
`;

const StarClickWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 0.4rem;
`;

const Head3PinkText = styled.p`
  margin-top: 0.6rem;

  ${({ theme }) => theme.fonts.head3};
  color: ${({ theme }) => theme.colors.pink_400};
`;

const StarsWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
`;

const Detail2Text = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.grey_400};
`;

const ReviewTextarea = styled.textarea`
  height: 10rem;
  padding: 1rem;
  margin-top: 0.85rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  resize: none;

  ${({ theme }) => theme.fonts.body2};

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey_400};
  }
`;

const ByteCountText = styled.p`
  margin-top: 0.8rem;

  text-align: right;
  ${({ theme }) => theme.fonts.body2};
  font-style: normal;
`;

const SpoilerCheckboxWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;

  position: relative;
  top: -0.2rem;
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};

  &.grey {
    color: ${({ theme }) => theme.colors.grey_400};
  }
`;

const PostButton = styled.button`
  height: 4.8rem;
  padding: 0.8rem;
  margin-top: 1.8rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.blue_400};
  ${({ theme }) => theme.fonts.title2_bold};
  color: ${({ theme }) => theme.colors.white};
`;
