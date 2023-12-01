import React from 'react';

export interface CartItemProps {
  id: number;
  index: number;
  title: string;
  imgUrl: string;
  discountPrice: string;
  mileage: string;
  heart: boolean;
  isCheckedList: boolean[];
  setIsCheckedList: React.Dispatch<React.SetStateAction<boolean[]>>;
}
