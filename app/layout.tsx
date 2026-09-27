import type { Metadata, Viewport } from "next";
import { Oswald, Inter, Caveat } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saurabh-sharma.vercel.app";

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saurabh Sharma | Creative Developer & UI/UX Designer",
    template: "%s | Saurabh Sharma",
  },
  description:
    "Portfolio of Saurabh Sharma, a creative developer and full-stack engineer based in Mumbai, India. Specialized in Next.js, React, TypeScript, Tailwind CSS, and crafting high-performance interactive web experiences.",
  applicationName: "Saurabh Sharma Portfolio",
  authors: [{ name: "Saurabh Sharma", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Saurabh Sharma",
    "Saurabh Sharma Portfolio",
    "Saurabh Sharma Developer",
    "Creative Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer Mumbai",
    "Web Developer India",
    "Portfolio Website",
    "Interactive Web Design",
    "Software Engineer Portfolio",
  ],
  creator: "Saurabh Sharma",
  publisher: "Saurabh Sharma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Saurabh Sharma | Creative Developer & UI/UX Designer",
    description:
      "Explore the portfolio of Saurabh Sharma, featuring modern web applications, interactive design systems, and full-stack engineering.",
    url: siteUrl,
    siteName: "Saurabh Sharma Portfolio",
    images: [
      {
        url: "/developer_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Saurabh Sharma - Creative Developer & UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Sharma | Creative Developer & UI/UX Designer",
    description:
      "Explore the portfolio of Saurabh Sharma, featuring modern web applications, interactive design systems, and full-stack engineering.",
    images: ["/developer_portrait.jpg"],
    creator: "@saurabh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googleb3c5ff019a78c86a",
    other: {
      "google-site-verification": [
        "googleb3c5ff019a78c86a.html",
        "googleb3c5ff019a78c86a",
        "b3c5ff019a78c86a",
      ],
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Saurabh Sharma",
      alternateName: ["Saurabh", "lucifer-3739"],
      url: siteUrl,
      image: `${siteUrl}/developer_portrait.jpg`,
      jobTitle: "Creative Developer & UI/UX Designer",
      worksFor: {
        "@type": "Organization",
        name: "Freelance / Independent",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/lucifer-3739",
        "https://www.linkedin.com/in/saurabh-sharma-19a91a24b/",
        "https://www.instagram.com/sourabh___20/",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Frontend Engineering",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "UI/UX Design",
        "Framer Motion",
        "Node.js",
        "PostgreSQL",
        "API Integration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Saurabh Sharma Portfolio",
      description: "Portfolio of Saurabh Sharma, a creative developer & UI/UX designer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Saurabh Sharma | Creative Developer & UI/UX Designer",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${caveat.variable} h-full antialiased dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-[#F2F2F2] selection:bg-[#D71920] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
