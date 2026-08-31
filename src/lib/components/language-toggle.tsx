"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggle } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex items-center rounded border border-border-strong px-3 py-1.5 text-sm font-medium text-ink transition-colors duration-250 hover:border-navy hover:text-navy ${className}`}
      aria-label={lang === "en" ? "한국어로 보기" : "View in English"}
    >
      <span className={lang === "en" ? "text-navy" : "text-ink-muted"}>EN</span>
      <span className="mx-1.5 text-border-strong" aria-hidden="true">
        /
      </span>
      <span className={lang === "ko" ? "text-navy" : "text-ink-muted"}>KO</span>
    </button>
  )
}
