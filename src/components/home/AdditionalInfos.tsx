import styled from 'styled-components';
import { IcEnter } from '../../assets/icons';

interface InfosProps {
  title: string;
}

function AdditionalInfos() {
  return (
    <AdditionalInfosWrapper>
      <LinkInfos title="11월 신용카드 무이자 안내" />
      <TextInfos title="'개인정보처리방침' 개정(2023년 10월 30일 시행)'" />
      <TextInfos title="중고매장 강서홈플러스점 정기휴무일 변경 안내(11월 5일 일요일)" />
    </AdditionalInfosWrapper>
  );
}

export default AdditionalInfos;

function LinkInfos({ title }: InfosProps) {
  return (
    <LinkInfosWrapper>
      <InfosTitle>{title}</InfosTitle>
      <IcEnter />
    </LinkInfosWrapper>
  );
}

function TextInfos({ title }: InfosProps) {
  return (
    <TextInfosWrapper>
      <InfosTitle>{title}</InfosTitle>
    </TextInfosWrapper>
  );
}

const AdditionalInfosWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.grey_200};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_200};
`;

const LinkInfosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  padding-left: 1.6rem;
  padding-right: 1.2rem;
`;

const TextInfosWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 4.2rem;
  padding-left: 1.6rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.grey_200};
`;

const InfosTitle = styled.p`
  ${({ theme }) => theme.fonts.body2};

  color: ${({ theme }) => theme.colors.black};

  line-height: 140%;
`;
