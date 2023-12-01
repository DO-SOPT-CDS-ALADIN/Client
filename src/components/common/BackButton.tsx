import styled from 'styled-components';
import { IcCircleBack } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';
import PAGE from '../../constants/page';

interface BackButtonProps {
  page: number;
}

interface ButtonWrapperProps {
  page: number;
}
function BackButton({ page }: BackButtonProps) {
  const navigate = useNavigate();

  const goBack = () => {
    {
      page === PAGE.CART ? navigate(-1) : navigate('/best');
    }
  };

  return (
    <ButtonWrapper onClick={goBack} page={page}>
      <IcCircleBack />
    </ButtonWrapper>
  );
}
export default BackButton;

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  position: fixed;
  right: calc((100% - 4.8rem) / 2);
  bottom: ${({ page }) =>
    page === PAGE.DETAIL ? '6.8rem' : page === PAGE.CART ? '11.2rem' : '7.2rem'};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 36.5rem;
  height: 4.8rem;
  padding: 0.5rem;
`;
