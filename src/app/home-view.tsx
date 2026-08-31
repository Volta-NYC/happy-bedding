"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { home } from "@/lib/i18n/dictionaries/home"
import { common } from "@/lib/i18n/dictionaries/shared"
import { business } from "@/lib/content/business"
import { Container, Section, Eyebrow } from "@/lib/components/layout-primitives"
import { ButtonLink } from "@/lib/components/button"
import Reveal from "@/lib/components/reveal"
import FoldStack from "@/lib/components/fold-stack"

const dotTones = ["bg-clay", "bg-wheat", "bg-sage", "bg-navy-light"]

export default function HomeView() {
  const { lang } = useLanguage()
  const t = home[lang]
  const c = common[lang]

  return (
    <>
      {/* HERO: dark, cinematic split. The one dramatic moment on the page. */}
      <Section tone="navy" padding="hero" className="overflow-hidden">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <Eyebrow className="text-wheat">{t.hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">{t.hero.body}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href={business.phoneHref} variant="on-navy">
                {t.hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="/collections" variant="ghost" className="border-white/40 text-white hover:bg-white hover:text-navy">
                {t.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="relative -mr-5 sm:-mr-8 lg:mr-0">
            <div className="lg:translate-x-8 lg:scale-110">
              <FoldStack className="h-auto w-full max-w-md drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)] lg:ml-auto" tone="warm" />
            </div>
          </div>
        </Container>
      </Section>

      {/* VALUE PROPS: bright surface after the dark hero, deliberate contrast */}
      <Section tone="surface" padding="compact">
        <Container>
          <Eyebrow>{t.valueProps.eyebrow}</Eyebrow>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.valueProps.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <span className={`block h-1.5 w-10 rounded-full ${dotTones[i % dotTones.length]}`} aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* COLLECTIONS PREVIEW: asymmetric bento, not three identical cards */}
      <Section tone="canvas">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>{t.collectionsPreview.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                {t.collectionsPreview.title}
              </h2>
            </div>
            <Link href="/collections" className="text-sm font-medium text-navy underline underline-offset-4 hover:text-navy-dark">
              {t.collectionsPreview.viewAll}
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Reveal className="lg:row-span-2">
              <Link
                href="/collections"
                className="group flex h-full flex-col justify-end overflow-hidden rounded-lg bg-navy p-8 text-white transition-colors duration-250 hover:bg-navy-dark sm:p-10"
                style={{ minHeight: "360px" }}
              >
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-wheat">
                  {t.collectionsPreview.items[0].title}
                </span>
                <p className="mt-3 max-w-sm text-lg leading-relaxed text-white/85">
                  {t.collectionsPreview.items[0].body}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                  {c.seeCollections}
                  <span aria-hidden="true" className="transition-transform duration-250 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>

            {t.collectionsPreview.items.slice(1).map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) * 90}>
                <Link
                  href="/collections"
                  className="group flex h-full flex-col justify-end rounded-lg border border-border bg-surface p-8 transition-colors duration-250 hover:border-navy"
                  style={{ minHeight: "220px" }}
                >
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-clay">{item.title}</span>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">{item.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ABOUT PREVIEW: split with an oversized numeral */}
      <Section tone="surface">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-7xl font-semibold text-clay sm:text-8xl">
                {business.yearsInBusiness}
              </span>
              <span className="max-w-[9rem] text-sm font-medium uppercase leading-tight tracking-[0.1em] text-ink-muted">
                {lang === "en" ? "years serving Flushing" : "년간 플러싱과 함께"}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{t.aboutPreview.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {t.aboutPreview.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">{t.aboutPreview.body}</p>
            <ButtonLink href="/about" variant="secondary" className="mt-7">
              {t.aboutPreview.cta}
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      {/* HOW TO SHOP */}
      <Section tone="canvas">
        <Container>
          <Eyebrow>{t.howToShop.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{t.howToShop.title}</h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
            {t.howToShop.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} className="border-t border-border-strong pt-5">
                <span className="font-display text-2xl font-semibold text-clay">{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* CTA BANNER */}
      <Section tone="clay" padding="banner">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{t.ctaBanner.title}</h2>
            <p className="mt-3 max-w-md text-white/85">{t.ctaBanner.body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <ButtonLink href={business.phoneHref} variant="primary" className="border-navy bg-navy hover:bg-navy-dark">
              {t.ctaBanner.primaryCta}
            </ButtonLink>
            <ButtonLink
              href={business.address.mapsUrl}
              variant="ghost"
              className="border-white/50 text-white hover:bg-white hover:text-clay"
            >
              {t.ctaBanner.secondaryCta}
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
