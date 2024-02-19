import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ThemeProvider from "@providers/theme-provider";
import LayoutProvider from "@providers/layout-provider";
import "remixicon/fonts/remixicon.css";

export const metadata: Metadata = {
  title: "AKM Properties",
  description: "One stop for all your properties needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
