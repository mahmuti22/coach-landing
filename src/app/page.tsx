import { AboutCoach } from "@/components/AboutCoach";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Programs } from "@/components/Programs";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutCoach />
      <Programs />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
