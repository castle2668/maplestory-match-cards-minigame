import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import PageContainer from "./PageContainer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  );
};

export default MainLayout;
