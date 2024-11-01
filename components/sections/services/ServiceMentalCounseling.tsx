import React from "react";
import Image from "next/image";

export default function ServiceMentalCounseling() {
  return (
    <div className="mx-auto max-w-7xl min-h-[100dvh] grid place-items-center">
      <div className="grid grid-rows-2 mx-3 md:grid-rows-3 gap-4">
        <div className="w-full h-[400px] aspect-video row-span-2 relative overflow-hidden rounded-xl">
          <Image
            src="/img/nature.jpg"
            alt="hero"
            className="w-full h-full object-cover absolute inset-0"
            width={1920}
            height={1080}
          />
        </div>
        <div className="grid lg:grid-cols-2 items-center grid-cols-1 row-span-1 ">
          <h1 className="text-3xl md:text-4xl w-1/2 leading-10 lg:text-5xl font-semibold">
            Mental Counseling
          </h1>

          <div className="text-sm md:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              architecto sapiente neque pariatur distinctio excepturi, nihil
              eveniet dicta voluptatibus esse perspiciatis cum, vel mollitia?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Minus officia
              repellendus dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
