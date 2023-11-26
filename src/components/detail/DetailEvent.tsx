import React from 'react';
import styled from 'styled-components';
import { IcEnterXsGrey } from '../../assets/icons';
import ImgDetailEventCard from '../../assets/imgs/img_event_1.png';

function DetailEvent() {
  return (
    <DetailEventWrapper>
      <DetailEventTitleWrapper>
        <Title1BoldText>관련 이벤트</Title1BoldText>
        <Body2TextWrapper>
          <Body2Text>더보기</Body2Text>
          <IcEnterXsGrey />
        </Body2TextWrapper>
      </DetailEventTitleWrapper>
      <EventScrollWrapper>
        <EventScrollCard src={ImgDetailEventCard} />
        <EventScrollCard src={ImgDetailEventCard} />
        <EventScrollCard src={ImgDetailEventCard} />
        <EventScrollCard src={ImgDetailEventCard} />
      </EventScrollWrapper>
    </DetailEventWrapper>
  );
}

export default DetailEvent;

const DetailEventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;

  height: 30.6rem;
  margin-top: 1.2rem;
  padding: 2.4rem 0 2.4rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const DetailEventTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
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

const EventScrollWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 22rem;
  margin-top: 1.6rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const EventScrollCard = styled.img`
  width: 32.1rem;
  height: 22rem;
  margin-right: 0.8rem;

  border-radius: 0.8rem;
  box-shadow: ${({ theme }) => theme.shadows.mini};
  object-fit: cover;
`;
