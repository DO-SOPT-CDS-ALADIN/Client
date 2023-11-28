import React from 'react';
import styled from 'styled-components';
import DetailBuyerReviewItem from './DetailBuyerReviewItem';
import DETAIL_REVIEW_LIST from '../../constants/DETAIL_REVIEW_LIST';

function DetailBuyerReviewList() {
  return (
    <DetailBuyerReviewListWrapper>
      {DETAIL_REVIEW_LIST.map(review => (
        <DetailBuyerReviewItem
          userId={review.userId}
          date={review.date}
          content={review.content}
          agreeNum={review.agreeNum}
          commentNum={review.commentNum}
        />
      ))}
    </DetailBuyerReviewListWrapper>
  );
}

export default DetailBuyerReviewList;

const DetailBuyerReviewListWrapper = styled.div`
  margin-top: 1.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
