import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/context/language-context";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const siteUrl = "https://jbasanta.vercel.app";
const siteTitle = "Joao Basanta | Automatizacion TI, IA y Sistemas Integrados";
const siteDescription =
  "Automatizacion TI, IA aplicada y sistemas integrados para soporte, tickets y datos. Proyectos, demos y contacto de Joao Basanta.";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joao Basanta",
  url: siteUrl,
  image: `${siteUrl}/project-portfolio-web.svg`,
  jobTitle: "Especialista en Automatizacion TI",
  description: siteDescription,
  sameAs: [
    "https://github.com/polarpicado",
    "https://www.linkedin.com/in/joaobasanta/",
    "https://jbasanta.vercel.app/",
  ],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Joao Basanta | Web Portfolio",
  url: siteUrl,
  description: siteDescription,
  inLanguage: "es",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "pfh1Ag3WeFPI93-rCcC6iNFF2A4dnBF2jWYsPikh5HE",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Joao Basanta | Web Portfolio",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/project-portfolio-web.svg",
        width: 1600,
        height: 900,
        alt: "Portafolio profesional de Joao Basanta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/project-portfolio-web.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
