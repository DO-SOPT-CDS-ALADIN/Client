import styled from 'styled-components';
import { IcBack, IcNaviBtnHomeBlack } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';

function CartHeader() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrapper>
        <BackButton
          onClick={() => {
            navigate('/');
          }}
        >
          <IcBack />
        </BackButton>
        <HeaderTitle>장바구니</HeaderTitle>
        <IcNaviBtnHomeBlack
          onClick={() => {
            navigate('/');
          }}
        />
      </HeaderWrapper>
    </>
  );
}
export default CartHeader;

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 37.5rem;
  height: 4.8rem;
  margin: 0 auto;
  padding-left: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;
const HeaderTitle = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
`;

const BackButton = styled.button`
  margin-right: 1.2rem;
`;
