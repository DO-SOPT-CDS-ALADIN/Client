import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { ReviewProps } from '../utils/ReviewProps';
import review from '../apis/review';

interface ReviewResponse {
  success: boolean;
  status: number;
  message: string;
}

const usePostReview = (bookId: number) => {
  const [reviewResponse, setReviewResponse] = useState<ReviewProps>({ review: false, message: '' });
  const [reviewError, setReviewError] = useState<AxiosError>();
  const [reviewLoading, setReviewLoading] = useState(true);

  const postReview = async (score: number, content: string) => {
    await review
      .postReview(bookId, score, content)
      .then(res => {
        const data: ReviewResponse = res.data;
        const review_status = data.message === '도서 리뷰 등록 완료' ? true : false;
        setReviewResponse({ review: review_status, message: data.message });
      })
      .catch(err => {
        setReviewError(err);
      })
      .finally(() => {
        setReviewLoading(false);
      });
  };

  useEffect(() => {
    postReview(0, '');
  }, []);

  return { reviewResponse, reviewError, reviewLoading, postReview };
};

export default usePostReview;
