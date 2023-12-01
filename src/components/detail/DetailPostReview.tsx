import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IcCheckboxChecked,
  IcCheckboxGray,
  IcEnterXsGrey,
  IcStarLargeGray,
  IcStarLargePink,
} from '../../assets/icons';
import DETAIL_TEXTS from '../../constants/DETAIL_TEXTS';
import usePostReview from '../../hooks/usePostReview';

interface DetailPostReviewProps {
  bookId: number;
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
}

function DetailPostReview({ bookId, setToast, setToastMessage }: DetailPostReviewProps) {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [star, setStar] = useState(5);
  const [clickedStars, setClickedStars] = useState([true, true, true, true, true]);
  const [isChecked, setIsChecked] = useState(false);

  const { reviewResponse, reviewError, reviewLoading, postReview } = usePostReview(bookId);

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const onClickCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleClickPostButton = async () => {
    try {
      await postReview(star, textAreaValue);
      if (!reviewError && !reviewLoading && reviewResponse) {
        setToastMessage(reviewResponse.message);
        setToast(true);
        setTextAreaValue('');
        setStar(5);
        setClickedStars([true, true, true, true, true]);
        setIsChecked(false);
      }
    } catch (error) {
      setToastMessage(reviewResponse.message);
      setToast(true);
    }
  };

  const handleClickStar = (index: number) => {
    const clickStates = clickedStars.map((_, i) => i <= index);
    setClickedStars(clickStates);
    const starNum = clickStates.filter(status => status).length;
    setStar(starNum);
  };

  return (
    <DetailPostReviewWrapper>
      <Title1BoldText>100자평</Title1BoldText>
      <Body2Wrapper>
        <Body2Text className="grey">게시물 운영 원칙</Body2Text>
        <IcEnterXsGrey />
      </Body2Wrapper>
      <StarClickWrapper>
        <Head3PinkText>{star}</Head3PinkText>
        <StarsWrapper>
          {clickedStars.map((clicked, index) =>
            clicked ? (
              <IcStarLargePink key={index} onClick={() => handleClickStar(index)} />
            ) : (
              <IcStarLargeGray key={index} onClick={() => handleClickStar(index)} />
            )
          )}
        </StarsWrapper>
        <Detail2Text>{DETAIL_TEXTS.SELECT_STARS}</Detail2Text>
      </StarClickWrapper>
      <ReviewTextarea
        value={textAreaValue}
        onChange={handleTextAreaChange}
        maxLength={280}
        placeholder={DETAIL_TEXTS.REVIEW_PLACEHOLDER}
      />
      <ByteCountText>현재 {textAreaValue.length}/280byte</ByteCountText>
      <SpoilerCheckboxWrapper>
        {isChecked ? (
          <IcCheckboxChecked onClick={onClickCheckbox} />
        ) : (
          <IcCheckboxGray onClick={onClickCheckbox} />
        )}
        <Body2Text>스포일러 포함</Body2Text>
      </SpoilerCheckboxWrapper>
      <PostButton type="button" onClick={handleClickPostButton}>
        등록
      </PostButton>
    </DetailPostReviewWrapper>
  );
}

export default DetailPostReview;

const DetailPostReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 1.2rem;
  padding: 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
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
  row-gap: 0.4rem;
  align-items: center;
`;

const Head3PinkText = styled.p`
  ${({ theme }) => theme.fonts.head3};

  color: ${({ theme }) => theme.colors.pink_400};
`;

const StarsWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;

  svg {
    cursor: pointer;
  }
`;

const Detail2Text = styled.p`
  ${({ theme }) => theme.fonts.detail2};

  color: ${({ theme }) => theme.colors.grey_400};
`;

const ReviewTextarea = styled.textarea`
  resize: none;

  height: 10rem;
  margin-top: 0.85rem;
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.body2};

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey_400};
  }
`;

const ByteCountText = styled.p`
  margin-top: 0.8rem;
  text-align: right;
  ${({ theme }) => theme.fonts.body2};
`;

const SpoilerCheckboxWrapper = styled.div`
  position: relative;
  top: -0.2rem;

  display: flex;
  column-gap: 1rem;
  align-items: center;

  & > svg {
    cursor: pointer;
  }
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};

  &.grey {
    color: ${({ theme }) => theme.colors.grey_400};
  }
`;

const PostButton = styled.button`
  height: 4.8rem;
  margin-top: 1.8rem;
  padding: 0.8rem;

  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.blue_400};
  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.title2_bold};
`;
