import { BlogListProps } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";



export default function BlogListCard({
  slug,
  imageUrl,
  title,
  description,
}: BlogListProps) {
  return (
    <div className="max-w-xs space-y-5 ">
      <div className="w-full overflow-hidden rounded-3xl h-[230px]">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-xl md:text-2xl truncate  font-semibold">{title}</h1>
        <p>
          {" "}
          {description.slice(0, 100)}
          {description.length > 100 && (
            <Link
              href={`/blog/${slug}`}
              className="text-blue-500 hover:underline"
            >
              {" "}
              See More
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
