import { Nunito, Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const nunito = Nunito({ weight: "400", subsets: ["latin"] });
