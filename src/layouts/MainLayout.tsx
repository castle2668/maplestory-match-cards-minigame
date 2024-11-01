import React from "react";

import Music from "@/features/music";

import Navbar from "./Navbar";
import PageContainer from "./PageContainer";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[url('/images/maps/Ellinia.jpg')]">
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Music />
    </div>
  );
};

export default MainLayout;
