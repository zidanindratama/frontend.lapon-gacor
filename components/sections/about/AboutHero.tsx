
import { Separator } from '@/components/ui/separator'
import React from 'react'

export default function AboutHero() {
  return (
    <div className="w-full relative bg-gradient-to-r grid place-items-center h-[80dvh] from-greenSecondary to-greenPrimary">
    <div className="mx-auto container max-w-7xl">
      <div className="w-full h-auto  flex items-center ">
        <Separator orientation="vertical" className="h-80 w-1 mr-5 ml-2 bg-white rounded-md font-bold hidden md:block" />
        <div className="space-y-5 mx-3 ">
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-semibold">About Us</h1>
          <p className="text-white min-w-0 text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam adipiscing feugiat interdum mattis. Placerat donec risus
            diam sed et. A in ullamcorper ipsum.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
