import React from 'react';
import styled from 'styled-components';
import { IcCircleTop } from '../../assets/icons';

function TopButton() {
  return (
    <ButtonWrapper>
      <IcCircleTop />
    </ButtonWrapper>
  );
}
export default TopButton;

const ButtonWrapper = styled.div`
  position: fixed;
  right: 0.8rem;
  bottom: 7.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.8rem;
  height: 4.8rem;

  padding: 0.5rem;
`;
