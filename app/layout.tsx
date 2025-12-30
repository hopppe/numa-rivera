import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Numa Rivera",
  description: "Discover luxury properties and investment opportunities in Saudi Arabia with Numa Rivera, your trusted real estate partner.",
  icons: {
    icon: [
      { url: '/Numa Rivera Logo Black.png', media: '(prefers-color-scheme: light)' },
      { url: '/Numa Rivera Logo White.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen m-0 p-0" style={{ marginTop: 0, paddingTop: 0 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
