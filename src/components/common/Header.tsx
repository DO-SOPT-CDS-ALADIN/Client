import styled from 'styled-components';

import { IcLogo, IcSearch, IcCart } from '../../assets/icons';
import { cartCountState } from '../../recoil/atoms/cartCountState';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

function Header() {
  const cartCount = useRecoilValue(cartCountState);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <LogoButton>
        <IcLogo />
      </LogoButton>
      <SearchBar>
        <PlaceHolder>&lt;사이언스 2024&gt;</PlaceHolder>
        <IcSearch />
      </SearchBar>
      <CartButton onClick={() => navigate('/cart')}>
        <CartIconWrapper>
          <IcCart />
        </CartIconWrapper>
        <CartNumberWrapper>
          <CartNumber>{cartCount}</CartNumber>
        </CartNumberWrapper>
      </CartButton>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 37.5rem;
  height: 4.8rem;
  padding-left: 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const LogoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 48px;
  padding: 12px 2px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 23.6rem;
  height: 3.2rem;
  padding: 0px 1.6rem;

  background-color: ${({ theme }) => theme.colors.grey_100};
  border-radius: 16px;
`;

const PlaceHolder = styled.p`
  color: ${({ theme }) => theme.colors.grey_400};
  text-align: center;
  ${({ theme }) => theme.fonts.body2};
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
  align-items: center;
  justify-content: center;

  width: 1.7rem;
  height: 1.7rem;

  background-color: ${({ theme }) => theme.colors.pink_400};
  border-radius: 100%;
`;

const CartNumber = styled.p`
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 0.7rem;
  height: 1.4rem;

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  ${({ theme }) => theme.fonts.detail1};
  ${({ theme }) => theme.fonts.detail1};
`;

const CartIconWrapper = styled.div`
  position: absolute;
  top: 1.7rem;
  left: 1.5rem;
`;
