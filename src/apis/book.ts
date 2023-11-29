import { api } from './api';

const BASE_PATH = '/books';

const book = {
  getBook: (bookId: number) => api.get(`${BASE_PATH}/${bookId}`),
};

export default book;
