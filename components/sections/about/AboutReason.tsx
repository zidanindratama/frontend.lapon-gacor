import FeatureCards from "@/components/FeaturesCard";
import React from "react";
export default function AboutReason() {
  return (
    <div className="mx-auto max-w-7xl min-h-[100dvh] grid place-items-center">
      <div className="">
        <div className="text-center w-3/4 mx-auto">
          <p className="font-medium text-lg">Why?</p>
          <h1 className=" text-3xl md:text-4xl font-semibold lg:text-5xl">
            Why Our Mental Health Consultants are the Best Choice
          </h1>
        </div>

        <FeatureCards />
      </div>
    </div>
  );
}

