import BlogList from "@/components/sections/blog/BlogList";
import HeroPartials from "@/components/sections/HeroSections";
import React from "react";

export default function Blog() {
  return (
    <>
      <HeroPartials
        title="blog"
        description="Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
              at quam adipiscing feugiat interdum mattis. Placerat donec risus
              diam sed et. A in ullamcorper ipsum."
      />
      <BlogList />
    </>
  );
}
