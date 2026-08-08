import { ProjectCaseStudy } from "@/components/project-case-study"
import { caseMetadata, caseStudies } from "@/lib/case-studies"

export const metadata = caseMetadata("en", "industrial-commerce")

export default function EnglishIndustrialCommercePage() {
  return <ProjectCaseStudy locale="en" slug="industrial-commerce" content={caseStudies["industrial-commerce"].en} />
}
