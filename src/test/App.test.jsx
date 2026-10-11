
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

function renderApp() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

test("displays the portfolio title", () => {
  renderApp();

  expect(
    screen.getByText("Personal Project Showcase App")
  ).toBeInTheDocument();
});

test("displays starting projects", () => {
  renderApp();

  expect(screen.getByText("Portfolio Website")).toBeInTheDocument();
  expect(screen.getByText("Trivia Game")).toBeInTheDocument();
});

test("adds a new project", () => {
  renderApp();

  fireEvent.change(screen.getByLabelText("Title"), {
    target: { value: "New Project" }
  });

  fireEvent.change(screen.getByLabelText("Description"), {
    target: { value: "My new project description" }
  });

  fireEvent.click(screen.getByRole("button", { name: "Add Project" }));

  expect(screen.getByText("New Project")).toBeInTheDocument();
});

test("filters projects using search", () => {
  renderApp();

  fireEvent.change(screen.getByPlaceholderText("Search Projects"), {
    target: { value: "Trivia" }
  });

  expect(screen.getByText("Trivia Game")).toBeInTheDocument();
  expect(screen.queryByText("Task Manager")).not.toBeInTheDocument();
});
