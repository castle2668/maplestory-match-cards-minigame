import "./index.css";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, // catch any errors
    children: [
      {
        index: true,
        element: <Home />,
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
