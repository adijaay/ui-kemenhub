// pages/_error.tsx
import ErrorState from "@/components/commons/ErrorState";
import { NextPageContext } from "next";

import { useRouter } from "next/router";

interface ErrorProps {
  statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
  const { push } = useRouter();
  return (
    <ErrorState
      title="Sedang Terjadi Kendala Teknis"
      subtitle="Maaf, sedang terjadi kendala teknis dan saat ini kami dalam proses memperbaikinya. Silakan coba akses beberapa saat lagi."
      image="/assets/servererrorgeneral.svg"
      onClick={() => push("/")}
      buttonText="Kembali ke Beranda"
    />
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
