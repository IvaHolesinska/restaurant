import { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import pizza1 from '../../images/pizza1.jpg';
import pizza2 from '../../images/pizza2.jpg';
import pizza3 from '../../images/pizza3.jpg';
import pizza4 from '../../images/pizza4.jpg';
import pizza5 from '../../images/pizza5.jpg';
import pizza6 from '../../images/pizza6.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const CarrouselContainer = styled.div``;
const Button = styled.button<{ hide?: boolean }>`
  opacity: ${({ hide }) => (hide ? '0' : '1')};
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArrowsWrapper = styled.div`
  position: absolute;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const slides = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? slides.length - 1 : prevIndex + 1,
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === slides.length - 1) {
        setDirection('backward');
        prevSlide();
      } else if (currentIndex === 0) {
        setDirection('forward');
        nextSlide();
      } else {
        direction === 'forward' ? nextSlide() : prevSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, direction, nextSlide, prevSlide]);

  return (
    <div>
      <CarrouselContainer>
        {slides.map((slide, index) => (
          <div
            key={slide}
            style={{
              display: index === currentIndex ? 'block' : 'none',
              maxHeight: '400px',
              overflow: 'hidden',
            }}
          >
            <ImageWrapper>
              <StyledImage src={slide} alt="Delicious Pizza" />
              <ArrowsWrapper>
                <Button onClick={prevSlide} hide={currentIndex === 0}>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    color="white"
                    size="2x"
                  />
                </Button>
                <Button
                  onClick={nextSlide}
                  hide={currentIndex === slides.length - 1}
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    color="white"
                    size="2x"
                  />
                </Button>
              </ArrowsWrapper>
            </ImageWrapper>
          </div>
        ))}
      </CarrouselContainer>
    </div>
  );
};
export default Carousel;
