import React, { ReactNode } from 'react';
// import Navigation from './Navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    {/* <Navigation /> */}
    <main>{children}</main>
  </div>
);

export default Layout;
