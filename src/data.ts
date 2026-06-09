import {
  Project,
  EducationItem,
  SkillGroup,
  CertificationItem,
  AchievementItem,
} from "./types";

export const PERSONAL_INFO = {
  name: "Thar Htet Zaw",
  role: "Computer Science & Engineering Student",
  subRole:
    "Web Development Coordinator at Open Source NCR Community | Sharda University",
  location: "Yangon, Myanmar",
  email: "tharhtetzaw37@gmail.com",
  resumeUrl: "/Thar_Htet_Zaw_CV.pdf",

  socials: {
    github: "https://github.com/tharhtetzaw006",
    linkedin: "https://www.linkedin.com/in/tharhtetzaw/",
  },

  bio: "Computer Science & Engineering student at Sharda University with a strong passion for software engineering, artificial intelligence, and modern web development. Experienced in building full-stack applications using Java, Python, Next.js, React, and Node.js. Currently serving as Web Development Coordinator at Open Source NCR Community, where I contribute to technical initiatives, collaborate with developers, and continue expanding my skills through real-world projects and open-source activities.",
};

export const PROJECTS: Project[] = [
  {
    id: "smart-thar-ai",
    title: "Smart Thar AI",
    image: "/projects/smart-thar-ai.png",
    description:
      "AI-powered assistant designed to improve productivity and provide intelligent user interactions.",
    longDescription:
      "Smart Thar AI is a personal AI assistant project focused on productivity, intelligent conversations, and task assistance. The project explores the integration of modern AI technologies to create practical solutions for everyday users.",
    tags: ["Python"],
    category: "AI / ML",
    github: "https://github.com/tharhtetzaw006/Smart-Thar-AI",
    gradient: "from-sky-500 to-cyan-500",
    featured: true,
  },

  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    image: "/projects/portfolio.png",
    description:
      "Modern developer portfolio showcasing projects, skills, achievements, and experience.",
    longDescription:
      "A responsive portfolio website built with modern web technologies to present professional experience, projects, education, and technical skills.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web App",
    github: "https://github.com/tharhtetzaw006",
    gradient: "from-slate-500 to-sky-500",
    featured: false,
  },
];

export const EDUCATION_DATA = [
  {
    id: "edu-1",
    institution: "Sharda University",
    degree: "B.Tech Computer Science & Engineering",
    duration: "Aug 2024 - Present",
    location: "Greater Noida, India",

    description:
      "Currently pursuing B.Tech in Computer Science & Engineering. Completed second year with focus on software development and modern technologies.",

    courses: [
      "Data Structures",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Java Programming",
      "Python Programming",
      "Full Stack Web Development",
      "Theory of Computation",
      "Discrete Structures",
      "Probability and Statistics",
    ],

    achievements: ["Completed Second Year"],
  },

  {
    id: "edu-2",
    institution: "GUSTO College",
    degree: "Level 3 & Level 4 Diploma",
    duration: "Feb 2022 - Feb 2024",
    location: "Yangon, Myanmar",

    courses: [
      "Web Development (HTML, CSS, JavaScript, Bootstrap)",
      "Database Management System",
      "Data Modeling",
      "Programming (Java)",
      "Cyber Security",
      "Business Modeling",
      "Project Management",
      "Software Development Lifecycles",
      "Cloud Computing",
    ],
    achievements: [],
  },

  {
    id: "edu-3",
    institution: "No.1 Basic Education High School, Zalun",
    degree: "Myanmar Matriculation",
    duration: "Jun 2011 - Mar 2022",
    location: "Zalun, Myanmar",

    courses: [
      "Myanmar",
      "English",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "History",
      "Geography",
      "Economics",
      "Science",
    ],
    achievements: [
      "Second Prize in Grade-4",
      "Third Prize in Grade-5",
      "First Prize in Grade-6",
      "Second Prize in Grade-7",
      "First Prize in Grade-8",
      "Second Prize in Grade-9",
      "Total Matriculation Score: 448/600",
    ],
  },

  {
    id: "edu-4",
    institution: "IELC International School, Yangon",
    degree: "Primary & Secondary Education",
    duration: "Jun 2009 - Jun 2011",
    location: "Yangon, Myanmar",

    courses: ["English"],
    achievements: [
      "First Prize in Primary English",
      "Second Prize in Secondary English",
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    iconName: "Code",
    skills: ["Java", "Python", "JavaScript", "C", "C++"],
  },

  {
    category: "Frontend Development",
    iconName: "Smartphone",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },

  {
    category: "Backend Development",
    iconName: "Server",
    skills: ["Node.js", "Express.js", "REST APIs", "Database Design"],
  },

  {
    category: "Tools & Technologies",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "AI Development", "Project Management"],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-01",
    title: "Generative AI Essentials",
    issuer: "TCS iON",
    date: "Jun 2026",
    credentialId: "8772-31131187-1016",
    url: "#",
    colorClass: "from-blue-500 to-cyan-500",
  },
  {
    id: "cert-02",
    title: "Business Model Training",
    issuer: "GUSTO Innovation Challenge",
    date: "2024",
    credentialId: "GIC-BMT-2024",
    url: "#",
    colorClass: "from-amber-500 to-yellow-500",
  },
  {
    id: "cert-03",
    title: "Drones & Robotics Workshop Core Team",
    issuer: "Sharda University",
    date: "Mar 2026",
    credentialId: "DART-CORE-2026",
    url: "#",
    colorClass: "from-indigo-500 to-blue-500",
  },
  {
    id: "cert-04",
    title: "AWS Student Community Day Delhi NCR",
    issuer: "Amazon Web Services",
    date: "Mar 2026",
    credentialId: "AWS-SCD-2026",
    url: "#",
    colorClass: "from-orange-500 to-yellow-500",
  },
  {
    id: "cert-05",
    title: "Upper Secondary Plus 2",
    issuer: "British Council",
    date: "2024",
    credentialId: "BC-UP2-2024",
    url: "#",
    colorClass: "from-pink-500 to-purple-500",
  },
  {
    id: "cert-06",
    title: "Introduction to Cloud Computing",
    issuer: "IBM / Coursera",
    date: "May 2024",
    credentialId: "VKR7W3RVRAPE",
    url: "#",
    colorClass: "from-blue-500 to-cyan-500",
  },
  {
    id: "cert-07",
    title: "Cloud Computing Core",
    issuer: "IBM Skills Network",
    date: "May 2024",
    credentialId: "IBM-CCORE-2024",
    url: "#",
    colorClass: "from-sky-500 to-blue-500",
  },
  {
    id: "cert-08",
    title: "English for Career Development",
    issuer: "University of Pennsylvania / Coursera",
    date: "May 2024",
    credentialId: "2MHVRRPMPYLK",
    url: "#",
    colorClass: "from-indigo-500 to-slate-500",
  },
  {
    id: "cert-09",
    title: "Introduction to Web Development with HTML, CSS & JavaScript",
    issuer: "IBM / Coursera",
    date: "Jul 2025",
    credentialId: "IBM-WEBDEV-2025",
    url: "#",
    colorClass: "from-cyan-500 to-blue-500",
  },
  {
    id: "cert-10",
    title: "Applied Database Systems Using Oracle AI Database",
    issuer: "Oracle Academy",
    date: "Apr 2026",
    credentialId: "ORACLE-DB-2026",
    url: "#",
    colorClass: "from-red-500 to-orange-500",
  },
  {
    id: "cert-11",
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    date: "Apr 2026",
    credentialId: "ORACLE-JAVA-2026",
    url: "#",
    colorClass: "from-red-500 to-pink-500",
  },
  {
    id: "cert-12",
    title: "AI and Cybersecurity Awareness",
    issuer: "TCS iON",
    date: "May 2026",
    credentialId: "8770-31131187-1016",
    url: "#",
    colorClass: "from-cyan-500 to-blue-500",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Web Development Coordinator",
    category: "Leadership",
    event: "Open Source NCR Community (ONC)",
    date: "2025 - Present",
    description:
      "Selected as Coordinator of the Web Development Division, leading development activities, coordinating projects, and contributing to technical initiatives.",
  },

  {
    id: "ach-2",
    title: "Technical Lead - Dart 2.0 Workshop",
    category: "Leadership",
    event: "Sharda University",
    date: "2026",
    description:
      "Led the development and coordination of the workshop management system while providing technical support throughout the event.",
  },

  {
    id: "ach-3",
    title: "Founder & Developer",
    category: "Project",
    event: "Smart Thar AI",
    date: "2025",
    description:
      "Developed an AI-powered assistant focused on productivity enhancement and intelligent user interaction.",
  },
];
