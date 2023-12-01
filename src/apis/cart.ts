import { api } from './api';

const BASE_PATH = '/cart';

const cart = {
  getCartCount: () => api.get(BASE_PATH),
  addToCart: (bookId: number) => api.post(`${BASE_PATH}?bookId=${bookId}`),
  getCartList: () => api.get(`${BASE_PATH}/my`),
  deleteFromCart: (bookId: number) => api.delete(`${BASE_PATH}/${bookId}`),
  patchItemCount: (bookId: number, requestBody: object) =>
    api.patch(`${BASE_PATH}/${bookId}`, requestBody),
};

export default cart;
