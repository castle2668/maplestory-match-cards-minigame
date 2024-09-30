import React from "react";
import { Outlet } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

const RootLayout: React.FC = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default RootLayout;
