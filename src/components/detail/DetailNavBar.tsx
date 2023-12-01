import React from 'react';
import styled from 'styled-components';

interface DetailNavProps {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

interface NavItem {
  navName: string;
}

const navItems: NavItem[] = [
  { navName: '이벤트' },
  { navName: '상품정보' },
  { navName: '리뷰' },
  { navName: '반품/교환' },
];

function TopNav({ section, setSection }: DetailNavProps) {
  const onClickNav = (navName: string) => {
    setSection(navName);
  };

  return (
    <DetailNavWrapper section={section} setSection={setSection}>
      {navItems.map((item, index) => (
        <Nav key={index} onClick={() => onClickNav(item.navName)}>
          {section === item.navName ? (
            <ActiveNavText className="focused">{item.navName}</ActiveNavText>
          ) : (
            <NavText>{item.navName}</NavText>
          )}
        </Nav>
      ))}
    </DetailNavWrapper>
  );
}

export default TopNav;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25%;
  height: 4.8rem;
`;

const NavText = styled.p`
  cursor: pointer;
  padding: 0;
  ${({ theme }) => theme.fonts.title2_reg};
`;

const ActiveNavText = styled.p`
  cursor: pointer;
  ${({ theme }) => theme.fonts.title2_bold};

  color: ${({ theme }) => theme.colors.blue_600};
`;

const DetailNavWrapper = styled.div<DetailNavProps>`
  position: sticky;
  z-index: 9;
  top: 4.7rem;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4.8rem;
  margin-top: 1.2rem;

  background-color: ${({ theme }) => theme.colors.white};

  & ${Nav}:first-child {
    box-shadow: ${({ theme, section }) =>
      section === '이벤트' ? ` 0 -4px 0  0 inset ${theme.colors.blue_600}` : 'none'};
  }

  & ${Nav}:nth-child(2) {
    box-shadow: ${({ theme, section }) =>
      section === '상품정보' ? ` 0 -4px 0  0 inset ${theme.colors.blue_600}` : 'none'};
  }

  & ${Nav}:nth-child(3) {
    box-shadow: ${({ theme, section }) =>
      section === '리뷰' ? ` 0 -4px 0  0 inset ${theme.colors.blue_600}` : 'none'};
  }

  & ${Nav}:nth-child(4) {
    box-shadow: ${({ theme, section }) =>
      section === '반품/교환' ? ` 0 -4px 0  0 inset ${theme.colors.blue_600}` : 'none'};
  }
`;
