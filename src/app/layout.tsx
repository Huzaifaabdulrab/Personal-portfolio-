import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./nav";
import Whatsapp from "./wicons";
import MotionLayout from "./MotionRoute";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammad Huzaifa Abdulrab",
  description: "Muhammad Huzaifa Abdulrab portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionLayout>
        <Navbar/>
        <Whatsapp/>
        {children}
        </MotionLayout>
      </body>
    </html>
  );
}
