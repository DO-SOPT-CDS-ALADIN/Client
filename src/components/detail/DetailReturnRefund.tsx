import React from 'react';
import styled from 'styled-components';
import { IcEnter } from '../../assets/icons';

interface DetailReturnRefundProps {
  refundRef: React.RefObject<HTMLDivElement>;
}

function DetailReturnRefund({ refundRef }: DetailReturnRefundProps) {
  return (
    <DetailReturnRefundWrapper ref={refundRef}>
      <Body2Text>반품/교환 안내</Body2Text>
      <IcEnter />
    </DetailReturnRefundWrapper>
  );
}

export default DetailReturnRefund;

const DetailReturnRefundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.8rem;
  margin-top: 1.2rem;
  padding: 0 1.2rem 0 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};
`;
