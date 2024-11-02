import React from "react";
import Image from "next/image";
import BlogListCard from "@/components/BlogListCard";
import { sample } from "@/sample/blogLIst";

export default function BlogList() {
  return (
    <section className="w-full  py-9 grid place-items-center">
      <div className="max-w-7xl mx-auto">
        <header className="text-center my-6">
          <h3 className="text-xl font-medium">Blog</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Our Blog For You
          </h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sample.map((item, index) => (
            <BlogListCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
