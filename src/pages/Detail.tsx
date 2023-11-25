import Header from '../components/common/Header';
import DetailBookEtc from '../components/detail/DetailBookEtc';
import DetailBookSummary from '../components/detail/DetailBookSummary';
import DetailSellUsedBook from '../components/detail/DetailSellUsedBook';
import DetailSeries from '../components/detail/DetailSeries';

function Detail() {
  return (
    <>
      <Header />
      <DetailBookSummary />
      <DetailBookEtc />
      <DetailSellUsedBook />
      <DetailSeries />
    </>
  );
}

export default Detail;
