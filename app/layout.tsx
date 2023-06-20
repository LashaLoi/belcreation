import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BELCREATION 2023",
  description: "BELCREATION 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
