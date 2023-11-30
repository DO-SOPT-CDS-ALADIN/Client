import { useState, useEffect } from 'react';
import best from '../apis/best';
import { BookProps } from '../utils/BookProps';

interface BestData {
  bestBookList: BookProps[];
}

export function useBest(): BestData {
  const [bestBookList, setBestBookList] = useState<BookProps[]>([]);

  useEffect(() => {
    const _getBestBooks = async () => {
      try {
        const response = await best.getBestBooks();
        setBestBookList(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    _getBestBooks();
  }, []);

  return { bestBookList };
}
