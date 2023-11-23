import React from 'react';
import styled from 'styled-components';

import { IcLogo, IcSearch, IcCart } from '../../assets/icons';

function Header() {
  return (
    <HeaderWrapper>
      <LogoButton>
        <IcLogo />
      </LogoButton>
      <SearchBar>
        <PlaceHolder>&lt;사이언스 2024&gt;</PlaceHolder>
        <IcSearch />
      </SearchBar>
      <CartButton>
        <CartIconWrapper>
          <IcCart />
        </CartIconWrapper>
        <CartNumberWrapper>
          <CartNumber>2</CartNumber>
        </CartNumberWrapper>
      </CartButton>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 37.5rem;
  height: 4.8rem;

  padding-left: 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;
// const SearchBar = styled.div``;

const LogoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 52px;
  height: 48px;

  padding: 12px 2px;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 23.6rem;
  height: 3.2rem;

  padding: 0px 1.6rem;

  flex-shrink: 0;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.grey_100};
`;

const PlaceHolder = styled.p`
  color: ${({ theme }) => theme.colors.grey_400};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const CartButton = styled.button`
  position: relative;

  width: 4.8rem;
  height: 4.8rem;
`;

const CartNumberWrapper = styled.div`
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.7rem;
  height: 1.7rem;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.pink_400};
`;

const CartNumber = styled.p`
  z-index: 1;

  display: flex;
  width: 0.7rem;
  height: 1.4rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.06rem;
`;

const CartIconWrapper = styled.div`
  position: absolute;
  top: 1.7rem;
  left: 1.5rem;
`;
