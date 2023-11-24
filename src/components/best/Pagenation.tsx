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
  width: 2.8rem;
  height: 2.8rem;
  padding: 0.5rem 1.1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const PagenationWrapper = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  margin: 1.6rem auto;

  & ${PagenationButtton} {
    border: 1px solid ${({ theme }) => theme.colors.grey_300};
    font: ${({ theme }) => theme.fonts.body4};
  }

  & ${PagenationButtton}:nth-child(${props => props.active}) {
    color: ${({ theme }) => theme.colors.blue_400};
    border: 1px solid ${({ theme }) => theme.colors.blue_400};
    font: ${({ theme }) => theme.fonts.body3};
  }
`;
