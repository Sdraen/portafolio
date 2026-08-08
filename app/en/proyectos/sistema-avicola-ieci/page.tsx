import { ProjectCaseStudy } from "@/components/project-case-study"
import { caseMetadata, caseStudies } from "@/lib/case-studies"

export const metadata = caseMetadata("en", "sistema-avicola-ieci")

export default function EnglishPoultrySystemPage() {
  return <ProjectCaseStudy locale="en" slug="sistema-avicola-ieci" content={caseStudies["sistema-avicola-ieci"].en} />
}
