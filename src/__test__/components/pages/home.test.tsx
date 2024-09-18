import Home from "@/components/pages/Home/Home";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";
import { validateNik, validateNisn } from "@/utils/validation";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const useRouterMock = useRouter as jest.Mock;

const mockEmptyNik = "";
const mockEmptyNisn = "";
const mockNikLessThan16 = "123";
const mockNisnLessThan10 = "12345";
const mockRightNisn = "1234567890";
const mockRightNik = "1234567890123456";
const mockWrongNisn = "1234567899";
const mockWrongNik = "1234567890123455";

describe("HomePage", () => {
  let push: jest.Mock;

  beforeEach(() => {
    push = jest.fn();
    useRouterMock.mockImplementation(() => ({
      push,
    }));
  });

  it("render home page correctly", () => {
    const page = render(<Home />);
    expect(page).toMatchSnapshot();
  });

  it("should show an error message when NISN is empty", () => {
    const nisnErrorText = validateNisn(mockEmptyNisn);
    expect(nisnErrorText).toBe("NISN harus diisi");
    render(<Home />);

    const nisnInput = screen.getByTestId("nisn");
    fireEvent.change(nisnInput, { target: { value: mockEmptyNisn } });

    const button = screen.getByTestId("cekPenerima");
    fireEvent.click(button);

    if (nisnErrorText) {
      expect(screen.getByText(nisnErrorText)).toBeInTheDocument();
    }
  });

  it("should show an error message when NISN is less than 10 character", () => {
    const nisnErrorText = validateNisn(mockNisnLessThan10);
    expect(nisnErrorText).toBe("NISN harus 10 digit");
    render(<Home />);

    const nisnInput = screen.getByTestId("nisn");
    fireEvent.change(nisnInput, { target: { value: mockNisnLessThan10 } });

    const button = screen.getByTestId("cekPenerima");
    fireEvent.click(button);

    if (nisnErrorText) {
      expect(screen.getByText(nisnErrorText)).toBeInTheDocument();
    }
  });

  it("should show an error message when NIK is empty", () => {
    const nikErrorText = validateNik(mockEmptyNik);
    expect(nikErrorText).toBe("NIK harus diisi");
    render(<Home />);

    const nikInput = screen.getByTestId("nik");
    fireEvent.change(nikInput, { target: { value: mockEmptyNik } });

    const button = screen.getByTestId("cekPenerima");
    fireEvent.click(button);

    if (nikErrorText) {
      expect(screen.getByText(nikErrorText)).toBeInTheDocument();
    }
  });

  it("should show an error message when NIK is less than 16 character", () => {
    const nikErrorText = validateNik(mockNikLessThan16);
    expect(nikErrorText).toBe("NIK harus 16 digit");
    render(<Home />);

    const nikInput = screen.getByTestId("nik");
    fireEvent.change(nikInput, { target: { value: mockNikLessThan16 } });

    const button = screen.getByTestId("cekPenerima");
    fireEvent.click(button);

    if (nikErrorText) {
      expect(screen.getByText(nikErrorText)).toBeInTheDocument();
    }
  });

  it("should show notification when credentials do not match", () => {
    render(<Home />);

    const nisnInput = screen.getByTestId("nisn");
    const nikInput = screen.getByTestId("nik");

    fireEvent.change(nisnInput, { target: { value: mockWrongNisn } });
    fireEvent.change(nikInput, { target: { value: mockWrongNik } });

    const button = screen.getByTestId("cekPenerima");
    fireEvent.click(button);

    expect(screen.getByTestId("notifikasi")).toBeInTheDocument();
    expect(screen.getByText("NIK dan NISN Tidak Cocok")).toBeInTheDocument();
  });

  it("should navigate to data-penerima page when credentials are valid", () => {
    validateNisn(mockRightNisn);
    validateNik(mockRightNik);
    render(<Home />);

    const nisnInput = screen.getByTestId("nisn");
    const nikInput = screen.getByTestId("nik");

    fireEvent.change(nisnInput, { target: { value: mockRightNisn } });
    fireEvent.change(nikInput, { target: { value: mockRightNik } });

    const button = screen.getByText("Cek Penerima");
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith({
      pathname: "/data-penerima",
      query: { nisn: mockRightNisn, nik: mockRightNik },
    });
  });
});
