import HeroPartials from "@/components/sections/HeroSections";
import NewsLater from "@/components/sections/NewsLater";
import Testimonials from "@/components/sections/Testimonials";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <NewsLater />
      <Testimonials />
    </>
  );
}
