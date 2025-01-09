import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Notely",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
