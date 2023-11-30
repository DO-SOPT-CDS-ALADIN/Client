import { api } from './api';

const BASE_PATH = '/cart';

const cart = {
  getCartCount: () => api.get(BASE_PATH),
  addToCart: (bookId: number) => api.post(`${BASE_PATH}?bookId=${bookId}`),
};

export default cart;