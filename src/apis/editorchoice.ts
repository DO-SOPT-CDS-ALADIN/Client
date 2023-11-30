import { api } from './api';

const BASE_PATH = '/main/editorchoice';

const editorselect = {
  getEditorChoiceBooks: () => api.get(BASE_PATH),
};

export default editorselect;
