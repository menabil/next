import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const osw = Oswald({
  variable: "--font-Oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Prozen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${osw.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
