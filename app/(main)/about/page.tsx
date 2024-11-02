import React from "react";
import {
  AboutDiscover,
  AboutQuotes,
  AboutReason,
  AboutStartJourney,
  AboutStats,
  AboutSuccessStory,
  AboutTeam,
} from "@/components/sections/about";
import HeroPartials from "@/components/sections/HeroSections";

export default function About() {
  return (
    <>
      <HeroPartials
        title="about"
        description="Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
              at quam adipiscing feugiat interdum mattis. Placerat donec risus
              diam sed et. A in ullamcorper ipsum."
      />
      <AboutDiscover />
      <AboutReason />
      <AboutStartJourney />
      <AboutQuotes />
      <AboutTeam />
      <AboutStats />
      <AboutSuccessStory />
    </>
  );
}
