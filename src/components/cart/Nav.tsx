import styled from 'styled-components';

function Nav() {
  return (
    <NavWrapper>
      <ActiveNavButton>알라딘배송</ActiveNavButton>
      <NavButton>반값택배</NavButton>
      <NavButton>품절도서센터</NavButton>
    </NavWrapper>
  );
}
export default Nav;

const NavWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 4.8rem;
  right: 0;
  left: 0;

  display: flex;

  width: 37.5rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.white};
`;
const NavButton = styled.button`
  display: flex;
  flex: 1 0 0;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  width: 7.1rem;
  height: 4.8rem;

  ${({ theme }) => theme.fonts.title2_reg};
`;

const ActiveNavButton = styled(NavButton)`
  color: ${({ theme }) => theme.colors.blue_600};
  ${({ theme }) => theme.fonts.title2_bold};

  box-shadow: 0 -4px 0 0 inset ${({ theme }) => theme.colors.blue_600};
`;
