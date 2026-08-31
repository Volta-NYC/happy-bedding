"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { collections } from "@/lib/i18n/dictionaries/collections"
import { business } from "@/lib/content/business"
import { Container, Section, Eyebrow } from "@/lib/components/layout-primitives"
import { ButtonLink } from "@/lib/components/button"
import Reveal from "@/lib/components/reveal"
import FoldStack from "@/lib/components/fold-stack"

const lifestyleGoods = {
  en: ["Hats", "Bags", "Aprons", "Umbrellas", "Cushions"],
  ko: ["모자", "가방", "앞치마", "우산", "방석"],
} as const

export default function CollectionsView() {
  const { lang } = useLanguage()
  const t = collections[lang]
  const goods = lifestyleGoods[lang]

  const [modal, seasonal, lifestyle] = t.sections

  return (
    <>
      <Section tone="surface" padding="banner">
        <Container className="max-w-3xl">
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">{t.hero.body}</p>
        </Container>
      </Section>

      {/* Section 1: Eco-Modal & Allergy Care, flagship, dark banner treatment */}
      <Section tone="navy" id="modal">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow className="text-wheat">{modal.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">{modal.title}</h2>
            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-white/80">
              {modal.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-clay-light pl-4 text-sm italic text-white/70">{modal.note}</p>
          </Reveal>
          <Reveal delay={100}>
            <FoldStack className="mx-auto h-auto w-full max-w-xs" tone="warm" />
          </Reveal>
        </Container>
      </Section>

      {/* Section 2: Four-Season & Hotel Bedding, reversed, light */}
      <Section tone="canvas" id="seasonal">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="order-first lg:order-first">
            <FoldStack className="mx-auto h-auto w-full max-w-xs rotate-180" tone="warm" />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{seasonal.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{seasonal.title}</h2>
            <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted">
              {seasonal.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-clay pl-4 text-sm italic text-ink-muted">{seasonal.note}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Section 3: Korean Lifestyle Goods, list/tag treatment instead of another split */}
      <Section tone="surface" id="lifestyle">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <Eyebrow>{lifestyle.eyebrow}</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">{lifestyle.title}</h2>
              <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-ink-muted">
                {lifestyle.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-sage pl-4 text-sm italic text-ink-muted">{lifestyle.note}</p>
            </Reveal>
            <Reveal delay={100} className="flex flex-wrap content-start gap-3 lg:pt-2">
              {goods.map((item, i) => (
                <span
                  key={item}
                  className="rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-ink"
                  style={{ marginTop: i % 2 === 0 ? 0 : "1.25rem" }}
                >
                  {item}
                </span>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Delivery info */}
      <Section tone="canvas" padding="compact">
        <Container className="max-w-2xl border-t border-border-strong pt-10">
          <Eyebrow>{t.delivery.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">{t.delivery.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{t.delivery.body}</p>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="clay" padding="banner">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{t.cta.title}</h2>
            <p className="mt-3 max-w-md text-white/85">{t.cta.body}</p>
          </div>
          <ButtonLink href={business.phoneHref} className="shrink-0 border-navy bg-navy hover:bg-navy-dark">
            {t.cta.primaryCta}
          </ButtonLink>
        </Container>
      </Section>
    </>
  )
}
