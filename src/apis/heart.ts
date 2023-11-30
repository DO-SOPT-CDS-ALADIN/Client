import { api } from './api';

const BASE_PATH = '/heart';

const heart = {
  postHeart: (bookId: number) => api.post(`${BASE_PATH}?bookId=${bookId}`),
};

export default heart;
