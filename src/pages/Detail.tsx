import { useEffect, useRef, useState } from 'react';
import Header from '../components/common/Header';
import DetailBookEtc from '../components/detail/DetailBookEtc';
import DetailBookSummary from '../components/detail/DetailBookSummary';
import DetailNavBar from '../components/detail/DetailNavBar';
import DetailSellUsedBook from '../components/detail/DetailSellUsedBook';
import DetailSeries from '../components/detail/DetailSeries';
import DetailEvent from '../components/detail/DetailEvent';
import DetailBookIntro from '../components/detail/DetailBookIntro';
import DetailBookContents from '../components/detail/DetailBookContents';
import DetailAuthorIntro from '../components/detail/DetailAuthorIntro';
import DetailPublisherIntro from '../components/detail/DetailPublisherIntro';
import DetailReviewSummary from '../components/detail/DetailReviewSummary';
import DetailReviewGraph from '../components/detail/DetailReviewGraph';
import DetailBuyerReviewList from '../components/detail/DetailBuyerReviewList';
import DetailPostReview from '../components/detail/DetailPostReview';
import DetailMyReview from '../components/detail/DetailMyReview';
import DetailMyPaper from '../components/detail/DetailMyPaper';
import BuyWith from '../components/common/BuyWith';
import ClickWith from '../components/detail/ClickWith';
import Footer from '../components/common/Footer';
import DetailReturnRefund from '../components/detail/DetailReturnRefund';
import DetailBottomBar from '../components/detail/DetailBottomBar';
import { useParams } from 'react-router-dom';
import useGetDetailBook from '../hooks/useGetDetailBook';
import usePostHeart from '../hooks/usePostHeart';
import Toast from '../components/common/Toast';
import DetailCarousel from '../components/detail/DetailCarousel';
import styled from 'styled-components';

function Detail() {
  const [section, setSection] = useState('이벤트');
  const eventRef = useRef<HTMLDivElement>(null);
  const bookDetailRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const refundRef = useRef<HTMLDivElement>(null);

  const { bookId } = useParams<{ bookId: string }>();
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const parsedBookId = bookId ? parseInt(bookId, 10) : 1;
  const { heartResponse, heartError, heartLoading, postHeart } = usePostHeart(parsedBookId);
  const { response, error, loading } = useGetDetailBook(parsedBookId as number);

  const [heartOn, setHeartOn] = useState(heartResponse.heart);

  const handleHeartClick = async () => {
    try {
      setHeartOn(prevHeartOn => !prevHeartOn);
      await postHeart();
      if (!heartError && !heartLoading && heartResponse) {
        setToastMessage(heartResponse.message);
        setToast(true);
        setHeartOn(heartResponse.heart);
      }
    } catch (error) {
      setToastMessage(heartResponse.message);
      setToast(true);
    }
  };

  useEffect(() => {
    if (eventRef.current && bookDetailRef.current && reviewRef.current && refundRef.current) {
      if (section === '이벤트') {
        eventRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === '상품정보') {
        bookDetailRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === '리뷰') {
        reviewRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === '반품/교환') {
        refundRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  return (
    <DetailWrapper>
      <Header />
      {!error && !loading && response && (
        <>
          <DetailBookSummary
            title={response.title}
            src={response.imgUrl}
            author={response.writer}
            company={response.publisher}
            date={response.pubDate}
            price={response.originPrice}
            discount_price={response.discountPrice}
            mileage={response.mileage}
            heartOn={heartOn}
            handleHeartClick={handleHeartClick}
          />
          <DetailBookEtc star={response.star} />
          <DetailSellUsedBook />
          <DetailSeries />
          <DetailCarousel />
          <DetailNavBar section={section} setSection={setSection} />
          <DetailEvent eventRef={eventRef} />
          <DetailBookIntro bookDetailRef={bookDetailRef} />
          <DetailBookContents />
          <DetailAuthorIntro />
          <DetailPublisherIntro />
          <DetailReviewSummary reviewRef={reviewRef} />
          <DetailReviewGraph />
          <DetailBuyerReviewList />
          <DetailPostReview
            bookId={parsedBookId}
            setToast={setToast}
            setToastMessage={setToastMessage}
          />
          <DetailMyReview />
          <DetailMyPaper />
          <BuyWith />
          <ClickWith />
        </>
      )}
      <DetailReturnRefund refundRef={refundRef} />
      <Footer />
      <DetailBottomBar
        bookId={parsedBookId}
        heartOn={heartOn}
        handleHeartClick={handleHeartClick}
        setToast={setToast}
        setToastMessage={setToastMessage}
      />
      {toast && <Toast setToast={setToast} message={toastMessage} />}
    </DetailWrapper>
  );
}

export default Detail;

const DetailWrapper = styled.div`
  padding-bottom: 6.8rem;
`;
