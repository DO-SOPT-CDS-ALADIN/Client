import React, { useState } from 'react';
import styled from 'styled-components';
import { IcBtnShowDown, IcEnterXsGrey } from '../../assets/icons';
import DETAIL_TEXTS from '../../constants/DETAIL_TEXTS';

function DetailAuthorIntro() {
  const [isMore, setIsMore] = useState(false);

  const onClickMoreButton = () => {
    setIsMore(!isMore);
  };

  const hideText = (str: string, n: number) => {
    return str?.length > n ? str.slice(0, n) + '...' : str;
  };

  return (
    <DetailAuthorIntroWrapper isMore={isMore}>
      <AuthorIntroTitleWrapper>
        <Title1BoldText>저자 소개</Title1BoldText>
        <Body2TextWrapper>
          <Body2Text>더보기</Body2Text>
          <IcEnterXsGrey />
        </Body2TextWrapper>
      </AuthorIntroTitleWrapper>
      <AuthorTitleWrapper>
        <TitleWrapper>
          <Title1Text>지은이:&nbsp;</Title1Text>
          <Title1BoldText>정세랑</Title1BoldText>
        </TitleWrapper>
        <Detail2Wrapper>
          <Detail2Text className="blue">저자파일</Detail2Text>
          <Detail2Text className="blue">신간알리미 신청</Detail2Text>
        </Detail2Wrapper>
      </AuthorTitleWrapper>
      <Title1Text>최근작</Title1Text>
      <TextBoxWrapper isMore={isMore}>
        <Body2TextBox className="text1">{DETAIL_TEXTS.AUTHOR_INTRO_1}</Body2TextBox>
        <Body2TextBox>
          {isMore ? DETAIL_TEXTS.AUTHOR_INTRO_2 : hideText(DETAIL_TEXTS.AUTHOR_INTRO_2, 98)}
        </Body2TextBox>
      </TextBoxWrapper>
      <MoreBox>
        <IcBtnShowDown onClick={onClickMoreButton} />
      </MoreBox>
    </DetailAuthorIntroWrapper>
  );
}

export default DetailAuthorIntro;

const DetailAuthorIntroWrapper = styled.div<{ isMore: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;

  height: ${({ isMore }) => (isMore ? `` : `27.4rem`)};
  margin-top: 1.2rem;
  padding: 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const AuthorIntroTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title1Text = styled.span`
  ${({ theme }) => theme.fonts.title1_reg};

  line-height: normal;
`;

const Title1BoldText = styled.span`
  ${({ theme }) => theme.fonts.title1_bold_re};
`;

const Body2TextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey_400};
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};
`;

const Body2TextBox = styled.p`
  overflow: hidden;
  display: box;

  ${({ theme }) => theme.fonts.body2};

  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;

  -webkit-box-orient: vertical;

  &.text1 {
    margin-bottom: 1.2rem;
  }
`;

const AuthorTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Detail2Wrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
  justify-content: right;
`;

const Detail2Text = styled.span`
  ${({ theme }) => theme.fonts.detail2};

  line-height: normal;
  color: ${({ theme }) => theme.colors.black};
  &.blue {
    color: ${({ theme }) => theme.colors.blue_500};
  }
`;

const TextBoxWrapper = styled.div<{ isMore: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ isMore }) => (isMore ? `8rem` : `0rem`)};
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
