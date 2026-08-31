import type { ElementType, ReactNode } from "react"

export function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`}>{children}</div>
}

type SectionTone = "canvas" | "surface" | "navy" | "clay"

const toneClasses: Record<SectionTone, string> = {
  canvas: "bg-canvas text-ink",
  surface: "bg-surface text-ink",
  navy: "bg-navy text-white",
  clay: "bg-clay text-white",
}

type SectionPadding = "default" | "hero" | "banner" | "compact" | "tight" | "none"

const paddingClasses: Record<SectionPadding, string> = {
  default: "py-20 sm:py-28",
  hero: "py-16 sm:py-20 lg:py-24",
  banner: "py-16 sm:py-20",
  compact: "py-14 sm:py-16",
  tight: "py-10 sm:py-12",
  none: "",
}

export function Section({
  children,
  className = "",
  tone = "canvas",
  padding = "default",
  as: Tag = "section",
  id,
}: {
  children: ReactNode
  className?: string
  tone?: SectionTone
  padding?: SectionPadding
  as?: ElementType
  id?: string
}) {
  return (
    <Tag id={id} className={`${toneClasses[tone]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </Tag>
  )
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-sm font-medium uppercase tracking-[0.16em] text-clay ${className}`}>
      {children}
    </p>
  )
}
