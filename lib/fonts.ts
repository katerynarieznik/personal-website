import localFont from "next/font/local";

export const fontSans = localFont({
  src: "../fonts/WorkSansGX.ttf",
  display: "swap",
  variable: "--font-sans",
});

export const fontSerif = localFont({
  src: "../fonts/CraftworkGroteskGX.ttf",
  display: "swap",
  variable: "--font-serif",
});
