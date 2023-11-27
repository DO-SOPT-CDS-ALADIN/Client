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
  display: flex;
`;
const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex: 1 0 0;

  width: 7.1rem;
  height: 4.8rem;

  font: ${({ theme }) => theme.fonts.title2_reg};
`;

const ActiveNavButton = styled(NavButton)`
  box-shadow: 0 -4px 0 0 inset ${({ theme }) => theme.colors.blue_600};

  color: ${({ theme }) => theme.colors.blue_600};
  font: ${({ theme }) => theme.fonts.title2_bold};
`;
