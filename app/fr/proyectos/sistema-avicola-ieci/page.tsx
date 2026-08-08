import { ProjectCaseStudy } from "@/components/project-case-study"
import { caseMetadata, caseStudies } from "@/lib/case-studies"

export const metadata = caseMetadata("fr", "sistema-avicola-ieci")

export default function FrenchPoultrySystemPage() {
  return <ProjectCaseStudy locale="fr" slug="sistema-avicola-ieci" content={caseStudies["sistema-avicola-ieci"].fr} />
}
