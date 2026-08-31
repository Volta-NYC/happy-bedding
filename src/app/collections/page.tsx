import type { Metadata } from "next"
import CollectionsView from "./collections-view"

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Eco-modal and allergy-care bedding, four-season and hotel-grade sets, and Korean lifestyle goods, imported directly from Korea and in stock in Flushing.",
}

export default function CollectionsPage() {
  return <CollectionsView />
}
