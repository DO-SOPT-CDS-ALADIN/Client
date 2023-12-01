import CartHeader from '../components/cart/CartHeader';
import Nav from '../components/cart/Nav';
import CartList from '../components/cart/CartList';
import Receipt from '../components/cart/Receipt';
import BuyWith from '../components/common/BuyWith';
import AladinGoods from '../components/cart/AladinGoods';
import styled from 'styled-components';
import AladinCoffee from '../components/cart/AladinCoffee';
import Footer from '../components/common/Footer';
import BackButton from '../components/common/BackButton';
import BottomBar from '../components/cart/BottomBar';
import PAGE from '../constants/page';

function Cart() {
  return (
    <CartWrapper>
      <CartHeader />
      <Nav />
      <CartList />
      <Receipt />
      <BuyWith page={PAGE.CART} />
      <AladinGoods />
      <AladinCoffee />
      <Footer />
      <BackButton page={PAGE.CART} />
      <BottomBar />
    </CartWrapper>
  );
}

export default Cart;

const CartWrapper = styled.div`
  padding-top: 9.6rem;
  padding-bottom: 10.8rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;
