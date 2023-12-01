import React, { useState } from 'react';
import styled from 'styled-components';
import { IcBtnShowDown } from '../../assets/icons';
import DETAIL_TEXTS from '../../constants/DETAIL_TEXTS';

function DetailPublisherIntro() {
  const [isMore, setIsMore] = useState(false);

  const onClickMoreButton = () => {
    setIsMore(!isMore);
  };

  const hideText = (str: string, n: number) => {
    return str?.length > n ? str.slice(0, n) + '...' : str;
  };

  return (
    <DetailPublisherIntroWrapper>
      <Title1BoldText>출판사 제공 책소개</Title1BoldText>
      <Body2Text isMore={isMore}>
        {isMore ? DETAIL_TEXTS.PUBLISHER_INTRO : hideText(DETAIL_TEXTS.PUBLISHER_INTRO, 130)}
      </Body2Text>
      <MoreBox>
        <IcBtnShowDown onClick={onClickMoreButton} />
      </MoreBox>
    </DetailPublisherIntroWrapper>
  );
}

export default DetailPublisherIntro;

const DetailPublisherIntroWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  /* height: 17.8rem; */
  margin-top: 1.2rem;
  padding: 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  ${({ theme }) => theme.fonts.title1_bold_re};
`;

const Body2Text = styled.p<{ isMore: boolean }>`
  overflow: hidden;
  display: box;

  margin-top: 1.6rem;
  margin-bottom: ${({ isMore }) => (isMore ? `8rem` : `0rem`)};

  ${({ theme }) => theme.fonts.body2_large};

  text-align: left;
  word-wrap: break-word;

  -webkit-box-orient: vertical;
`;

const MoreBox = styled.div`
  position: absolute;
  bottom: 0;
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
