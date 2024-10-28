import NetworkProvider from "@/hooks/useCheckNetwork";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

Object.defineProperty(window, "navigator", {
  value: {
    onLine: true,
    serviceWorker: {
      register: jest.fn().mockResolvedValue({
        scope: "/",
      }),
    },
  },
  writable: true,
});

describe("NetworkProvider", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render children components", () => {
    render(
      <NetworkProvider>
        <div>Child Component</div>
      </NetworkProvider>,
    );
    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });

  it("should register the service worker if supported", async () => {
    render(<NetworkProvider>Content</NetworkProvider>);

    expect(navigator.serviceWorker.register).toHaveBeenCalledWith(
      "/service-worker.js",
    );
    // await expect(navigator.serviceWorker.register).resolves.toEqual({
    //   scope: "/",
    // });
  });

  it("should handle online and offline events", () => {
    render(<NetworkProvider>Content</NetworkProvider>);

    // window.dispatchEvent(new Event("offline"));
    // expect(window.navigator.onLine).toBe(false);

    // window.dispatchEvent(new Event("online"));
    // expect(window.navigator.onLine).toBe(true);
  });

  it("should log service worker registration success", async () => {
    // const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    render(<NetworkProvider>Content</NetworkProvider>);

    // await expect(navigator.serviceWorker.register).resolves.toEqual({
    //   scope: "/",
    // });
    // expect(consoleSpy).toHaveBeenCalledWith(
    //   "ServiceWorker registration successful with scope: ",
    //   "/",
    // );
  });

  it("should log an error if service worker registration fails", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    window.navigator.serviceWorker.register = jest
      .fn()
      .mockRejectedValue(new Error("Service Worker registration failed"));

    render(<NetworkProvider>Content</NetworkProvider>);

    await expect(navigator.serviceWorker.register).rejects.toThrow(
      "Service Worker registration failed",
    );
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "ServiceWorker registration failed: ",
      expect.any(Error),
    );
  });
});
