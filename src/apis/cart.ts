import { api } from './api';

const BASE_PATH = '/cart';

const cart = {
  getCartCount: () => api.get(BASE_PATH),
};

export default cart;
