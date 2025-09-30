import {
  Cloud,
  Code,
  Database,
  LucideIcon,
  Rocket,
  Server,
  Workflow,
} from "lucide-react";

export type Skill = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
};

export type Project = {
  id: string,
  title: string,
  description: string,
  technologies: string[],
  imagePlaceholderId: string,
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const professionalSummary =
  "I am a results-driven System Engineer and Automation Expert with a passion for building efficient, scalable, and robust cloud solutions. My expertise lies in leveraging Python, n8n, and various cloud technologies to streamline processes, automate complex workflows, and enhance system performance. I thrive on solving complex problems and am dedicated to continuous learning and improvement in the ever-evolving world of technology.";

export const skills = [
  {
    id: 'python',
    name: "Python",
    icon: Code,
    description: "Advanced scripting for automation and backend services.",
  },
  {
    id: 'n8n',
    name: "n8n",
    icon: Workflow,
    description: "Designing and implementing complex automation workflows.",
  },
  {
    id: 'cloud',
    name: "Cloud Solutions",
    icon: Cloud,
    description: "AWS, GCP, and Azure for scalable infrastructure.",
  },
  {
    id: 'cicd',
    name: "CI/CD",
    icon: Rocket,
    description: "Jenkins, GitLab CI, and GitHub Actions for continuous integration.",
  },
  {
    id: 'containerization',
    name: "Containerization",
    icon: Server,
    description: "Docker and Kubernetes for deploying and managing applications.",
  },
  {
    id: 'databases',
    name: "Databases",
    icon: Database,
    description: "SQL (PostgreSQL) and NoSQL (MongoDB, Redis) proficiency.",
  },
];

export const projects = [
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
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    year: "2022",
  },
  {
    name: "n8n Pro Certification",
    issuer: "n8n.io",
    year: "2023",
  },
];
