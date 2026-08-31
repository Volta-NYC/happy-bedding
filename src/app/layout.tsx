import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { LanguageProvider } from "@/lib/i18n/language-context"

export const metadata: Metadata = {
  metadataBase: new URL("https://happybedding.com"),
  title: {
    default: "Happy Bedding | Korean Imported Bedding in Flushing, NY",
    template: "%s | Happy Bedding",
  },
  description:
    "Premium eco-modal and hotel-grade bedding imported directly from Korea every season. Family-run on Northern Boulevard in Flushing, serving NYC, New Jersey, and Long Island.",
  openGraph: {
    title: "Happy Bedding | Korean Imported Bedding in Flushing, NY",
    description:
      "Premium eco-modal and hotel-grade bedding imported directly from Korea every season, sold without the wholesale markup.",
    siteName: "Happy Bedding",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        {/* Runs before first paint so scroll-reveal styling (globals.css)
            only applies once JS is confirmed working; without it, every
            [data-reveal] section stays fully visible. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <LanguageProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
