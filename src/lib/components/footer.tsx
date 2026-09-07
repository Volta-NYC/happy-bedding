"use client"

import Link from "next/link"
import { business, navRoutes } from "@/lib/content/business"
import { useLanguage } from "@/lib/i18n/language-context"
import { nav, footer as footerDict } from "@/lib/i18n/dictionaries/shared"

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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="border-l-2 border-clay pl-5 sm:pl-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-10 flex-col justify-center gap-1 border border-white/20 px-1.5" aria-hidden="true">
                <span className="h-0.5 w-full bg-clay-light" />
                <span className="h-0.5 w-3/4 self-end bg-wheat" />
                <span className="h-0.5 w-5/6 bg-clay" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold leading-tight">{business.name}</p>
                <p className="font-kr text-xs text-white/60">{business.nameKo}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">{t.tagline}</p>
          </div>

          <div className="grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <nav>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">{t.pagesHeading}</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
                {navRoutes.map((route) => (
                  <li key={route.href}>
                    <Link href={route.href} className="text-sm text-white/70 transition-colors hover:text-white">
                      {labels[route.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">{t.contactHeading}</p>
              <a href={business.phoneHref} className="font-display text-xl font-semibold text-white transition-colors hover:text-wheat">
                {business.phoneDisplay}
              </a>
              <p className="mt-3 text-xs leading-relaxed text-white/65">
                {business.address.line1}
                <br />
                {business.address.line2}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                <a href={business.address.mapsUrl} target="_blank" rel="noreferrer" className="text-wheat transition-colors hover:text-white">
                  {t.directions}
                </a>
                <a href={business.googleReviewUrl} target="_blank" rel="noreferrer" className="text-wheat transition-colors hover:text-white">
                  {t.reviews}
                </a>
              </div>
            </div>
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
