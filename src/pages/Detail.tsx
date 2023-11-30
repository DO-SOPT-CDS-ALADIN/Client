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
import DetailCarousel from '../components/detail/DetailCarousel';
import styled from 'styled-components';

function Detail() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [section, setSection] = useState('이벤트');

  return (
    <DetailWrapper>
      <Header />
      <DetailBookSummary />
      <DetailBookEtc />
      <DetailSellUsedBook />
      <DetailSeries />
      <DetailCarousel />
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
      <DetailReturnRefund />
      <Footer />
      <DetailBottomBar />
    </DetailWrapper>
  );
}

export default Detail;

const DetailWrapper = styled.div`
  padding-bottom: 6.8rem;
`;
