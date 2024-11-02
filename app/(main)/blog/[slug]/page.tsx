import BlogDetailSections from "@/components/sections/blog/BlogDetailSections";
import BlogRelatedList from "@/components/sections/blog/BlogRelatedList";
import HeroPartials from "@/components/sections/HeroSections";
import { capitalize } from "@/helper/capitalizeFirstLetter";
import React from "react";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const removeStrText = (str: string) =>
    capitalize(str.replace(/-/g, " "), true);
  return (
    <>
      <HeroPartials
        title={removeStrText(params.slug)}
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda laudantium sapiente odio voluptate tempora quos, quae mollitia beatae perspiciatis officia."
      />
      <BlogDetailSections />
      <BlogRelatedList />
    </>
  );
}
