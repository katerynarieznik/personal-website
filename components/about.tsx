import { TechIcon } from "@/components/tech-icon";
import {
  ReactSimpleIcon,
  TailwindCSSSimpleIcon,
  TanStackSimpleIcon,
} from "@/components/ui/icons";

export function About() {
  return (
    <section className="text-lg">
      <div className="flex gap-4 pb-12">
        <TechIcon icon={<ReactSimpleIcon className="size-10" />} text="React" />
        <TechIcon
          icon={<TanStackSimpleIcon className="size-10" />}
          text="Router, Query, Table"
        />
        <TechIcon
          icon={<TailwindCSSSimpleIcon className="size-10" />}
          text="TailwindCSS"
        />
      </div>
      <p className="max-w-xxl py-2">
        Fun fact: I have a master&apos;s degree in astrophysics. Now I&apos;m a
        front-end developer passionate about building
        <span className="relative inline-block w-28 font-black text-2xl text-transparent">
          beautiful
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-move-bg bg-200% bg-colorful bg-left-top bg-clip-text font-black text-2xl text-transparent">
            beautiful
          </span>
          <span className="absolute top-0 left-0 h-full w-full bg-transparent backdrop-blur-[2px]"></span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-move-bg bg-200% bg-colorful bg-left-top bg-clip-text font-black text-2xl text-transparent">
            beautiful
          </span>
        </span>
        websites.
      </p>
      <p className="max-w-xxl pt-2 pb-12">
        My non-linear journey to this career makes it all the more rewarding and
        exciting. I thrive in small teams where I can contribute my ideas and
        drive initiatives to make a meaningful impact.
      </p>
    </section>
  );
}
