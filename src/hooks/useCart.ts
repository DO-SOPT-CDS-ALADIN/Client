import { useEffect, useState } from 'react';
import cart from '../apis/cart';
import { useRecoilState } from 'recoil';
import { cartCountState } from '../recoil/atoms/cartCountState';
import {
  totalBookCountState,
  totalItemCountState,
  totalMileageState,
  totalPriceState,
} from '../recoil/atoms/receiptState';
import { parsePrice } from '../utils/Price';
import { PriceType } from '../utils/PriceType';
import { cartListState } from '../recoil/atoms/cartListState';

interface CartData {
  cartCount: number;
  response: string;
  addToCart: (bookId: number) => Promise<void>;
  deleteFromCart: (selectedIds: number[]) => Promise<void>;
  patchItemCount: (bookId: number, count: number) => Promise<void>;
  cartList: [];
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
  const [, setTotalPrice] = useRecoilState(totalPriceState);
  const [, setTotalMileage] = useRecoilState(totalMileageState);
  const [, setTotalItemCount] = useRecoilState(totalItemCountState);
  const [, setTotalBookCount] = useRecoilState(totalBookCountState);
  const [cartList, setCartList] = useRecoilState(cartListState);

  useEffect(() => {
    _getCartCount(setCartCount);
    _getCartList();
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

  const _getCartList = async () => {
    try {
      const response = await cart.getCartList();
      updateGlobalState(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteFromCart = async (selectedIds: number[]) => {
    try {
      for (const id of selectedIds) {
        await cart.deleteFromCart(id);
      }
      _getCartList();
    } catch (err) {
      console.error(err);
    }
  };

  const patchItemCount = async (bookId: number, count: number) => {
    const requestBody = {
      count: count,
    };
    try {
      await cart.patchItemCount(bookId, requestBody);
      _getCartList();
    } catch (err) {
      console.error(err);
    }
  };

  const updateGlobalState = (cartList: []) => {
    setCartList(cartList);

    setTotalPrice(
      cartList.reduce((acc: number, item: PriceType) => {
        const discountPrice = parsePrice(item.discountPrice);
        return acc + discountPrice * item.count;
      }, 0)
    );

    setTotalMileage(
      cartList.reduce((acc: number, item: PriceType) => {
        const milege = parsePrice(item.mileage);
        return acc + milege * item.count;
      }, 0)
    );

    setTotalItemCount(cartList.length);

    setTotalBookCount(
      cartList.reduce((acc: number, item: PriceType) => {
        const count = item.count;
        return acc + count;
      }, 0)
    );
  };
  return { cartCount, response, addToCart, deleteFromCart, cartList, patchItemCount };
}
