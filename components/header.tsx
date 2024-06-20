import { Button } from '@/components/ui/button'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

const CONTACTS = [
  {
    href: 'https://www.linkedin.com/in/katerynarieznik',
    label: 'LinkedIn',
    icon: <LinkedInLogoIcon className="size-5" />,
  },
  {
    href: 'https://github.com/katerynarieznik',
    label: 'GitHub',
    icon: <GitHubLogoIcon className="size-5" />,
  },
]

export function Header() {
  return (
    <header className="mx-auto flex max-w-screen-md items-center justify-between px-4 py-12 md:px-12">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/photo.avif"
          alt="Kateryna Rieznik"
          width={52}
          height={52}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="font-serif text-xl font-semibold">Kateryna Rieznik</h1>
          <h2 className="font-sans text-xl font-extralight opacity-60">
            Front-end developer
          </h2>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        {CONTACTS.map(({ href, label, icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            className="relative rounded after:absolute after:mt-1 after:hidden after:h-px after:w-full after:origin-[center_right] after:scale-x-0 after:bg-foreground after:transition-transform after:duration-500 after:hover:origin-[center_left] after:hover:scale-x-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:after:block"
          >
            <Button variant="ghost" size="icon" className="md:hidden">
              {icon}
            </Button>
            <span className="sr-only md:not-sr-only">{label}</span>
          </Link>
        ))}
      </div>
    </header>
  )
}
