import { ExternalLinkIcon } from '@radix-ui/react-icons'

interface ProjectCardProps {
  title: string
  description: string
  isExternal?: boolean
}

export function ProjectCard({
  title,
  description,
  isExternal,
}: ProjectCardProps) {
  return (
    <article className="group-focus-visible:ring-ring -mx-2.5 flex items-center justify-between rounded-lg px-5 py-4 transition hover:bg-sage-40 active:scale-[.99] group-focus-visible:ring-1 md:-mx-5">
      <div>
        <h2 className="pb-1.5 font-serif font-semibold">{title}</h2>
        <p className="font-sans opacity-60">{description}</p>
      </div>
      {isExternal && (
        <ExternalLinkIcon className="text-transparent transition-colors group-hover:text-gray-120" />
      )}
    </article>
  )
}
