const narrativesSchema: Map<
  string,
  {
    title: string;
    epigrafe: string;
    section: Array<{
      subtitle: string;
      text: Array<string>;
    }>;
  }
> = new Map([
  [
    "esp",
    {
      title: "A lo largo del camino...",
      epigrafe: "Saber hacer",
      section: [
        {
          subtitle: "Desarrollador web Full-Stack",
          text: [
            "Recibí formación práctica y teórica en lenguajes como HTML, CSS y JavaScript, y en gestión de bases de datos NoSQL. ",
            "Me especialicé en frameworks como React, Sass, Express, NestJS y Handlebars, y en la construcción de e‑commerce con integración de sistemas de pago.",
            "Gestiono procesos de testing automatizado y CI/CD pipelines a través de entornos como GitHub",
            "También profundicé en arquitecturas modernas con TypeScript, Next.js, Tailwind y gestión de imagenes con Cloudinary, aplicando buenas prácticas de escalabilidad y seguridad.",
          ],
        },
        {
          subtitle: "Psicologo organizacional",
          text: [
            "Me formé en psicología clínica, laboral y organizacional, con experiencia en procesos de aprendizaje e innovación organizacional, selección de personal, diseño de procesos productivos de conocimiento y sistemas de evaluación.",
            "Esta perspectiva me permite integrar la dimensión humana en proyectos digitales, aportando cercanía y comprensión de las dinámicas organizacionales.",
            "También es un recurso para facilitar entornos basados en mentalidad agil y procesos de cambio organizacional planificado.",
          ],
        },
        {
          subtitle: "Auto-didacta e investigador",
          text: [
            "Soy una persona curiosa y proactiva: siempre busco mejores formas de realizar las tareas que emprendo.",
            "Aprendí de manera autodidacta a trabajar con TypeScript, frameworks como Next.js y Tailwind, implementar sistemas de recomendación basados en interacciones y geolocalización, y gestionar cobros y reintegros con los SDK de Mercado Pago.",
            "Mi enfoque está en aprender, experimentar y transformar ese conocimiento en soluciones prácticas.",
          ],
        },
      ],
    },
  ],
  [
    "eng",
    {
      title: "Along the journey...",
      epigrafe: "Know how",
      section: [
        {
          subtitle: "Full stack web developer",
          text: [
            "I received practical and theoretical training in languages such as HTML, CSS, and JavaScript, and in NoSQL database management.",
            "Specialized in frameworks like React, Sass, Express, NestJS, and Handlebars, and in building e-commerce sites with integrated payment systems.",
            "Manage automated testing processes and CI/CD pipelines through environments like GitHub.",
            "I also delved into modern architectures with TypeScript, Next.js, Tailwind and image managment with Cloudinary, applying best practices for scalability and security.",
          ],
        },
        {
          subtitle: "Organizational psychologist",
          text: [
            "I have a background in clinical, industrial, and organizational psychology, with experience in institutional learning and innovation processes, personnel selection, knowledge-based production process design, and evaluation systems.",
            "This perspective allows me to integrate the human dimension into digital projects, bringing a personal touch and understanding of organizational dynamics.",
            "It also provides valuable resources for facilitating environments based on agile mindsets and planned organizational change processes.",
          ],
        },
        {
          subtitle: "Self-taught and researcher",
          text: [
            "I'm a curious and proactive person: I'm always looking for better ways to accomplish the tasks I undertake.",
            "I'm self-taught in working with TypeScript, frameworks like Next.js and Tailwind, implementing recommendation systems based on interactions and geolocation, and managing payments and refunds with Mercado Pago's SDKs.",
            "My focus is on learning, experimenting, and transforming that knowledge into practical solutions.",
          ],
        },
      ],
    },
  ],
]);

export default narrativesSchema;
