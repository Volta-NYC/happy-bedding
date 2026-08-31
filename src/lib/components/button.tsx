import Link from "next/link"
import type { ReactNode } from "react"

type Variant = "primary" | "secondary" | "ghost" | "on-navy"

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-dark border border-navy hover:border-navy-dark",
  secondary:
    "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white",
  ghost: "bg-transparent text-ink border border-border hover:border-border-strong",
  "on-navy": "bg-clay text-white border border-clay hover:bg-clay-dark hover:border-clay-dark",
}

type BaseProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type LinkProps = BaseProps & {
  href: string
  external?: boolean
}

export function ButtonLink({ href, children, variant = "primary", className = "", external }: LinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-medium transition-colors duration-250 ${variantClasses[variant]} ${className}`

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
