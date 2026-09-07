"use client"

import { useLanguage } from "@/lib/i18n/language-context"

export default function LanguageToggle({ className = "", scrolled = false }: { className?: string; scrolled?: boolean }) {
  const { lang, toggle } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex items-center rounded border px-3 py-1.5 text-sm font-medium transition-all duration-250 ${
        scrolled
          ? "border-border-strong text-ink hover:border-navy hover:text-navy"
          : "border-white/40 text-white drop-shadow-sm hover:border-white hover:bg-white/10"
      } ${className}`}
      aria-label={lang === "en" ? "한국어로 보기" : "View in English"}
    >
      <span className={scrolled ? (lang === "en" ? "text-navy" : "text-ink-muted") : lang === "en" ? "text-white" : "text-white/60"}>
        EN
      </span>
      <span className={`mx-1.5 ${scrolled ? "text-border-strong" : "text-white/30"}`} aria-hidden="true">
        /
      </span>
      <span className={scrolled ? (lang === "ko" ? "text-navy" : "text-ink-muted") : lang === "ko" ? "text-white" : "text-white/60"}>
        한
      </span>
    </button>
  )
}
