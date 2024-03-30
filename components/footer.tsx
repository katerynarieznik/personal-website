import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { UAHeartIcon } from '@/components/ui/icons'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gradient-to-t from-background from-60% py-6">
      <div className="mx-auto flex max-w-screen-md justify-between px-4 md:px-12">
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://savelife.in.ua/en/" target="_blank">
            <UAHeartIcon />
            <span className="sr-only">Help Ukraine</span>
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </footer>
  )
}
