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

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutDiscover />
      <AboutReason />
      <AboutStartJourney />
      <AboutQuotes />
      <AboutTeam />
      <AboutStats />
      <AboutSuccessStory />
      <NewsLater />
      <Testimonials />
    </>
  );
}
