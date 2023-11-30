import React, { useState } from 'react';
import styled from 'styled-components';
import { IcBtnShowDown } from '../../assets/icons';
import DETAIL_TEXTS from '../../constants/DETAIL_TEXTS';

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
      <Body2Text isMore={isMore}>
        {isMore ? DETAIL_TEXTS.BOOK_INTRO : hideText(DETAIL_TEXTS.BOOK_INTRO, 133)}
      </Body2Text>
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

  width: 100%;
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

  ${({ theme }) => theme.fonts.body2};

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
