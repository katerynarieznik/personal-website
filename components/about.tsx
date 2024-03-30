import { TechIcon } from '@/components/tech-icon'
import {
  NextJsSimpleIcon,
  ReactQuerySimpleIcon,
  ReactSimpleIcon,
  TailwindCSSSimpleIcon,
} from '@/components/ui/icons'

export function About() {
  return (
    <section>
      <p className="max-w-md pb-8 pt-12">
        Aspiring quality-conscious front-end developer with a particular
        interest in animations.
      </p>
      <div className="flex gap-4">
        <TechIcon icon={<ReactSimpleIcon className="size-5" />} text="React" />
        <TechIcon
          icon={<NextJsSimpleIcon className="size-5" />}
          text="Next.js"
        />
        <TechIcon
          icon={<TailwindCSSSimpleIcon className="size-5" />}
          text="TailwindCSS"
        />
        <TechIcon
          icon={<ReactQuerySimpleIcon className="size-5" />}
          text="React Query"
        />
      </div>
    </section>
  )
}
