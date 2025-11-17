import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "DCN - Universitas Al-Khairiyah",
  description:
    "Dicoding Community Network x Universitas Al-Khairiyah - Empowering Future Web Developers",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta
          name="google-site-verification"
          content="qOhAPXxNUvyj3-3xRZPqEDmrUcdHK4ppcYZCpmeYl6E"
        />
      </head>
      <body
        className={`${poppins.variable} ${InterFont.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
