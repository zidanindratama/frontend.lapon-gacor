import React from "react";
import Image from "next/image";
import { Flower2, Leaf } from "lucide-react";

export default function ServicesMentor() {
  return (

  <div className="w-full  bg-gradient-to-r from-greenSecondary to-greenPrimary">
      <div className="max-w-7xl min-h-[100dvh] grid grid-cols-2 items-center mx-auto">
      
        <div className="rounded-3xl overflow-hidden relative h-[600px] ">
          <Image
            src="/img/person.jpg"
            alt="hero"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1080}
          />
        </div>
        <div className="text-white">
          <h2 className="text-lg font-medium">Mentor</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Introducing Experienced Counsulting
          </h1>

          <div className="flex items-center gap-4">
            <Flower2 className="h-10 w-10" />
            <div>
              <h3 className="text-xl font-semibold">Professional Growth</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                ipsa eveniet natus!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Leaf className="h-10 w-10" />
            <div>
              <h3 className="text-xl font-semibold">Reducing Burnout</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem obcaecati voluptatum voluptatem sed minus
                repellat.
              </p>
            </div>
          </div>
        </div>
      </div>
  
  </div>
  );
}
