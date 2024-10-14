import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Menu from '../../pages/Menu';
import Contact from '../../pages/Contact';
import NotFound from '../../pages/NotFound';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import { styled } from 'styled-components';

const Main = styled.div`
  margin: 20px;

  @media (min-width: 768px) {
    margin: 20px 40px;
  }
`;
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Carousel />
      <Main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default AppRoutes;
