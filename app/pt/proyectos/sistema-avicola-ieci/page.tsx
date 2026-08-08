import { ProjectCaseStudy } from "@/components/project-case-study"
import { caseMetadata, caseStudies } from "@/lib/case-studies"

export const metadata = caseMetadata("pt", "sistema-avicola-ieci")

export default function PortuguesePoultrySystemPage() {
  return <ProjectCaseStudy locale="pt" slug="sistema-avicola-ieci" content={caseStudies["sistema-avicola-ieci"].pt} />
}
