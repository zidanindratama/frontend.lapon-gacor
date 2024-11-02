import { BlogListProps } from '@/types/blog'
import Image from 'next/image'
import React from 'react'

export default function RelatedBlogCard({
    imageUrl,
    title, 
    description,
    slug
}: BlogListProps) {
  return (
    <div className="max-w-xl ">
    <div className="w-full h-[300px] overflow-hidden rounded-3xl ">
      <Image    src={imageUrl}
    alt="hero"
    className="w-full h-full object-cover object-center"
    width={1920}
    height={1080} />
    </div>
    <div className="space-y-2 mt-2">
      <h1 className="text-xl font-semibold">
      {title}
      </h1>
      <p>
        {description}
      </p>
    </div>
  </div>
  )
}
