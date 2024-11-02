import React from "react";
import HeroPartials from "@/components/sections/HeroSections";
import {
  ServiceMentalCounseling,
  ServiceMentalCounselingMethod,
  ServicesMentor,
  ServicesVideo,
} from "@/components/sections/services";

export default function Services() {
  return (
    <>
      <HeroPartials
        title="services"
        description="Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
              at quam adipiscing feugiat interdum mattis. Placerat donec risus
              diam sed et. A in ullamcorper ipsum."
      />
      <ServiceMentalCounseling />
      <ServiceMentalCounselingMethod />
      <ServicesMentor />
      <ServicesVideo />
    </>
  );
}
