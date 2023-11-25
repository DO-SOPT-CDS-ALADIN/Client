import styled from 'styled-components';
import { IcBack, IcNaviBtnHomeBlack } from '../../assets/icons';

function CartHeader() {
  return (
    <>
      <HeaderWrapper>
        <BackButton>
          <IcBack />
        </BackButton>
        <HeaderTitle>장바구니</HeaderTitle>
        <IcNaviBtnHomeBlack />
      </HeaderWrapper>
    </>
  );
}
export default CartHeader;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 37.5rem;
  height: 4.8rem;

  padding-left: 1.2rem;
`;
const HeaderTitle = styled.p`
  font: ${({ theme }) => theme.fonts.title2_bold};
`;

const BackButton = styled.button`
  margin-right: 1.2rem;
`;
