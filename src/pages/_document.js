//this file keeps page layout components organized, and encapsulates the code so we don't have to hardcode it into our pages.


import { Html, Head, Main, NextScript } from "next/document";
import Footer from '@/components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
