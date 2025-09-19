// app/fonts/nohemi.ts
import localFont from "next/font/local";

export const nohemi = localFont({
  src: [
    {
      path: "./Nohemi-VF.ttf",      // ajustá el nombre si difiere
      weight: "100 900",            // rango de pesos del VF
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
  display: "swap",
  preload: true,
});

export default nohemi;