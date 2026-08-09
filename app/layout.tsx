import type { Metadata } from "next";
import { Oswald, Inter, Caveat } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Saurabh Sharma | Creative Developer & UI/UX Designer",
  description: "Portfolio of Saurabh Sharma, a premium creative developer & UI/UX designer crafting high-end, responsive digital experiences combining strategic engineering with editorial design.",
  openGraph: {
    title: "Saurabh Sharma | Creative Developer & UI/UX Designer",
    description: "Portfolio of Saurabh Sharma, a premium creative developer & UI/UX designer.",
    type: "website",
    locale: "en_US",
    url: "https://saurabhkumar.design",
    siteName: "Saurabh Sharma Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${caveat.variable} h-full antialiased dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#F2F2F2] selection:bg-[#D71920] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
