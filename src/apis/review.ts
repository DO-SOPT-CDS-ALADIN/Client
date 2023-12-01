import { api } from './api';

const BASE_PATH = '/review';

const review = {
  postReview: (bookId: number, score: number, content: string) =>
    api.post(`${BASE_PATH}`, { bookId: bookId, score: score, content: content }),
};

export default review;
