import React from 'react';
import styled from 'styled-components';
import { IcDetailsSelectRectangle, IcDownXsBlue } from '../../assets/icons';
import DetailMyReviewItem from './DetailMyReviewItem';
import DETAIL_MY_REVIEW from '../../constants/DETAIL_MY_REVIEW';

function DetailMyReview() {
  return (
    <DetailMyReviewWrapper>
      <Title1BoldText>마이리뷰</Title1BoldText>
      <MyReviewNavWrapper>
        <NavWrapper>
          <NavItem className="bold">구매자(1)</NavItem>
          <NavItem>전체(3)</NavItem>
        </NavWrapper>
        <SelectBoxWrapper>
          <Select>
            <SelectOption defaultValue={'공감순'}>공감순</SelectOption>
          </Select>
          <IcDetailsSelectRectangle className="icon" />
          <IcDownXsBlue className="icon arrow" />
        </SelectBoxWrapper>
      </MyReviewNavWrapper>
      <DetailMyReviewItem
        userId={DETAIL_MY_REVIEW.userId}
        date={DETAIL_MY_REVIEW.date}
        content={DETAIL_MY_REVIEW.content}
        agreeNum={DETAIL_MY_REVIEW.agreeNum}
        commentNum={DETAIL_MY_REVIEW.commentNum}
      />
    </DetailMyReviewWrapper>
  );
}

export default DetailMyReview;

const DetailMyReviewWrapper = styled.div`
  padding: 2.4rem 1.6rem 2.1rem 1.6rem;
  margin-top: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  margin-bottom: 0.8rem;
  ${({ theme }) => theme.fonts.title1_bold};
`;

const MyReviewNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.4rem;
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
