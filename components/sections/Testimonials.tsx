import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
export default function Testimonials() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="max-w-7xl  mx-auto py-12 px-4 ">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-center">
          <div className="space-y-3 min-w-0 max-w-lg ">
            <h2 className="text-lg lg:text-xl font-medium">Testimonials</h2>
            <h1 className="text-3xl md:text-4xl leading-10 lg:text-5xl font-semibold">
              Healing Words Testimonials from a Mental Health Consultant
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Card className="bg-gradient-to-r p-3 flex flex-col items-center from-greenSecondary to-greenPrimary">
              <CardHeader>
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  eos cum consequatur consectetur unde blanditiis eum, deserunt
                  culpa vel sunt quae, pariatur dolorum vero quos in ex saepe
                  praesentium illo iusto itaque cupiditate doloribus reiciendis?
                  Vel possimus cum natus expedita repellat voluptas odio sed
                  quod nisi, provident quis voluptatem assumenda ut. Quaerat
                </p>
                <CardTitle className="my-2 text-white font-semibold">
                  George J -Client
                </CardTitle>
              </CardContent>
            </Card>
            <Card className="border flex p-3 flex-col items-center">
              <CardHeader>
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="text-center text-sm">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  eos cum consequatur consectetur unde blanditiis eum, deserunt
                  culpa vel sunt quae, pariatur dolorum vero quos in ex saepe
                  praesentium illo iusto itaque cupiditate doloribus reiciendis?
                  Vel possimus cum natus expedita repellat voluptas odio sed
                  quod nisi, provident quis voluptatem assumenda ut. Quaerat
                </p>
                <CardTitle className="my-2 font-semibold">
                  George J -Client
                </CardTitle>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
