import { atom } from 'recoil';

export const cartListState = atom<[]>({
  key: 'cartListState',
  default: [],
});
