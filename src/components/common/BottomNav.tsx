import styled from 'styled-components';
import {
  IcBottomHamburger,
  IcBottomSearch,
  IcBottomHome,
  IcBottomHistory,
  IcBottomMy,
} from '../../assets/icons';

function BottomNav() {
  return (
    <BottomNavWrapper>
      <InnerWrapper>
        <MenuButton>
          <IcBottomHamburger />
        </MenuButton>
        <MenuButton>
          <IcBottomSearch />
        </MenuButton>
        <MenuButton>
          <IcBottomHome />
        </MenuButton>
        <MenuButton>
          <IcBottomHistory />
        </MenuButton>
        <MenuButton>
          <IcBottomMy />
        </MenuButton>
      </InnerWrapper>
    </BottomNavWrapper>
  );
}
export default BottomNav;

const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 37.5rem;
  height: 6.8rem;
  padding: 0.4rem 1.9rem 1.6rem 2rem;

  background: ${({ theme }) => theme.colors.blue_600};
`;

const InnerWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.8rem;
  height: 4.8rem;
  padding: 1.2rem;
`;
