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

  const TEXT = `언제나 우리에게 놀라운 재미와 따뜻한 감동을 동시에 전해주는 작가, 정세랑이 『시선으로부터,』
        이후 3년 만의 신작 장편소설 『설자은, 금성으로 돌아오다』로 돌아왔다. 한번 손에 쥐면
        순식간에 빠져들 수밖에 없는 흡인력 있는 전개와 사랑스러운 언제나 우리에게 놀라운 재미와 따뜻한 감동을
        동시에 전해주는 작가, 정세랑이 『시선으로부터,』 이후 3년 만의 신작 장편소설 『설자은,
        금성으로 돌아오다』로 돌아왔다. 한번 손에 쥐면 순식간에 빠져들 수밖에 없는 흡인력 있는
        전개와 사랑스`;

  return (
    <DetailBookIntroWrapper>
      <Title1BoldText>책소개</Title1BoldText>
      <Body2Text>{hideText(TEXT, 150)}</Body2Text>
      <MoreBox>
        <IcBtnShowDown onClick={onClickMoreButton} />
      </MoreBox>
    </DetailBookIntroWrapper>
  );
}

export default DetailBookIntro;

const DetailBookIntroWrapper = styled.div`
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

  font: ${({ theme }) => theme.fonts.body2};
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
