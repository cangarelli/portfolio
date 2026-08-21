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
      subTitle: "Un desarrollador web full stack, independiente y creativo",
      comentary:
        "Vamos a descubrir todas las maneras en las que puedo potenciar tu negocio.",
    },
  ],
  [
    "eng",
    {
      title: "¡Hi! I'm Andrés",
      subTitle: "A creative, freelance full stack web developer",
      comentary: "Let's find out all the ways I can boost your business.",
    },
  ],
]);

export default welcomeSchema;
