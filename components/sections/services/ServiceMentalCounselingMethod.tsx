import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import ServicesCards from "@/components/ServicesCard";
export default function ServiceMentalCounselingMethod() {
  return (
    <div className="mx-auto max-w-7xl min-h-[100dvh] grid place-items-center">
      <div className="mx-4">
        <h1 className="text-center mb-5 text-3xl md:text-4xl lg:text-5xl font-semibold">
          Mental Counseling Method
        </h1>
        <div className="my-4">
          <ServicesCards />
        </div>
      </div>
    </div>
  );
}
