export const content = {
  hero: {
    eyebrow: "Private 1:1 Coaching",
    headline: "Train with precision. Build strength that shows up in the mirror—and in your week.",
    description:
      "Custom programming, nutrition structure, and weekly accountability for professionals who want a disciplined process—not another generic plan.",
    primaryCta: {
      href: "#final-cta",
      label: "Apply for Coaching",
    },
    secondaryCta: {
      href: "#programs",
      label: "Explore Programs",
    },
    image: {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      alt: "Coach and client during a training session",
    },
    stats: [
      { value: "1:1", label: "Coach access" },
      { value: "Weekly", label: "Check-ins" },
      { value: "Elite", label: "Programming" },
    ],
  },

  aboutCoach: {
    image: {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
      alt: "Professional coach portrait in gym studio",
    },
    heading: {
      eyebrow: "Who We Are",
      title: "Coaching for people who value execution over excuses.",
      description:
        "Evidence-based training, tight feedback loops, and a standard of professionalism you would expect from any serious performance environment.",
    },
    body:
      "Your protocol is built around your schedule, stress load, and recovery—not a template. Your coach owns the outcome with you: weekly reviews, clear adjustments, and direct communication when life gets loud.",
    metrics: [
      { label: "Clients coached", value: "1,200+" },
      { label: "Avg. body fat reduction", value: "9.5%" },
      { label: "5-star client reviews", value: "300+" },
    ],
  },

  programs: {
    heading: {
      eyebrow: "Coaching Programs",
      title: "Pick the tier that matches your ambition—and your bandwidth.",
      description:
        "Every tier includes custom training, nutrition guardrails, habit systems, and direct access to your coach. The difference is depth, touchpoints, and how aggressively we optimize week to week.",
    },
    cardCta: {
      href: "#final-cta",
      label: "Request availability",
    },
    items: [
      {
        name: "Foundation Reset",
        length: "12 Weeks",
        description:
          "Perfect for professionals restarting fitness with personalized training, nutrition targets, and weekly accountability.",
        highlight: "Best for beginners",
      },
      {
        name: "Executive Performance",
        length: "16 Weeks",
        description:
          "A high-touch program to build lean muscle, improve energy, and optimize body composition without compromising your schedule.",
        highlight: "Most popular",
      },
      {
        name: "Elite Transformation",
        length: "24 Weeks",
        description:
          "Our premium concierge coaching experience with deep performance tracking, travel adjustments, and advanced progression planning.",
        highlight: "VIP coaching",
      },
    ],
  },

  testimonials: {
    heading: {
      eyebrow: "Client Results",
      title: "Outcomes you can measure. Coaching you can feel.",
      description:
        "Verified-style client snapshots (replace with your real metrics, headshots, and compliance-approved claims).",
    },
    items: [
      {
        quote:
          "I dropped 18 lbs, built visible muscle, and finally had a process that worked around my travel-heavy calendar.",
        name: "Ariana M.",
        role: "Founder, Tech Startup",
        initials: "AM",
        outcome: "−18 lb · 16 weeks · remote",
      },
      {
        quote:
          "The level of detail and accountability is unmatched. Every week felt clear, strategic, and motivating.",
        name: "Michael T.",
        role: "Finance Executive",
        initials: "MT",
        outcome: "Strength PRs · better sleep · 12 weeks",
      },
      {
        quote:
          "I have trained for years, but this was my first true transformation. The structure changed my lifestyle for good.",
        name: "Daniel K.",
        role: "Consulting Director",
        initials: "DK",
        outcome: "Recomp focus · 20 weeks · high travel",
      },
    ],
  },

  howItWorks: {
    stepPrefix: "Step",
    heading: {
      eyebrow: "How It Works",
      title: "A tight process. Zero fluff. Maximum signal each week.",
    },
    steps: [
      {
        step: "01",
        title: "Apply and Align",
        description:
          "Complete a short application so we can assess your goals, training background, and readiness.",
      },
      {
        step: "02",
        title: "Build Your Blueprint",
        description:
          "Your coach designs a custom training and nutrition plan built around your schedule, recovery, and metrics.",
      },
      {
        step: "03",
        title: "Execute with Accountability",
        description:
          "Weekly check-ins, program updates, and expert feedback keep you progressing every week.",
      },
    ],
  },

  faq: {
    heading: {
      eyebrow: "FAQ",
      title: "Common questions before joining coaching.",
    },
    items: [
      {
        question: "Is this coaching fully online?",
        answer:
          "Yes. All coaching is delivered online through your training app, weekly check-ins, and messaging support.",
      },
      {
        question: "How much time do I need each week?",
        answer:
          "Most clients train 3-5 sessions weekly. Your plan is designed to fit your schedule and recovery needs.",
      },
      {
        question: "Do you provide nutrition guidance?",
        answer:
          "Absolutely. Every program includes nutrition targets, food structure guidance, and adjustments based on progress.",
      },
      {
        question: "Can I join if I travel often?",
        answer:
          "Yes. We build travel-friendly training options and flexible nutrition protocols for demanding schedules.",
      },
    ],
  },

  finalCta: {
    eyebrow: "Limited roster",
    title: "If you are serious about results, start with a strategy call—not a sales pitch.",
    description:
      "We only onboard a small number of new clients each month so coaching stays sharp, personal, and obsessively detailed.",
    trustPoints: [
      "Private coaching — not a group template",
      "Clear training + nutrition structure",
      "Direct accountability every week",
    ],
    button: {
      href: "#",
      label: "Book a Strategy Call",
    },
  },

  footer: {
    brand: "Apex Coaching Studio",
    note: "Placeholder footer text - replace with business info and links.",
  },
} as const;
