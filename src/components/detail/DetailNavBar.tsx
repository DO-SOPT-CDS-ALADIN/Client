import React from 'react';
import styled from 'styled-components';

interface DetailNavProps {
  section: string;
}

function TopNav({ section }: DetailNavProps) {
  return (
    <DetailNavWrapper section={section}>
      <Nav>
        {section === '이벤트' ? <ActiveNavText>이벤트</ActiveNavText> : <NavText>이벤트</NavText>}
      </Nav>
      <Nav>
        {section === '상품정보' ? (
          <ActiveNavText>상품정보</ActiveNavText>
        ) : (
          <NavText>상품정보</NavText>
        )}
      </Nav>
      <Nav>
        {section === '리뷰' ? <ActiveNavText>리뷰</ActiveNavText> : <NavText>리뷰</NavText>}
      </Nav>
      <Nav>
        {section === '반품/교환' ? (
          <ActiveNavText>반품/교환</ActiveNavText>
        ) : (
          <NavText>반품/교환</NavText>
        )}
      </Nav>
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
  font: ${({ theme }) => theme.fonts.title2_reg};
`;

const ActiveNavText = styled.p`
  font: ${({ theme }) => theme.fonts.title2_bold};
  color: ${({ theme }) => theme.colors.blue_600};
`;

const DetailNavWrapper = styled.div<DetailNavProps>`
  position: sticky;
  z-index: 10;
  top: 4.8rem;

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
