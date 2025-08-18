import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "classnames";
import { BASE_URL } from "@/utils/common";
import { TooltipProvider } from "@/components/tooltip";
import { Viewport } from "next";
import { Log } from "./log";
import { Toaster } from "@/components/toast";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

const title = "My Ray";
const description = "My Ray";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: title,
  description: description,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: "My Ray",
    images: [
      {
        url: "/favicon.png",
        width: 32,
        height: 32,
        alt: "My Ray Favicon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@I_am_SamY01",
  },
};

export const viewport: Viewport = {
  themeColor: "#181818",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <TooltipProvider>
        <body className={cn("isolate", inter.className)}>
          <Log />

          {children}
          <Toaster position="top-center" offset={70} duration={2000} />
        </body>
      </TooltipProvider>
      <Analytics />
    </html>
  );
}
