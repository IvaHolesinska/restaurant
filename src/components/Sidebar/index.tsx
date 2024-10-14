import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Props } from '../NavBar';

const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  width: 150px;
  transition: right 0.3s ease;
  z-index: 1;
`;

const MenuList = styled(Link)`
  height: 30px;
  margin: 10px 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

type SidebarProps = {
  options: Props[];
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ options, open, onClose }: SidebarProps) => {
  return (
    <SidebarWrapper isOpen={open}>
      {options.map((option: any) => (
        <MenuList to={option.path} key={option.name} onClick={onClose}>
          {option.name}
        </MenuList>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
