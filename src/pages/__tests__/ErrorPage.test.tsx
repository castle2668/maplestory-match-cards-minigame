import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";

import ErrorPage from "../ErrorPage";

const router = createMemoryRouter(
  [
    {
      path: "*",
      element: <ErrorPage />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    initialEntries: ["/non-existent-route"],
  }
);

describe("ErrorPage", () => {
  it("should render error message when the ErrorPage is loaded", () => {
    render(<RouterProvider router={router} />);

    screen.debug();

    const errorMessage = screen.getByText(/Oops/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render Bulletin Board Image when the ErrorPage is loaded", () => {
    render(<RouterProvider router={router} />);

    screen.debug();

    const bulletinBoardImage = screen.getByRole("img", {
      name: /Bulletin Board/i,
    });
    expect(bulletinBoardImage).toBeInTheDocument();
  });
});
