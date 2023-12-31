import styled from 'styled-components';
import { IcDown } from '../../assets/icons';

function Footer() {
  return (
    <FooterWrapper>
      <MenuWrapper>
        <Menu>로그인</Menu>
        <Menu>회사소개</Menu>
        <Menu>전체메뉴</Menu>
        <Menu>출판사 안내</Menu>
        <Menu>PC버전</Menu>
      </MenuWrapper>
      <CompanyWrapper>
        <Company>(주)알라딘커뮤니케이션</Company>
        <IcDown />
      </CompanyWrapper>
      <ContactWrapper>
        <Info>일반문의 (발신자 부담)</Info>
        <Tel>1544-2514</Tel>
      </ContactWrapper>
      <ButtonSection>
        <ShortButtonWrapper>
          <ShortButton>1:1 문의</ShortButton>
          <ShortButton>FAQ</ShortButton>
        </ShortButtonWrapper>
        <LongButton>중고매장 위치, 영업시간 안내</LongButton>
      </ButtonSection>
    </FooterWrapper>
  );
}
export default Footer;

const FooterWrapper = styled.div`
  height: 25.6rem;
  background-color: ${({ theme }) => theme.colors.grey_100};
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 37.5rem;
  padding: 0.4rem 1.6rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_200};
`;

const Menu = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6rem;
  height: 4rem;

  ${({ theme }) => theme.fonts.detail2};
`;

const CompanyWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;

  margin-top: 2.4rem;
`;

const Company = styled.p`
  ${({ theme }) => theme.fonts.body1};
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  margin-top: 1.2rem;
`;

const Info = styled.p`
  ${({ theme }) => theme.fonts.detail2};
`;

const Tel = styled.p`
  ${({ theme }) => theme.fonts.body1};
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;

  width: 34.3rem;
  height: 8.8rem;
  margin: 1.6rem auto;
`;
const ShortButton = styled.button`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;

  width: 16.8rem;
  height: 3.8rem;
  padding-top: 2px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.6rem;

  ${({ theme }) => theme.fonts.body2};
`;

const LongButton = styled(ShortButton)`
  width: 34.3rem;
`;

const ShortButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;
