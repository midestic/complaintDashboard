import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import Sidebar from "@/components/Sidebar";

import BootstrapClient from "./components/BootstrapClient";

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
        <div
          className="w-[1440px] h-[100vh]  border mx-auto flex max-md:w-[auto] 
         justify-between items-start max-w-[1440px]"
        >
          <div
            className="border max-md:w-[50%] h-[100vh]
           overflow-y-scroll max-md:h-[100vh] max-md:overflow-y-scroll "
          >
            <Sidebar />
          </div>

          <BootstrapClient />
          <div className="w-[auto]"> {children}</div>
        </div>
      </body>
    </html>
  );
}
