import React from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

interface RootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <MainLayout>{children ?? <Outlet />}</MainLayout>;
};

export default RootLayout;
