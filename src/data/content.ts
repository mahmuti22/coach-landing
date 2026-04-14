export const content = {
  brand: {
    full: "Most Wanted Physique Coaching",
    short: "Most Wanted",
    logoAlt: "Most Wanted Physique Coaching logo",
  },

  hero: {
    eyebrow: "Most Wanted · Physique coaching",
    headline: "Train with precision. Transform with Elvis & Ardit.",
    description:
      "Serious training, clear nutrition, and weekly accountability under one program standard—built for men who want execution, not another reset.",
    primaryCta: {
      href: "#contact",
      label: "Apply with Most Wanted",
    },
    secondaryCta: {
      href: "#programs",
      label: "Explore Programs",
    },
    image: {
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      alt: "Athletes training — Most Wanted physique coaching",
    },
    stats: [
      { value: "2", label: "Lead coaches" },
      { value: "Weekly", label: "Check-ins" },
      { value: "Elite", label: "Programming" },
    ],
  },

  aboutCoach: {
    heading: {
      eyebrow: "Head Coaches",
      title: "Led by Elvis & Ardit",
      description:
        "One practice, one progression model, and one nutrition standard—how you train, log, and communicate stays consistent. Elvis and Ardit split the work; you do not get two conflicting philosophies.",
    },
    tagline: "Two lead coaches. One system. One bar.",
    coaches: [
      {
        name: "Elvis",
        role: "Head Coach",
        bio: "Strength-first blocks, recovery-aware volume, and progression rules you can run without babysitting. Feedback is short, specific, and built for people who already show up.",
        image: {
          src: "/coaches/elvis.svg",
          alt: "Elvis, head coach — Most Wanted",
        },
      },
      {
        name: "Ardit",
        role: "Head Coach",
        bio: "Nutrition structure that survives heavy travel and long weeks. Targets stay tight; adjustments follow your data, not your mood.",
        image: {
          src: "/coaches/ardit.svg",
          alt: "Ardit, head coach — Most Wanted",
        },
      },
    ],
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
        "Custom training, nutrition guardrails, and habit systems—backed by the same playbook and the same coaching team. Tiers differ by depth, touch frequency, and how hard we push the weekly review.",
    },
    cardCta: {
      href: "#contact",
      label: "Request availability",
    },
    items: [
      {
        name: "Foundation Reset",
        length: "12 Weeks",
        description:
          "Twelve weeks to rebuild the basics: a simple, repeatable training split, calorie and protein targets that match your lifestyle, and a weekly review of training logs, steps, and subjective recovery. Built for men who have slipped off track and want structure back without gimmicks.",
        highlight: "Best for beginners",
      },
      {
        name: "Executive Performance",
        length: "16 Weeks",
        description:
          "Sixteen weeks focused on recomposition—training volume and intensity matched to recovery, nutrition tightened week to week using weight, measurements, and photos, and direct feedback when adherence drifts. For busy professionals who want the coaching team in the loop, not a PDF they never open.",
        highlight: "Most popular",
      },
      {
        name: "Elite Transformation",
        length: "24 Weeks",
        description:
          "A longer runway for a full physique overhaul: block periodization, deloads planned in advance, nutrition adjustments when fat loss stalls or energy dips, and contingency sessions for hotels or long days. Higher-touch messaging and tighter standards—if you want soft encouragement, this is not it.",
        highlight: "VIP coaching",
      },
    ],
  },

  testimonials: {
    heading: {
      eyebrow: "Client Results",
      title: "Outcomes you can measure. Coaching you can feel.",
      description:
        "Busy professionals, heavy travel, years of half-committed training. Outcomes still hinge on sleep, adherence, and factors outside coaching—these snapshots show what happens when the standard is held.",
    },
    items: [
      {
        quote:
          "I was strong enough in the gym but soft around the middle. We tightened calories in a way I could actually follow on the road, kept protein consistent, and adjusted volume when sleep was bad. Sixteen weeks later the belt told the story before the scale did.",
        name: "James M.",
        role: "Principal, Corporate Law",
        initials: "JM",
        outcome: "Waist down 2 notches · 16 weeks · remote",
      },
      {
        quote:
          "What I needed was someone to call the plan and hold me to it. Weekly check-ins were short and direct—training tweaks, nutrition fixes, no motivational speeches. I stopped negotiating with myself and started stacking weeks.",
        name: "Marcus T.",
        role: "Operations Director",
        initials: "MT",
        outcome: "Consistent training · 12 weeks · hybrid gym",
      },
      {
        quote:
          "I had lifted for years without a real progression model. Blocks were planned, deloads were scheduled, and when fat loss slowed we changed one variable at a time. It felt boring in the best way—because it worked.",
        name: "David K.",
        role: "Senior Engineer",
        initials: "DK",
        outcome: "Recomp · 22 weeks · home + gym",
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
          "Submit the application so we can review your goals, training history, equipment, and schedule. One intake. One standard—whether you work most closely with Elvis, Ardit, or both under the same system.",
      },
      {
        step: "02",
        title: "Build Your Blueprint",
        description:
          "The team maps a training and nutrition plan around your recovery, metrics, and non-negotiables. Same playbook, same progression rules—executed with the discipline you would expect from a serious coaching practice.",
      },
      {
        step: "03",
        title: "Execute with Accountability",
        description:
          "Weekly check-ins, program updates, and clear next actions keep you moving. Feedback stays sharp because roster size stays controlled and standards stay non-negotiable.",
      },
    ],
  },

  faq: {
    heading: {
      eyebrow: "FAQ",
      title: "Before you start.",
    },
    items: [
      {
        question: "Is this coaching fully online?",
        answer:
          "Yes. You train on your own schedule with programming written for your equipment and level. Coaching is delivered through the agreed app or log format, scheduled video or voice check-ins, and messaging for clarifications and form review. Nothing requires you to be in a specific city.",
      },
      {
        question: "How much time do I need each week?",
        answer:
          "Most clients complete three to five resistance sessions, roughly 45 to 75 minutes each, depending on the block. You will also spend a few minutes logging training and a short check-in before the weekly review. If the week collapses, we adjust volume instead of pretending the original plan still fits.",
      },
      {
        question: "Do you provide nutrition guidance?",
        answer:
          "Yes. Coaching includes calorie targets, protein goals, and simple meal structure—enough constraint to drive fat loss or muscle gain without turning life into a spreadsheet. Adjustments follow your data: weight trend, measurements, photos, energy, and hunger.",
      },
      {
        question: "Can I join if I travel often?",
        answer:
          "Travel is normal for the clients we serve. We build hotel sessions, time-crunch alternatives, and protein-forward patterns that survive airports and client dinners. What does not work is disappearing for two weeks without logging—if you want results, the minimum standard is honest communication with the team.",
      },
    ],
  },

  contactForm: {
    heading: {
      eyebrow: "Apply",
      title: "Tell us where you are—and where you want to go.",
      description:
        "Use the form below. We read what you send and reply directly. Prefer email first? Use “Book a Consultation” next—it opens a draft with the subject line already set.",
    },
    submitLabel: "Send Request",
    successMessage:
      "Thanks for reaching out. We’ll contact you soon.",
    successMailHint:
      "If your email app did not open in a new tab, tap below to open a draft with your answers filled in.",
    openMailLabel: "Open email draft",
    disclaimer:
      "Submissions open your email app with a prefilled message (temporary flow until server-side email is connected).",
  },

  finalCta: {
    eyebrow: "Limited roster",
    title: "When you are ready, book a call—not a pitch deck.",
    description:
      "Small monthly intake so notes stay fast and programming stays tight. We walk your history, schedule, equipment, and a twelve- to twenty-four-week runway—the same standard Elvis and Ardit hold for every client.",
    trustPoints: [
      "Physique work: training, nutrition, accountability",
      "No template PDFs—built for your week and your gym",
      "Weekly rhythm: check-ins, adjustments, next actions",
    ],
    button: {
      label: "Book a Consultation",
    },
  },

  footer: {
    primaryLine: "Most Wanted Physique Coaching — led by Elvis & Ardit",
    secondaryLine: "Training · Nutrition · Accountability",
  },
} as const;
