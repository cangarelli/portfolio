const timeLineSchema: Map<
  string,
  {
    title: string;
    rows: Array<{
      left: string[];
      center: string;
      rigth: string[];
    }>;
  }
> = new Map([
  [
    "esp",
    {
      title: "A lo largo del camino...",
      rows: [
        {
          left: ["Arte terapia", "Ludo terapia", "Dinámicas de grupo"],
          center: "Formación en psicología clínica, laboral y organizacional.",
          rigth: [
            "Selección de personal",
            "Procesos de aprendizaje e innovación",
          ],
        },
        {
          left: [
            "Diseño grafico para proyectos menores",
            "Proyectos de carpintería y manualidades",
            "Diseño desde cero de juego de mesa",
          ],
          center:
            "Trabajo como psicólogo clínico en instituciones y consultorios privados",
          rigth: [
            "Cultura organizacional y gestión del conflicto",
            "Escucha activa, observación participante y comprensión profunda",
          ],
        },
        {
          left: [
            "Gestión de proyectos de desarrollo de productos en base al poduct desing",
            "Participación comunitaria e institucional",
          ],
          center: "Desarrollo como programador full-stack",
          rigth: [
            "HTML, CSS, JavaScript, React y express con las mejores practicas de testing y discovery",
            "Desarrollo de proyectos con frameworks de última generación",
          ],
        },
        {
          left: ["Gestión de redes comunitarias"],
          center: "Desarrollo de proyectos personales y comunitarios",
          rigth: [
            "Incorporación de nuevos conocimientos técnicos",
            "Coordinación de espacios de trabajos con proyectos con base en la gestión de conocimientos",
            "Desarrollo de procesos de procesos de innovación y mejora",
          ],
        },
      ],
    },
  ],
  [
    "eng",
    {
      title: "Some projects developed",
      rows: [
        { left: [""], center: "", rigth: [""] },
        { left: [""], center: "", rigth: [""] },
        { left: [""], center: "", rigth: [""] },
      ],
    },
  ],
]);
export default timeLineSchema;
