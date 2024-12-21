import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/Providers/ThemeProvidder";
import ToasterPrivder from "@/components/Providers/ToasterPrivder";
import { dark } from "@clerk/themes";
import ConfettiProvider from "@/components/Providers/ConfettiProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creator LMS",
  description: "Build Especially for Creator  Students ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToasterPrivder />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
