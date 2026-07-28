import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muonmechatronics.com"),
  title: "Muon Mechatronics | AI Product Ecosystem",
  description:
    "Muon Mechatronics builds AI products for learning, organization, creativity, and everyday decision-making.",
  applicationName: "Muon Mechatronics",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "Muon Mechatronics",
    "AI products",
    "QuickStud-E",
    "Mate-E",
    "SingSong-E",
    "SmartArts-E",
    "SmartMove-E",
    "Currents-E",
  ],
  openGraph: {
    title: "Muon Mechatronics",
    description:
      "A family of AI products designed to help people learn, think, create, and accomplish more.",
    url: "https://muonmechatronics.com",
    siteName: "Muon Mechatronics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muon Mechatronics",
    description:
      "A family of AI products designed to help people learn, think, create, and accomplish more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}