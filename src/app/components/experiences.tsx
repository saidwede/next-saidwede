interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "CDE-UP & l'ADPME",
    role: "AI & Digital Expert, Business Coach | Support Programme",
    period: "05/2026 - Present",
    highlights: [
      "Expertise on the technical feasibility of projects",
      "Assessment of innovation potential",
      "Training entrepreneurs in Lean Start-Up, Lean Manufacturing and Design Thinking",
      "Personalized support for businesses",
    ],
  },
  {
    company: "Business And Technology Group",
    role: "Senior Front-End Developer on the design of a graphic editor",
    period: "02/2026 - 05/2026",
    highlights: [
      "Architecture of the graphic editor",
      "Development of an interactive visual creation interface",
      "Implementation of a graphic rendering engine",
      "Documentation and configuration to make the tool easy to pick up",
    ],
  },
  {
    company: "Sinistres-Re",
    role: "AI Expert on the design of a RAG system",
    period: "01/2026 - 05/2026",
    highlights: [
      "Collection of data on insurance regulations and internal data",
      "Embedding into a vector database",
      "API and graphical interface for the chat",
    ],
  },
  {
    company: "AS World Tech",
    role: "R&D Team Member | Lead Developer",
    period: "11/2025 - 06/2026",
    highlights: [
      "Design of a conversational AI agent",
      "Development of a remote computer-locking system",
      "Lead Developer on the company's internal web platforms",
      "Training of the developer team",
      "User training",
    ],
  },
  {
    company: "GOGO Chap",
    role: "Co-Founder / CTO – Meal delivery mobile application",
    period: "10/2025 - Present",
    highlights: [
      "Technical specification and objectives",
      "Lead of the development team",
      "Evaluation of the various deliverables",
    ],
  },
  {
    company: "EPITECH Benin, JPO, Dark Room Project",
    role: "Development of a conversational voice AI agent with presence detection",
    period: "06/2025",
    highlights: [
      "Presence detection with TensorFlow.js",
      "Integration of OpenAI's Realtime API",
      "Creation of a futuristic graphical interface",
    ],
  },
  {
    company: "Grafy.me",
    role: "Founder – Campaign visual design SaaS",
    period: "06/2025 - Present",
    highlights: [
      "Integration and optimization of a portrait photo background-removal model",
      "Integration of an image segmentation model",
      "Development of a Canva-style editor",
    ],
  },
  {
    company: "IRD (National Research Institute for Sustainable Development)",
    role: "Development of a connected (IoT) weather station",
    period: "06/2024",
    highlights: [
      "Recording of solar radiation data",
      "Saving of cloud images from a 360° camera",
      "Spot detection using a convolutional neural network",
    ],
  },
  {
    company: "Icebox (USA)",
    role: "Full-Stack Developer",
    period: "02/2022 - 02/2024",
    highlights: [
      "Development of the Ersy.com platform",
      "Development and documentation of REST APIs",
      "PWA",
    ],
  },
  {
    company: "Waxangari Labs",
    role: "Head of Digital Division | Business Coach",
    period: "06/2018 - 08/2023",
    highlights: [
      "Lead Developer",
      "Management of digital projects",
      "Coach/Trainer in Entrepreneurship and Innovation",
    ],
  },
  {
    company: "Google Developer Groups",
    role: "Lead Organizer, Parakou chapter",
    period: "01/2018 - Present",
    highlights: [
      "Community engagement and growth",
      "Organization of events and training sessions",
      "Technology watch and dissemination of innovations",
      "Mentoring and support of members",
    ],
  },
];

export default function Experiences() {
  return (
    <div className="pt-24 pb-20 lg:py-0 lg:flex min-h-screen justify-center lg:items-start lg:gap-12 xl:gap-16 px-5 lg:px-10 xl:px-14">
      {/* Left Sticky Heading */}
      <div className="pb-12 lg:pb-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:shrink-0">
        <p className="uppercase tracking-widest text-xs font-medium text-neutral-500 text-left lg:text-right mb-2">
          Experiences
        </p>
        <p className="text-left lg:text-right font-bold text-4xl sm:text-5xl xl:text-6xl text-neutral-400 leading-tight">
          <span className="text-black">AI/ML</span>,
        </p>
        <p className="text-left lg:text-right font-bold text-4xl sm:text-5xl xl:text-6xl text-neutral-400 leading-tight">
          <span className="text-black">Software</span>
        </p>
        <p className="text-left lg:text-right font-bold text-4xl sm:text-5xl xl:text-6xl text-neutral-400 leading-tight">
          &amp; <span className="text-black">Leadership</span>
        </p>
      </div>

      {/* Right Scrollable Timeline */}
      <div className="lg:py-28 w-full max-w-xl">
        <ul className="border-black border-l-2 ml-2 space-y-12 pb-6">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.period}`}
              className="relative pl-8 before:absolute before:top-1.5 before:-left-[9px] before:inline-block before:h-4 before:w-4 before:bg-black before:rounded-full"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl lg:text-2xl font-bold text-black leading-snug">
                  {exp.company}
                </h3>
                <span className="text-xs font-medium text-neutral-500 tabular-nums shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm lg:text-base font-medium text-neutral-800 mt-1">
                {exp.role}
              </p>

              <ul className="mt-3 space-y-1.5">
                {exp.highlights.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm font-light text-neutral-600 leading-relaxed before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1.5 before:rounded-full before:bg-neutral-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
