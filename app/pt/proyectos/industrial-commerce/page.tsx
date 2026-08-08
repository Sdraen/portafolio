import { ProjectCaseStudy } from "@/components/project-case-study"
import { caseMetadata, caseStudies } from "@/lib/case-studies"

export const metadata = caseMetadata("pt", "industrial-commerce")

export default function PortugueseIndustrialCommercePage() {
  return <ProjectCaseStudy locale="pt" slug="industrial-commerce" content={caseStudies["industrial-commerce"].pt} />
}
