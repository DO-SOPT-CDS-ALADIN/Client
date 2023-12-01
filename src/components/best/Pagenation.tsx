import styled from 'styled-components';
import { IcPagenationOver, IcPagenationNext } from '../../assets/icons';

interface ButtonProps {
  active: number;
}

function Pagenation() {
  const totalPages = 5;
  const currentPage = 1;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <PagenationWrapper active={currentPage}>
      {pages.map(page => (
        <PagenationButtton key={page}>{page}</PagenationButtton>
      ))}
      <IcPagenationNext />
      <IcPagenationOver />
    </PagenationWrapper>
  );
}
export default Pagenation;

const PagenationButtton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  width: 2.8rem;
  height: 2.8rem;
  padding: 0.5rem 1.1rem;
`;

const PagenationWrapper = styled.div<ButtonProps>`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;

  margin: 1.6rem auto;

  & ${PagenationButtton} {
    ${({ theme }) => theme.fonts.body4};

    border: 1px solid ${({ theme }) => theme.colors.grey_300};
  }

  & ${PagenationButtton}:nth-child(${props => props.active}) {
    ${({ theme }) => theme.fonts.body3};

    color: ${({ theme }) => theme.colors.blue_400};
    border: 1px solid ${({ theme }) => theme.colors.blue_400};
  }
`;
