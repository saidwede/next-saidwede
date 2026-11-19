export type Locale = "en" | "fr";

export type ProjectId =
  | "grafyme"
  | "ersy"
  | "gogochap"
  | "alyahnightwear"
  | "root-capture"
  | "alarm-valet";

export interface TranslatedProject {
  title: string;
  description: string;
  skills: string[];
}

export interface TranslatedExperience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Translations {
  nav: {
    about: string;
    projects: string;
    experiences: string;
    skills: string;
    education: string;
    photos: string;
    contactMe: string;
  };
  banner: {
    greeting: string;
    subtitle: string;
    bio: string;
    contactMe: string;
  };
  projects: {
    kicker: string;
    heading: string;
    visitProject: string;
    previousProject: string;
    nextProject: string;
    projectSelector: string;
    showProject: string;
    closePreview: string;
    previousImage: string;
    nextImage: string;
    items: Record<ProjectId, TranslatedProject>;
  };
  experiences: {
    kicker: string;
    line1: string;
    line2: string;
    line3Prefix: string;
    line3Accent: string;
    items: TranslatedExperience[];
  };
  skills: {
    kicker: string;
    headingLine1: string;
    headingLine2: string;
    subtitle: string;
    bio: string;
  };
  education: {
    kicker: string;
    line1: string;
    line2: string;
    line3Prefix: string;
    line3Accent: string;
    degrees: {
      level: string;
      title: string;
      year: string;
      school: string;
      url: string;
    }[];
  };
  gallery: {
    viewImage: string;
  };
  contacts: {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
  common: {
    loading: string;
    languageSwitcher: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      about: "About me",
      projects: "Projects",
      experiences: "Experiences",
      skills: "Skills",
      education: "Education",
      photos: "Photos",
      contactMe: "Contact me",
    },
    banner: {
      greeting: "Hello, I am",
      subtitle:
        "An AI/ML Engineer and senior Full-Stack Developer building AI-powered digital solutions.",
      bio: "I am an AI/ML Engineer and Senior Full-Stack Developer with a Master’s degree in Artificial Intelligence. I specialize in building intelligent, scalable, and user-centric applications by combining modern web development with machine learning expertise. With strong experience across front-end and back-end technologies, I design end-to-end solutions that integrate AI models, data-driven systems, and automation. My work spans from developing robust platforms to deploying AI-powered features such as predictive analytics, recommendation systems, and agentic RAG solutions using OpenAI and Google models.",
      contactMe: "Contact me",
    },
    projects: {
      kicker: "Recent Projects",
      heading: "Explore Some Projects I'm Proud Of",
      visitProject: "Visit Project",
      previousProject: "Previous project",
      nextProject: "Next project",
      projectSelector: "Project selector",
      showProject: "Show",
      closePreview: "Close preview",
      previousImage: "Previous image",
      nextImage: "Next image",
      items: {
        grafyme: {
          title: "Grafy.me",
          description:
            "An interactive browser-based visual design and graphics creation platform featuring a responsive canvas workspace, real-time asset management, and cloud persistence.",
          skills: ["Next.js", "Firebase", "Konvajs"],
        },
        ersy: {
          title: "Ersy Artists",
          description:
            "A comprehensive artist discovery and biography directory backed by a relational PHP and MySQL architecture with fast search and dynamic browsing.",
          skills: ["JavaScript", "JQuery", "PHP", "MySQL"],
        },
        gogochap: {
          title: "GOGO Chap",
          description:
            "A meal delivery mobile application built with Flutter, connecting customers with local restaurants through a fast menu browsing, ordering, and delivery experience.",
          skills: ["Flutter", "Dart", "Mobile"],
        },
        alyahnightwear: {
          title: "Alyah Nightwear",
          description:
            "An elegant e-commerce storefront for a luxury nightwear brand, showcasing collections with editorial visuals, smooth catalog browsing, and a refined shopping experience.",
          skills: ["E-Commerce", "UI/UX", "Web"],
        },
        "root-capture": {
          title: "Root Capture",
          description:
            "An interactive 3D web experience and spatial visualization tool built with React Three Fiber, delivering smooth real-time rendering directly in the browser.",
          skills: ["React.js", "Three.js", "R3F"],
        },
        "alarm-valet": {
          title: "Alarm Valet",
          description:
            "A clean web platform for managing and monitoring alarm systems, providing responsive device controls and status workflows built on Vue.js and PHP.",
          skills: ["Vue.js", "PHP", "MySQL"],
        },
      },
    },
    experiences: {
      kicker: "Experiences",
      line1: "AI/ML",
      line2: "Software",
      line3Prefix: "&",
      line3Accent: "Leadership",
      items: [
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
      ],
    },
    skills: {
      kicker: "Skills",
      headingLine1: "My Tech",
      headingLine2: "Stack",
      subtitle:
        "My expertise includes a diverse range of tools and platforms that I leverage to create impactful solutions.",
      bio: "I am an AI/ML Engineer and Senior Full-Stack Developer with a Master’s degree in Artificial Intelligence. I specialize in building intelligent, scalable, and user-centric applications by combining modern web development with machine learning expertise. With strong experience across front-end and back-end technologies, I design end-to-end solutions that integrate AI models, data-driven systems, and automation. My work spans from developing robust platforms to deploying AI-powered features such as predictive analytics, recommendation systems, and agentic RAG solutions using OpenAI and Google models.",
    },
    education: {
      kicker: "STUDIED",
      line1: "Electronics",
      line2: "Computer Science",
      line3Prefix: "and",
      line3Accent: "AI/ML",
      degrees: [
        {
          level: "Master",
          title: " of Science (MSc) in Artificial Intelligence (AI)",
          year: "2025",
          school: "EPITECH",
          url: "https://www.epitech.eu",
        },
        {
          level: "Bachelor",
          title: " of Computer Engineering",
          year: "2017",
          school: "HECM",
          url: "https://www.hecm-afrique.net",
        },
        {
          level: "BTS",
          title: " in Industrial Computing",
          year: "2015",
          school: "HECM",
          url: "https://www.hecm-afrique.net",
        },
      ],
    },
    gallery: {
      viewImage: "View Image",
    },
    contacts: {
      title: "Contact",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      subject: "Object",
      message: "Message",
      send: "Send",
    },
    common: {
      loading: "Loading...",
      languageSwitcher: "Switch language",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      experiences: "Expériences",
      skills: "Compétences",
      education: "Formation",
      photos: "Photos",
      contactMe: "Me contacter",
    },
    banner: {
      greeting: "Bonjour, je suis",
      subtitle:
        "Ingénieur IA/ML et Développeur Full-Stack Senior concevant des solutions numériques propulsées par l'IA.",
      bio: "Je suis Ingénieur IA/ML et Développeur Full-Stack Senior, titulaire d'un Master of Science en Intelligence Artificielle. Je conçois des applications intelligentes, évolutives et centrées utilisateur en combinant développement web moderne et expertise en machine learning. Fort d'une solide expérience front-end et back-end, j'élabore des solutions complètes intégrant modèles d'IA, systèmes orientés données et automatisation — du développement de plateformes robustes au déploiement de fonctionnalités avancées telles que l'analyse prédictive, les systèmes de recommandation et les architectures RAG agentiques avec les modèles OpenAI et Google.",
      contactMe: "Me contacter",
    },
    projects: {
      kicker: "Projets récents",
      heading: "Découvrez quelques projets dont je suis fier",
      visitProject: "Voir le projet",
      previousProject: "Projet précédent",
      nextProject: "Projet suivant",
      projectSelector: "Sélecteur de projet",
      showProject: "Afficher",
      closePreview: "Fermer l'aperçu",
      previousImage: "Image précédente",
      nextImage: "Image suivante",
      items: {
        grafyme: {
          title: "Grafy.me",
          description:
            "Plateforme SaaS interactive de création graphique dans le navigateur, dotée d'un espace de travail sur canvas réactif, d'une gestion d'assets en temps réel et d'une sauvegarde cloud.",
          skills: ["Next.js", "Firebase", "Konvajs"],
        },
        ersy: {
          title: "Ersy Artists",
          description:
            "Annuaire complet de découverte et de biographies d'artistes reposant sur une architecture PHP et MySQL relationnelle, avec recherche rapide et navigation dynamique.",
          skills: ["JavaScript", "JQuery", "PHP", "MySQL"],
        },
        gogochap: {
          title: "GOGO Chap",
          description:
            "Application mobile de livraison de repas conçue avec Flutter, reliant les clients aux restaurants locaux à travers une expérience fluide de découverte de menus, commande et livraison.",
          skills: ["Flutter", "Dart", "Mobile"],
        },
        alyahnightwear: {
          title: "Alyah Nightwear",
          description:
            "Boutique e-commerce élégante pour une marque de vêtements de nuit haut de gamme, mettant en valeur les collections avec des visuels éditoriaux et un parcours d'achat raffiné.",
          skills: ["E-Commerce", "UI/UX", "Web"],
        },
        "root-capture": {
          title: "Root Capture",
          description:
            "Expérience web 3D interactive et outil de visualisation spatiale développé avec React Three Fiber, offrant un rendu fluide en temps réel directement dans le navigateur.",
          skills: ["React.js", "Three.js", "R3F"],
        },
        "alarm-valet": {
          title: "Alarm Valet",
          description:
            "Plateforme web épurée dédiée à la gestion et à la supervision de systèmes d'alarme, offrant un contrôle réactif des équipements et des workflows de suivi en Vue.js et PHP.",
          skills: ["Vue.js", "PHP", "MySQL"],
        },
      },
    },
    experiences: {
      kicker: "Expériences",
      line1: "IA/ML",
      line2: "Logiciel",
      line3Prefix: "&",
      line3Accent: "Leadership",
      items: [
        {
          company: "CDE-UP & l'ADPME",
          role: "Expert IA & Digital, Coach Business | Programme d'accompagnement",
          period: "05/2026 - Présent",
          highlights: [
            "Expertise sur la faisabilité technique des projets",
            "Évaluation du potentiel d'innovation",
            "Formation d'entrepreneurs au Lean Start-Up, Lean Manufacturing et Design Thinking",
            "Accompagnement personnalisé des entreprises",
          ],
        },
        {
          company: "Business And Technology Group",
          role: "Développeur Front-End Senior sur la conception d'un éditeur graphique",
          period: "02/2026 - 05/2026",
          highlights: [
            "Architecture de l'éditeur graphique",
            "Développement d'une interface interactive de création visuelle",
            "Implémentation d'un moteur de rendu graphique",
            "Documentation et configuration pour faciliter la prise en main de l'outil",
          ],
        },
        {
          company: "Sinistres-Re",
          role: "Expert IA sur la conception d'un système RAG",
          period: "01/2026 - 05/2026",
          highlights: [
            "Collecte des données réglementaires d'assurance et des données internes",
            "Vectorisation et indexation dans une base de données vectorielle",
            "API et interface graphique pour le chat",
          ],
        },
        {
          company: "AS World Tech",
          role: "Membre de l'équipe R&D | Lead Developer",
          period: "11/2025 - 06/2026",
          highlights: [
            "Conception d'un agent IA conversationnel",
            "Développement d'un système de verrouillage d'ordinateurs à distance",
            "Lead Developer sur les plateformes web internes de l'entreprise",
            "Formation de l'équipe de développeurs",
            "Formation des utilisateurs",
          ],
        },
        {
          company: "GOGO Chap",
          role: "Co-Fondateur / CTO – Application mobile de livraison de repas",
          period: "10/2025 - Présent",
          highlights: [
            "Spécifications techniques et définition des objectifs",
            "Encadrement de l'équipe de développement",
            "Évaluation des différents livrables",
          ],
        },
        {
          company: "EPITECH Bénin, JPO, Projet Dark Room",
          role: "Développement d'un agent IA vocal conversationnel avec détection de présence",
          period: "06/2025",
          highlights: [
            "Détection de présence avec TensorFlow.js",
            "Intégration de l'API Realtime d'OpenAI",
            "Création d'une interface graphique futuriste",
          ],
        },
        {
          company: "Grafy.me",
          role: "Fondateur – SaaS de conception visuelle de campagnes",
          period: "06/2025 - Présent",
          highlights: [
            "Intégration et optimisation d'un modèle de suppression d'arrière-plan de portraits",
            "Intégration d'un modèle de segmentation d'images",
            "Développement d'un éditeur de type Canva",
          ],
        },
        {
          company: "IRD (Institut de Recherche pour le Développement)",
          role: "Développement d'une station météo connectée (IoT)",
          period: "06/2024",
          highlights: [
            "Enregistrement des données de rayonnement solaire",
            "Sauvegarde d'images de nuages issues d'une caméra 360°",
            "Détection de zones via un réseau de neurones convolutif",
          ],
        },
        {
          company: "Icebox (USA)",
          role: "Développeur Full-Stack",
          period: "02/2022 - 02/2024",
          highlights: [
            "Développement de la plateforme Ersy.com",
            "Développement et documentation d'API REST",
            "PWA",
          ],
        },
        {
          company: "Waxangari Labs",
          role: "Responsable du Pôle Digital | Coach Business",
          period: "06/2018 - 08/2023",
          highlights: [
            "Lead Developer",
            "Gestion de projets numériques",
            "Coach/Formateur en Entrepreneuriat et Innovation",
          ],
        },
        {
          company: "Google Developer Groups",
          role: "Lead Organizer, chapitre de Parakou",
          period: "01/2018 - Présent",
          highlights: [
            "Animation et croissance de la communauté",
            "Organisation d'événements et de sessions de formation",
            "Veille technologique et diffusion des innovations",
            "Mentorat et accompagnement des membres",
          ],
        },
      ],
    },
    skills: {
      kicker: "Compétences",
      headingLine1: "Ma Stack",
      headingLine2: "Technique",
      subtitle:
        "Mon expertise couvre un large éventail d'outils et de plateformes que j'exploite pour concevoir des solutions à fort impact.",
      bio: "Je suis Ingénieur IA/ML et Développeur Full-Stack Senior, titulaire d'un Master of Science en Intelligence Artificielle. Je conçois des applications intelligentes, évolutives et centrées utilisateur en combinant développement web moderne et expertise en machine learning. Fort d'une solide expérience front-end et back-end, j'élabore des solutions complètes intégrant modèles d'IA, systèmes orientés données et automatisation — du développement de plateformes robustes au déploiement de fonctionnalités avancées telles que l'analyse prédictive, les systèmes de recommandation et les architectures RAG agentiques avec les modèles OpenAI et Google.",
    },
    education: {
      kicker: "FORMATION",
      line1: "Électronique",
      line2: "Informatique",
      line3Prefix: "et",
      line3Accent: "IA/ML",
      degrees: [
        {
          level: "Master",
          title: " of Science (MSc) en Intelligence Artificielle (IA)",
          year: "2025",
          school: "EPITECH",
          url: "https://www.epitech.eu",
        },
        {
          level: "Licence",
          title: " en Génie Informatique",
          year: "2017",
          school: "HECM",
          url: "https://www.hecm-afrique.net",
        },
        {
          level: "BTS",
          title: " en Informatique Industrielle",
          year: "2015",
          school: "HECM",
          url: "https://www.hecm-afrique.net",
        },
      ],
    },
    gallery: {
      viewImage: "Voir l'image",
    },
    contacts: {
      title: "Contact",
      firstName: "Prénom",
      lastName: "Nom",
      email: "E-mail",
      subject: "Objet",
      message: "Message",
      send: "Envoyer",
    },
    common: {
      loading: "Chargement...",
      languageSwitcher: "Changer de langue",
    },
  },
};
