import { ProjectCaseStudy } from "@/components/project-case-study"
import { caseMetadata, caseStudies } from "@/lib/case-studies"

export const metadata = caseMetadata("fr", "industrial-commerce")

export default function FrenchIndustrialCommercePage() {
  return <ProjectCaseStudy locale="fr" slug="industrial-commerce" content={caseStudies["industrial-commerce"].fr} />
}
