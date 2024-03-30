import { About } from '@/components/about'
import { ProjectListSection } from '@/components/project-list-section'

const CARDS = [
  {
    title: 'Kollectiv.ai',
    description: 'AI - Powered Candidate sourcing website & app',
    href: 'https://kollectiv.ai',
  },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-md px-4 md:px-12">
      <About />
      <ProjectListSection cards={CARDS} />
    </main>
  )
}
