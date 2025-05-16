import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Complaint Log",
  description: "Lapo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="w-[1920px] border mx-auto"></div>

        {children}
      </body>
    </html>
  );
}
