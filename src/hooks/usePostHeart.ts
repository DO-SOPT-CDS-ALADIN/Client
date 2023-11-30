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
  const [heartResponse, setHeartResponse] = useState<HeartProps>({ heart: false, message: '' });
  const [heartError, setHeartError] = useState<AxiosError>();
  const [heartLoading, setLoading] = useState(true);

  const postHeart = async () => {
    await heart
      .postHeart(bookId)
      .then(res => {
        const data: HeartResponse = res.data;
        const heart_status = data.message === '좋아요 저장' ? true : false;
        setHeartResponse({ heart: heart_status, message: data.message });
      })
      .catch(err => {
        setHeartError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    postHeart();
  }, []);

  return { heartResponse, heartError, heartLoading, postHeart };
};

export default usePostHeart;
