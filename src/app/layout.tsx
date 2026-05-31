import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahul Karda — ML Engineer & Full-Stack Developer",
  description:
    "ML Engineer at SAP Labs. M.Tech CS from BITS Pilani. Building AI systems, SaaS products, and open-source tools.",
  metadataBase: new URL("https://rahulkarda.dev"),
  openGraph: {
    type: "website",
    title: "Rahul Karda — ML Engineer & Full-Stack Developer",
    description:
      "ML Engineer at SAP Labs. M.Tech CS from BITS Pilani. Building AI systems, SaaS products, and open-source tools.",
    url: "https://rahulkarda.dev",
    siteName: "Rahul Karda",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Karda — ML Engineer & Full-Stack Developer",
    description:
      "ML Engineer at SAP Labs. M.Tech CS from BITS Pilani. Building AI systems and SaaS products.",
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
