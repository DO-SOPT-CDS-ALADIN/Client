import React from 'react';
import styled from 'styled-components';
import DetailBuyerReviewItem from './DetailBuyerReviewItem';
import DETAIL_REVIEW_LIST from '../../constants/DETAIL_REVIEW_LIST';
import { IcDetailsSelectRectangle, IcDown, IcDownXsBlue } from '../../assets/icons';

function DetailBuyerReviewList() {
  return (
    <DetailBuyerReviewListWrapper>
      <BuyerReviewListNavWrapper>
        <NavWrapper>
          <NavItem className="bold">구매자(10)</NavItem>
          <NavItem>전체(11)</NavItem>
        </NavWrapper>
        <SelectBoxWrapper>
          <Select>
            <SelectOption selected>공감순</SelectOption>
          </Select>
          <IcDetailsSelectRectangle className="icon" />
          <IcDownXsBlue className="icon arrow" />
        </SelectBoxWrapper>
      </BuyerReviewListNavWrapper>
      {DETAIL_REVIEW_LIST.map(review => (
        <DetailBuyerReviewItem
          userId={review.userId}
          date={review.date}
          content={review.content}
          agreeNum={review.agreeNum}
          commentNum={review.commentNum}
        />
      ))}
      <MoreButton>
        더보기
        <IcDown />
      </MoreButton>
    </DetailBuyerReviewListWrapper>
  );
}

export default DetailBuyerReviewList;

const DetailBuyerReviewListWrapper = styled.div`
  margin-top: 1.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
const BuyerReviewListNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.4rem;
  padding: 0 1.6rem;
`;

const NavWrapper = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  padding: 1.1rem 1rem;
  ${({ theme }) => theme.fonts.body2};

  &.bold {
    ${({ theme }) => theme.fonts.body1};
    border-bottom: 4px solid ${({ theme }) => theme.colors.blue_400};
  }
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  & > .icon {
    position: absolute;
    right: 0;
    border-radius: 0rem 0.4rem 0.4rem 0rem;
    background: ${({ theme }) => theme.colors.blue_100};
  }
`;

const Select = styled.select`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 6.4rem;
  height: 2.4rem;
  padding-left: 0.7rem;

  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.blue_100};
  background: ${({ theme }) => theme.colors.white};

  appearance: none;

  ${({ theme }) => theme.fonts.detail2};
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

const SelectOption = styled.option`
  ${({ theme }) => theme.fonts.detail2};
`;

const MoreButton = styled.div`
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.4rem;

  ${({ theme }) => theme.fonts.detail2};
  cursor: pointer;
`;
