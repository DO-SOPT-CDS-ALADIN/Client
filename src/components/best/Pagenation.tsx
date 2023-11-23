import styled from 'styled-components';
import { IcPagenationOver, IcPagenationNext } from '../../assets/icons';

function Pagenation() {
  const totalPages = 5;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <PagenationWrapper>
      {pages.map(page => (
        <PagenationButtton key={page}>{page}</PagenationButtton>
      ))}
      <IcPagenationNext />
      <IcPagenationOver />
    </PagenationWrapper>
  );
}
export default Pagenation;

const PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  margin: 1.6rem auto;
`;
const PagenationButtton = styled.button`
  display: flex;
  width: 2.8rem;
  height: 2.8rem;
  padding: 0.5rem 1.1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  font: ${({ theme }) => theme.fonts.body2};
`;
