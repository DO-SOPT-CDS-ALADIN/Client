import { useState } from 'react';
import styled from 'styled-components';
import DetailBuyerReviewItem from './DetailBuyerReviewItem';
import DETAIL_REVIEW_LIST from '../../constants/DETAIL_REVIEW_LIST';
import { IcDetailsSelectRectangle, IcDown, IcDownXsBlue, IcUp } from '../../assets/icons';

function DetailBuyerReviewList() {
  const [isMore, setIsMore] = useState(false);

  const onClickMoreButton = () => {
    setIsMore(!isMore);
  };

  let displayedReviews = DETAIL_REVIEW_LIST;

  if (!isMore) {
    displayedReviews = DETAIL_REVIEW_LIST.slice(0, 6);
  }

  return (
    <DetailBuyerReviewListWrapper>
      <BuyerReviewListNavWrapper>
        <NavWrapper>
          <NavItem className="bold">구매자(10)</NavItem>
          <NavItem>전체(11)</NavItem>
        </NavWrapper>
        <SelectBoxWrapper>
          <Select>
            <SelectOption defaultValue={'공감순'}>공감순</SelectOption>
          </Select>
          <IcDetailsSelectRectangle className="icon" />
          <IcDownXsBlue className="icon arrow" />
        </SelectBoxWrapper>
      </BuyerReviewListNavWrapper>
      {displayedReviews.map((review, index) => (
        <DetailBuyerReviewItem
          key={index}
          userId={review.userId}
          date={review.date}
          content={review.content}
          agreeNum={review.agreeNum}
          commentNum={review.commentNum}
        />
      ))}
      <MoreButton onClick={onClickMoreButton}>
        {isMore ? '접기' : '더보기'}
        {isMore ? <IcUp /> : <IcDown />}
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
  align-items: center;
  justify-content: space-between;

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
  position: relative;
  display: flex;
  align-items: center;

  & > .icon {
    position: absolute;
    right: 0;
    background: ${({ theme }) => theme.colors.blue_100};
    border-radius: 0rem 0.4rem 0.4rem 0rem;
  }
`;

const Select = styled.select`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 6.4rem;
  height: 2.4rem;
  padding-left: 0.7rem;

  appearance: none;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue_100};
  border-radius: 0.4rem;

  ${({ theme }) => theme.fonts.detail2};

  &:focus {
    outline: 0;
  }
`;

const SelectOption = styled.option`
  ${({ theme }) => theme.fonts.detail2};
`;

const MoreButton = styled.div`
  cursor: pointer;

  display: flex;
  column-gap: 0.4rem;
  align-items: center;
  justify-content: center;

  height: 4rem;

  ${({ theme }) => theme.fonts.detail2};
`;
