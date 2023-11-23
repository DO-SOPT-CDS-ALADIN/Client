import React from 'react';
import styled from 'styled-components';
import { IcCircleBack } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 바로 이전 페이지로 이동
  };

  return (
    <ButtonWrapper onClick={goBack}>
      <IcCircleBack />
    </ButtonWrapper>
  );
}
export default BackButton;

const ButtonWrapper = styled.button`
  position: fixed;
  left: 0.8rem;
  bottom: 7.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.8rem;
  height: 4.8rem;

  padding: 0.5rem;
`;
