import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IcReviewLikeOn,
  IcReviewLikeOff,
  IcReviewThankstoOn,
  IcReviewThankstoOff,
  IcStar5,
  IcBtnShowDown,
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
  const [isMore, setIsMore] = useState(false);

  const hideText = (str: string, n: number) => {
    return str?.length > n ? str.slice(0, n) + '...' : str;
  };

  const handleClickThanks = () => {
    setThanks(!thanks);
  };

  const handleClickLike = () => {
    setLike(!like);
  };

  const onClickMoreButton = () => {
    setIsMore(!isMore);
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
      <Body1Text isMore={isMore}>{isMore ? content : hideText(content, 133)}</Body1Text>
      <MoreBox>
        <IcBtnShowDown onClick={onClickMoreButton} />
      </MoreBox>
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
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;

  padding-top: 1.6rem;
`;

const ReviewWriterInfoWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
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
  align-items: center;
  justify-content: center;

  width: 3.6rem;
  height: 2.3rem;

  line-height: normal;
  color: ${({ theme }) => theme.colors.blue_500};
  letter-spacing: -0.6px;

  background: ${({ theme }) => theme.colors.blue_100};
  border-radius: 0.4rem;

  ${({ theme }) => theme.fonts.detail1};
`;

const WriterInfoStarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Body1Text = styled.p<{ isMore: boolean }>`
  ${({ theme }) => theme.fonts.body1_copy};

  overflow: hidden;
  display: box;

  margin-bottom: ${({ isMore }) => (isMore ? `8rem` : `0rem`)};

  text-align: left;
  word-wrap: break-word;

  -webkit-box-orient: vertical;
`;

const MoreBox = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;

  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 8rem;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);

  & > svg {
    cursor: pointer;
    position: absolute;
    bottom: 0;
  }
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
