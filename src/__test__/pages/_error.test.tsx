import { render, screen, fireEvent } from "@testing-library/react";
import ErrorPage, { ErrorProps } from "@/pages/_error";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("ErrorPage", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  it("should render the error state with correct text and image", () => {
    const props: ErrorProps = { statusCode: 500 };
    render(<ErrorPage {...props} />);

    expect(
      screen.getByText("Sedang Terjadi Kendala Teknis"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Maaf, sedang terjadi kendala teknis dan saat ini kami dalam proses memperbaikinya. Silakan coba akses beberapa saat lagi.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Kembali ke Beranda")).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/assets/servererrorgeneral.svg");
  });

  it("should call router.push('/') when the button is clicked", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    const props: ErrorProps = { statusCode: 500 };
    render(<ErrorPage {...props} />);

    const button = screen.getByText("Kembali ke Beranda");
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith("/");
  });

  it("should return the correct status code in getInitialProps", () => {
    const ctx = {
      res: { statusCode: 500 },
      err: undefined,
    } as unknown as NextPageContext;

    const result = ErrorPage.getInitialProps(ctx);
    expect(result.statusCode).toBe(500);
  });

  it("should return 404 status code if res and err are not defined", () => {
    const ctx = {} as NextPageContext;
    const result = ErrorPage.getInitialProps(ctx);
    expect(result.statusCode).toBe(404);
  });
});
