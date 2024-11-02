import { Quote } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function AboutQuotes() {
  return (
    <section className="h-[430px] w-full relative grid place-items-center">
      <div className="bg-black/50 absolute inset-0 w-full h-full z-10" />
      <Image
        src="/img/nature.jpg"
        alt="hero"
        className="w-full h-full object-cover absolute inset-0"
        width={1920}
        height={1080}
      />
      <div className="container mx-auto max-w-7xl relative z-20 grid place-items-center h-96">
          <Quote className="rotate-180 w-16 h-16 lg:w-24 lg:h-24  text-white/50 absolute top-0 left-0" />
        <div className="text-center">
          {" "}
          <h1 className="text-white text-3xl md:text-4xl mx-2 lg:text-5xl font-semibold">
            Self-care is not a luxury. It&#39;s a necessity. Without it, we
            cannot be our best selves, mentally, emotionally, or physically.
          </h1>
        </div>
          <Quote className="text-white/50 absolute  bottom-0 right-0 w-16 h-16  lg:w-24 lg:h-24 " />
      </div>
    </section>
  );
}
