"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { home } from "@/lib/i18n/dictionaries/home"
import { common } from "@/lib/i18n/dictionaries/shared"
import { business } from "@/lib/content/business"
import { Container, Section, Eyebrow } from "@/lib/components/layout-primitives"
import { ButtonLink } from "@/lib/components/button"
import Reveal from "@/lib/components/reveal"
import Reviews from "@/lib/components/reviews"

const dotTones = ["bg-clay", "bg-wheat", "bg-sage", "bg-navy-light"]

export default function HomeView() {
  const { lang } = useLanguage()
  const t = home[lang]
  const c = common[lang]

  return (
    <>
      {/* HERO: full-width image with text overlay. The one dramatic moment on the page. */}
      <Section
        tone="navy"
        padding="none"
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(18, 24, 44, 0.82) 0%, rgba(31, 42, 74, 0.58) 52%, rgba(31, 42, 74, 0.18) 100%)" }}
          aria-hidden="true"
        />
        <Container className="relative z-10 flex min-h-[500px] flex-col justify-center sm:min-h-[600px] lg:min-h-[700px]">
          <div className="max-w-2xl">
            <Eyebrow className="text-wheat">{t.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]">
              {t.hero.title}
            </h1>
            <p className="mt-8 max-w-lg text-xl font-medium leading-relaxed text-white/95 sm:text-2xl">
              {t.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 sm:mt-12">
              <ButtonLink href={business.phoneHref} variant="on-navy">
                {t.hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="/collections" variant="ghost" className="border-white/40 text-white hover:bg-white hover:text-navy">
                {t.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* VALUE PROPS: bright surface after the dark hero, deliberate contrast */}
      <Section tone="surface" padding="tight">
        <Container>
          <Eyebrow>{t.valueProps.eyebrow}</Eyebrow>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
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
      <Section tone="canvas" padding="tight">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>{t.collectionsPreview.eyebrow}</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
                {t.collectionsPreview.title}
              </h2>
            </div>
            <Link href="/collections" className="text-sm font-medium text-navy underline underline-offset-4 hover:text-navy-dark">
              {t.collectionsPreview.viewAll}
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <Link
                href="/collections"
                className="group relative flex h-full flex-col justify-end overflow-hidden rounded-lg bg-navy p-8 text-white transition-colors duration-250 hover:bg-navy-dark sm:p-10"
                style={{ minHeight: "360px" }}
              >
                <Image
                  src="/images/store-interior-shelves.jpg"
                  alt="Shelves of bedding inside Happy Bedding"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <span
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(18, 24, 44, 0.25) 0%, rgba(18, 24, 44, 0.94) 100%)" }}
                  aria-hidden="true"
                />
                <span className="relative text-xs font-medium uppercase tracking-[0.14em] text-wheat">
                  {t.collectionsPreview.items[0].title}
                </span>
                <span className="relative mt-3 max-w-sm text-lg leading-relaxed text-white/90">
                  {t.collectionsPreview.items[0].body}
                </span>
                <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                  {c.seeCollections}
                  <span aria-hidden="true" className="transition-transform duration-250 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>

            <div className="grid content-center gap-4 lg:min-h-[360px]">
              {t.collectionsPreview.items.slice(1).map((item, i) => (
                <Reveal key={item.title} delay={(i + 1) * 90}>
                  <Link
                    href="/collections"
                    className="group flex flex-col justify-end rounded-lg border border-border bg-surface p-6 transition-colors duration-250 hover:border-navy sm:p-7"
                  >
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-clay">{item.title}</span>
                    <span className="mt-3 text-base leading-relaxed text-ink-muted">{item.body}</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ABOUT PREVIEW: split with an oversized numeral */}
      <Section tone="surface" padding="compact">
        <Container className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <Reveal>
            <div className="flex items-start gap-4">
              <span className="font-display text-7xl font-semibold text-clay sm:text-8xl">
                3
              </span>
              <div className="pt-2">
                <p className="max-w-[13rem] text-xs font-medium uppercase leading-tight tracking-[0.1em] text-ink-muted">
                  {lang === "en" ? "Regions our regulars drive in from" : "단골 고객님들이 찾아오시는 지역"}
                </p>
                <p className="mt-2 text-sm font-medium text-ink">
                  {lang === "en" ? "NJ, Long Island, Manhattan" : "뉴저지, 롱아일랜드, 맨해튼"}
                </p>
                <p className="mt-1 text-xs italic text-clay">
                  {lang === "en" ? "Worth the trip." : "찾아올 만한 가치가 있습니다."}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{t.aboutPreview.eyebrow}</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {t.aboutPreview.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">{t.aboutPreview.body}</p>
            <ButtonLink href="/about" variant="secondary" className="mt-5">
              {t.aboutPreview.cta}
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      {/* HOW TO SHOP */}
      <Section tone="canvas" padding="compact">
        <Container>
          <Eyebrow>{t.howToShop.eyebrow}</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">{t.howToShop.title}</h2>
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {t.howToShop.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} className="border-t border-border-strong pt-4">
                <span className="font-display text-xl font-semibold text-clay">{i + 1}</span>
                <h3 className="mt-1.5 font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* REVIEWS */}
      <Section tone="canvas" padding="compact">
        <Container>
          <Eyebrow>{t.reviews.eyebrow}</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">{t.reviews.title}</h2>
          <div className="mt-8">
            <Reviews reviews={t.reviews.items} />
          </div>
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
