import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image'
import { cn } from '@/lib/utils'
export default function RecomendBlogCard() {
  return (
    <Card className={cn("shadow-none border-none")}>
    <CardContent className="flex mt-5 flex-col md:flex-row  gap-4 items-center">
      <div className="aspect-video w-full md:w-1/2  lg:aspect-square rounded-3xl overflow-hidden">
        {" "}
        <Image
          src="/img/nature.jpg"
          alt="hero"
          className="w-full h-full object-cover object-center"
          width={500}
          height={600}
        />
      </div>
      <div className="">
        <h4 className="font-semibold text-base md:text-lg lg:text-xl ">
          How mental health can improve your life Lorem ipsum dolor,
          sit amet
        </h4>
        <p className="text-xs lg:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore culpa nihil repellendus?
        </p>
      </div>
    </CardContent>
  </Card>
  )
}
