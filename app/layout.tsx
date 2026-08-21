import type { Metadata } from "next";
import { Dekko, Inter, Jost } from "next/font/google";
import "./globals.css";
import { UPreferenceProvider } from "./contexts/userPreferenceContext";
import { NavBarModule } from "@/components/componentsBarrel";
const deko = Dekko({ weight: ["400"], subsets: ["latin"] });
const jost = Jost({ weight: ["400", "800"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "800"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sitio web de presentación personal",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <UPreferenceProvider>
        <body
          id="start"
          className={`${jost.className} // scroll-smooth // min-h-full // flex flex-col items-center justify-center`}
        >
          <NavBarModule />
          <main>{children}</main>
        </body>
      </UPreferenceProvider>
    </html>
  );
}
