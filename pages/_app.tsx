import { ApolloProvider } from "../providers/apollo";
import "../styles/reset.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <ApolloProvider>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

export default MyApp;
