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
  profilePhoto: null, // Add a photo URL here when available
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
// TIMELINE ITEMS (Projects, Certs, Education, Experience)
// ============================================================
export const timelineItems = [
  // ---- EXPERIENCE ----
  {
    id: "exp-elevvo-qa",
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
    images: ["\BSc-cert.jpg"],
    link: "https://cuiwah.edu.pk/Pages/About",
  },

  // ---- CERTIFICATIONS ----
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
      "Completed a professional front-end web development training program covering HTML, CSS, JavaScript, and responsive design principles.",
    skills: ["HTML", "CSS", "JavaScript", "JSON", "ReactJS", "Bootstrap", "jQuery", "REST APIs"],
    images: ["/Web-cert.jpg"],
    link: "https://www.evslearning.com/Home/ContactUs",
  },
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
    images: ["F-PM-cert.jpg"],
    link: "https://www.coursera.org/account/accomplishments/records/35WEXIL517C4",
  },

  // ---- PROJECTS ----
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
      "Enterprise-grade RAG (Retrieval-Augmented Generation) application with strict Role-Based Access Control (RBAC). Hosted on Hugging Face Spaces, featuring vector search, prompt engineering, and document isolation to ensure data privacy across permission tiers.",
    skills: ["Python", "LangChain", "ChromaDB", "Llama 3.2", "Gradio", "RAG", "RBAC", "Hugging Face Spaces"],
    images: ["L1.jpeg", "L2.jpeg", "L3.jpeg", "L4.jpeg", "L5.jpeg", "L6.jpeg", "L7.jpeg"],
    link: "https://youtu.be/YHjZMzd9XdE",
  },
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
      "Enterprise-grade RAG (Retrieval-Augmented Generation) application with strict Role-Based Access Control (RBAC). Hosted on Hugging Face Spaces, featuring vector search, prompt engineering, and document isolation to ensure data privacy across permission tiers.",
    skills: ["Python", "LangChain", "ChromaDB", "Llama 3.2", "Gradio", "RAG", "RBAC", "Hugging Face Spaces"],
    images: [""],
    link: "https://huggingface.co/spaces/mustafac0des/Multi-Document-RAG-Agent",
  },
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
      "A full-featured social media platform supporting follower networks, interactive feeds, and REST APIs. Built with the MERN stack (MongoDB, Express, React, Node.js). Features dark/light themes, Base64 media storage, and Postman-based API test coverage. Underwent significant technical debt reduction and legacy codebase modernization.",
    skills: ["MongoDB", "Express", "React", "Node.js", "Postman", "REST API"],
    images: ["St1.png", "St2.png", "St3.png", "St4.png"],
    link: null,
  },
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
      "A hotel management system featuring dynamic booking management and a full-stack MVC architecture. Built with PHP/Laravel and XAMPP. Supports dynamic room availability, user reservations, and a clean admin dashboard.",
    skills: ["PHP", "Laravel", "Blade", "MySQL", "XAMPP"],
    images: ["RG0.png", "RG1.png", "RG2.png", "RG3.png", "RG4.png"],
    link: null,
  },
  {
    id: "proj-memorize",
    type: "project",
    title: "Memorize It!",
    organization: "Academic Project",
    date: "Nov 2023",
    dateShort: "Nov 2023",
    status: "Completed",
    isLive: false,
    description:
      "A memory card game application built with Java 17 and JavaFX. Features refactored game mechanics, optimized GUI architecture using Maven, and a clean component-based design pattern.",
    skills: ["Java", "JavaFX", "Maven", "OOP", "GUI Design"],
    images: ["MI1.png", "MI2.png", "MI3.png", "MI4.png"],
    link: "https://youtu.be/j4BgIKgNfi0",
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
