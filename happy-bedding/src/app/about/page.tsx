import type { Metadata } from "next"
import AboutView from "./about-view"

export const metadata: Metadata = {
  title: "About",
  description:
    "Happy Bedding has imported Korean bedding for Flushing families for nine years, from our early days on Parsons Boulevard to our shop on Northern Boulevard today.",
}

export default function AboutPage() {
  return <AboutView />
}
