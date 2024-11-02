import React from "react";
import Image from "next/image";
import { sample } from "@/sample/blogLIst";
import RelatedBlogCard from "@/components/RelatedBlogCard";

export default function BlogRelatedList() {
  return (
    <div className="w-full py-9 h-full lg:min-h-screen grid place-items-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl my-9 font-semibold md:text-4xl lg:text-5xl">
          Related Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sample.slice(2).map((item, index) => (
            <RelatedBlogCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
