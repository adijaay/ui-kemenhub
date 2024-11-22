import {
  capitalizeEachWord,
  formatCurrencyToLocale,
  formatDateToLocale,
} from "@/utils/transform";

describe("formatDateToLocale", () => {
  it("should format a valid date string to 'dd MMMM yyyy' in id-ID locale", () => {
    const inputDate = "2024-10-28";
    const formattedDate = formatDateToLocale(inputDate);
    expect(formattedDate).toBe("28 Oktober 2024");
  });

  it("should return 'Invalid Date' for an invalid date string", () => {
    const inputDate = "invalid-date";
    const formattedDate = formatDateToLocale(inputDate);
    expect(formattedDate).toBe("Invalid Date");
  });
});

describe("formatCurrencyToLocale", () => {
  it("should format a numeric string to locale currency with thousand separators", () => {
    const nominal = "1000000";
    const formattedCurrency = formatCurrencyToLocale(nominal);
    expect(formattedCurrency).toBe("1.000.000");
  });

  it("should handle non-numeric strings gracefully by returning 'NaN'", () => {
    const nominal = "not-a-number";
    const formattedCurrency = formatCurrencyToLocale(nominal);
    expect(formattedCurrency).toBe("NaN");
  });
});

describe("capitalizeEachWord", () => {
  it("should capitalize the first letter of each word in a sentence", () => {
    const words = "hello world from jest";
    const capitalized = capitalizeEachWord(words);
    expect(capitalized).toBe("Hello World From Jest");
  });

  it("should handle mixed case input correctly", () => {
    const words = "hElLo WoRlD";
    const capitalized = capitalizeEachWord(words);
    expect(capitalized).toBe("Hello World");
  });

  it("should handle single word input correctly", () => {
    const words = "jest";
    const capitalized = capitalizeEachWord(words);
    expect(capitalized).toBe("Jest");
  });
});
