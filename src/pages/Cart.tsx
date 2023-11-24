import CartHeader from '../components/cart/CartHeader';
import Filter from '../components/cart/Filter';
import Nav from '../components/cart/Nav';
import CartList from '../components/cart/CartList';
import Receipt from '../components/cart/Receipt';

function Cart() {
  return (
    <>
      <CartHeader />
      <Nav />
      <Filter />
      <CartList />
      <Receipt />
    </>
  );
}

export default Cart;
