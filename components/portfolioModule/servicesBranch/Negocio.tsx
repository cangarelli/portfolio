"use client";
import { serviceSchema } from "@/app/schemas/serviceSchema";
import { Carousel, ServicesCard } from "@/components/componentsBarrel";
import { Language } from "@/config/globalTypesLibrary/globalTypesBarrel";
import React from "react";

interface ServicesProps {language: Language}
const Services: React.FC<ServicesProps> = ({language}) => {

  const schema = serviceSchema.get(language) || []
    return (
    <Carousel>
      {schema.map((service) => (
        <ServicesCard
          serviceName={service.name}
          serviceDescription={service.description}
        />
      ))}
    </Carousel>
  );
};

export default Services;
