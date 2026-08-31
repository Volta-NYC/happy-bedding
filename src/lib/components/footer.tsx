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
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto w-full max-w-content px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <FoldStack className="mb-6 h-10 w-24" tone="navy" />
            <p className="font-display text-xl font-semibold">{business.name}</p>
            <p className="mt-1 font-kr text-sm text-white/70">{business.nameKo}</p>
            <p className="mt-4 max-w-xs text-sm text-white/70">{t.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/50">
              {t.pagesHeading}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {navRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href} className="text-sm text-white/80 hover:text-white">
                    {labels[route.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/50">
              {t.contactHeading}
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              <li>
                <a href={business.phoneHref} className="hover:text-white">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                {business.address.line1}
                <br />
                {business.address.line2}
              </li>
              <li>
                <a
                  href={business.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {t.directions}
                </a>
              </li>
              <li>
                <a
                  href={business.googleReviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {t.reviews}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. {t.rights}
          </p>
          <a
            href={business.novusUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#E0A679] hover:text-[#F0C39E]"
          >
            Made by Novus
          </a>
        </div>
      </div>
    </footer>
  )
}
