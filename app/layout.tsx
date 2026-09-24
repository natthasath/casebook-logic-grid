import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casebook Logic Grid",
  description: "ตารางไขปริศนา Logic Grid สำหรับจับคู่ผู้ต้องสงสัย สถานที่ และอาวุธ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans+Thai:wght@400;500;600&family=Pridi:wght@500;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
