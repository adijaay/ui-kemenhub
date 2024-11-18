/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { FirebaseParams } from "@/definitions/firebase";

export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

let analytics: any;
let perf: any;

if (firebaseConfig?.projectId) {
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== "undefined") {
    analytics = getAnalytics(app);
    perf = getPerformance(app);
  }
}

export { analytics, logEvent, perf };
export default function sendFirebase(dataParams: FirebaseParams) {
  const params: FirebaseParams = {
    id_filter: dataParams.id_filter || null,
    filter_name: dataParams.filter_name || null,
    id_layanan: 1001,
    layanan_name: "Cek Kelaikan Kendaraan Umum",
    id_list_product: dataParams.id_list_product,
    list_product_name: dataParams.list_product_name,
    page_title: dataParams.page_title,
    id_product: dataParams.id_product || null,
    product_name: dataParams.product_name || null,
    page_path: dataParams.page_path,
  };

  logEvent(analytics, "page_view", params);
}
