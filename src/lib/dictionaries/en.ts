export const dictionary = {
  header: {
    nav: [
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
      { href: "#certifications", label: "Certifications" },
      { href: "#contact", label: "Contact" },
    ],
  },
  about: {
    jobTitle: "System Engineer & Automation Expert",
    professionalSummary:
      "I am a results-driven System Engineer and Automation Expert with a passion for building efficient, scalable, and robust cloud solutions. My expertise lies in leveraging Python, n8n, and various cloud technologies to streamline processes, automate complex workflows, and enhance system performance. I thrive on solving complex problems and am dedicated to continuous learning and improvement in the ever-evolving world of technology.",
    contactMe: "Contact Me",
    viewMyWork: "View My Work",
  },
  skills: {
    title: "Technical Skills",
    description: "A collection of technologies I use to build robust and efficient systems.",
    skillList: [
      {
        id: "python",
        name: "Python",
        description: "Advanced scripting for automation and backend services.",
      },
      {
        id: "n8n",
        name: "n8n",
        description: "Designing and implementing complex automation workflows.",
      },
      {
        id: "cloud",
        name: "Cloud Solutions",
        description: "AWS, GCP, and Azure for scalable infrastructure.",
      },
      {
        id: "cicd",
        name: "CI/CD",
        description: "Jenkins, GitLab CI, and GitHub Actions for continuous integration.",
      },
      {
        id: "containerization",
        name: "Containerization",
        description: "Docker and Kubernetes for deploying and managing applications.",
      },
      {
        id: "databases",
        name: "Databases",
        description: "SQL (PostgreSQL) and NoSQL (MongoDB, Redis) proficiency.",
      },
    ],
  },
  experience: {
    title: "Work Experience",
    description: "My professional journey and key roles.",
    experienceList: [
      {
        role: "Lead Automation Engineer",
        company: "Cloud Corp",
        period: "2020 - Present",
        description:
          "Led a team of engineers in designing and implementing scalable automation solutions. Reduced manual intervention by 80% through the development of a self-service automation platform.",
      },
      {
        role: "DevOps Engineer",
        company: "Tech Solutions Inc.",
        period: "2018 - 2020",
        description:
          "Managed CI/CD pipelines, automated infrastructure provisioning, and improved system reliability. Implemented monitoring and alerting systems that reduced downtime by 30%.",
      },
      {
        role: "Junior System Administrator",
        company: "Global Web Services",
        period: "2016 - 2018",
        description:
          "Provided support for server infrastructure, managed user accounts, and performed regular system maintenance. Assisted in the migration of on-premise servers to a cloud environment.",
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    description: "Here are some of the projects I'm proud to have worked on.",
    projectList: [
      {
        id: "project-automation-platform",
        title: "Enterprise Automation Platform",
        description:
          "Led the development of a centralized automation platform using n8n and Python, integrating over 20 disparate company services. This reduced manual processing time by 90% and significantly decreased human error.",
        technologies: ["n8n", "Python", "Docker", "PostgreSQL", "RabbitMQ"],
        imagePlaceholderId: "project-automation-platform",
      },
      {
        id: "project-cloud-migration",
        title: "Cloud Infrastructure Migration",
        description:
          "Orchestrated the migration of on-premise legacy systems to a scalable, serverless architecture on AWS. Implemented Infrastructure as Code (IaC) using Terraform, improving deployment reliability and reducing infrastructure costs by 40%.",
        technologies: ["AWS (Lambda, S3, API Gateway)", "Terraform", "Python"],
        imagePlaceholderId: "project-cloud-migration",
      },
      {
        id: "project-data-pipeline",
        title: "Real-time Data Processing Pipeline",
        description:
          "Designed and built a real-time data ingestion and processing pipeline for analytics. The system, built with Python, Kafka, and Spark, processes millions of events per day, enabling timely business intelligence.",
        technologies: ["Python", "Apache Kafka", "Apache Spark", "Kubernetes"],
        imagePlaceholderId: "project-data-pipeline",
      },
    ],
  },
  certifications: {
    title: "Certifications & Accomplishments",
    description: "My commitment to continuous learning and professional development.",
    certificationList: [
      {
        name: "AWS Certified Solutions Architect - Associate",
        issuer: "Amazon Web Services",
        year: "2023",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_263e2acd67e0e3d62edb290d09359470",
      },
      {
        name: "Certified Kubernetes Administrator (CKA)",
        issuer: "The Linux Foundation",
        year: "2022",
        url: "/#",
      },
      {
        name: "n8n Pro Certification",
        issuer: "n8n.io",
        year: "2023",
        url: "/#",
      },
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
