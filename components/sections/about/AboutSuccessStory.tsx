import DoctorSuccessStory from "@/components/svg/DoctorSuccessStory";
import React from "react";
import { FaPlay } from "react-icons/fa";
export default function AboutSuccessStory() {
  return (
    <section className="w-full min-h-[100dvh] grid place-items-center">
      {" "}
      <div className="container max-w-7xl  mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-9 order-last lg:order-first">
            <div>
              <h2 className="font-medium text-lg">Success Story</h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                Breaking the Stigma The Success Story of Mental Health
                Consultant
              </h1>
            </div>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((item, index) => (
                <li key={index} className="flex  items-center gap-4">
                  <FaPlay className="w-8 h-8" />
                  <p className="text-sm lg:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Repellat reprehenderit numquam doloribus architecto
                    obcaecati atque illo iusto doloremque fugit!
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid place-items-center order-first lg:order-last">
            <DoctorSuccessStory className="aspect-square w-3/4" />
          </div>
        </div>
      </div>
    </section>
  );
}
