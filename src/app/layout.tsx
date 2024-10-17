import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Web Tool Collection",
  description: "Collection of tools to help with web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="py-3 px-2 flex sticky top-0 border-b-2 backdrop-blur-sm">
            <div className="flex-1 font-bold content-center">
              <Link href={'/'}>WebTools Collection</Link>
            </div>
            <div>
              <ModeToggle />
            </div>
          </header>
          <main>{children}</main>
          <footer className="py-3 px-2 border-t-2">footer</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
