import localFont from 'next/font/local'

export const fontSans = localFont({
  src: [
    {
      path: '../styles/fonts/CraftworkGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/CraftworkGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../styles/fonts/CraftworkGrotesk-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/WorkSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/fonts/CraftworkGrotesk-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sans',
})

export const fontSerif = localFont({
  src: [
    {
      path: '../styles/fonts/WorkSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/WorkSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../styles/fonts/WorkSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/WorkSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/fonts/WorkSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sans',
})
