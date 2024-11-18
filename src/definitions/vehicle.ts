type TDataSpionam = {
  spionam_id: number;
  noken: string;
  no_uji: string;
  tgl_exp_uji: string;
  no_kps: string;
  tgl_exp_kps: string;
  no_srut: number;
  nama_perusahaan: string;
};
  
type TDataBlue = {
  blue_id: number;
  date: string;
  no_srut: number;
  tgl_srut: string;
  no_registrasi_kendaraan: string;
  keterangan_hasil_uji: number;
  masa_berlaku: string;
};
  
export type TDataKendaraan = {
  data_rampcheck: string;
  data_spionam: TDataSpionam;
  data_blue: TDataBlue;
};
  
export type TResponseData = {
  success: boolean | null;
  message: string;
  data: TDataKendaraan;
  error: string;
};

export type TEncResponseData = {
  success: boolean;
  message: string;
  data: string;
  error: string;
}