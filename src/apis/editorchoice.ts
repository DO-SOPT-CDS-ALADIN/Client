// 편집장의 선택 API

import { api } from './api';

const BASE_PATH = '/main/editorchoice';

const editorchoice = {
  getEditorChoiceBooks: () => api.get(BASE_PATH),
};

export default editorchoice;
