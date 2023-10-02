import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Clock from "@/components/clock";
import { ModeToggle } from "@/components/themeToggle";
import Link from "next/link";
import { Github, Instagram } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CU POP BUS Schedule",
  description: "Schedule for CU POP BUS departure time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} dark:bg-neutral-900 bg-neutral-300 `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-[100dvh] justify-center items-start">
            <div className="flex m-4 sm:m-10 w-full flex-col gap-3">
              <div className="box w-full p-3 rounded-md flex items-center justify-between px-6 flex-row">
                <h1 className="font-bold text-lg text">CU POP BUS</h1>
                <Clock />
                <div>
                  <ModeToggle />
                </div>
              </div>
              {children}
              <div className="w-full p-1 flex items-center justify-center flex-col gap-2">
                <span>
                  Made by{" "}
                  <Link
                    href="https://github.com/JusJira"
                    className="underline dark:text-blue-300 text-blue-700"
                  >
                    JusJira
                  </Link>
                </span>
                <span className="w-full flex flex-row items-center justify-center gap-1">
                  <Link
                    href="https://instagram.com/Jus.Jira"
                    aria-label="Instagram Link"
                  >
                    <Instagram />
                  </Link>

                  <Link
                    href="https://github.com/jusjira/next-pop-bus"
                    aria-label="Github Link"
                  >
                    <Github />
                  </Link>
                </span>
              </div>
            </div>
          </main>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
