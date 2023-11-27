import React, { useState } from 'react';
import styled from 'styled-components';
import { IcBtnShowDown, IcEnterXsGrey } from '../../assets/icons';

function DetailAuthorIntro() {
  const [isMore, setIsMore] = useState(false);

  const onClickMoreButton = () => {
    setIsMore(!isMore);
  };

  const hideText = (str: string, n: number) => {
    return str?.length > n ? str.slice(0, n) + '...' : str;
  };

  const TEXT_1 = `<설자은, 금성으로 돌아오다><[큰글자도서] 재인, 재욱,재훈 (리커버 에디션)><[큰글자도서] 아라의 소설>... 총 90 종`;
  const TEXT_2 = `소설가. 1984년 서울에서 태어났다. 장편소설 『덧니가 보고 싶어』 『지구에서 한아뿐』 『이만큼 가까이』 『재인, 재욱, 재훈』 『보건교사 안은영』 『피프티 피플』 『시선으로부터,』 『설자은, 금성으로 돌아오다』, 소설집 『옥상에서 만나요』 『목소리를 드릴게요』, 짧은소설집 『아라의 소설』, 산문집 『지구인만큼 지구를 사랑할 순 없어』 등이 있다. 창비장편소설상, 한국일보문학상, 오늘의젊은예술가상을 수상했다.`;

  return (
    <DetailAuthorIntroWrapper>
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
      <TextBoxWrapper>
        <Body2TextBox className="text1">{TEXT_1}</Body2TextBox>
        <Body2TextBox>{hideText(TEXT_2, 98)}</Body2TextBox>
      </TextBoxWrapper>
      <MoreBox>
        <IcBtnShowDown onClick={onClickMoreButton} />
      </MoreBox>
    </DetailAuthorIntroWrapper>
  );
}

export default DetailAuthorIntro;

const DetailAuthorIntroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;

  height: 27.4rem;
  margin-top: 1.2rem;
  padding: 2.4rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const AuthorIntroTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const Title1Text = styled.span`
  font: ${({ theme }) => theme.fonts.title1_reg};
`;

const Title1BoldText = styled.span`
  font: ${({ theme }) => theme.fonts.title1_bold};
`;

const Body2TextWrapper = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.grey_400};
`;

const Body2Text = styled.span`
  font: ${({ theme }) => theme.fonts.body2};
`;

const Body2TextBox = styled.p`
  font: ${({ theme }) => theme.fonts.body2};
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  white-space: pre-wrap;
  -webkit-box-orient: vertical;

  &.text1 {
    margin-bottom: 1.2rem;
  }
`;

const AuthorTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Detail2Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  column-gap: 0.8rem;
`;

const Detail2Text = styled.span`
  font: ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.black};

  &.blue {
    color: ${({ theme }) => theme.colors.blue_500};
  }
`;

const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
