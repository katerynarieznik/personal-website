import { ProjectCard } from '@/components/project-card'
import { IProject } from '@/types/types'
import Link from 'next/link'

interface ProjectListSectionProps {
  cards: IProject[]
}

export function ProjectListSection({ cards }: ProjectListSectionProps) {
  return (
    <section>
      <h1 className="text-xl font-medium opacity-60">Projects</h1>
      <div className="py-3">
        {cards.map((card) => (
          <Link
            href={card.href || '#'}
            key={card.title}
            target="_blank"
            className="group focus-visible:outline-none"
          >
            <ProjectCard
              key={card.title}
              title={card.title}
              description={card.description}
              type={card.type}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
