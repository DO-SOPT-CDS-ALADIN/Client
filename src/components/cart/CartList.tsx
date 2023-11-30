import { useCart } from '../../hooks/useCart';
import { CartItemProps } from '../../utils/CartItemProps';
import Book from './Book';

function CartList() {
  const { cartList } = useCart();
  return (
    <>
      {cartList.map((book: CartItemProps, index) => (
        <Book
          key={index}
          title={book.title}
          imgUrl={book.imgUrl}
          discountPrice={book.discountPrice}
          mileage={book.mileage}
          heart={book.heart}
        />
      ))}
    </>
  );
}
export default CartList;
