import React from "react";
import HeroSections from "@/components/sections/HeroSections";
import {
  ServiceMentalCounseling,
  ServiceMentalCounselingMethod,
  ServicesMentor,
  ServicesVideo,
} from "@/components/sections/services";

export default function Services() {
  return (
    <>
      <HeroSections path="services" />
      <ServiceMentalCounseling />
      <ServiceMentalCounselingMethod />
      <ServicesMentor />
      <ServicesVideo />
    </>
  );
}
