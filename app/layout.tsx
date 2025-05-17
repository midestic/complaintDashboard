import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { FcDocument } from "react-icons/fc";
import { GrActions } from "react-icons/gr";
import { CgNotifications } from "react-icons/cg";
import { BiBell, BiUser } from "react-icons/bi";
import PR from "@/components/PR";

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
          className="w-[1440px] h-[1024px] border mx-auto  flex
         justify-between items-start max-w-[1440px] "
        >
          <div className="border w-[230px] h-full">
            <Sidebar />
          </div>

          <div> {children}</div>
        </div>
      </body>
    </html>
  );
}
