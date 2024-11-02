import React from "react";
import ServicesCards from "@/components/ServicesCard";
export default function ServiceMentalCounselingMethod() {
  return (
    <section className="mx-auto max-w-7xl z-10 min-h-[100dvh] grid place-items-center">
      <div className="mx-4">
        <h1 className="text-center mb-5 text-3xl md:text-4xl lg:text-5xl font-semibold">
          Mental Counseling Method
        </h1>
        <div className="my-4">
          <ServicesCards />
        </div>
      </div>
    </section>
  );
}
