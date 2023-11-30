import { api } from './api';

const BASE_PATH = '/main/editorchoice';

const editorchoice = {
  getEditorChoiceBooks: () => api.get(BASE_PATH),
};

export default editorchoice;
