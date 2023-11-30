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
          <OptionText>{`중고\n알라딘에 팔기`}</OptionText>
        </SellOptionBox>
        <SellOptionBox>
          <OptionText>{`중고\n회원에게 팔기`}</OptionText>
        </SellOptionBox>
        <SellOptionBox className="selected">
          <OptionText className="selected">{`중고 등록\n알림 신청`}</OptionText>
        </SellOptionBox>
      </SellOptionBoxWrapper>
    </UsedBookDivWrapper>
  );
}

export default DetailSellUsedBook;

const UsedBookDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  justify-content: left;

  width: 100%;
  height: 16.6rem;
  margin-top: 1.2rem;
  padding: 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  ${({ theme }) => theme.fonts.title1_bold};
`;

const SellPriceWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};
  &.pink {
    color: ${({ theme }) => theme.colors.pink_400};
  }
`;

const Body1Text = styled.span`
  ${({ theme }) => theme.fonts.body1};
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
  align-items: center;
  justify-content: center;

  width: 11.1rem;
  height: 6rem;
  padding: 0.8rem 1.6rem;

  text-align: center;

  border: 1px solid ${({ theme }) => theme.colors.blue_400};
  border-radius: 0.4rem;

  &.selected {
    background-color: ${({ theme }) => theme.colors.blue_400};
  }
`;

const OptionText = styled.div`
  text-align: center;
  white-space: pre-line;

  ${({ theme }) => theme.fonts.body1};

  color: ${({ theme }) => theme.colors.blue_400};

  &.selected {
    color: ${({ theme }) => theme.colors.white};
  }
`;
