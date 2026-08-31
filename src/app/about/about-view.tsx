"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { about } from "@/lib/i18n/dictionaries/about"
import { business } from "@/lib/content/business"
import { Container, Section, Eyebrow } from "@/lib/components/layout-primitives"
import { ButtonLink } from "@/lib/components/button"
import Reveal from "@/lib/components/reveal"
import FoldStack from "@/lib/components/fold-stack"

export default function AboutView() {
  const { lang } = useLanguage()
  const t = about[lang]

  return (
    <>
      {/* Constrained editorial hero, deliberately quieter than the homepage's dark hero */}
      <Section tone="surface" padding="banner">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{t.hero.body}</p>
          </div>
          <FoldStack className="hidden h-40 w-full max-w-[180px] justify-self-end lg:block" tone="warm" />
        </Container>
      </Section>

      {/* Stats: a dark signature band that breaks the light rhythm */}
      <Section tone="navy" padding="tight">
        <Container>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {t.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90} className="border-t border-white/20 pt-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-4xl font-semibold text-wheat sm:text-5xl">{stat.value}</dd>
                <dd className="mt-2 max-w-[16rem] text-sm leading-relaxed text-white/75">{stat.label}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Origin: text left, graphic right */}
      <Section tone="canvas">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <Eyebrow>{t.origin.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{t.origin.title}</h2>
            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted">
              {t.origin.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className="order-first lg:order-last">
            <FoldStack className="mx-auto h-auto w-full max-w-xs" tone="warm" />
          </Reveal>
        </Container>
      </Section>

      {/* Importing: reversed for rhythm, graphic left */}
      <Section tone="surface">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="order-first">
            <FoldStack className="mx-auto h-auto w-full max-w-xs rotate-180" tone="warm" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{t.importing.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{t.importing.title}</h2>
            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted">
              {t.importing.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Philosophy: full-bleed color pull-quote moment */}
      <Section tone="clay">
        <Container className="max-w-prose text-center">
          <Reveal>
            <Eyebrow className="text-white/80">{t.philosophy.eyebrow}</Eyebrow>
            <p className="mt-5 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
              {t.philosophy.title}
            </p>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/85">{t.philosophy.body}</p>
          </Reveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="canvas" padding="banner">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{t.cta.title}</h2>
            <p className="mt-3 max-w-md text-ink-muted">{t.cta.body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <ButtonLink href={business.phoneHref}>{t.cta.primaryCta}</ButtonLink>
            <ButtonLink href={business.address.mapsUrl} variant="secondary">
              {t.cta.secondaryCta}
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
