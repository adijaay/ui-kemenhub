import { validateCity, validateCode, validateNumber } from "@/utils/validation";

describe("Validation Utils", () => {
  it("should correct validate city", () => {
    expect(validateCity("")).toBe("Kode wilayah harus diisi");
    expect(validateCity("123")).toBe("Kode wilayah maksimal 2 karakter");
    expect(validateCity("12")).toBe(null);
  });

  it("should correct validate number", () => {
    expect(validateNumber("")).toBe("Kode wilayah harus diisi");
    expect(validateNumber("12345")).toBe("Kode wilayah maksimal 4 karakter");
    expect(validateNumber("1234")).toBe(null);
  });

  it("should correct validate code", () => {
    expect(validateCode("")).toBe(null);
    expect(validateCode("1234")).toBe("Kode area maksimal 3 karakter");
  });
});
