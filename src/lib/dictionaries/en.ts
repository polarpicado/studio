export const dictionary = {
  header: {
    nav: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#certifications", label: "Certifications" },
      { href: "#contact", label: "Contact" },
    ],
  },
  about: {
    jobTitle: "Computational Systems Engineer",
    professionalSummary:
      "I am a results-driven System Engineer and Automation Expert with a passion for building efficient, scalable, and robust cloud solutions. My expertise lies in leveraging Python, n8n, and various cloud technologies to streamline processes, automate complex workflows, and enhance system performance. I thrive on solving complex problems and am dedicated to continuous learning and improvement in the ever-evolving world of technology.",
    contactMe: "Contact Me",
    downloadCV: "Resume",
    english: "English",
    spanish: "Spanish",
  },
  skills: {
    title: "Key Skills",
    description: "A collection of technologies and methodologies I master.",
    skillList: [
      { id: "python", name: "Python", description: "Django, Scripting" },
      { id: "n8n", name: "n8n", description: "Automation Workflows" },
      { id: "cloud", name: "Cloud & DevOps", description: "AWS, Azure, Git" },
      { id: "databases", name: "Databases", description: "MySQL, SQL Server, PostgreSQL" },
      { id: "containerization", name: "ITSM & Support", description: "ITIL, Tech Support" },
      { id: "cicd", name: "Management", description: "Agile, Scrum" },
    ],
  },
  experience: {
    title: "Work Experience",
    description: "My professional journey and key roles.",
    experienceList: [
      {
        role: "IT Operations Analyst",
        company: "Camposol",
        period: "Aug 2023 - Jun 2025",
        description:
          "Skills: Cloud Computing, Microsoft Excel, Technical Support, Python, Aranda, Active Directory, Microsoft Azure.",
        logo_light: "https://i.postimg.cc/1zz7QfwL/camposol-black.png",
        logo_dark: "https://i.postimg.cc/k55YmBK0/camposol-white.png",
      },
      {
        role: "Support and Incidents Intern",
        company: "ALIGNET",
        period: "Sep 2022 - Aug 2023",
        description:
          "Skills: Python, Cloud Computing, Technical Support, Agile Methodologies, Version Control, Amazon Web Services (AWS).",
        logo_light: "https://i.postimg.cc/NjDCS19P/alignet-black.png",
        logo_dark: "https://i.postimg.cc/rppZkK5L/alignet-white.png",
      },
      {
        role: "Systems Team Lead",
        company: "Agencia Consigue Ventas Online",
        period: "Apr 2022 - Jun 2022",
        description:
          "Skills: Microsoft Excel, Web Development, Agile Methodologies, Leadership, Teamwork, Team Management.",
        logo_light: "https://i.postimg.cc/cJJkSrwP/consigueventasonline-black.png",
        logo_dark: "https://i.postimg.cc/bvvVhs1y/consigueventasonline-white.png",
      },
      {
        role: "Backend Laravel Developer",
        company: "Agencia Consigue Ventas Online",
        period: "Mar 2022 - Apr 2022",
        description:
          "Skills: Web Development, Agile Methodologies, Version Control, Microsoft SQL Server.",
        logo_light: "https://i.postimg.cc/cJJkSrwP/consigueventasonline-black.png",
        logo_dark: "https://i.postimg.cc/bvvVhs1y/consigueventasonline-white.png",
      },
      {
        role: "Software Developer",
        company: "Grupo Casza",
        period: "Mar 2021 - Oct 2021",
        description:
          "Skills: Linux, Cloud Computing, Web Development, Agile Methodologies, Microsoft SQL Server, Logic Programming, Python, Django, MySQL, SQL, JavaScript, Amazon Web Services (AWS).",
        logo_light: "https://i.postimg.cc/cJ5940cS/grupocasza-black.png",
        logo_dark: "https://i.postimg.cc/QMn4xhqD/grupocasza-white.png",
      },
    ],
  },
  projects: {
    title: "Projects",
    description: "Here are some of the projects I'm proud to have worked on.",
    projectList: [
      {
        id: "itsm-dashboard",
        title: "ITSM-Dashboard",
        description:
          "IT Service Management Dashboard with SQL, Python, and Power BI.",
        technologies: ["Python", "SQL", "Power BI", "HTML/CSS/JS", "Firebase"],
        githubUrl: "https://github.com/polarpicado/ITSM-Dashboard",
      },
      {
        id: "crocdata-app",
        title: "CrocData-App",
        description:
          "AppSheet application to manage and visualize crocodile observations from open data from the Peruvian government.",
        technologies: ["AppSheet", "Google Sheets"],
        githubUrl: "https://github.com/polarpicado/CrocData-App",
      },
      {
        id: "portfoliochat-n8n",
        title: "PortfolioChat-n8n",
        description:
          "Chatbot created with n8n, Gemini AI, and Google Sheets. Embedded in a personal website as a virtual assistant.",
        technologies: ["n8n", "Gemini AI", "Google Sheets"],
        githubUrl: "https://github.com/polarpicado/PortfolioChat-n8n",
        youtubeUrl: "https://www.youtube.com/watch?v=9ORxHFfZh_8"
      },
      {
        id: "n8n-formsaver",
        title: "n8n-FormSaver",
        description:
          "Workflow in n8n to save data from web forms to Google Sheets without using databases.",
        technologies: ["WebHooks", "Google Sheets"],
        githubUrl: "https://github.com/polarpicado/n8n-FormSaver",
      },
      {
        id: "frogger-cpp",
        title: "FroggerProyectoCPlusPlus",
        description: "A recreation of the classic Frogger game using pure C++, without external libraries, to demonstrate a deep understanding of programming fundamentals and game logic. Developed in the Zinjal IDE.",
        technologies: ["C++"],
        githubUrl: "https://github.com/polarpicado/FroggerProyectoCPlusPlus",
      },
    ],
  },
  certifications: {
    title: "Certifications & Accomplishments",
    description: "My commitment to continuous learning and professional development.",
    certificationList: [
      { name: 'DATA SCIENCE 1: EXPLORATORY DATA ANALYSIS', issuer: 'Universidad Nacional de Ingeniería', year: 'Aug 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'ITIL Foundations', issuer: 'Universidad Nacional de Ingeniería', year: 'Aug 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'MySQL', issuer: 'Skill - Centro de capacitación', year: 'Aug 2025', url: 'https://www.linkedin.com/company/77859874/' },
      { name: 'PostgreSQL', issuer: 'Skill - Centro de capacitación', year: 'Aug 2025', url: 'https://www.linkedin.com/company/77859874/' },
      { name: 'SQL Server', issuer: 'Skill - Centro de capacitación', year: 'Aug 2025', url: 'https://www.linkedin.com/company/77859874/' },
      { name: 'Advanced Excel', issuer: 'Fundación Telefónica', year: 'Jun 2025', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Introduction to Power BI', issuer: 'Fundación Telefónica', year: 'Jun 2025', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Big Data Fundamentals', issuer: 'Fundación Telefónica', year: 'Jun 2025', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Programming with Java Standard', issuer: 'Fundación Telefónica', year: 'Jun 2025', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'CYBERSECURITY: CYBERSOC', issuer: 'Universidad Nacional de Ingeniería', year: 'Feb 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'CYBERSECURITY: ETHICAL HACKING', issuer: 'Universidad Nacional de Ingeniería', year: 'Feb 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'CYBERSECURITY: PENTESTING AGAINST WEB APPLICATIONS', issuer: 'Universidad Nacional de Ingeniería', year: 'Feb 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'CLOUD COMPUTING: AWS - AZURE - GOOGLE CLOUD', issuer: 'Universidad Nacional de Ingeniería', year: 'Feb 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'Python(Basic)', issuer: 'HackerRank', year: 'Nov 2022', url: 'https://www.linkedin.com/company/435210/' },
      { name: 'Scrum Fundamentals Certified', issuer: 'Vabro.ai and VMEdu.com', year: 'Nov 2022', url: 'https://www.linkedin.com/company/2881003/' },
      { name: 'AWS Cloud Practitioner Essentials Day', issuer: 'AWS Training Online', year: 'Oct 2022', url: 'https://www.linkedin.com/company/82109295/' },
      { name: 'Mobile App Development', issuer: 'Google Actívate', year: 'Oct 2022', url: 'https://www.linkedin.com/company/10195133/' },
      { name: 'WebService API REST Creation with Laravel', issuer: 'Udemy', year: 'Mar 2022', url: 'https://www.linkedin.com/company/822535/' },
      { name: 'C# Essential', issuer: 'LinkedIn', year: 'Feb 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'SQL Server For Analytics', issuer: 'WE Educación Ejecutiva', year: 'Feb 2022', url: 'https://www.linkedin.com/company/27218428/' },
      { name: 'Basic Wordpress', issuer: 'Fundación Telefónica', year: 'Feb 2022', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Big Data Fundamentals', issuer: 'LinkedIn', year: 'Jan 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Customer Service Fundamentals for IT Professionals', issuer: 'LinkedIn', year: 'Jan 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Programming Foundations: Object-Oriented Design', issuer: 'LinkedIn', year: 'Jan 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Math Foundations for Programming', issuer: 'LinkedIn', year: 'Jan 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Computational Thinking', issuer: 'LinkedIn', year: 'Jan 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Practical Git and Github', issuer: 'Udemy', year: 'Dec 2021', url: 'https://www.linkedin.com/company/822535/' },
      { name: 'Intermediate Office', issuer: 'Fundación Telefónica', year: 'Dec 2021', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Introduction to Azure', issuer: 'Udemy', year: 'Nov 2021', url: 'https://www.linkedin.com/company/822535/' },
      { name: 'Introduction to Web Development I', issuer: 'Google Actívate', year: 'Aug 2021', url: 'https://www.linkedin.com/company/10195133/' },
      { name: 'Networking Essentials', issuer: 'Cisco Networking Academy', year: 'Aug 2021', url: 'https://www.linkedin.com/company/16202254/' },
      { name: 'CCNAv7: Switching, Routing and Wireless Essentials', issuer: 'Cisco Networking Academy', year: 'Jul 2021', url: 'https://www.linkedin.com/company/16202254/' },
      { name: 'Project Management with Agile Methodologies and Lean Approaches', issuer: 'Fundación Telefónica', year: 'Apr 2021', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', year: 'Apr 2021', url: 'https://www.linkedin.com/company/16202254/' },
      { name: 'Get Connected', issuer: 'Cisco Networking Academy', year: 'Mar 2021', url: 'https://www.linkedin.com/company/16202254/' },
      { name: 'Data Science: Power in Numbers', issuer: 'Laureate Education, Inc.', year: 'Mar 2021', url: 'https://www.linkedin.com/company/164689/' },
      { name: 'NDG Linux Unhatched', issuer: 'Cisco Networking Academy', year: 'Feb 2021', url: 'https://www.linkedin.com/company/16202254/' },
    ],
  },
  contact: {
    title: "Get in Touch",
    description: "Have a question or want to work together? Drop me a line.",
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    sendMessage: "Send Message",
    sending: "Sending...",
  },
  aiAssistant: {
    open: "Open AI Assistant",
    title: "AI Portfolio Assistant",
    description: "Ask me questions about Joao Basanta's work.",
    initialMessage: "Hello! I'm Joao's AI assistant. Ask me anything about his skills, experience, or projects.",
    errorMessage: "Sorry, I encountered an error. Please try again.",
    placeholder: "Ask about a project...",
    send: "Send",
  },
};

    

    