// ============================================================
// portfolio.js — Single source of truth for all portfolio data
// ============================================================

export const siteConfig = {
  name: "Mustafa Amanullah",
  tagline: "Software Developer · Business & Management Enthusiast",
  headline: "Building scalable software, one system at a time.",
  description:
    "Software Engineering graduate from COMSATS University Islamabad, with a versatile focus spanning full-stack development, AI model integration, and quality assurance. I bridge the gap between technical excellence and business strategy — because great software is built at the intersection of code and context.",
  location: "Islamabad, Pakistan",
  available: true,
  email: "mustafa357yt@gmail.com",
  linkedin: "https://www.linkedin.com/in/mustafac0des",
  github: "https://wwww.github.com/mustafac0des",
};

// ============================================================
// SKILLS
// ============================================================
export const skills = {
  technical: [
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "Java", icon: "SiOpenjdk", color: "#007396" },
    { name: "PHP", icon: "SiPhp", color: "#777BB4" },
    { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
    { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
    { name: "Dart", icon: "SiDart", color: "#0175C2" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    { name: "Docker", icon: "SiDocker", color: "#2496ED" },
    { name: "AWS", icon: "SiAmazonwebservices", color: "#FF9900" },
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "LangChain", icon: "SiLangchain", color: "#1C3C3C" },
    { name: "Jira", icon: "SiJira", color: "#0052CC" },
  ],
  nonTechnical: [
    { name: "Project Management", icon: "MdManageAccounts", color: "#6366F1" },
    { name: "Operations Management", icon: "MdOutlineSettings", color: "#8B5CF6" },
    { name: "Quality Assurance", icon: "MdOutlineVerified", color: "#10B981" },
    { name: "Agile / Scrum", icon: "SiScrumalliance", color: "#009FDA" },
    { name: "Business Strategy", icon: "MdOutlineTrendingUp", color: "#F59E0B" },
    { name: "Team Leadership", icon: "MdPeople", color: "#EC4899" },
    { name: "Problem Solving", icon: "MdOutlineLightbulb", color: "#F97316" },
    { name: "Communication", icon: "MdOutlineChatBubble", color: "#14B8A6" },
  ],
};

// ============================================================
// TIMELINE ITEMS (Chronological Order: Oldest to Latest)
// ============================================================
export const timelineItems = [
  // 1. Aug 2021 — Front-End Web Developer Certification
  {
    id: "cert-frontend-evs",
    type: "certification",
    title: "Front-End Web Developer",
    organization: "EVS Professional Training Institute",
    date: "Aug 2021 - Nov 2021",
    dateShort: "Aug 2021",
    status: "Completed",
    isLive: false,
    description:
      "Completed a professional front-end web development training program covering web development and responsive design principles.",
    skills: ["HTML", "CSS", "JavaScript", "JSON", "ReactJS", "Bootstrap", "jQuery", "REST APIs"],
    images: ["/Web-cert.jpg"],
    link: "https://www.evslearning.com/Home/ContactUs",
  },

  // 2. Jan 2022 — B.Sc. Software Engineering Education
  {
    id: "edu-comsats",
    type: "education",
    title: "B.Sc. Software Engineering",
    organization: "COMSATS University Islamabad",
    date: "2022 – June 2026",
    dateShort: "Jan 2022",
    status: "Completed",
    isLive: false,
    description:
      "Pursued a Bachelor's degree in Software Engineering with a focus on full-stack development, AI integration, and software quality assurance. Graduated with a strong foundation in both technical and managerial aspects of software development.",
    skills: ["Software Engineering", "Development", "Communication Skills", "Documentation Skills", "Professional Practises", "Management"],
    images: ["/BSc-cert.jpg"],
    link: "https://cuiwah.edu.pk/Pages/About",
  },

  // 3. Nov 2023 — Memorize It! Project
  {
    id: "proj-memorize",
    type: "project",
    title: "Memorize It!",
    organization: "Academic Project",
    date: "Sep 2023 - Nov 2023",
    dateShort: "Nov 2023",
    status: "Completed",
    isLive: false,
    description:
      "A modern memory matching card game built with JavaFX as part of my DSA project. Features multiple difficulty levels (Easy, Medium, Hard), smooth card-flipping animations, real-time score tracking, match history sidebar, and smart card matching logic.",
    skills: ["Java", "JavaFX", "Maven", "OOP", "Data Structures", "Algorithms"],
    images: ["MI1.png", "MI2.png", "MI3.png", "MI4.png"],
    link: "https://youtu.be/j4BgIKgNfi0",
  },

  // 4. July 2024 — Strings Project
  {
    id: "proj-strings",
    type: "project",
    title: "Strings",
    organization: "Personal Project",
    date: "July 2024 - Aug 2024",
    dateShort: "Aug 2024",
    status: "Completed",
    isLive: false,
    description:
      "A full-stack social media application to share thoughts, connect with friends, and discover interesting content. Features post creation with media, likes, replies, reposts, bookmarking, user follow networks, search, personalized profiles, and dark mode.",
    skills: ["MongoDB", "Express", "React", "Node.js", "Postman", "REST API"],
    images: ["St1.png", "St2.png", "St3.png", "St4.png"],
    link: "https://github.com/mustafac0des/Strings/",
  },

  // 5. Nov 2024 — RoomGO Project
  {
    id: "proj-roomgo",
    type: "project",
    title: "RoomGO",
    organization: "Academic Project",
    date: "Nov 2024 - Dec 2024",
    dateShort: "Dec 2024",
    status: "Completed",
    isLive: false,
    description:
      "A modern room booking and hotel management system designed to make finding and listing rooms effortless. Built with PHP/Laravel and MySQL, featuring dynamic room browsing, seamless order-to-booking workflows, live guest-host chat, host listing tools, and an admin panel with role-based access control.",
    skills: ["PHP", "Laravel", "Blade", "MySQL", "XAMPP"],
    images: ["RG0.png", "RG1.png", "RG2.png", "RG3.png", "RG4.png"],
    link: "https://github.com/mustafac0des/RoomGO",
  },

  // 6. Apr 2025 — Lorelink Project
  {
    id: "proj-lorelink",
    type: "project",
    title: "Lorelink",
    organization: "Final Year Project",
    date: "Apr 2025 - Jan 2026",
    dateShort: "Jan 2026",
    status: "Completed",
    isLive: false,
    description:
      "A social storytelling platform where users share narratives, connect with fellow storytellers, and explore stories worldwide. Built for my Final Year Project, featuring multimedia story creation, interactive likes, comments, reposts, bookmarks, community feeds, author profiles, and dark mode.",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "REST APIs"],
    images: ["L1.jpeg", "L2.jpeg", "L3.jpeg", "L4.jpeg", "L5.jpeg", "L6.jpeg", "L7.jpeg"],
    link: "https://youtu.be/YHjZMzd9XdE",
  },

  // 7. May 2025 — Multi-Document RAG Agent Project
  {
    id: "proj-rag-rbac",
    type: "project",
    title: "Multi-Document RAG Agent",
    organization: "Personal Project",
    date: "May 2025",
    dateShort: "May 2025",
    status: "Live",
    isLive: true,
    description:
      "A secure Role-Based Access Control (RBAC) AI chatbot that allows employees to query internal company documents with strict permission tiers. Features local LLM generation and embeddings for privacy, multi-document ingestion with metadata filtering, ChromaDB vector retrieval, and a Gradio web interface.",
    skills: ["Python", "LangChain", "ChromaDB", "Llama 3.2", "Gradio", "RAG", "RBAC", "Hugging Face Spaces"],
    images: [""],
    link: "https://huggingface.co/spaces/mustafac0des/Multi-Document-RAG-Agent",
  },

  // 8. Jul 2025 — Intro to Programming Certification
  {
    id: "cert-kaggle-intro",
    type: "certification",
    title: "Intro to Programming",
    organization: "Kaggle",
    date: "Jul 2025",
    dateShort: "Jul 2025",
    status: "Completed",
    isLive: false,
    description:
      "Kaggle's Intro to Programming course, covering the fundamentals of programming logic, Python syntax, and computational thinking.",
    skills: ["Python", "Kaggle", "Notebooks"],
    images: ["/Programming-cert.png"],
    link: "https://www.kaggle.com/learn/certification/mustafac0des/intro-to-programming",
  },

  // 9. Aug 2025 — Python Certification
  {
    id: "cert-kaggle-python",
    type: "certification",
    title: "Python",
    organization: "Kaggle",
    date: "Aug 2025",
    dateShort: "Aug 2025",
    status: "Completed",
    isLive: false,
    description:
      "Advanced Python programming certification from Kaggle covering functions, data types, loops, list comprehensions, and more.",
    skills: ["Python", "Kaggle", "Notebooks"],
    images: ["/Python-cert.png"],
    link: "https://www.kaggle.com/learn/certification/mustafac0des/python",
  },

  // 10. Aug 2025 – Sept 2025 — NLP Experience
  {
    id: "exp-elevvo-nlp",
    type: "experience",
    title: "Natural Language Processing",
    organization: "Elevvo Pathways",
    date: "Aug 2025 – Sept 2025",
    dateShort: "Sep 2025",
    status: "Completed",
    isLive: false,
    description:
      "Interned for natural language processing at Elevvo Pathways. Worked on sentiment analysis, classification, NER, topic modelling, question answering, text summarization techniques. Built a resume screening application as the final task.",
    skills: ["Python", "Pandas", "numPy", "Datasets", "NLTK", "spaCy", "Scikit-Learn", "TensorFlow", "Keras", "Torch", "Transformers"],
    images: ["/NLP-cert.png", "/NLP-badge.png"],
    link: "https://elevvo.tech/home",
  },

  // 11. Dec 2025 — MemoHub Project
  {
    id: "proj-memohub",
    type: "project",
    title: "MemoHub",
    organization: "Personal Project",
    date: "Nov 2025 - Dec 2025",
    dateShort: "Dec 2025",
    status: "Completed",
    isLive: false,
    description:
      "An elegant note-taking and memo management system to organize thoughts, manage tasks, and keep track of important information. Features memo creation with customizable color coding, category organization (General, Work, Personal, Ideas, Todo), note pinning, search, multi-sorting options, dark mode, and secure authentication.",
    skills: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "REST APIs"],
    images: ["MH1.png", "MH2.png", "MH3.png", "MH4.png", "MH5.png"],
    link: "https://github.com/mustafac0des/MemoHub",
  },

  // 12. Aug 2026 — Operations Management Certification
  {
    id: "cert-ops-mgmt",
    type: "certification",
    title: "Operations Management",
    organization: "IESE Business School via Coursera",
    date: "Aug 2026",
    dateShort: "Aug 2026",
    status: "Completed",
    isLive: false,
    description:
      "Completed Operations Management course from IESE Business School focusing on process optimization, capacity planning, and supply chain management.",
    skills: ["Process Improvement", "Administration", "Process Design", "Inventory Management", "Operational Analysis", "Process Management", "Process Analysis", "Operations", "Capacity Management", "Process Improvement and Optimization", "Performance Improvement", "Business Process Improvement"],
    images: ["/OM-cert.jpg"],
    link: "https://www.coursera.org/account/accomplishments/verify/VS1OAFWDPAGT",
  },

  // 13. Aug 2026 — Jira for QA Certification
  {
    id: "cert-jira-qa",
    type: "certification",
    title: "Jira for Quality Assurance Testing",
    organization: "Coursera",
    date: "Aug 2026",
    dateShort: "Aug 2026",
    status: "Completed",
    isLive: false,
    description:
      "Execute software testing in Jira, using test cases and documentation to ensure quality assurance and software reliability.",
    skills: ["Test Tools", "Problem Solving", "Development Testing", "User Interface and User Experience (UI/UX) Design", "Software Quality Assurance", "Software Development", "Jira", "Test Planning", "Functional Testing", "Agile Methodology", "Software Testing", "Test Case"],
    images: ["/Jira-cert.jpg"],
    link: "https://coursera.org/verify/MPMLG1MGLQFR",
  },

  // 14. Aug 2026 - Sep 2026 — Foundations of Project Management Certification
  {
    id: "cert-pm-google",
    type: "certification",
    title: "Foundations of Project Management",
    organization: "Google via Coursera",
    date: "Aug 2026 - Sep 2026",
    dateShort: "Sep 2026",
    status: "Completed",
    isLive: false,
    description:
      "Describe project management skills, roles, and responsibilities across a variety of industries\nExplain the project management life cycle and compare different program management methodologies\nDefine organizational structure and organizational culture and explain how it impacts project management.",
    skills: ["Change Management", "Project Planning", "Strategic Thinking", "Program Management", "Project Management Life Cycle", "AI Enablement", "Organizational Structure", "Project Management", "Organizational Change"],
    images: ["/F-PM-cert.jpg"],
    link: "https://www.coursera.org/account/accomplishments/records/35WEXIL517C4",
  },

  // 15. Sep 2026 - Present — Mobile Application Developer Experience
  {
    id: "exp-robo-dev",
    type: "experience",
    title: "Mobile Application Developer",
    organization: "Robo Soft Technologies Pvt. Ltd.",
    date: "Sep 2026 - Present",
    dateShort: "Dec 2026",
    status: "Ongoing",
    isLive: true,
    description:
      "Developing high-performance Android & iOS mobile applications using Flutter and modern frameworks. Responsible for building responsive, user-friendly mobile interfaces, integrating RESTful APIs, Firebase services, and third-party solutions. Collaborating closely with UI/UX designers and backend teams while conducting thorough debugging, testing, and performance optimization to deliver scalable, maintainable mobile architectures.",
    skills: [
      "Mobile Application Development",
      "Cross-Platform Development",
      "Flutter",
      "Dart",
      "Android & iOS",
      "RESTful API Integration",
      "Firebase Services",
      "UI/UX Integration",
      "Testing & Debugging",
      "Performance Optimization",
      "Git",
      "GitHub",
      "Problem-Solving"
    ],
    images: [],
    link: "https://robosoft.pk/about-us/",
  },
];

// ============================================================
// CONTACT / SOCIAL
// ============================================================
export const social = [
  { label: "LinkedIn", url: siteConfig.linkedin, icon: "FaLinkedin" },
  { label: "GitHub", url: siteConfig.github, icon: "FaGithub" },
  { label: "Email", url: `mailto:${siteConfig.email}`, icon: "FaEnvelope" },
];
