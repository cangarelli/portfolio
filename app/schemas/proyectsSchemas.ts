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
      description: string;
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
          description: "Plataforma dedicada a visibilizar, promover y gestionar eventos culturales regionales conectando a creadores culturales con audiencias interesadas en vivir experiencias auténticas.",
        },
        {
          name: "Guia de intervención en crisis comunitaria",
          logo: GICLogo,
          logoSize: 100,
          url: "https://gic-lp.vercel.app/",
          description: "Web app destinada a fortalecer la red del sistema de salud público y privado de salud mental de la provincia de La Pampa en el abordaje de las situaciones de crisis y/o urgencia. Es un medio para fomentar la construcción de redes asistenciales y para la promoción de ambientes comunitarios más saludables.",
        },
      ],
    },
  ],
  [
    "eng",
    {
      title: "Some projects developed",
      subtitle: "Experiences bringing imagination to life",
      proyects: [
        {
          name: "Cultura Conecta",
          logo: CuCoLogo,
          logoSize: 200,
          url: "https://cultura-conecta.vercel.app/",
          description: "Platform dedicated to showcase, promote, and manage regional cultural events, connecting cultural creators with audiences interested in experiencing authentic moments.",
        },
        {
          name: "Guia de intervención en crisis comunitaria",
          logo: GICLogo,
          logoSize: 100,
          url: "https://gic-lp.vercel.app/",
          description: "Web app aimed at strengthening the network of the public and private mental health system in the province of La Pampa in dealing with crisis and/or emergency situations. It's a tool to encourage the building of care networks and to promote healthier community environments.",
        },
      ],
    },
  ],
]);
export default proyectsSchema;
