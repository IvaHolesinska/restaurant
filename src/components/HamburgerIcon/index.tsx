import { styled } from 'styled-components';

const Hamburger = styled.div<{ isOpen: boolean }>`
  width: 20px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(45deg) translate(5px, 3px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(-20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(-45deg) translate(6px, -4px)' : 'rotate(0)'};
    }
  }
`;

type Props = {
  open: boolean;
  onToggleSidebar: () => void;
};

const HamburgerIcon = ({ open, onToggleSidebar }: Props) => {
  return (
    <Hamburger onClick={onToggleSidebar} isOpen={open}>
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  );
};

export default HamburgerIcon;
