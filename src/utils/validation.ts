export function validateCity(code: string): string | null {
  if (code === "") {
    return "Kode wilayah harus diisi";
  } else if (code.length > 2) {
    return "Kode wilayah maksimal 2 karakter";
  } else {
    return null;
  }
}
export function validateNumber(number: string): string | null {
  if (number === "") {
    return "Kode wilayah harus diisi";
  } else if (number.length > 4) {
    return "Kode wilayah maksimal 4 karakter";
  } else {
    return null;
  }
}

export function validateCode(value: string): string | null {
  if (value === "") {
    return "Kode area harus diisi";
  } else if (value.length > 2) {
    return "Kode area maksimal 2 karakter";
  } else {
    return null;
  }
}
