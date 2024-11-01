import React from "react";
import Image from "next/image";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function ServicesVideo() {
  return (
    <div className="w-full min-h-[100dvh] grid place-items-center">
      <div className="max-w-7xl mx-auto grid place-items-center">
     <div className="mx-3">
     <div className=" lg:h-[500px] grid place-items-center rounded-md overflow-hidden">
          <HeroVideoDialog
            className=""
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
        <div className="space-y-5  text-center my-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            Breaking the Stigma Mental Health Counseling
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            temporibus fuga nulla, unde ipsum incidunt nam asperiores iusto
            labore assumenda earum alias fugiat modi vel soluta officia
            consequuntur atque praesentium iste pariatur eligendi? Possimus,
            suscipit! Iure laboriosam asperiores corporis possimus! Assumenda
            numquam inventore libero laudantium modi. Enim et repellendus
            perspiciatis, eligendi magni ullam commodi. Voluptas enim explicabo
            laboriosam vitae debitis.
          </p>
        </div>
     </div>
      </div>
    </div>
  );
}
