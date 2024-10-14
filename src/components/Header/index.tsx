import styled from 'styled-components';
import { pages } from '../../app/routes/constants';
import Navbar from '../NavBar';
import HamburgerMenu from '../HamburgerMenu';

const Container = styled.div`
  height: 40px;
  background-color: rgba(0, 0, 0, 0.87);
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 30px;
  z-index: 2;
  position: sticky;
  top: 0;

  .navbar {
    display: none;
  }
  .hamburger-menu {
    display: block;
  }

  @media (min-width: 768px) {
    justify-content: center;

    .navbar {
      display: block;
    }
    .hamburger-menu {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <Navbar className="navbar" pages={pages} />
      <HamburgerMenu className="hamburger-menu" pages={pages} />
    </Container>
  );
};

export default Header;
