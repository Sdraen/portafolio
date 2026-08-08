import { ProjectCaseStudy } from "@/components/project-case-study"
import { caseMetadata, caseStudies } from "@/lib/case-studies"

export const metadata = caseMetadata("es", "sistema-avicola-ieci")

export default function SistemaAvicolaPage() {
  return <ProjectCaseStudy locale="es" slug="sistema-avicola-ieci" content={caseStudies["sistema-avicola-ieci"].es} />
}
