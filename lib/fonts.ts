import localFont from 'next/font/local'

export const fontSans = localFont({
  src: [
    {
      path: '../assets/fonts/RoadUA-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/RoadUA-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/RoadUA-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/RoadUA-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/RoadUA-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/RoadUA-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/RoadUA-Black.woff2',
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
      path: '../assets/fonts/CraftworkGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CraftworkGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CraftworkGrotesk-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CraftworkGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CraftworkGrotesk-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-serif',
})
