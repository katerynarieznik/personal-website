import { ProjectCard } from '@/components/project-card'
import Link from 'next/link'
interface ProjectListSectionProps {
  cards: {
    title: string
    description: string
    href?: string
  }[]
}

export function ProjectListSection({ cards }: ProjectListSectionProps) {
  return (
    <section className="py-12">
      <h1 className="font-serif font-medium opacity-50">
        Projects and smaller bits
      </h1>
      <div className="py-3">
        {cards.map((card) => {
          if (card.href) {
            return (
              <Link href={card.href} key={card.title} target="_blank">
                <ProjectCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  isExternal={true}
                />
              </Link>
            )
          }
          return (
            <ProjectCard
              key={card.title}
              title={card.title}
              description={card.description}
              isExternal={false}
            />
          )
        })}
      </div>
    </section>
  )
}
