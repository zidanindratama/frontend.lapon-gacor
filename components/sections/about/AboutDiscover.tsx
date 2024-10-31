import DoctorDiscover from "@/components/svg/DoctorDiscover";
import React from "react";

export default function AboutDiscover() {
  return (
    <div className=" min-h-[100dvh] py-5  grid place-items-center">
      <div className="grid grid-cols-1 max-w-7xl container mx-auto md:grid-cols-2 items-center justify-items-center">
        <DoctorDiscover className="aspect-square w-3/4" />
        <div className="space-y-5 mx-3 my-3">
          <p className="font-medium text-lg">About Us </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-semibold">Discover the Faces Behind Our Mental Health Consultancy</h1>

          <div className="text-sm md:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              mollitia doloremque alias cum vero? Quam voluptas autem qui, quos
              corporis repudiandae dolores nemo quae vero obcaecati
              exercitationem nulla ab, aspernatur hic numquam iusto. Vitae
              voluptas, aut sit accusamus magni quae animi a atque? Minus
              assumenda, ad placeat quidem vel blanditiis doloribus quia!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              nihil earum tenetur iste fuga autem porro modi in mollitia facere
              quibusdam dolorem quaerat impedit quod praesentium necessitatibus,
              nesciunt suscipit, numquam maxime sequi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
