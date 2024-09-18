export function validateNisn(nisn: string): string | null {
  if (nisn === "") {
    return "NISN harus diisi";
  } else if (nisn.length !== 10) {
    return "NISN harus 10 digit";
  } else {
    return null;
  }
}

export function validateNik(nik: string): string | null {
  if (nik === "") {
    return "NIK harus diisi";
  } else if (nik.length !== 16) {
    return "NIK harus 16 digit";
  } else {
    return null;
  }
}
