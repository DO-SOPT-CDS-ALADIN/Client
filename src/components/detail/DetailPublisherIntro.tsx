import React, { useState } from 'react';
import styled from 'styled-components';
import { IcBtnShowDown } from '../../assets/icons';
import DETAIL_TEXTS from '../../constants/detail';

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
      <Body2Text>{hideText(DETAIL_TEXTS.PUBLISHER_INTRO, 130)}</Body2Text>
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

  height: 17.8rem;
  padding: 2.4rem 1.6rem;
  margin-top: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  font: ${({ theme }) => theme.fonts.title1_bold};
`;

const Body2Text = styled.p`
  margin-top: 1.6rem;
  height: 9.2rem;
  font: ${({ theme }) => theme.fonts.body2_large};
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;

  -webkit-box-orient: vertical;
`;

const MoreBox = styled.div`
  display: flex;
  justify-content: flex-end;

  position: absolute;
  bottom: 0;
  left: 0;

  height: 8rem;
  width: 100%;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);

  & > svg {
    position: absolute;
    bottom: 0;
  }
`;
