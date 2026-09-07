"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { visit } from "@/lib/i18n/dictionaries/visit"
import { business } from "@/lib/content/business"
import { Container, Section, Eyebrow } from "@/lib/components/layout-primitives"
import { ButtonLink } from "@/lib/components/button"
import Reveal from "@/lib/components/reveal"

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${business.address.line1}, ${business.address.line2}`,
)}&output=embed`

export default function VisitView() {
  const { lang } = useLanguage()
  const t = visit[lang]

  const cards = [
    {
      title: t.address.title,
      body: (
        <>
          {business.address.line1}
          <br />
          {business.address.line2}
        </>
      ),
      cta: t.address.cta,
      href: business.address.mapsUrl,
    },
    {
      title: t.phone.title,
      body: t.phone.body,
      cta: t.phone.cta,
      href: business.phoneHref,
    },
  ]

  return (
    <>
      {/* Full-width hero */}
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
        <Container className="relative z-10 flex min-h-[400px] flex-col justify-center sm:min-h-[500px]">
          <div className="max-w-2xl">
            <Eyebrow className="text-clay">{t.hero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/80 sm:text-xl">{t.hero.body}</p>
          </div>
        </Container>
      </Section>

      <Section tone="canvas" padding="none" className="pb-16 sm:pb-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <Reveal className="overflow-hidden rounded-lg border border-border-strong">
            <iframe
              src={mapSrc}
              title={`Map to ${business.name}, ${business.address.line1}, ${business.address.line2}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full sm:h-[420px] lg:h-full lg:min-h-[420px]"
              style={{ border: 0 }}
            />
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 70} className="bg-surface p-7">
                <h2 className="font-display text-lg font-semibold text-ink">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.body}</p>
                {card.cta && card.href && (
                  <ButtonLink href={card.href} variant="secondary" className="mt-5 px-4 py-2 text-xs">
                    {card.cta}
                  </ButtonLink>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="canvas" padding="none" className="pb-12 sm:pb-16">
        <Container className="max-w-2xl border-t border-border-strong pt-7 text-center sm:text-left">
          <p className="text-base leading-relaxed text-ink-muted">{t.note}</p>
        </Container>
      </Section>
    </>
  )
}
