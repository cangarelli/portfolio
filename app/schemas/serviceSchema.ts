import { StaticImageData } from "next/image";
import first from "@/app/assets/jpg/1.jpg";
import second from "@/app/assets/jpg/3.jpg";
import third from "@/app/assets/jpg/5.jpg";

export const serviceSchema: Map<
  string,
 Array<{
      name: string;
      description: string;
    }>

> = new Map([
  [
    "esp",
    [
    {
      name: "Diseño y desarrollo de aplicaciones web",
      description:
        "Garantizar la calidad y eficiencia en sitios web que reflejan la imagen y valores de la marca al tiempo que satisfagan necesidades y presupuestos.",
    },
    {
      name: "Diseño e implementación de APIS",
      description:
        "Diseño y desarrollo de interfaces de programación de aplicaciones (APIs) que permitan la integración eficiente entre diferentes sistemas y servicios.",
    },
    {
      name: "Implementación de e-comerce",
      description:
        "Desarrollo y configuración de plataformas de comercio electrónico seguras, agiles y confiables.",
    },
    {
      name: "Asesoramiento de branding",
      description:
        "Estrategias para fortalecer la identidad y presencia de marca.",
    },
    {
      name: "Asistencia técnica",
      description:
        "Soporte y mantenimiento continuo de sistemas y aplicaciones.",
    },
    {
      name: "Asesoramiento de SEO",
      description:
        "Optimización de sitios web para mejorar su visibilidad en buscadores y potenciar su posicionamiento en  la web.",
    },
  ],
  ],
  [
    "eng",
    [
    {
      name: "Web application design and development",
      description:
        "Ensuring quality and efficiency on websites that reflect the brand's image and values while also meeting needs and budgets.",
    },
    {
      name: "API design and implementation",
      description:
        "Design and development of application programming interfaces (APIs) that enable efficient integration between different systems and services.",
    },
    {
      name: "E-commerce implementation",
      description:
        "Development and configuration of secure, agile, and reliable e-commerce platforms.",
    },
    {
      name: "Branding consultation",
      description:
        "Strategies to strengthen brand identity and presence.",
    },
    {
      name: "Technical assistance",
      description:
        "Continuous support and maintenance of systems and applications.",
    },
    {
      name: "SEO consultation",
      description:
        "Optimization of websites to improve their visibility in search engines and enhance their positioning on the web.",
    },
  ],
  ],
]);
