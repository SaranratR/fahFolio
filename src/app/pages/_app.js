// pages/_app.js
import { DarkModeProvider } from "../contexts/DarkModeContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}
