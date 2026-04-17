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
        tag: "N1 Support + AI",
        title: "N1 Chatbot with AI + RAG",
        summary:
          "Assistant for frequent queries and faster initial support.",
        problem:
          "The team received repetitive queries and key information was spread across documents and internal sources.",
        solution:
          "I centralized answers with n8n, Gemini, and RAG to search a knowledge base and reply instantly.",
        result:
          "I reduced manual handling of repetitive queries and made first-level support faster.",
        metrics: [
          { value: "-75%", label: "less repetitive manual support work" },
          { value: "24/7", label: "automated initial attention" },
        ],
        technologies: ["n8n", "Gemini AI", "RAG", "Google Sheets"],
        githubUrl: "https://github.com/polarpicado/PortfolioChat-n8n",
        youtubeUrl: "https://www.youtube.com/watch?v=9ORxHFfZh_8",
      },
      {
        id: "sap-etl",
        tag: "Data + SAP",
        title: "SAP ETL Automation",
        summary:
          "ETL flow to extract, transform, and consolidate operational SAP data into daily reporting outputs.",
        problem:
          "SAP consolidation required manual work, repeated validations, and slow close cycles.",
        solution:
          "I reduced manual steps with an ETL flow built around PowerShell, VBA, and CSV/XLSX files to clean, standardize, and consolidate operational data.",
        result:
          "Manual load dropped and the process became more stable and traceable for the team.",
        metrics: [
          { value: "-75%", label: "manual effort reduction" },
          { value: "ETL", label: "stable operational consolidation flow" },
        ],
        technologies: ["PowerShell", "VBA", "SAP", "ETL", "CSV/XLSX"],
      },
      {
        id: "report-automation",
        tag: "Reporting",
        title: "Operational Reporting Automation",
        summary:
          "Automatic report generation for daily indicators and operational follow-up.",
        problem:
          "Reporting required hours of manual copy-paste, cleanup, and file assembly.",
        solution:
          "I reduced manual work with scripts and templates that generated review-ready reports.",
        result:
          "I reduced report preparation time and improved refresh frequency.",
        metrics: [
          { value: "6h -> 30 min", label: "report generation time" },
          { value: "daily", label: "more consistent update cadence" },
        ],
        technologies: ["Python", "Excel", "VBA", "CSV/XLSX"],
        githubUrl: "https://github.com/polarpicado/ITSM-Dashboard",
      },
      {
        id: "signature-generator",
        tag: "Internal support",
        title: "Signature Generator with Active Directory",
        summary:
          "Automation to create corporate signatures using centralized user information.",
        problem:
          "Signature setup took too long and was done manually user by user.",
        solution:
          "I automated signature generation using Active Directory data and a single template.",
        result:
          "I reduced provisioning time and removed common copy-paste errors.",
        metrics: [
          { value: "3h -> 10 s", label: "setup time per user" },
          { value: "0 rework", label: "from manual copy-paste errors" },
        ],
        technologies: ["PowerShell", "Active Directory", "HTML", "Automation"],
      },
    ],
  },
  certifications: {
    title: "Relevant certifications",
    description:
      "Continuous learning aligned with data, cloud, cybersecurity, and IT support.",
    showMore: "Show more",
    showLess: "Show less",
    certificationList: [
      {
        name: "Data Science 1: Exploratory Data Analysis",
        issuer: "Universidad Nacional de Ingenieria",
        year: "Aug 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_263e2acd67e0e3d62edb290d09359470",
      },
      {
        name: "ITIL Foundations",
        issuer: "Universidad Nacional de Ingenieria",
        year: "Aug 2025",
        url: "https://drive.google.com/file/d/17cJ91QFo3T3NHP-N8Ny8tdbtO7MsSThn/view",
      },
      {
        name: "Cloud Computing: AWS - Azure - Google Cloud",
        issuer: "Universidad Nacional de Ingenieria",
        year: "Feb 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_d27ff302798bfde709cac757dee47b82",
      },
      {
        name: "Power BI",
        issuer: "Fundacion Telefonica",
        year: "Jun 2025",
        url: "https://drive.google.com/file/d/1le3tyCCaVHuM2MKy8kCEmeWlxsseIz5m/view",
      },
      {
        name: "Advanced Excel",
        issuer: "Fundacion Telefonica",
        year: "Jun 2025",
        url: "https://drive.google.com/file/d/1uS28hVzxefg2b9iswqMvE_4ATYtQbWsd/view",
      },
      {
        name: "Python (Basic)",
        issuer: "HackerRank",
        year: "Nov 2022",
        url: "https://www.hackerrank.com/certificates/a634a0c646cd",
      },
      {
        name: "Scrum Fundamentals Certified",
        issuer: "Vabro.ai and VMEdu.com",
        year: "Nov 2022",
        url: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-JoaoBasanta-950646.pdf",
      },
      {
        name: "AWS Cloud Practitioner Essentials Day",
        issuer: "AWS Training Online",
        year: "Oct 2022",
        url: "https://drive.google.com/file/d/1QvDN5tJirVaD1rhM5ARumkjd_vbKqFBX/view",
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
