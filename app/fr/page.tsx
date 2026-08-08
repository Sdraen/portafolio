import { Portfolio } from "@/components/portfolio"
import { homeMetadata } from "@/lib/i18n"

export const metadata = homeMetadata("fr")

export default function FrenchPortfolioPage() {
  return <Portfolio locale="fr" />
}
