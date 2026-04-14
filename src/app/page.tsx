import { AboutCoach } from "@/components/AboutCoach";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Programs } from "@/components/Programs";
import { SiteNav } from "@/components/SiteNav";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Hero />
      <AboutCoach />
      <Programs />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </>
  );
}
