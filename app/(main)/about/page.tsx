import React from "react";
import {
  AboutDiscover,
  AboutHero,
  AboutQuotes,
  AboutReason,
  AboutStartJourney,
  AboutStats,
  AboutSuccessStory,
  AboutTeam,
} from "@/components/sections/about";
import NewsLater from "@/components/sections/NewsLater";
import Testimonials from "@/components/sections/Testimonials";
import HeroSections from "@/components/sections/HeroSections";

export default function About() {
  return (
    <>
      <HeroSections path="about" />
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
