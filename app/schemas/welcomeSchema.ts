const welcomeSchema: Map<
  string,
  {
    title: string;
    subTitle: string;
    comentary: string;
  }
> = new Map([
  [
    "esp",
    {
      title: "¡Hola! Soy Andrés",
      subTitle:
        "Desarrollador web full stack creativo impulsando emprendimientos a traves de micro servicios SaaS",
      comentary:
        "Soluciones practicas, plataformas escalables e integrales. Utilizo  la última tecnología y te acompaño a proyectar la imagen que necesitas.",
    },
  ],
  [
    "eng",
    {
      title: "¡Hi! I'm Andrés",
      subTitle:
        "Creative full stack web developer driving startups through SaaS microservices",
      comentary:
        "Practical solutions, scalable and comprehensive platforms. I use the latest technology and help you project the image you need.",
    },
  ],
]);

export default welcomeSchema;
