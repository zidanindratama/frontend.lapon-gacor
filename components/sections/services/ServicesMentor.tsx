import React from "react";
import Image from "next/image";
import { Flower2, Leaf } from "lucide-react";

export default function ServicesMentor() {
  return (
    <section className="min-h-[100dvh]  grid place-items-center relative">
      <div className="h-[700px] grid place-items-end relative w-full overflow-hidden">
        <div className="w-full grid md:justify-items-end justify-items-stretch bg-gradient-to-r py-10 h-full lg:h-[500px] from-greenSecondary to-greenPrimary ">
          <div className="absolute bottom-0  left-5  z-30">
            <Image
              src="/img/person-transparent2.png"
              alt="hero"
              className="w-[600px] h-[600px] opacity-60 lg:opacity-100  z-30 object-cover object-center"
              width={1920}
              height={1080}
              priority
            />
          </div>
          <div className="w-full lg:w-1/2  px-3 lg:px-0">
            {/* Image Section */}

            {/* Text Section */}
            <div className="text-white z-40   relative ">
              <h2 className="text-lg font-medium">Mentor</h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
                Introducing Experienced Consulting
              </h1>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Flower2 className="h-10 w-10" />
                  <div>
                    <h3 className="text-xl font-semibold">
                      Professional Growth
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel, placeat saepe, quis magnam aliquam beatae ipsam eius
                      minima molestias hic possimus odio, alias accusamus?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Leaf className="h-10 w-10" />
                  <div>
                    <h3 className="text-xl font-semibold">Reduced Burnout</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Deserunt illo ea fugit nam perspiciatis eligendi ipsa
                      ratione, earum quidem aut dolores, ex assumenda aperiam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
