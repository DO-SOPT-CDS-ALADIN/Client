import { useState } from 'react';
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

function Detail() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [section, setSection] = useState('이벤트');
  const { bookId } = useParams<{ bookId: string }>();

  const parsedBookId = bookId ? parseInt(bookId, 10) : 1;

  const { response, error, loading } = useGetDetailBook(parsedBookId as number);

  return (
    <>
      <Header />
      {!error && !loading && response && (
        <>
          <DetailBookSummary
            bookId={parsedBookId}
            title={response.title}
            src={response.imgUrl}
            author={response.writer}
            company={response.publisher}
            date={response.pubDate}
            price={response.originPrice}
            discount_price={response.discountPrice}
            mileage={response.mileage}
            heart={response.heart}
          />
          <DetailBookEtc star={response.star} />
          <DetailSellUsedBook />
          <DetailSeries />
          <DetailNavBar section={section} />
          <DetailEvent />
          <DetailBookIntro />
          <DetailBookContents />
          <DetailAuthorIntro />
          <DetailPublisherIntro />
          <DetailReviewSummary />
          <DetailReviewGraph />
          <DetailBuyerReviewList />
          <DetailPostReview />
          <DetailMyReview />
          <DetailMyPaper />
          <BuyWith />
          <ClickWith />
        </>
      )}
      <DetailReturnRefund />
      <Footer />
      <DetailBottomBar />
    </>
  );
}

export default Detail;
