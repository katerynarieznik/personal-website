import Link from 'next/link'

export default function AttributionsPage() {
  return (
    <main className="mx-auto max-w-screen-md px-4 md:px-12">
      <section className="text-lg">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This website was built using Next.js, React and TailwindCSS
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Fonts
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The sans font used in this website is Road UA, a typeface designed by
          Andriy Konstantynov,{' '}
          <Link
            href="https://minttype.com"
            className="font-medium text-accent-foreground underline underline-offset-4 hover:text-primary-foreground"
          >
            minttype.com
          </Link>
          .
        </p>
        <p className="font-serif leading-7 [&:not(:first-child)]:mt-6">
          The serif font used in this website is Craftwork Grotesk, a typeface
          designed by Ivan Tsanko-Khlybovich,{' '}
          <Link
            href="https://www.tsankotype.com/копия-zvin-serif"
            className="font-medium text-accent-foreground underline underline-offset-4 hover:text-primary-foreground"
          >
            tsankotype.com
          </Link>
          .
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Icons
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The icons used in this website are from the{' '}
          <Link
            href="https://www.radix-ui.com/icons"
            className="font-medium text-accent-foreground underline underline-offset-4 hover:text-primary-foreground"
          >
            Radix UI
          </Link>{' '}
          and{' '}
          <Link
            href="https://simpleicons.org/"
            className="font-medium text-accent-foreground underline underline-offset-4 hover:text-primary-foreground"
          >
            SimpleIcons
          </Link>{' '}
          libraries.
        </p>
      </section>
    </main>
  )
}
