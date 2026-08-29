import { StaticImageData } from "next/image";
import CuCoLogo from "@/app/assets/png/cuco-logo.png";
import GICLogo from "@/app/assets/png/logo-gic.png";
const proyectsSchema: Map<
  string,
  {
    title: string;
    subtitle: string;
    proyects: Array<{
      name: string;
      logo: StaticImageData;
      logoSize: number;
      url: string;
      description: string[];
    }>;
  }
> = new Map([
  [
    "esp",
    {
      title: "Algunos proyectos desarrollados",
      subtitle: "Experiencias dando vida a la imaginación",
      proyects: [
        {
          name: "Cultura Conecta",
          logo: CuCoLogo,
          logoSize: 200,
          url: "https://cultura-conecta.vercel.app/",
          description: [
            "Plataforma dedicada a visibilizar, promover y gestionar eventos culturales regionales.",
            "Gestiona cobros y reintegros en fomato marketplace.",
            "Brinda recomendaciones por geolocalización e historial de interacciones.",
            "Cumple con los estandares de las normas ISO 27001 en gestión de la información.",
          ],
        },
        {
          name: "Guia de intervención en crisis comunitaria",
          logo: GICLogo,
          logoSize: 100,
          url: "https://gic-lp.vercel.app/",
          description: [
            "Aplicación web para fortalecer la red del sistema de salud público y privado de salud mental de la provincia de La Pampa en el abordaje de las situaciones de crisis y/o urgencia.",
            "Permite la gestión de acceso restringido por roles para la administración de información.",
            "Tiene un buscador por claves semanticas del contenido.",
            "La guia computa de manera interacctiva escalas de riesgo para facilitar información pertinente.",
            "Pensada para la actualización y la mejora continua.",
          ],
        },
      ],
    },
  ],
  [
    "eng",
    {
      title: "Some developed projects",
      subtitle: "Experiences bringing imagination to life",
      proyects: [
        {
          name: "Cultura Conecta",
          logo: CuCoLogo,
          logoSize: 200,
          url: "https://cultura-conecta.vercel.app/",
          description: [
            "Platform dedicated to showcasing, promoting, and managing regional cultural events.",
            "Manage collections and refunds as marketplace.",
            "Gives recommendations based on geolocation and interaction history.",
            "It complies with the ISO 27001 standards for information management.",
          ],
        },
        {
          name: "Guia de intervención en crisis comunitaria",
          logo: GICLogo,
          logoSize: 100,
          url: "https://gic-lp.vercel.app/",
          description: [
            "Web application to strengthen the network of the public and private mental health system in the province of La Pampa in handling crisis and/or emergency situations",
            "Allows role-based rescrticted access management for information administration.",
            "Has a search tool for semantic content keywords.",
            "The guide interactively computes risk scales to provide relevant information.",
            "Designed for updating and continuous improvement.",
          ],
        },
      ],
    },
  ],
]);
export default proyectsSchema;
