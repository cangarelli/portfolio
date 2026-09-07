const narrativesSchema: Map<
  string,
  {
    title: string;
    epigrafe: string;
    section: {
      Psi: { subtitle: string; text: Array<string> };
      Dev: { subtitle: string; text: Array<string> };
      Atitud: {
        subtitle: string;
        text: Array<string>;
      };
    };
  }
> = new Map([
  [
    "esp",
    {
      title: "Sobre mi y mi recorrido...",
      epigrafe: "Saber hacer",
      section: {
        Psi: {
          subtitle: "Psicologo organizacional",
          text: [
            "Me formé en psicología clínica, laboral y organizacional, con experiencia en procesos de aprendizaje e innovación organizacional, reclutamiento selección de personal, diseño de procesos productivos de conocimiento y sistemas de evaluación.",
            "Esta perspectiva me permite integrar la dimensión humana en proyectos digitales, aportando cercanía y comprensión de las dinámicas organizacionales.",
            "También es un recurso para facilitar entornos de producción de conocimiento y procesos de cambio organizacional planificado.",
          ],
        },
        Dev: {
          subtitle: "Desarrollador web Full-Stack",
          text: [
            "Domino lenguajes base como HTML, CSS,  JavaScript y typeScript, junto con gestión de bases de datos NoSQL.",
            "Trabajo con frameworks modernos y emprendo procesos continuos de descubrimiento de las últimas y mejores técnologias disponibles para cada proyecto.",
            "Construyo sitios con procesos de gestion automatizados, con integración con inteligencia artificial y con sistemas de pago integrados.",
            "Mi enfoque está en escalabilidad, seguridad y resultados medibles, alineados con objetivos de negocio.",
          ],
        },

        Atitud: {
          subtitle: "Auto-didacta e investigador",
          text: [
            "Soy una persona curiosa y proactiva: siempre busco mejores formas de realizar las tareas que emprendo.",
            "Aprendí de manera autodidacta a trabajar con TypeScript y a utilizar frameworks como Next.js y Tailwind.",
            "También a implementar sistemas de recomendación basados en interacciones y geolocalización, y gestionar cobros y reintegros con los SDK de Mercado Pago.",
            "Mi enfoque está en aprender, experimentar y transformar ese conocimiento en soluciones prácticas.",
          ],
        },
      },
    },
  ],
  [
    "eng",
    {
      title: "About me and my journey...",
      epigrafe: "Know how",
      section: {
        Psi: {
          subtitle: "Organizational psychologist",
          text: [
            "I have a background in clinical, industrial, and organizational psychology, with experience in institutional learning and innovation processes, recruitment and selection of staff, knowledge-based production process design, and evaluation systems.",
            "This perspective allows me to integrate the human dimension into digital projects, bringing a personal touch and understanding of organizational dynamics.",
            "It also provides valuable resources for facilitating environments based on agile mindsets and planned organizational change processes.",
          ],
        },
        Dev: {
          subtitle: "Full stack web developer",
          text: [
            "I master languages like HTML, CSS, JavaScript, and TypeScript, along with NoSQL database management.",
            "Specialized in frameworks like React, Sass, Express, NestJS, and Handlebars, and in building e-commerce sites with integrated payment systems.",
            "I build sites with automated management processes, AI integration, and integrated payment systems.",
            "I also delved into modern architectures with TypeScript, Next.js, Tailwind and image managment with Cloudinary, applying best practices for scalability and security.",
          ],
        },

        Atitud: {
          subtitle: "Self-taught and researcher",
          text: [
            "I'm a curious and proactive person: I'm always looking for better ways to accomplish the tasks I undertake.",
            "I'm self-taught in working with TypeScript, frameworks like Next.js and Tailwind, implementing recommendation systems based on interactions and geolocation, and managing payments and refunds with Mercado Pago's SDKs.",
            "My focus is on learning, experimenting, and transforming that knowledge into practical solutions.",
          ],
        },
      },
    },
  ],
]);

export default narrativesSchema;
