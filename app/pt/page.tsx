import { Portfolio } from "@/components/portfolio"
import { homeMetadata } from "@/lib/i18n"

export const metadata = homeMetadata("pt")

export default function PortuguesePortfolioPage() {
  return <Portfolio locale="pt" />
}
