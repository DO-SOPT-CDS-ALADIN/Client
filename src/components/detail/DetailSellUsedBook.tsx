import React from 'react';
import styled from 'styled-components';

function DetailSellUsedBook() {
  return (
    <UsedBookDivWrapper>
      <Title1BoldText>중고판매</Title1BoldText>
      <SellPriceWrapper>
        <Body2Text>중고가&nbsp;</Body2Text>
        <Body1Text className="pink">8,300</Body1Text>
        <Body2Text>원 (</Body2Text>
        <Body2Text className="pink">최상&nbsp;</Body2Text>
        <Body2Text>기준)</Body2Text>
      </SellPriceWrapper>
      <SellOptionBoxWrapper>
        <SellOptionBox>
          <OptionText>중고{`\n`}알라딘에 팔기</OptionText>
        </SellOptionBox>
        <SellOptionBox>
          <OptionText>중고{'\n'}회원에게 팔기</OptionText>
        </SellOptionBox>
        <SellOptionBox className="selected">
          <OptionText className="selected">중고 등록{'\n'}알림 신청</OptionText>
        </SellOptionBox>
      </SellOptionBoxWrapper>
    </UsedBookDivWrapper>
  );
}

export default DetailSellUsedBook;

const UsedBookDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  width: 100%;
  height: 16.6rem;
  margin-top: 1.2rem;
  padding: 2.4rem 1.6rem;
  row-gap: 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  font: ${({ theme }) => theme.fonts.title1_bold};
`;

const SellPriceWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

const Body2Text = styled.span`
  font: ${({ theme }) => theme.fonts.body2};
  &.pink {
    color: ${({ theme }) => theme.colors.pink_400};
  }
`;

const Body1Text = styled.span`
  font: ${({ theme }) => theme.fonts.body1};
  &.pink {
    color: ${({ theme }) => theme.colors.pink_400};
  }
`;

const SellOptionBoxWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

const SellOptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 11.1rem;
  height: 6rem;
  padding: 0.8rem 1.6rem;

  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.blue_400};

  &.selected {
    background-color: ${({ theme }) => theme.colors.blue_400};
  }
`;

const OptionText = styled.div`
  text-align: center;
  white-space: pre-line;

  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.blue_400};

  &.selected {
    color: ${({ theme }) => theme.colors.white};
  }
`;
