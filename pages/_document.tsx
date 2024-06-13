import Document, { Head, Html, Main, NextScript } from "next/document";
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-white antialiased">
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
