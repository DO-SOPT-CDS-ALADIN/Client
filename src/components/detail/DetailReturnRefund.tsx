import React from 'react';
import styled from 'styled-components';
import { IcEnter } from '../../assets/icons';

function DetailReturnRefund() {
  return (
    <DetailReturnRefundWrapper>
      <Body2Text>반품/교환 안내</Body2Text>
      <IcEnter />
    </DetailReturnRefundWrapper>
  );
}

export default DetailReturnRefund;

const DetailReturnRefundWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.8rem;
  padding: 0 1.2rem 0 1.6rem;
  margin-top: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Body2Text = styled.span`
  ${({ theme }) => theme.fonts.body2};
`;
