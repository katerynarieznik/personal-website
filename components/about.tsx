import { TechIcon } from '@/components/tech-icon'
import {
  NextJsSimpleIcon,
  ReactQuerySimpleIcon,
  ReactSimpleIcon,
  TailwindCSSSimpleIcon,
} from '@/components/ui/icons'

export function About() {
  return (
    <section className="text-lg">
      <div className="flex gap-4 pb-12">
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
      <p className="max-w-xxl py-2">
        Fun fact: I have a master&apos;s degree in astrophysics! Now I&apos;m a
        front-end developer passionate about building beautiful websites.
      </p>
      <p className="max-w-xxl pb-12 pt-2">
        My non-linear journey to this career makes it all the more rewarding and
        exciting. I thrive in small teams where I can contribute my ideas and
        drive initiatives to make a meaningful impact.
      </p>
      {/* <p className="max-w-xxl py-2">
        My first commercial experience as a developer was with a startup, where
        I built the initial web app as the sole front-end developer.
      </p>
      <p className="max-w-xxl py-2">
        Before that, I wore the hats of QA Engineer and Technical PM. I&apos;m
        proud to have been welcomed into the same community twice and to see my
        previous work successfully helping catch bugs early in the process.
      </p>
      <p className="max-w-xxl pb-12 pt-2">
        I&apos;m eager to bring my expertise to innovative projects. Let&apos;s
        connect and explore how my skills can elevate your team&apos;s success!
      </p> */}
    </section>
  )
}
