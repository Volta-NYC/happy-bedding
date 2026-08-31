"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { business, navRoutes } from "@/lib/content/business"
import { useLanguage } from "@/lib/i18n/language-context"
import { nav } from "@/lib/i18n/dictionaries/shared"
import LanguageToggle from "@/lib/components/language-toggle"

export default function Navbar() {
  const { lang } = useLanguage()
  const t = nav[lang]
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      firstMobileLinkRef.current?.focus()
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false)
      }
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  const labels: Record<(typeof navRoutes)[number]["key"], string> = {
    home: t.home,
    about: t.about,
    collections: t.collections,
    visit: t.visit,
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-canvas/95 backdrop-blur transition-shadow duration-250 ${
        scrolled ? "border-border-strong shadow-subtle" : "border-border"
      }`}
    >
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-xl font-semibold text-navy sm:text-2xl">
            {business.name}
          </span>
          {lang === "ko" && (
            <span className="font-kr text-xs text-ink-muted">{business.nameKo}</span>
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navRoutes.map((route) => {
            const active = pathname === route.href
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors duration-250 ${
                  active ? "text-navy" : "text-ink-muted hover:text-navy"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {labels[route.key]}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <a
            href={business.phoneHref}
            className="rounded bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors duration-250 hover:bg-navy-dark"
          >
            {t.call}
          </a>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded border border-border-strong p-2 text-ink md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t.close : t.menu}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-border bg-canvas md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {navRoutes.map((route, i) => {
              const active = pathname === route.href
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  ref={i === 0 ? firstMobileLinkRef : undefined}
                  className={`rounded px-2 py-3 text-base font-medium ${
                    active ? "bg-surface-alt text-navy" : "text-ink hover:bg-surface-alt"
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {labels[route.key]}
                </Link>
              )
            })}
            <div className="mt-3 flex items-center gap-3 px-2">
              <LanguageToggle />
            </div>
            <a
              href={business.phoneHref}
              className="mt-3 rounded bg-navy px-5 py-3 text-center text-sm font-medium text-white"
              onClick={() => setMenuOpen(false)}
            >
              {t.call}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
