import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <main className="min-h-[calc(100svh-212px)] flex justify-center items-center">
      {children}
    </main>
  );
};

export default PageContainer;
