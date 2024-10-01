import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <main className="max-w-4xl min-h-[calc(100svh-212px)] my-0 mx-auto flex justify-center items-center">
      {children}
    </main>
  );
};

export default PageContainer;
