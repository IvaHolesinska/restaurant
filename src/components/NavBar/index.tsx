import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(233, 233, 233);
  margin: 0 2rem;
  &:hover {
    color: white;
  }
`;

export type Props = {
  path: string;
  name: string;
  className?: string;
};

const Navbar = ({
  pages,
  className,
}: {
  pages: Props[];
  className?: string;
}) => {
  return (
    <>
      {pages.map((page) => (
        <StyledLink to={page.path} key={page.name} className={className}>
          {page.name}
        </StyledLink>
      ))}
    </>
  );
};
export default Navbar;
