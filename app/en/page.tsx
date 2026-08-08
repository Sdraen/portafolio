import { Portfolio } from "@/components/portfolio"
import { homeMetadata } from "@/lib/i18n"

export const metadata = homeMetadata("en")

export default function EnglishPortfolioPage() {
  return <Portfolio locale="en" />
}
