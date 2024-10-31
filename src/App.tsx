import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import ErrorPage from "./pages/ErrorPage";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <RootLayout>
        <ErrorPage />
      </RootLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/game",
        element: <GamePage />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

// Use React Query to provide the data fetching and caching
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
