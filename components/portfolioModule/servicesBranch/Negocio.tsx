"use client";
import { Carousel, ServicesCard } from "@/components/componentsBarrel";
import React from "react";

interface ServicesProps {}
const Services: React.FC<ServicesProps> = ({}) => {
  const some = [
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
  ];
  return (
    <Carousel>
      {some.map((service) => (
        <ServicesCard
          serviceName={service.name}
          serviceDescription={service.description}
        />
      ))}
    </Carousel>
  );
};

export default Services;
