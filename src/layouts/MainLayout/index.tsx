import { styled } from 'styled-components';

const Layout = styled.div`
  height: 100vh;
`;

export const ResponsiveRow = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>{children}</Layout>
);
export default MainLayout;
