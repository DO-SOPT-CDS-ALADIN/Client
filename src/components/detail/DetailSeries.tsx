import { useState } from 'react';
import styled from 'styled-components';
import {
  IcCart,
  IcCheckboxChecked,
  IcCheckboxUncheckedGrey,
  IcEnterXs,
  IcHeartOff,
  IcHeartOn,
} from '../../assets/icons';

function DetailSeries() {
  const [seriesLike, setSeriesLike] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSeriesLikeClick = () => {
    setSeriesLike(!seriesLike);
  };

  const onClickCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <DetailSeriesWrapper>
      <SeriesTitleWrapper>
        <TitleWrapper>
          <Title1BoldText>설자은 시리즈 (총1권)</Title1BoldText>
          <IcEnterXs />
        </TitleWrapper>
        <Detail2Text className="blue">신간알리미 신청</Detail2Text>
      </SeriesTitleWrapper>
      <CheckboxWrapper>
        {isChecked ? (
          <IcCheckboxChecked onClick={onClickCheckbox} />
        ) : (
          <IcCheckboxUncheckedGrey onClick={onClickCheckbox} />
        )}
        <SeriesInfoWrapper>
          <Body2Text>설자은, 금성으로 돌아오다</Body2Text>
          <DetailTextsWrapper>
            <Detail2Text>판매가&nbsp;</Detail2Text>
            <Detail1Text className="pink">15,120</Detail1Text>
            <Detail2Text>원</Detail2Text>
          </DetailTextsWrapper>
        </SeriesInfoWrapper>
      </CheckboxWrapper>
      <Divider />
      <SeriesUnderWrapper>
        <TotalCheckboxWrapper>
          {isChecked ? (
            <IcCheckboxChecked onClick={onClickCheckbox} />
          ) : (
            <IcCheckboxUncheckedGrey onClick={onClickCheckbox} />
          )}
          <Body2Text>전체선택</Body2Text>
        </TotalCheckboxWrapper>
        <SeriesButtonsWrapper>
          <WideButtonImageWrapper>
            <Body2Text className="grey">모두보기</Body2Text>
          </WideButtonImageWrapper>
          <ButtonImageWrapper onClick={handleSeriesLikeClick}>
            {seriesLike ? <IcHeartOn /> : <IcHeartOff />}
          </ButtonImageWrapper>
          <ButtonImageWrapper>
            <IcCart />
          </ButtonImageWrapper>
        </SeriesButtonsWrapper>
      </SeriesUnderWrapper>
    </DetailSeriesWrapper>
  );
}

export default DetailSeries;

const DetailSeriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 20.7rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  padding: 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  ${({ theme }) => theme.fonts.title1_bold};
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};
  &.pink {
    color: ${({ theme }) => theme.colors.pink_400};
  }
  &.grey {
    color: ${({ theme }) => theme.colors.grey_600};
  }
`;

const SeriesTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 2.6rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const DetailTextsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 0.2rem;
`;

const Detail2Text = styled.span`
  ${({ theme }) => theme.fonts.detail2};

  color: ${({ theme }) => theme.colors.black};

  &.blue {
    color: ${({ theme }) => theme.colors.blue_500};
  }
`;

const Detail1Text = styled.span`
  ${({ theme }) => theme.fonts.detail1};

  color: ${({ theme }) => theme.colors.black};

  &.pink {
    color: ${({ theme }) => theme.colors.pink_400};
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  column-gap: 1.8rem;
  align-items: center;
  justify-content: left;

  width: 100%;
  padding-left: 1rem;

  & > svg {
    cursor: pointer;
  }
`;

const TotalCheckboxWrapper = styled.div`
  display: flex;
  column-gap: 1.4rem;
  align-items: center;
  justify-content: left;

  padding-left: 1rem;

  & > svg {
    cursor: pointer;
  }
`;

const SeriesInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.div`
  width: 34.3rem;
  margin: 1.6rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_300};
`;

const SeriesUnderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SeriesButtonsWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
`;

const WideButtonImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 7.8rem;
  height: 4rem;

  line-height: 1.96rem;
  text-align: center;

  border: 0.1rem solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
`;

const ButtonImageWrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
`;
