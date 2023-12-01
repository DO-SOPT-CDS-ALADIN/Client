import { useEffect, useState } from 'react';
import { CartItemProps } from '../../utils/CartItemProps';
import Book from './Book';
import styled from 'styled-components';
import { IcCheckboxGray, IcCheckboxFilled, IcDelete, IcHeartOff } from '../../assets/icons';
import {
  totalItemCountState,
  totalMileageState,
  totalPriceState,
} from '../../recoil/atoms/receiptState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { parsePrice } from '../../utils/Price';
import { PriceType } from '../../utils/PriceType';
import { cartListState } from '../../recoil/atoms/cartListState';
import { useCart } from '../../hooks/useCart';

function CartList() {
  const { cartList, deleteFromCart } = useCart();
  const globalCartList: CartItemProps[] = useRecoilValue(cartListState);
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(true);
  const [, setTotalPrice] = useRecoilState(totalPriceState);
  const [, setTotalMileage] = useRecoilState(totalMileageState);
  const [, setTotalItemCount] = useRecoilState(totalItemCountState);

  useEffect(() => {
    setIsCheckedList(Array(cartList.length).fill(true));
  }, [cartList]);

  useEffect(() => {
    const allChecked = isCheckedList.every(isChecked => isChecked);
    setIsAllChecked(allChecked);
  }, [isCheckedList]);

  const fillCheckedList = () => {
    setIsAllChecked(prev => !prev);
    isAllChecked ? clearAllItemPrice() : setAllItemPrice();
    setIsCheckedList(Array(cartList.length).fill(!isAllChecked));
  };

  const clearAllItemPrice = () => {
    setTotalPrice(0);
    setTotalMileage(0);
    setTotalItemCount(0);
  };

  const setAllItemPrice = () => {
    setTotalPrice(
      cartList.reduce((acc: number, item: PriceType) => {
        const discountPrice = parsePrice(item.discountPrice);
        return acc + discountPrice;
      }, 0)
    );

    setTotalMileage(
      cartList.reduce((acc: number, item: PriceType) => {
        const milege = parsePrice(item.mileage);
        return acc + milege;
      }, 0)
    );

    setTotalItemCount(cartList.length);
  };

  const deleteSelectedItem = () => {
    const selectedIds = globalCartList
      .map((book, index) => ({ id: book.id, isChecked: isCheckedList[index] }))
      .filter(book => book.isChecked)
      .map(book => book.id);
    deleteFromCart(selectedIds);
  };

  return (
    <>
      <FilterWrapper>
        <CheckBox onClick={fillCheckedList}>
          <CheckWrapper>{isAllChecked ? <IcCheckboxFilled /> : <IcCheckboxGray />}</CheckWrapper>
        </CheckBox>
        <CheckText>전체 선택</CheckText>
        <ButtonWrapper>
          <Button>
            <IcHeartOff />
          </Button>
          <Button onClick={deleteSelectedItem}>
            <IcDelete />
          </Button>
        </ButtonWrapper>
      </FilterWrapper>
      {cartList.map((book: CartItemProps, index: number) => (
        <Book
          key={index}
          index={index}
          id={book.id}
          count={book.count}
          title={book.title}
          imgUrl={book.imgUrl}
          discountPrice={book.discountPrice}
          mileage={book.mileage}
          heart={book.heart}
          isCheckedList={isCheckedList}
          setIsCheckedList={setIsCheckedList}
        />
      ))}
    </>
  );
}
export default CartList;

const FilterWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  height: 5.4rem;
  padding: 0rem 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const CheckBox = styled.div`
  position: relative;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  margin: 0 1.4rem 0 1rem;
`;

const CheckWrapper = styled.div`
  position: absolute;
  top: 0.04rem;
`;

const CheckText = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.2rem;
  height: 3.2rem;
  margin-right: 1.2rem;
  padding: 0.3rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
`;
