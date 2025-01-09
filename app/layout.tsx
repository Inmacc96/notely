import type { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Notely",
  description: "Application that allows users to manage their tasks with notes",
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
