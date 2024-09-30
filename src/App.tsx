import "./index.css";

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
    errorElement: <ErrorPage />, // catch any errors
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

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
