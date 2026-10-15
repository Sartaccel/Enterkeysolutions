
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EnterKey Solutions | Engineering What's Next",
  description:
    "We build digital products, web and mobile applications, AI-powered solutions, and scalable software experiences for ambitious businesses.",
  applicationName: "EnterKey Solutions",
  openGraph: {
    title: "EnterKey Solutions | Engineering What's Next",
    description:
      "Technology, thoughtfully engineered for what's next.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
