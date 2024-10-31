import Image from "next/image";
import React from "react";

export default function AboutStartJourney() {
  return (
    <div className="container min-h-[100dvh] max-w-7xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center items-center">
        <div className="rounded-3xl aspect-square md:aspect-auto overflow-hidden w-full max-w-md mx-auto md:mx-0">
          <Image
            src="/img/person.jpg"
            alt="hero"
            className="w-full h-[600px] object-cover object-center"
            width={500}
            height={600}
            priority
          />
        </div>
        
        <div className="space-y-6 col-span-2">
          <div className="space-y-4">
            <h2 className="text-xl text-gray-600">Welcome Messages</h2>
            <h1 className="text-3xl  md:text-4xl lg:text-5xl font-semibold leading-tight">
              Start Your Mental Health Journey Here A Warm Welcome to Our
              Consultancy
            </h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, quam architecto perspiciatis commodi minima
              recusandae laboriosam veritatis esse rerum possimus quae provident
              itaque asperiores culpa mollitia amet porro repudiandae reiciendis.
            </p>
            
            <p className="text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
              libero aperiam ut ea quibusdam, voluptate magni assumenda
              consequatur illo officiis reiciendis architecto impedit voluptas id
              animi fuga! Vel ab voluptates harum excepturi?
            </p>
            
            <p className="font-semibold">Alexander G - Founder of Mindfulcare</p>
          </div>
        </div>
      </div>
    </div>
  );
}