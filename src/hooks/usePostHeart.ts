import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import heart from '../apis/heart';
import { HeartProps } from '../utils/HeartProps';

interface HeartResponse {
  success: boolean;
  status: number;
  message: string;
}

const usePostHeart = (bookId: number) => {
  const [response, setResponse] = useState<HeartProps>({ heart: false, message: '' });
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const postHeart = async () => {
    await heart
      .postHeart(bookId)
      .then(res => {
        const data: HeartResponse = res.data;
        const heart_status = data.message === '좋아요 저장' ? true : false;
        setResponse({ heart: heart_status, message: data.message });
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    postHeart();
  }, []);

  return { response, error, loading, postHeart };
};

export default usePostHeart;
