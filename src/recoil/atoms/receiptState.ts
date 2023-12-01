import { atom } from 'recoil';

export const totalPriceState = atom({
  key: 'totalPriceState',
  default: 0,
});

export const totalMileageState = atom({
  key: 'totalMileageState',
  default: 0,
});

export const totalItemCountState = atom({
  key: 'totalItemCountState',
  default: 0,
});
