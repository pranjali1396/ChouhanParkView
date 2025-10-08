import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chouhan Park View - The Most Anticipated Masterplanned Community",
  description: "The most anticipated masterplanned community. Final Homes in Phase 1 Now Selling!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}