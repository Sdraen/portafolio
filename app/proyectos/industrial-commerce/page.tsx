import { ProjectCaseStudy } from "@/components/project-case-study"
import { caseMetadata, caseStudies } from "@/lib/case-studies"

export const metadata = caseMetadata("es", "industrial-commerce")

export default function IndustrialCommercePage() {
  return <ProjectCaseStudy locale="es" slug="industrial-commerce" content={caseStudies["industrial-commerce"].es} />
}
