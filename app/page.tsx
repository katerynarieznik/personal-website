import { About } from '@/components/about'
import { ProjectListSection } from '@/components/project-list-section'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-md px-4 md:px-12">
      <About />
      <ProjectListSection cards={projects} />
    </main>
  )
}
