"use client"

import Reveal from "@/lib/components/reveal"

export type Review = {
  id: string
  text: string
  author: string
  rating: number
  color: "clay" | "wheat" | "sage" | "navy-light"
}

const colorMap = {
  clay: "bg-clay",
  wheat: "bg-wheat",
  sage: "bg-sage",
  "navy-light": "bg-navy-light",
}

export default function Reviews({ reviews }: { reviews: readonly Review[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, i) => (
        <Reveal key={review.id} delay={i * 80}>
          <div className={`rounded-lg p-6 text-white ${colorMap[review.color]}`}>
            <div className="mb-4 flex gap-1">
              {Array.from({ length: review.rating }).map((_, j) => (
                <span key={j} className="text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed opacity-95">{review.text}</p>
            <p className="text-xs font-medium opacity-80">{review.author}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
