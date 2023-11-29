import { useEffect, useState } from 'react';
import cart from '../apis/cart';

interface CartData {
  cartCount: number;
  response: string;
  addToCart: (bookId: number) => Promise<void>;
}

export function useCart(): CartData {
  const [cartCount, setCartCount] = useState<number>(0);
  const [response, setResponse] = useState<string>('');

  const _getCartCount = async () => {
    try {
      const response = await cart.getCartCount();
      console.log(response.data.data.countCart);
      setCartCount(response.data.data.countCart);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    _getCartCount();
  }, []);

  const addToCart = async (bookId: number) => {
    setCartCount(prevCount => prevCount + 1);

    try {
      const response = await cart.addToCart(bookId);

      setResponse(response.data.message);
      _getCartCount();
    } catch (err) {
      console.error(err);
    }
  };

  return { cartCount, response, addToCart };
}
