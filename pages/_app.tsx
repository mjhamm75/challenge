import "../styles/reset.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
