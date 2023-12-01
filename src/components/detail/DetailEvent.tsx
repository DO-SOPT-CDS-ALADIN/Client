import React from 'react';
import styled from 'styled-components';
import { IcEnterXsGrey } from '../../assets/icons';
import ImgDetailEventCard from '../../assets/imgs/img_event_1.png';

interface DetailEventProps {
  eventRef: React.RefObject<HTMLDivElement>;
}

function DetailEvent({ eventRef }: DetailEventProps) {
  return (
    <DetailEventWrapper ref={eventRef}>
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
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: center;

  height: 30.6rem;
  margin-top: 1.2rem;
  padding: 2.4rem 0 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const DetailEventTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title1BoldText = styled.span`
  ${({ theme }) => theme.fonts.title1_bold};
`;

const Body2TextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey_400};
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};
`;

const EventScrollWrapper = styled.div`
  overflow-x: auto;
  display: flex;

  width: 100%;
  height: 22rem;
  margin-top: 1.6rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const EventScrollCard = styled.img`
  width: 32.1rem;
  height: 22rem;
  margin-right: 0.8rem;

  object-fit: cover;
  border-radius: 0.8rem;
  box-shadow: ${({ theme }) => theme.shadows.mini};
`;
