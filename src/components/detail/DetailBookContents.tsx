import React, { useState } from 'react';
import styled from 'styled-components';
import { IcBtnShowDown } from '../../assets/icons';
import DETAIL_TEXTS from '../../constants/DETAIL_TEXTS';

function DetailBookContents() {
  const [isMore, setIsMore] = useState(false);

  const onClickMoreButton = () => {
    setIsMore(!isMore);
  };

  const hideText = (str: string, n: number) => {
    return str?.length > n ? str.slice(0, n) + '...' : str;
  };

  return (
    <DetailBookContentsWrapper>
      <Title1BoldText>목차</Title1BoldText>
      <Body2Text>{hideText(DETAIL_TEXTS.CONTENTS, 150)}</Body2Text>
      <MoreBox>
        <IcBtnShowDown onClick={onClickMoreButton} />
      </MoreBox>
    </DetailBookContentsWrapper>
  );
}

export default DetailBookContents;

const DetailBookContentsWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  height: 14.6rem;
  margin-top: 1.2rem;
  padding: 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  ${({ theme }) => theme.fonts.title1_bold};
`;

const Body2Text = styled.p`
  overflow: hidden;
  display: box;

  height: 5.88rem;
  margin-top: 1.6rem;

  ${({ theme }) => theme.fonts.body2};

  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;

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
    position: absolute;
    bottom: 0;
  }
`;
