type FoldStackProps = {
  className?: string
  tone?: "warm" | "navy"
}

/**
 * The site's one signature visual motif: an abstracted stack of folded,
 * shelved bedding, the actual thing you see when you walk into the shop.
 * Used at different scales across the site (hero, section dividers, card
 * accents) instead of a library of unrelated decorations.
 */
export default function FoldStack({ className, tone = "warm" }: FoldStackProps) {
  const bands =
    tone === "warm"
      ? [
          { fill: "var(--color-navy)", width: 300, x: 0 },
          { fill: "var(--color-clay)", width: 248, x: 0 },
          { fill: "var(--color-wheat)", width: 276, x: 24 },
          { fill: "var(--color-sage)", width: 220, x: 0 },
          { fill: "var(--color-navy-light)", width: 300, x: 40 },
          { fill: "var(--color-clay-light)", width: 190, x: 0 },
        ]
      : [
          { fill: "var(--color-canvas)", width: 300, x: 0 },
          { fill: "var(--color-wheat)", width: 248, x: 18 },
          { fill: "var(--color-canvas)", width: 276, x: 0 },
          { fill: "var(--color-clay-light)", width: 220, x: 32 },
          { fill: "var(--color-canvas)", width: 300, x: 0 },
        ]

  const bandHeight = 46
  const gap = 10
  const height = bands.length * (bandHeight + gap)

  return (
    <svg
      viewBox={`0 0 340 ${height}`}
      className={className}
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {bands.map((band, i) => {
        const y = i * (bandHeight + gap)
        return (
          <g key={i}>
            <rect
              x={band.x}
              y={y}
              width={band.width}
              height={bandHeight}
              rx={5}
              fill={band.fill}
              opacity={tone === "navy" ? 0.92 : 1}
              stroke="rgba(255,255,255,0.14)"
              strokeWidth={1}
            />
            {/* fold crease */}
            <rect
              x={band.x + 14}
              y={y + 12}
              width={band.width - 28}
              height={2}
              rx={1}
              fill="rgba(0,0,0,0.12)"
            />
          </g>
        )
      })}
    </svg>
  )
}
