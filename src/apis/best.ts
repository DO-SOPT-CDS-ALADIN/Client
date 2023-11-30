import { api } from './api';

const BASE_PATH = '/best';

const best = {
  getBestBooks: () => api.get(BASE_PATH),
};

export default best;
