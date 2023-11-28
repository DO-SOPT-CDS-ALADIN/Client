import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IcReviewLikeOn,
  IcReviewLikeOff,
  IcReviewThankstoOn,
  IcReviewThankstoOff,
  IcStar5,
} from '../../assets/icons';
import ImgMyReviewProfile from '../../assets/imgs/img_my_review_profile.png';

interface MyReviewItemProps {
  userId: string;
  date: string;
  content: string;
  agreeNum: number;
  commentNum: number;
}

function DetailMyReviewItem({ userId, date, content, agreeNum, commentNum }: MyReviewItemProps) {
  const [thanks, setThanks] = useState(false);
  const [like, setLike] = useState(false);

  const handleClickThanks = () => {
    setThanks(!thanks);
  };

  const handleClickLike = () => {
    setLike(!like);
  };

  return (
    <DetailMyReviewItemWrapper>
      <ReviewWriterInfoWrapper>
        <ImgProfile src={ImgMyReviewProfile} />
        <WriterInfoStarsWrapper>
          <WriterInfoWrapper>
            <BuyerLabel>구매</BuyerLabel>
            <Body2Text>{userId}</Body2Text>
            <Body2Text className="grey">{date}</Body2Text>
          </WriterInfoWrapper>
          <IcStar5 />
        </WriterInfoStarsWrapper>
      </ReviewWriterInfoWrapper>
      <Body2Text>{content}</Body2Text>
      <CountsWrapper>
        <Body2Text>
          공감({agreeNum}) 댓글({commentNum})
        </Body2Text>
        <ButtonsWrapper>
          {thanks ? (
            <IcReviewThankstoOn onClick={handleClickThanks} />
          ) : (
            <IcReviewThankstoOff onClick={handleClickThanks} />
          )}
          {like ? (
            <IcReviewLikeOn onClick={handleClickLike} />
          ) : (
            <IcReviewLikeOff onClick={handleClickLike} />
          )}
        </ButtonsWrapper>
      </CountsWrapper>
    </DetailMyReviewItemWrapper>
  );
}

export default DetailMyReviewItem;

const DetailMyReviewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  padding: 1.6rem 1.6rem 0 1.6rem;
`;

const ReviewWriterInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;

  margin-bottom: 0.8rem;

  & > .more {
    position: relative;
    top: 0;
    right: -0.4rem;
  }
`;

const ImgProfile = styled.img``;

const WriterInfoWrapper = styled.div`
  display: flex;
  column-gap: 0.4rem;
`;

const BuyerLabel = styled.div`
  display: flex;
  width: 3.6rem;
  height: 2.3rem;
  justify-content: center;
  align-items: center;

  border-radius: 0.4rem;
  background: ${({ theme }) => theme.colors.blue_100};

  ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.blue_500};
  line-height: normal;
  letter-spacing: -0.6px;
`;

const WriterInfoStarsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 1rem;
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};

  &.grey {
    color: ${({ theme }) => theme.colors.grey_400};
  }
`;
const CountsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1.5rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grey_300};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 1.2rem;

  & svg {
    cursor: pointer;
  }
`;
