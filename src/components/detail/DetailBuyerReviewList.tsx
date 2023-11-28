import React from 'react';
import styled from 'styled-components';
import DetailBuyerReviewItem from './DetailBuyerReviewItem';

function DetailBuyerReviewList() {
  return (
    <DetailBuyerReviewListWrapper>
      <DetailBuyerReviewItem />
    </DetailBuyerReviewListWrapper>
  );
}

export default DetailBuyerReviewList;

const DetailBuyerReviewListWrapper = styled.div`
  margin-top: 1.4rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
