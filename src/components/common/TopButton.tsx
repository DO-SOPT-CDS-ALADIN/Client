import styled from 'styled-components';
import { IcCircleTop } from '../../assets/icons';
import PAGE from '../../constants/page';

interface TopButtonProps {
  page: number;
}

interface ButtonWrapperProps {
  page: number;
}

function TopButton({ page }: TopButtonProps) {
  const onClickTopButton = () => {
    scrollTo({ behavior: 'smooth', top: 0 });
  };
  return (
    <ButtonWrapper page={page} onClick={onClickTopButton}>
      <IcCircleTop />
    </ButtonWrapper>
  );
}
export default TopButton;

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  cursor: pointer;

  position: fixed;
  right: 0.8rem;
  bottom: ${({ page }) =>
    page === PAGE.DETAIL ? '6.8rem' : page === PAGE.CART ? '11.2rem' : '7.2rem'};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.8rem;
  height: 4.8rem;
  padding: 0.5rem;
`;
