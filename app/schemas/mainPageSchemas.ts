import { StaticImageData } from "next/image";
import first from "@/app/assets/jpg/1.jpg";
import second from "@/app/assets/jpg/3.jpg";
import third from "@/app/assets/jpg/5.jpg";

export const intro: Map<
  string,
  {
    title: string;
    epigrafe: string;
    section: Array<{
      image: StaticImageData;
      subtitle: string;
      text: Array<string>;
    }>;
  }
> = new Map([
  [
    "esp",
    {
      title: "Carlos Andrés Garelli",
      epigrafe: "Portafolio",
      section: [
        {
          image: first,
          subtitle: "Sobre mi",
          text: [
            "Soy desarrollador fullstack especializado en soluciones digitales ágiles, seguras y escalables.",
            "Combino experiencia técnica con visión organizacional para acompañar a empresas, startups e instituciones en su transformación digital",
            "Especializado en procesos de aprendizaje e innovación. Me oriento a la escucha activa para ofrecer soluciones a problemas de usuarios y de la comunidad.",
          ],
        },
        {
          image: second,
          subtitle: "Conocimientos",
          text: [
            "Trabajo con arquitecturas modernas en Next.js, Node.js, MongoDB, FireBase y sistemas de colas como Qstash y Redis.",
            "Diseño microservicios integrados, optimizo procesos y desarrollo interfaces claras con Tailwind y Sass.",
          ],
        },
        {
          image: third,
          subtitle: "Experiencia",
          text: [
            "He liderado proyectos de integración con Mercado Pago, sistemas de reembolsos masivos y modelos de roles en MongoDB.",
            "Mi trayectoria combina desarrollo web fullstack con asesoramiento digital y branded content, siempre con foco en resultados confiables y escalables.",
          ],
        },
      ],
    },
  ],
  [
    "eng",
    {
      title: "Carlos Andrés Garelli",
      epigrafe: "Portfolio",
      section: [
        {
          image: first,
          subtitle: "About me",
          text: [
            "I am a full-stack developer specialized in agile, secure, and scalable digital solutions.",
            "I combine technical expertise with organizational vision to support companies, startups, and institutions in their digital transformation.",
            "I specialize in learning and innovation processes. I am adept at active listening to provide solutions to user and community problems.",
          ],
        },
        {
          image: second,
          subtitle: "Knoledges",
          text: [
            "I work with modern architectures using Next.js, Node.js, MongoDB, Firebase, and queuing systems like Qstash and Redis.",
            "I design integrated microservices, optimize processes, and develop clear interfaces with Tailwind and Sass.",
          ],
        },
        {
          image: third,
          subtitle: "Experiencie",
          text: [
            "I've led integration projects with Mercado Pago, mass refund systems, and role models in MongoDB.",
            "My experience combines full-stack web development with digital consulting and branded content, always focused on reliable and scalable results.",
          ],
        },
      ],
    },
  ],
]);
