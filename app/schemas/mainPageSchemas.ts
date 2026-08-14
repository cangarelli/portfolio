export const intro: Map<
  string,
  {
    title: string;
    epigrafe: string;
    section: Array<{ subtitle: string; text: Array<string> }>;
  }
> = new Map([
  [
    "esp",
    {
      title: "Carlos Andrés Garelli",
      epigrafe: "Portafolio",
      section: [
        {
          subtitle: "Sobre mi",
          text: [
            "Soy desarrollador fullstack especializado en soluciones digitales ágiles, seguras y escalables.",
            "Combino experiencia técnica con visión organizacional para acompañar a empresas, startups e instituciones en su transformación digital",
            "Especializado en procesos de aprendizaje e innovación. Me oriento a la escucha activa para ofrecer soluciones a problemas de usuarios y de la comunidad.",
          ],
        },
        {
          subtitle: "Conocimientos",
          text: [
            "Trabajo con arquitecturas modernas en Next.js, Node.js, MongoDB, FireBase y sistemas de colas como Qstash y Redis.",
            "Diseño microservicios integrados, optimizo procesos y desarrollo interfaces claras con Tailwind y Sass.",
          ],
        },
        {
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
      epigrafe: "portfolio",
      section: [
        { subtitle: "About me", text: ["", ""] },
        { subtitle: "Knoledges", text: ["", ""] },
        { subtitle: "Experiencie", text: ["", ""] },
      ],
    },
  ],
]);
