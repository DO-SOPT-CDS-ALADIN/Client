import { api } from './api';

export async function fetchCart() {
  try {
    const data = await api.get('/cart');
    return data;
  } catch (err) {
    /* eslint-disable no-console */
    console.log(err);
  }
}
