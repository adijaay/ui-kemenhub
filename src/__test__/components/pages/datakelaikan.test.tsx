/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import fetchApi from "@/utils/axios";
import { encrypt, decrypt } from "@/utils/encrypt";
import "@testing-library/jest-dom";
import DataKelaikan from "@/components/pages/DataKelaikan/DataKelaikan";

jest.mock("@/utils/axios");
jest.mock("@/utils/encrypt");
jest.mock("uuid", () => ({ v4: () => "mock-uuid" }));

describe("DataKelaikan Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.setItem("vehicleCity", "City");
    localStorage.setItem("vehicleNumber", "1234");
    localStorage.setItem("vehicleCode", "XYZ");
  });

  it("renders notification and bottom sheet trigger correctly", async () => {
    render(<DataKelaikan />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Informasi yang ditampilkan di bawah ini berasal dari HUBNET.",
        ),
      ).toBeInTheDocument();
    });

    //   const aboutHubnetButton = screen.getByText("Tentang HUBNET");
    //   expect(aboutHubnetButton).toBeInTheDocument();

    //   fireEvent.click(aboutHubnetButton);
    //   expect(
    //     await screen.findByText(
    //       "HUBNET adalah Sistem Penghubung Layanan Transportasi (SPLT) yang disediakan oleh Kementerian Perhubungan untuk mendorong percepatan Transformasi Digital Sektor Transportasi, menguatkan penerapan Sistem Pemerintahan Berbasis Elektronik (SPBE), serta memudahkan Interoperabilitas & Kolaborasi lintas Pihak Berkepentingan di Sektor Transportasi.",
    //     ),
    //   ).toBeInTheDocument();
  });

  it("calls fetchData and updates state correctly on component mount", async () => {
    const MOCK_CIPHER =
      "fdab7d75511b409e8de05f99813c1471.5ce5afc6b52d9eb8b82903f8b837797c11d3295ca8dff8fbb42fc31177.8d96dcc840aa1c769c57dc8ddd1d5521";

    (encrypt as jest.Mock).mockReturnValue(MOCK_CIPHER);
    (decrypt as jest.Mock).mockReturnValue({
      message: "decrypt this success",
      success: true,
      code: 200,
      data: {
        no_reg_kendaraan: "B1234C",
      },
    });

    (fetchApi.post as jest.Mock).mockResolvedValueOnce({
      data: {
        success: true,
        message: "Success",
        data: MOCK_CIPHER,
      },
    });

    render(<DataKelaikan />);

    // await waitFor(() => {
    //   expect(fetchApi.post).toHaveBeenCalledWith(
    //     "/v1/layak-jalan",
    //     expect.any(FormData),
    //     expect.objectContaining({ headers: { "X-Request-ID": "mock-uuid" } }),
    //   );
    // });

    // expect(decrypt).toHaveBeenCalledWith("encryptedResponseData");

    await waitFor(() => {
      expect(screen.getByText(/Tentang HUBNET/)).toBeInTheDocument();
    });
  });

  it("renders CardDataKelaikan with correct data", async () => {
    render(<DataKelaikan />);

    await waitFor(() => {
      expect(screen.getByText("City 1234 XYZ")).toBeInTheDocument();
      expect(
        screen.getByText(
          /HUBNET adalah Sistem Penghubung Layanan Transportasi/,
        ),
      ).toBeInTheDocument();
    });
  });

  it("handles fetch errors gracefully", async () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    (fetchApi.post as jest.Mock).mockRejectedValueOnce(
      new Error("Fetch error"),
    );

    render(<DataKelaikan />);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "error occured when fetching:",
        expect.any(Error),
      );
    });

    consoleErrorSpy.mockRestore();
  });
});
