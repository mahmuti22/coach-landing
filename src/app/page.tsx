import { AboutCoach } from "@/components/AboutCoach";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { VideoHero } from "@/components/VideoHero";
import { HowItWorks } from "@/components/HowItWorks";
import { Programs } from "@/components/Programs";
import { Testimonials } from "@/components/Testimonials";
import { UpcomingPlatform } from "@/components/UpcomingPlatform";

export default function Home() {
  return (
    <>
      <VideoHero />
      <Hero />
      <AboutCoach />
      <Programs />
      <UpcomingPlatform />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </>
  );
}
