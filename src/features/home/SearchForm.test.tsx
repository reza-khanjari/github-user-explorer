import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchForm from "@features/home/SearchForm";
import toast from "react-hot-toast";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import searchHistoryReducer from "@store/searchHistory/searchHistory.slice";

const mockNavigate = vi.fn();
function renderSearchForm() {
  const store = configureStore({
    reducer: {
      searchHistory: searchHistoryReducer,
    },
  });

  return render(
    <Provider store={store}>
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    </Provider>,
  );
}

const setup = () => {
  renderSearchForm();
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: /search/i });
  const form = input.closest("form");
  if (!form) {
    throw new Error("input is not inside a form");
  }
  return { input, button, form };
};
vi.mock("react-hot-toast", async () => {
  const actual =
    await vi.importActual<typeof import("react-hot-toast")>("react-hot-toast");

  return {
    ...actual,
    default: {
      ...actual.default,
      error: vi.fn(),
    },
  };
});

vi.mock("react-router-dom", async () => {
  const actual =
    await vi.importActual<typeof import("react-router-dom")>(
      "react-router-dom",
    );

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("SearchForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("renders input and button", () => {
    const { input, button } = setup();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it("shows error toast when submitting empty input", () => {
    const { form } = setup();
    fireEvent.submit(form);
    expect(toast.error).toHaveBeenCalledWith("Username can't be empty");
  });
  it("navigates to /user/:username on valid submit", () => {
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: "john" } });
    fireEvent.submit(form);
    expect(mockNavigate).toHaveBeenCalledWith("/user/john");
  });

  it("clears input after successful submit", () => {
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: "john" } });
    fireEvent.submit(form);
    expect(input).toHaveValue("");
  });

  it("shows error toast when username have 40 charachter or more", () => {
    const { input, form } = setup();
    fireEvent.change(input, {
      target: { value: "qwertyuiopasdfghjklzxcvbnsmmnbvcxzxcvbnlk" },
    });
    fireEvent.submit(form);
    expect(toast.error).toHaveBeenCalledWith(
      "Username must be between 1 and 39 characters",
    );
  });

  it("shows error toast when username is not valid", () => {
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: "john$#@" } });
    fireEvent.submit(form);
    expect(toast.error).toHaveBeenCalledWith(
      "Only letters, numbers and dashes are allowed",
    );
  });

  it("shows error toast when username start with dash", () => {
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: "-john" } });
    fireEvent.submit(form);
    expect(toast.error).toHaveBeenCalledWith(
      "Username can not start with dash",
    );
  });
  it("shows error toast when username ends with dash", () => {
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: "john-" } });
    fireEvent.submit(form);
    expect(toast.error).toHaveBeenCalledWith("Username can not end with dash");
  });
  it("shows error toast when username contain consecutive dashes", () => {
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: "jo--hn" } });
    fireEvent.submit(form);
    expect(toast.error).toHaveBeenCalledWith(
      "Username can not contain consecutive dashes",
    );
  });
});
