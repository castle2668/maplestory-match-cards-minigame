import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <main className="max-w-4xl my-10 mx-auto">{children}</main>;
};

export default PageContainer;
