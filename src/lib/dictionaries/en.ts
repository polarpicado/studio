export const dictionary = {
  header: {
    nav: [
      { href: "#about", label: "Profile" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#certifications", label: "Certifications" },
      { href: "#contact", label: "Contact" },
    ],
  },
  hero: {
    title: "Automating processes with AI and integrated systems",
    subtitle:
      "I build solutions that connect chat, data, tickets and automation to reduce manual work and scale operations",
    viewDemo: "View demo",
    viewProjects: "View projects",
    contact: "Contact",
  },
  about: {
    eyebrow: "Support, operations, and automation",
    jobTitle: "IT Automation Specialist",
    experienceBadge: "+3 years of experience in support and automation within corporate environments",
    subheadline:
      "I improve support and operations through task automation, operational data handling, and process improvement.",
    professionalSummary:
      "I automate processes inside IT support and operations to reduce manual work, improve response times, and make internal workflows more reliable. I mainly work with Python, PowerShell, VBA, n8n, Excel, CSV/XLSX files, Active Directory, and lightweight ETL flows based on the operational need.",
    contactMe: "Let us talk",
    downloadCV: "Download Resume",
    cvUrl:
      "https://drive.google.com/file/d/1ZvBOkCCZSejsDhNCPDzIzKoOtcli2ESX/view?usp=drive_link",
    focusAreas: [
      "Support automation",
      "ETL and operational files",
      "Internal processes with Active Directory",
      "Applied AI",
    ],
  },
  featured: {
    title: "AI-powered support platform",
    description:
      "Functional demo composed of chat, ticket management and document repository connected to an API and automation workflows",
    links: [
      {
        title: "Chat",
        description: "AI agent that responds and automates workflows",
        href: "https://caritive-corrosively-natalia.ngrok-free.dev/chat/",
      },
      {
        title: "ServiceDesk",
        description: "Ticket management and support operations in real time",
        href: "https://caritive-corrosively-natalia.ngrok-free.dev/servicedesk/",
      },
      {
        title: "Repository",
        description: "Document repository that feeds the system knowledge base",
        href: "https://caritive-corrosively-natalia.ngrok-free.dev/repository/",
      },
    ],
  },
  metrics: {
    items: [
      {
        label: "Time saved",
        value: "6h -> 30 min",
        description: "Operational reporting and data consolidation automation.",
      },
      {
        label: "Manual reduction",
        value: "-75%",
        description: "ETL and repetitive tasks integrated with SAP and control sheets.",
      },
      {
        label: "Internal provisioning",
        value: "3h -> 10 s",
        description:
          "Automatic corporate signature generation from Active Directory.",
      },
      {
        label: "Efficiency",
        value: "-83.3%",
        description:
          "Repetitive execution time reduced with Python scripts and scheduled automation.",
      },
    ],
  },
  skills: {
    title: "Core skills",
    description:
      "Capabilities organized by the kind of business and operational problems I solve.",
    categories: [
      {
        icon: "automation",
        title: "Automation and scripting",
        description:
          "Scripts and workflows that replace repetitive tasks and standardize internal processes.",
        items: ["Python", "PowerShell", "VBA", "n8n", "Excel", "CSV/XLSX"],
      },
      {
        icon: "support",
        title: "IT support",
        description:
          "Operational support, user attention, and incident handling with a continuous improvement mindset.",
        items: ["Help desk", "ITSM", "Aranda", "Active Directory", "Microsoft 365", "Remote support"],
      },
      {
        icon: "data",
        title: "Data and ETL",
        description:
          "Extraction, cleanup, and transformation for operational files, reporting, and follow-up.",
        items: ["ETL", "SAP", "PowerShell", "VBA", "CSV/XLSX", "Data consolidation"],
      },
      {
        icon: "ai",
        title: "Applied AI",
        description:
          "Assistants and AI workflows for N1 support, internal queries, and productivity.",
        items: ["Gemini", "RAG", "Prompting", "Chatbots", "n8n AI"],
      },
      {
        icon: "infrastructure",
        title: "Infrastructure",
        description:
          "Technical foundation to support users, files, and supporting services in corporate environments.",
        items: ["Windows", "Linux", "Azure", "Git", "Microsoft 365"],
      },
    ],
  },
  projects: {
    title: "Key projects",
    description:
      "Use cases aligned with support, operations, and automation with measurable impact.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    resultLabel: "Result",
    projectList: [
      {
        id: "chatbot-rag",
        tag: "AI + Automation",
        title: "N1 Chatbot with AI + RAG",
        summary:
          "Support platform with AI, tickets, and knowledge base connected to automation flows.",
        problem:
          "Repetitive queries consumed team time and information was fragmented.",
        solution:
          "I connected chat, ServiceDesk, repository, API, and n8n into one automated flow.",
        result:
          "Better N1 support experience and end-to-end demo-ready operation.",
        metrics: [
          { value: "N1", label: "automated first-level support" },
          { value: "E2E", label: "chat, tickets, and KB connected" },
        ],
        technologies: ["FastAPI", "n8n", "MongoDB", "Qdrant", "RAG"],
        githubUrl: "https://github.com/polarpicado/Proyecto-Automatizaci-n",
        demoUrl: "https://caritive-corrosively-natalia.ngrok-free.dev/chat/",
      },
      {
        id: "e-invoicing",
        tag: "Automation + Invoicing",
        title: "Automated Electronic Receipts (SUNAT, Peru)",
        summary:
          "n8n workflow that turns an online training company's sales into electronic receipts issued to Peru's tax authority, with no manual work.",
        problem:
          "Every course sale had to be issued manually as an electronic receipt, with different VAT rules for Peruvian and foreign customers.",
        solution:
          "Workflow that reads approved sales, validates amounts, prevents duplicates, builds the UBL 2.1 document, issues it via API, and archives the PDF.",
        result:
          "Around 200 receipts per month issued automatically, with a full issuance log and a simulation mode to review before issuing.",
        metrics: [
          { value: "~200/mo", label: "receipts issued automatically" },
          { value: "VAT + export", label: "tax rules based on customer country" },
        ],
        technologies: ["n8n", "API SUNAT", "Google Sheets", "Hotmart", "UBL 2.1", "Gmail"],
      },
      {
        id: "portfolio-web",
        tag: "Personal website",
        title: "Professional Portfolio (Next.js)",
        summary:
          "My personal website to showcase experience, projects, contact, and AI assistant.",
        problem:
          "I needed a clear professional presence for recruiters and technical leaders.",
        solution:
          "Built a modern website with impact sections, chat, and backend-connected contact flow.",
        result:
          "Online portfolio ready for demos, technical validation, and continuous improvements.",
        metrics: [
          { value: "Full web", label: "profile, projects, and contact" },
          { value: "AI integrated", label: "chat connected to n8n + API" },
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind", "API Routes"],
        githubUrl: "https://github.com/polarpicado/studio",
        demoUrl: "https://jbasanta.vercel.app/",
      },
      {
        id: "crocdata-app",
        tag: "AppSheet + data",
        title: "CrocData App",
        summary:
          "Application to explore crocodile-related data as a practical AppSheet learning project.",
        problem:
          "I wanted to practice AppSheet using a data-oriented use case.",
        solution:
          "Designed data structure and views for fast, easy information browsing.",
        result:
          "Functional project for learning AppSheet and lightweight data modeling.",
        metrics: [
          { value: "AppSheet", label: "hands-on no-code practice" },
          { value: "Data", label: "simple and structured exploration" },
        ],
        technologies: ["AppSheet", "Data modeling", "No-code"],
        githubUrl: "https://github.com/polarpicado/CrocData-App",
        demoUrl: "https://appsheet.com/start/54307ed6-edf2-4d1b-abd9-3f09b4963e9f",
      },
      {
        id: "frogger-cpp",
        tag: "First project",
        title: "Frogger in C++ (Console)",
        summary:
          "My first C++ project: a Frogger-style console game with zero external libraries.",
        problem:
          "I wanted to strengthen core programming logic and build a game from scratch.",
        solution:
          "Implemented movement, collisions, and game rules using only C++ and console rendering.",
        result:
          "Built a strong base in structured programming and problem-solving.",
        metrics: [
          { value: "Pure C++", label: "no external libraries" },
          { value: "Console", label: "handmade simple game engine" },
        ],
        technologies: ["C++", "Console", "Game logic"],
        githubUrl: "https://github.com/polarpicado/FroggerProyectoCPlusPlus",
      },
    ],
  },
  certifications: {
    title: "Relevant certifications",
    description:
      "Continuous learning in automation, applied AI, data, cloud, cybersecurity, and IT support.",
    showMore: "Show more",
    showLess: "Show less",
    certificationList: [
      {
        name: "Business Process Management (BPM) & Robotic Process Automation (RPA)",
        issuer: "New Horizons",
        year: "Jun 2026",
        url: "https://drive.google.com/file/d/1Roqxu6mctfHrOkuHWji4cpv6lqQcNH0F/view",
      },
      {
        name: "n8n: AI Agents from Zero to Expert",
        issuer: "A1 Cursos",
        year: "Apr 2026",
        url: "https://drive.google.com/file/d/1P4steAWZ09A0S11m4Qjb66u2HZBA3vJD/view",
      },
      {
        name: "Automation with n8n and Artificial Intelligence",
        issuer: "Raiola Networks",
        year: "Apr 2026",
        url: "https://drive.google.com/file/d/1pHdzc8mcTn0ePAjKab1IMFu4wnuvqrOc/view",
      },
      {
        name: "Fundamental Artificial Intelligence Tools",
        issuer: "Skill - Centro de capacitacion",
        year: "Jul 2026",
        url: "https://drive.google.com/file/d/1OJpxb5s_ISH3cTDfBiwS9m_NDU08hnZG/view",
      },
      {
        name: "AI-Assisted Development",
        issuer: "BIG school",
        year: "Oct 2025",
        url: "https://drive.google.com/file/d/1PYfKwKL8h7XzV2r9xPbWGodx6tRK1tHB/view",
      },
      {
        name: "ITIL Foundations",
        issuer: "Universidad Nacional de Ingenieria",
        year: "Aug 2025",
        url: "https://drive.google.com/file/d/17cJ91QFo3T3NHP-N8Ny8tdbtO7MsSThn/view",
      },
      {
        name: "Data Science 1: Exploratory Data Analysis",
        issuer: "Universidad Nacional de Ingenieria",
        year: "Aug 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_263e2acd67e0e3d62edb290d09359470",
      },
      {
        name: "Power BI with Excel",
        issuer: "Municipalidad de Jesus Maria",
        year: "Feb 2026",
        url: "https://drive.google.com/file/d/1MeajeFVz7Pq-SzwQVHDC9sPYAaYMEmRi/view",
      },
      {
        name: "Cloud Computing: AWS - Azure - Google Cloud",
        issuer: "Universidad Nacional de Ingenieria",
        year: "Feb 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_d27ff302798bfde709cac757dee47b82",
      },
      {
        name: "SQL Server",
        issuer: "Skill - Centro de capacitacion",
        year: "Aug 2025",
        url: "https://drive.google.com/file/d/1AbKVf9DrLJS3YfmqJfKhfLoDqHm0H9xy/view",
      },
      {
        name: "PostgreSQL",
        issuer: "Skill - Centro de capacitacion",
        year: "Aug 2025",
        url: "https://drive.google.com/file/d/1uGspnxkyBrAN1O_pHOXcJcGdNf31nznv/view",
      },
      {
        name: "MySQL",
        issuer: "Skill - Centro de capacitacion",
        year: "Aug 2025",
        url: "https://drive.google.com/file/d/17x_3Nn4dw4xCxpYiG26K7y71mRUDFQrf/view",
      },
      {
        name: "Cybersecurity: CyberSOC",
        issuer: "Universidad Nacional de Ingenieria",
        year: "Feb 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_ef22d4272cdc3b1a70acae3e7735565d",
      },
      {
        name: "Cybersecurity: Ethical Hacking",
        issuer: "Universidad Nacional de Ingenieria",
        year: "Feb 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_de5b725afef7fd4ac36e5d6c0bb1e9d4",
      },
      {
        name: "Cybersecurity: Web Application Pentesting",
        issuer: "Universidad Nacional de Ingenieria",
        year: "Feb 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_6872212f002c6f45e6fd121517c8b6bd",
      },
      {
        name: "Advanced Excel",
        issuer: "Fundacion Telefonica",
        year: "Jun 2025",
        url: "https://drive.google.com/file/d/1uS28hVzxefg2b9iswqMvE_4ATYtQbWsd/view",
      },
      {
        name: "Introduction to Power BI",
        issuer: "Fundacion Telefonica",
        year: "Jun 2025",
        url: "https://drive.google.com/file/d/1le3tyCCaVHuM2MKy8kCEmeWlxsseIz5m/view",
      },
      {
        name: "Big Data Fundamentals",
        issuer: "Fundacion Telefonica",
        year: "Jun 2025",
        url: "https://drive.google.com/file/d/1vAOo6z5p6UlYeEpLRRd_zBJU3OmyOqVV/view",
      },
      {
        name: "Java Standard Programming",
        issuer: "Fundacion Telefonica",
        year: "Jun 2025",
        url: "https://drive.google.com/file/d/1vvIwSY3wWb4Vp-wopdKEFjSM7xoDKvPp/view",
      },
      {
        name: "Python (Basic)",
        issuer: "HackerRank",
        year: "Nov 2022",
        url: "https://www.hackerrank.com/certificates/a634a0c646cd",
      },
      {
        name: "Scrum Fundamentals Certified",
        issuer: "VMEdu.com",
        year: "Nov 2022",
        url: "https://drive.google.com/file/d/1IERXUxMasgtR3hfr5sdoaUlaUHv_LhVb/view",
      },
      {
        name: "Mobile App Development",
        issuer: "Google Espana",
        year: "Oct 2022",
        url: "https://drive.google.com/file/d/1yz4P9AaKb_qBqY5znhkk9gPDjlYrDCE0/view",
      },
      {
        name: "AWS Cloud Practitioner Essentials Day",
        issuer: "AWS Training Online",
        year: "Oct 2022",
        url: "https://drive.google.com/file/d/1QvDN5tJirVaD1rhM5ARumkjd_vbKqFBX/view",
      },
      {
        name: "SQL Server For Analytics",
        issuer: "WE Educacion Ejecutiva",
        year: "Feb 2022",
        url: "https://drive.google.com/file/d/17oJTITj4dI9OVa4Mltl8jY72e8EINWI5/view",
      },
      {
        name: "Networking Essentials",
        issuer: "Cisco Networking Academy",
        year: "Aug 2021",
        url: "https://drive.google.com/file/d/1ixiHYya6hjOoXvSnhLfJZ45BZI1WBwku/view",
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "If you need someone who automates processes inside IT support and operations, let us talk.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about the role or team need...",
    sendMessage: "Send message",
    whatsappLabel: "Message me on WhatsApp",
    whatsappUrl:
      "https://wa.me/51970645611?text=Hello%20Joao%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20an%20opportunity.",
    sending: "Sending...",
    successTitle: "Message sent",
    successDescription: "Thanks. Your message was sent successfully.",
    errorTitle: "Could not send",
    errorDescription: "There was a problem while sending the message.",
    validation: {
      name: "Name is too short.",
      email: "Enter a valid email.",
      message: "Message must contain at least 10 characters.",
    },
  },
  aiAssistant: {
    open: "Open assistant",
    title: "Portfolio assistant",
    description:
      "Ask about automation in IT support and operations, projects, or experience.",
    initialMessage:
      "I can summarize Joao's experience, projects, and results from an automation in IT support and operations perspective.",
    errorMessage:
      "I could not answer right now. Please try again in a few seconds.",
    placeholder: "Ask about a project or result...",
    send: "Send",
  },
  footer: {
    rights: "All rights reserved.",
    tagline: "Portfolio tailored for recruiters and IT operations leaders.",
  },
};
