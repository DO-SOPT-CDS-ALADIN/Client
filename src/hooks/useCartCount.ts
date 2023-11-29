import { useState, useEffect } from 'react';
import cart from '../apis/cart';

interface CartData {
  cartCount: number;
}

export function useCart(): CartData {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const _getCartCount = async () => {
      try {
        const response = await cart.getCartCount();
        setCartCount(response.data.data.countCart);
      } catch (err) {
        console.error(err);
      }
    };
    _getCartCount();
  }, []);

  return { cartCount };
}
