import styled from 'styled-components';

function HotBookBanner() {
  return (
    <HotBookBannerWrapper>
      <BookImg src="https://s3-alpha-sig.figma.com/img/c79d/e4d6/ebd3b9943bf385afbe80b24f31b1a66e?Expires=1702252800&Signature=RO6uveUIHnEn7on7JZTYEp-dN56WpJXBA5TorB5ywWaakpGMql-QBlSbldnprYNkWzuVWsIVHEdzj5VgLbQ5JNh6PZBr83UBbbAJJH5CdlshiVDLBt8V7NbVhRAtlwCMoBryg3tIoIjXovECZGQrESQv0CwUI~MncG79JX-SA~HgnRePI6RrTUuq6eW9dCGoBlcvPQ5gxy8OcJT9owMWnkiW19di9YWR0Hqil3gwIKm4i8okwMPZw3~1SjIXS4ctq43rHkZVbHGmnx-yaRGS1GPHbNc2A4l35fduBe9wpSyx98ndfmtd~op8WaKAUrwMwX2bhs98m-UAfQQ7Cq8rpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <BookInfoContainer>
        <BookTitle>스킵과 로퍼 7</BookTitle>
        <BookInfo>
          계절은 봄, 드디어 2학년으로 진급! 첫 반 배정, 첫 후배.... 미츠미 일행의 세계에 새로운
          바람...
        </BookInfo>
        <BookInfoPink>초판한정 캐릭터 아크릴 POP</BookInfoPink>
      </BookInfoContainer>
    </HotBookBannerWrapper>
  );
}

export default HotBookBanner;

const HotBookBannerWrapper = styled.div`
  display: flex;
  column-gap: 1.2rem;

  width: 33.5rem;
  height: 18.4rem;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors.grey_100};
  border-radius: ${({ theme }) => theme.radius.m};
`;

const BookImg = styled.img`
  width: 10.7rem;
  height: 15.2rem;
`;

const BookInfoContainer = styled.div`
  width: 18.4rem;
  height: 15.2rem;
`;

const BookTitle = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
`;

const BookInfo = styled.p`
  ${({ theme }) => theme.fonts.body2};
  margin-top: 0.4rem;
`;
const BookInfoPink = styled.p`
  ${({ theme }) => theme.fonts.detail1};

  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.pink_400};
`;
