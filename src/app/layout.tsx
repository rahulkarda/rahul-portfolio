import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahul Karda — ML Engineer & Full-Stack Developer",
  description:
    "ML Engineer at SAP Labs. M.Tech SE from BITS Pilani. Building AI systems, SaaS products, and open-source tools.",
  metadataBase: new URL("https://rahulkarda.dev"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Rahul Karda — ML Engineer & Full-Stack Developer",
    description:
      "ML Engineer at SAP Labs. M.Tech SE from BITS Pilani. Building AI systems, SaaS products, and open-source tools.",
    url: "https://rahulkarda.dev",
    siteName: "Rahul Karda",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Karda — ML Engineer & Full-Stack Developer",
    description: "ML Engineer at SAP Labs. M.Tech SE from BITS Pilani.",
    images: ["/og-image.png"],
    creator: "@rahulkarda2002",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
