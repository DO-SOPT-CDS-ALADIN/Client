import React, { useState } from 'react';
import styled from 'styled-components';
import { IcBtnShowDown } from '../../assets/icons';

function DetailBookIntro() {
  const [isMore, setIsMore] = useState(false);

  const onClickMoreButton = () => {
    setIsMore(!isMore);
  };

  const hideText = (str: string, n: number) => {
    return str?.length > n ? str.slice(0, n) + '...' : str;
  };

  const TEXT = `언제나 우리에게 놀라운 재미와 따뜻한 감동을 동시에 전해주는 작가, 정세랑이 『시선으로부터,』 이후 3년 만의 신작 장편소설 『설자은, 금성으로 돌아오다』로 돌아왔다. 한번 손에 쥐면 순식간에 빠져들 수밖에 없는 흡인력 있는 전개와 사랑스럽고 생동감 있는 인물들, 읽는 이를 빈틈없이 감싸안는 온기 어린 시선으로 독자들의 확고한 지지를 받아온 정세랑은 자신만의 분명한 목소리를 지니면서도 폭 넓은 스펙트럼으로 작품 세계를 확장해왔다. 『시선으로부터,』로는 모계를 중심으로 이어지는 삼대의 이야기를 통해 새로운 가족상을 제시해 교보문고, 예스24, 알라딘 종합 베스트셀러 1위, 조선일보, 경향신문, 문화일보 등 다수의 매체에서 올해의 책으로 선정되며 전 국민적인 사랑을 받았고, 같은 해 동명의 소설을 원작으로 한 넷플릭스 시리즈 〈보건교사 안은영〉(이경미 연출, 정유미·남주혁 주연) 또한 화제를 불러일으키며 스토리텔러로서의 저력을 여실히 증명한 바 있다.\n그런 정세랑이 이번에는 본격 명랑 역사 미스터리 소설을 선보인다. 『설자은, 금성으로 돌아오다』는 정세랑이 펴내는 첫 역사소설이자 첫 추리소설, 그리고 첫 시리즈인 ‘설자은 시리즈’의 1권이다. ‘설자은 시리즈’는 통일신라시대의 수도 금성을 배경으로, 왕실의 서기로 일하는 설자은이 주변에서 일어나는 미스터리한 사건들을 해결해나가는 이야기를 담고 있다. 1권 『설자은, 금성으로 돌아오다』는 어린 시절 죽은 오빠를 대신해 남장을 하고 당나라로 유학을 떠난 설자은이 금성으로 돌아온 뒤, 망국 백제 출신 장인 목인곤을 식객으로 들여 함께 수수께끼 같은 사건들을 해결하다 왕의 눈에 띄어 월지에서 열린 연회에 초대되는 과정까지를 그린다. 정세랑이 만들어낸 또하나의 환상적인 세계, 당시의 모습을 눈앞에 펼쳐 보이듯 생생하게 그려낸 7세기의 먼 과거에서 매력적인 인물들이 벌이는 흥미진진한 미스터리 모험담. 오래도록 독자들을 사로잡을 장대한 이야기가 여기에서 시작된다.`;

  return (
    <DetailBookIntroWrapper>
      <Title1BoldText>책소개</Title1BoldText>
      <Body2Text>{hideText(TEXT, 133)}</Body2Text>
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
