import { AboutCoach } from "@/components/AboutCoach";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Mindset } from "@/components/Mindset";
import { VideoHero } from "@/components/VideoHero";
import { WhyItWorks } from "@/components/WhyItWorks";
import { Testimonials } from "@/components/Testimonials";
import { UpcomingPlatform } from "@/components/UpcomingPlatform";

export default function Home() {
  return (
    <>
      <VideoHero />
      <Hero />
      <AboutCoach />
      <Mindset />
      <UpcomingPlatform />
      <WhyItWorks />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}
