"use client"

import Link from "next/link"
import { business, navRoutes } from "@/lib/content/business"
import { useLanguage } from "@/lib/i18n/language-context"
import { nav, footer as footerDict } from "@/lib/i18n/dictionaries/shared"
import FoldStack from "@/lib/components/fold-stack"

export default function Footer() {
  const { lang } = useLanguage()
  const t = footerDict[lang]
  const navT = nav[lang]

  const labels: Record<(typeof navRoutes)[number]["key"], string> = {
    home: navT.home,
    about: navT.about,
    collections: navT.collections,
    visit: navT.visit,
  }

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto w-full max-w-content px-5 py-12 sm:px-8 sm:py-16">
        {/* Main footer content */}
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand section */}
          <div>
            <div className="flex items-end gap-2">
              <div className="flex flex-col gap-0.5">
                <div className="h-0.75 w-3 bg-clay" />
                <div className="h-0.75 w-2 bg-clay" />
                <div className="h-0.75 w-2.5 bg-clay" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold leading-tight">{business.name}</p>
                <p className="font-kr text-xs text-white/60">{business.nameKo}</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{t.tagline}</p>
          </div>

          {/* Quick links */}
          <nav>
            <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">{t.pagesHeading}</p>
            <ul className="space-y-2">
              {navRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {labels[route.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact info */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">{t.contactHeading}</p>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href={business.phoneHref} className="hover:text-white transition-colors">
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="text-xs leading-relaxed">
                {business.address.line1}
                <br />
                {business.address.line2}
              </li>
              <li className="flex flex-col gap-1.5 pt-1">
                <a
                  href={business.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs hover:text-white transition-colors"
                >
                  {t.directions}
                </a>
                <a
                  href={business.googleReviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs hover:text-white transition-colors"
                >
                  {t.reviews}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {business.name}. {t.rights}
          </p>
          <a
            href={business.novusUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/60 hover:text-clay transition-colors"
          >
            Made by Novus
          </a>
        </div>
      </div>
    </footer>
  )
}
