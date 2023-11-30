import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import book from '../apis/book';
import { DetailBookProps } from '../utils/DetailBookProps';

interface DetailBookResponse {
  data: DetailBookProps;
  code: number;
  message: string;
}

const useGetDetailBook = (bookId: number) => {
  const [response, setResponse] = useState<DetailBookProps>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await book
      .getBook(bookId)
      .then(res => {
        const data: DetailBookResponse = res.data;
        setResponse(data.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useGetDetailBook;
