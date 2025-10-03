import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/context/language-context";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Basanta Portfolio | System Engineer & Automation Expert",
  description:
    "Explore the portfolio of Joao Basanta, a skilled system engineer specializing in Python, n8n, and cloud automation solutions. Discover projects, skills, and professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
          rel="stylesheet"
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
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
        <Script id="n8n-chat-widget" strategy="lazyOnload">
          {`
            (async () => {
              const { createChat } = await import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');
              createChat({
                webhookUrl: 'https://caritive-corrosively-natalia.ngrok-free.dev/webhook/102f23af-804b-43a9-a0b4-a99329d7ae48/chat'
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
