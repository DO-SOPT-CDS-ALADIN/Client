import styled from 'styled-components';
import PAGE from '../../constants/page';
import { useNavigate } from 'react-router-dom';

interface TopNavProps {
  page: number;
}

function TopNav({ page }: TopNavProps) {
  const navigate = useNavigate();
  return (
    <TopNavWrapper page={page}>
      <Nav onClick={() => navigate('/')}>
        {page === PAGE.HOME ? <ActiveNavText>HOME</ActiveNavText> : <NavText>HOME</NavText>}
      </Nav>
      <Nav onClick={() => navigate('/best')}>
        {page === PAGE.BEST ? <ActiveNavText>베스트</ActiveNavText> : <NavText>베스트</NavText>}
      </Nav>
      <Nav>
        <NavText>신간</NavText>
      </Nav>
      <Nav>
        <NavText>이벤트</NavText>
      </Nav>
      <Nav>
        <NavText>외서</NavText>
      </Nav>
      <Nav>
        <NavText>온라인중고</NavText>
      </Nav>
    </TopNavWrapper>
  );
}

export default TopNav;

const Nav = styled.div`
  cursor: pointer;

  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;

  padding: 1.6rem 1rem 1.2rem 1rem;
`;

const NavText = styled.p`
  ${({ theme }) => theme.fonts.title2_reg};
`;
const ActiveNavText = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};

  color: ${({ theme }) => theme.colors.blue_600};
`;

const TopNavWrapper = styled.div<TopNavProps>`
  position: fixed;
  z-index: 10;
  top: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 37.5rem;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.colors.white};

  & ${Nav}:first-child {
    box-shadow: ${({ theme, page }) =>
      page === PAGE.HOME ? ` 0 -3px 0  0 inset ${theme.colors.blue_600}` : 'none'};
  }

  & ${Nav}:nth-child(2) {
    box-shadow: ${({ theme, page }) =>
      page === PAGE.BEST ? ` 0 -3px 0  0 inset ${theme.colors.blue_600}` : 'none'};
  }
`;
