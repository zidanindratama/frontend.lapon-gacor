import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import RecomendBlogCard from "@/components/RecomendBlogCard";
export default function BlogDetailSections() {
  return (
    <div className="w-full py-9  grid place-items-center">
      <div className="max-w-7xl grid gap-4 grid-cols-1 lg:grid-cols-2 mx-5 lg:mx-auto ">
        <div className="aspect-video  w-full col-span-1  lg:col-span-2  rounded-3xl overflow-hidden">
          <Image
            src="/img/nature.jpg"
            alt="hero"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1080}
          />
        </div>
        <div className="col-span-1">
          <h1 className=" text-3xl my-8 font-semibold">
            How Mental Health Can Improve Your Life
          </h1>
          <div className="text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              earum omnis consectetur exercitationem minima hic nihil expedita
              numquam sint vitae eaque ipsa suscipit odit aliquid quis illo
              porro, praesentium nostrum rerum eius magnam deserunt.
              Consequuntur ipsam sint atque necessitatibus molestiae velit,
              placeat aliquam id similique facere quidem beatae perferendis eius
              aspernatur debitis repellendus qui minima reprehenderit. Impedit
              ipsam aut obcaecati laborum aspernatur molestiae tempora cumque
              autem dicta nostrum corrupti excepturi, odit fuga qui
              exercitationem velit non ratione similique eum voluptas
              consequuntur provident tenetur fugit! Modi voluptatibus enim
              dolorum at dicta labore obcaecati harum placeat voluptate
              repellat?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              earum omnis consectetur exercitationem minima hic nihil expedita
              numquam sint vitae eaque ipsa suscipit odit aliquid quis illo
              porro, praesentium nostrum rerum eius magnam deserunt.
              Consequuntur ipsam sint atque necessitatibus molestiae velit,
              placeat aliquam id similique facere quidem beatae perferendis eius
              aspernatur debitis repellendus qui minima reprehenderit. Impedit
              ipsam aut obcaecati laborum aspernatur molestiae tempora cumque
              autem dicta nostrum corrupti excepturi, odit fuga qui
              exercitationem velit non ratione similique eum voluptas
              consequuntur provident tenetur fugit! Modi voluptatibus enim
              dolorum at dicta labore obcaecati harum placeat voluptate
              repellat?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              earum omnis consectetur exercitationem minima hic nihil expedita
              numquam sint vitae eaque ipsa suscipit odit aliquid quis illo
              porro, praesentium nostrum rerum eius magnam deserunt.
              Consequuntur ipsam sint atque necessitatibus molestiae velit,
              placeat aliquam id similique facere quidem beatae perferendis eius
              aspernatur debitis repellendus qui minima reprehenderit. Impedit
              ipsam aut obcaecati laborum aspernatur molestiae tempora cumque
              autem dicta nostrum corrupti excepturi, odit fuga qui
              exercitationem velit non ratione similique eum voluptas
              consequuntur provident tenetur fugit! Modi voluptatibus enim
              dolorum at dicta labore obcaecati harum placeat voluptate
              repellat?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              earum omnis consectetur exercitationem minima hic nihil expedita
              numquam sint vitae eaque ipsa suscipit odit aliquid quis illo
              porro, praesentium nostrum rerum eius magnam deserunt.
              Consequuntur ipsam sint atque necessitatibus molestiae velit,
              placeat aliquam id similique facere quidem beatae perferendis eius
              aspernatur debitis repellendus qui minima reprehenderit. Impedit
              ipsam aut obcaecati laborum aspernatur molestiae tempora cumque
              autem dicta nostrum corrupti excepturi, odit fuga qui
              exercitationem velit non ratione similique eum voluptas
              consequuntur provident tenetur fugit! Modi voluptatibus enim
              dolorum at dicta labore obcaecati harum placeat voluptate
              repellat?
            </p>
          </div>
        </div>
        <div className="col-span-1 ml-0 lg:ml-4">
          <h1 className="my-8 font-semibold text-lg">Recomendations Blog</h1>
          <div className="">
            {" "}
         <RecomendBlogCard/>
         <RecomendBlogCard/>
         <RecomendBlogCard/>
          </div>
        </div>
      </div>
    </div>
  );
}
