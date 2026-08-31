import type { Metadata } from "next"
import VisitView from "./visit-view"

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Visit Happy Bedding at 150-29 Northern Blvd, Flushing, NY. Call (646) 372-1133 to consult by phone, get directions, or ask about local delivery and nationwide shipping.",
}

export default function VisitPage() {
  return <VisitView />
}
