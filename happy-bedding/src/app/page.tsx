import type { Metadata } from "next"
import HomeView from "./home-view"

export const metadata: Metadata = {
  title: "Happy Bedding | Korean Imported Bedding in Flushing, NY",
  description:
    "Premium eco-modal and hotel-grade bedding imported directly from Korea every season. Family-run on Northern Boulevard in Flushing, serving NYC, New Jersey, and Long Island.",
}

export default function HomePage() {
  return <HomeView />
}
