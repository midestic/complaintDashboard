import type { Metadata } from "next";

import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        <div className="w-[1440px] h-[1024px] border mx-auto  flex just-between items-start ">
          <div className="border w-[230px] h-full">
            <Sidebar />
          </div>
          <div className="border w-[1210px] h-full">dhdhdh</div>
        </div>

        {children}
      </body>
    </html>
  );
}
