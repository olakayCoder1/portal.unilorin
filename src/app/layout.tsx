import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "University of Ilorin Student Portal - Better by far",
  description: "University of Ilorin is a federal government-owned public research university in Ilorin, Kwara State, Nigeria. The university's main campus sits on an expansive area of land, about 5,000 hectares in the ancient city of Ilorin; making it the largest university in Nigeria and one of the largest in Africa by landmass.",
  keywords: [
    "University of Ilorin",
    "UNILORIN",
    "Student Portal",
    "Nigeria University",
    "Federal University",
    "Kwara State",
    "Ilorin",
    "Public Research University",
    "Better by far",
    "School Fees",
    "Student Login"
  ],
  authors: [{ name: "University of Ilorin" }],
  creator: "University of Ilorin",
  publisher: "University of Ilorin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portal.unilorin.edu.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "University of Ilorin Student Portal",
    description: "Access your student account at University of Ilorin - Nigeria's largest university by landmass. Founded in August 1975.",
    url: 'https://portal.unilorin.edu.ng',
    siteName: 'University of Ilorin Portal',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "University of Ilorin Student Portal",
    description: "Access your student account at University of Ilorin - Nigeria's largest university by landmass.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "University of Ilorin",
    "alternateName": "UNILORIN",
    "url": "https://portal.unilorin.edu.ng",
    "logo": "https://portal.unilorin.edu.ng/unilorin-logo.svg",
    "description": "University of Ilorin is a federal government-owned public research university in Ilorin, Kwara State, Nigeria. The university's main campus sits on an expansive area of land, about 5,000 hectares in the ancient city of Ilorin; making it the largest university in Nigeria and one of the largest in Africa by landmass.",
    "foundingDate": "1975-08",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1515, P.M.B",
      "addressLocality": "Ilorin",
      "addressRegion": "Kwara State",
      "addressCountry": "Nigeria"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Student Services",
      "areaServed": "Nigeria"
    },
    "sameAs": [
      "https://en.wikipedia.org/wiki/University_of_Ilorin"
    ],
    "employee": {
      "@type": "Person",
      "name": "Abdulmumini Kabir Usman",
      "jobTitle": "Chancellor"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
