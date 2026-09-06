import type { Metadata } from "next";
import { Dekko, Jost } from "next/font/google";
import "./globals.css";
import { UPreferenceProvider } from "./contexts/userPreferenceContext";
import { NavBarModule } from "@/components/componentsBarrel";
import { headers } from "next/headers";
const deko = Dekko({ weight: ["400"], subsets: ["latin"] });
const jost = Jost({ weight: ["400", "800"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "AG - Portfolio",
  description: "Sitio web de presentación personal",
  keywords: [
    "Developer",
    "Full Stack",
    "Next Js",
    "Tailwind",
    "Front End",
    "Back End",
    "Typescript",
    "JavaScript",
    "No SQL",
    "MongoDB",
    "Microservices",
    "Comunity",
    "Active listening",
    "Escucha activa",
    "b2b",
    "",
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || " ";
  return (
    <html lang="es" className={`h-full antialiased`}>
      <head>
        <meta name="csp-nonce" content={nonce} />
        <meta name="referrer" content="no-referrer-when-downgrade"></meta>
      </head>
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
