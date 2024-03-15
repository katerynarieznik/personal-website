import { Button } from '@/components/ui/button'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-12 md:px-12">
      <div className="flex items-center gap-4">
        <Image
          src="/photo.avif"
          alt="Kateryna Rieznik"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="font-serif font-semibold">Kateryna Rieznik</h1>
          <h2 className="font-sans font-normal opacity-50">
            Front-end developer
          </h2>
        </div>
      </div>
      <div className="hidden md:block">
        <Button variant="link" asChild>
          <Link
            href="https://www.linkedin.com/in/katerynarieznik/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="https://github.com/katerynarieznik" target="_blank">
            GitHub
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="mailto:rieznik.k@gmail.com" target="_blank">
            Contact
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.linkedin.com/in/katerynarieznik/"
            target="_blank"
          >
            <LinkedInLogoIcon className="size-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href="https://github.com/katerynarieznik" target="_blank">
            <GitHubLogoIcon className="size-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link href="mailto:rieznik.k@gmail.com" target="_blank">
            <EnvelopeClosedIcon className="size-4" />
            <span className="sr-only">Contact</span>
          </Link>
        </Button>
      </div>
    </header>
  )
}
