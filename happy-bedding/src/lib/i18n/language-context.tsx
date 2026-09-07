"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react"

export type Lang = "en" | "ko"

const STORAGE_KEY = "happy-bedding-lang"

type Listener = () => void
let listeners: Listener[] = []
let cachedLang: Lang = readStoredLang()

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "ko" ? "ko" : "en"
}

function subscribe(listener: Listener) {
  listeners.push(listener)
  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

function getSnapshot(): Lang {
  return cachedLang
}

function getServerSnapshot(): Lang {
  return "en"
}

function writeLang(next: Lang) {
  cachedLang = next
  window.localStorage.setItem(STORAGE_KEY, next)
  listeners.forEach((listener) => listener())
}

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Reads localStorage through a tiny external store instead of an
  // effect+setState pair, so the server snapshot ("en") is used for the
  // first client render (matching SSR output) and swaps in the real
  // preference as soon as React resolves the store, with no extra render
  // caused by calling a state setter from inside an effect body.
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    document.documentElement.lang = lang === "ko" ? "ko" : "en"
    document.documentElement.dataset.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: writeLang,
      toggle: () => writeLang(lang === "en" ? "ko" : "en"),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
