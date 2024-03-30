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
      <p className="max-w-md py-12">
        Aspiring quality-conscious frontend developer with particular interest
        in animations.
      </p>
      <div className="flex gap-4">
        <TechIcon icon={<ReactSimpleIcon />} text="React" />
        <TechIcon icon={<NextJsSimpleIcon />} text="Next.js" />
        <TechIcon icon={<TailwindCSSSimpleIcon />} text="TailwindCSS" />
        <TechIcon icon={<ReactQuerySimpleIcon />} text="React Query" />
      </div>
    </section>
  )
}
