import { useEffect, useState } from 'react';
import editorchoice from '../apis/editorchoice';
import { EditorChoiceProps } from '../utils/EditorChoiceProps';

interface EditorChoiceData {
  editorChoiceBookList: EditorChoiceProps[];
}

export function useGetEditorChoice(): EditorChoiceData {
  const [editorChoiceBookList, setEditorChoiceBookList] = useState<EditorChoiceProps[]>([]);

  useEffect(() => {
    const _getEditorChoiceBooks = async () => {
      try {
        const response = await editorchoice.getEditorChoiceBooks();
        setEditorChoiceBookList(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    _getEditorChoiceBooks();
  }, []);

  return { editorChoiceBookList };
}
