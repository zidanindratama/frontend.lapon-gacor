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
