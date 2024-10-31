import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

export default function AboutTeam() {
  return (
    <div className="container min-h-[100dvh] max-w-7xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 order-last lg:order-first">
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-600">Team</h2>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Caring for Your Mental Health Get to Know Our Team of Experts
            </h1>
          </div>
          <p className="text-lg text-gray-600">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo dolores laborum placeat incidunt, esse aspernatur neque maiores deleniti iure aut quos commodi, itaque nam.
          </p>
          <Button
            className={cn(
              "bg-orangePrimary rounded-full hover:bg-orangePrimary/90 px-7 py-3"
            )}
          >
            See More
          </Button>
        </div>
        <div className="grid grid-cols-2 order-first lg:order-last grid-rows-2 h-[600px] gap-4">
          <div className="rounded-3xl row-span-1 md:row-span-2 col-span-2 md:col-span-1 overflow-hidden w-full ">
            <Image
              src="/img/person.jpg"
              alt="hero"
              className="w-full h-full object-cover object-center"
              width={500}
              height={600}
              priority
            />
          </div>
          <div className="rounded-3xl overflow-hidden w-full h-[300px]">
            <Image
              src="/img/person.jpg"
              alt="hero"
              className="w-full h-full object-cover object-center"
              width={500}
              height={600}
              priority
            />
          </div>
          <div className="rounded-3xl overflow-hidden w-full h-[300px] ">
            <Image
              src="/img/person.jpg"
              alt="hero"
              className="w-full h-full object-cover object-center"
              width={500}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}