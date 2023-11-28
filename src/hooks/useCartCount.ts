// useCartCount.ts
import { useState, useEffect } from 'react';
import { fetchCart } from '../apis/fetchData';

interface CartCountData {
  cartCount: number;
}

export function useCartCount(): CartCountData {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const _fetchCart = async () => {
      try {
        const response = await fetchCart();
        const cartCountData = response?.data.data.countCart;
        setCartCount(cartCountData);
      } catch (err) {
        console.error(err);
      }
    };

    _fetchCart();
  }, []);

  return { cartCount };
}
