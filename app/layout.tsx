import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header"
import Footer from "./component/Footer";
import "bootstrap-icons/font/bootstrap-icons.css"

export const metadata: Metadata = {
  title: "Alishh's Portfolio",
  description: "Here is Alishh's Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
        <Header font = {{ className: "Poppins" }} />
          {children}
          <Footer />
        </body>
      </html>
  );
}
