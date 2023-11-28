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

function Detail() {
  const [section, setSection] = useState('이벤트');
  // lint 때문에 임시로 추가. 추후 기능 구현 때 삭제 예정
  setSection('이벤트');
  // setSection('이벤트');
  return (
    <>
      <Header />
      <DetailBookSummary />
      <DetailBookEtc />
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
    </>
  );
}

export default Detail;
