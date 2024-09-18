import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <noscript>
          <p>
            Maaf, layanan ini hanya bisa diakses melalui aplikasi Portal
            Pelayanan Publik
          </p>
        </noscript>
        <div id="contentContainer" style={{ display: "none" }}>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
