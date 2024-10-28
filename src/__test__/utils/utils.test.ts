import {
  formatDate,
  getAllCookies,
  getCookie,
  isDateExpired,
} from "@/utils/utils";

describe("formatDate", () => {
  it("should format a date string to 'dd MMMM yyyy' in id-ID locale", () => {
    const dateString = "2024-10-28";
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe("28 Oktober 2024");
  });

  it("should return 'Invalid Date' for an invalid date string", () => {
    const dateString = "invalid-date";
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe("Invalid Date");
  });
});

describe("isDateExpired", () => {
  it("should return true if the date is before today", () => {
    const dateString = "2023-01-01";
    expect(isDateExpired(dateString)).toBe(true);
  });

  it("should return false if the date is today", () => {
    const dateString = new Date().toISOString().split("T")[0];
    expect(isDateExpired(dateString)).toBe(false);
  });

  it("should return false if the date is in the future", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    const futureDateString = futureDate.toISOString().split("T")[0];
    expect(isDateExpired(futureDateString)).toBe(false);
  });
});

describe("getCookie", () => {
  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "testCookie=testValue; anotherCookie=anotherValue",
    });
  });

  it("should return the value of the specified cookie", () => {
    expect(getCookie("testCookie")).toBe("testValue");
  });

  it("should return an empty string if the cookie is not found", () => {
    expect(getCookie("nonExistentCookie")).toBe("");
  });
});

describe("getAllCookies", () => {
  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "testCookie=testValue; anotherCookie=anotherValue",
    });
  });

  it("should return an object with all cookies", () => {
    const cookies = getAllCookies();
    expect(cookies).toEqual({
      testCookie: "testValue",
      anotherCookie: "anotherValue",
    });
  });

  it("should return an empty object if there are no cookies", () => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "",
    });
    const cookies = getAllCookies();
    expect(cookies).toEqual({});
  });
});
