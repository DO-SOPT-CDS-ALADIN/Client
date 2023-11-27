import React, { useState } from 'react';
import styled from 'styled-components';
import { IcBtnShowDown } from '../../assets/icons';
import DETAIL_TEXTS from '../../constants/detail';

function DetailBookIntro() {
  const [isMore, setIsMore] = useState(false);

  const onClickMoreButton = () => {
    setIsMore(!isMore);
  };

  const hideText = (str: string, n: number) => {
    return str?.length > n ? str.slice(0, n) + '...' : str;
  };

  return (
    <DetailBookIntroWrapper>
      <Title1BoldText>책소개</Title1BoldText>
      <Body2Text>{hideText(DETAIL_TEXTS.BOOK_INTRO, 133)}</Body2Text>
      <MoreBox>
        <IcBtnShowDown onClick={onClickMoreButton} />
      </MoreBox>
    </DetailBookIntroWrapper>
  );
}

export default DetailBookIntro;

const DetailBookIntroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  height: 16.6rem;
  padding: 2.4rem 1.6rem;
  margin-top: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  font: ${({ theme }) => theme.fonts.title1_bold};
`;

const Body2Text = styled.p`
  margin-top: 1.6rem;
  height: 7.84rem;
  font: ${({ theme }) => theme.fonts.body2};
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
