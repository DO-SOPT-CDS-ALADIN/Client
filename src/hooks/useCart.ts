import { useEffect, useState } from 'react';
import cart from '../apis/cart';
import { useRecoilState } from 'recoil';
import { cartCountState } from '../recoil/atoms/cartCountState';

interface CartData {
  cartCount: number;
  response: string;
  addToCart: (bookId: number) => Promise<void>;
}

const _getCartCount = async (setCartCount: (count: number) => void) => {
  try {
    const response = await cart.getCartCount();
    const newCartCount = response.data.data.countCart;
    setCartCount(newCartCount);
  } catch (err) {
    console.error(err);
  }
};

export function useCart(): CartData {
  const [cartCount, setCartCount] = useRecoilState(cartCountState);
  const [response, setResponse] = useState<string>('');

  useEffect(() => {
    _getCartCount(setCartCount);
  }, [setCartCount]);

  const addToCart = async (bookId: number) => {
    try {
      const response = await cart.addToCart(bookId);
      setResponse(response.data.message);
      _getCartCount(setCartCount);
    } catch (err) {
      console.error(err);
    }
  };

  return { cartCount, response, addToCart };
}
