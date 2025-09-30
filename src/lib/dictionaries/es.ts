export const dictionary = {
  header: {
    nav: [
      { href: "#about", label: "Sobre mí" },
      { href: "#skills", label: "Habilidades" },
      { href: "#projects", label: "Proyectos" },
      { href: "#certifications", label: "Certificaciones" },
      { href: "#contact", label: "Contacto" },
    ],
  },
  about: {
    jobTitle: "Ingeniero de Sistemas y Experto en Automatización",
    professionalSummary:
      "Soy un Ingeniero de Sistemas y Experto en Automatización orientado a resultados, con una pasión por construir soluciones en la nube eficientes, escalables y robustas. Mi experiencia radica en el uso de Python, n8n y diversas tecnologías en la nube para optimizar procesos, automatizar flujos de trabajo complejos y mejorar el rendimiento del sistema. Me encanta resolver problemas complejos y estoy dedicado al aprendizaje y la mejora continuos en el mundo de la tecnología en constante evolución.",
    contactMe: "Contáctame",
    viewMyWork: "Ver mi trabajo",
  },
  skills: {
    title: "Habilidades Técnicas",
    description:
      "Una colección de tecnologías que utilizo para construir sistemas robustos y eficientes.",
    skillList: [
      {
        id: "python",
        name: "Python",
        description:
          "Scripting avanzado para automatización y servicios de backend.",
      },
      {
        id: "n8n",
        name: "n8n",
        description:
          "Diseño e implementación de flujos de trabajo de automatización complejos.",
      },
      {
        id: "cloud",
        name: "Soluciones en la Nube",
        description: "AWS, GCP y Azure para infraestructura escalable.",
      },
      {
        id: "cicd",
        name: "CI/CD",
        description:
          "Jenkins, GitLab CI y GitHub Actions para integración continua.",
      },
      {
        id: "containerization",
        name: "Contenerización",
        description:
          "Docker y Kubernetes para desplegar y gestionar aplicaciones.",
      },
      {
        id: "databases",
        name: "Bases de Datos",
        description:
          "Dominio de SQL (PostgreSQL) y NoSQL (MongoDB, Redis).",
      },
    ],
  },
  projects: {
    title: "Proyectos Destacados",
    description:
      "Estos son algunos de los proyectos en los que estoy orgulloso de haber trabajado.",
    projectList: [
      {
        id: "project-automation-platform",
        title: "Plataforma de Automatización Empresarial",
        description:
          "Lideré el desarrollo de una plataforma de automatización centralizada usando n8n y Python, integrando más de 20 servicios dispares de la empresa. Esto redujo el tiempo de procesamiento manual en un 90% y disminuyó significativamente el error humano.",
        technologies: ["n8n", "Python", "Docker", "PostgreSQL", "RabbitMQ"],
        imagePlaceholderId: "project-automation-platform",
      },
      {
        id: "project-cloud-migration",
        title: "Migración de Infraestructura a la Nube",
        description:
          "Orquesté la migración de sistemas heredados locales a una arquitectura sin servidor y escalable en AWS. Implementé Infraestructura como Código (IaC) usando Terraform, mejorando la fiabilidad del despliegue y reduciendo los costos de infraestructura en un 40%.",
        technologies: ["AWS (Lambda, S3, API Gateway)", "Terraform", "Python"],
        imagePlaceholderId: "project-cloud-migration",
      },
      {
        id: "project-data-pipeline",
        title: "Pipeline de Procesamiento de Datos en Tiempo Real",
        description:
          "Diseñé y construí un pipeline de ingesta y procesamiento de datos en tiempo real para análisis. El sistema, construido con Python, Kafka y Spark, procesa millones de eventos por día, permitiendo inteligencia de negocio oportuna.",
        technologies: ["Python", "Apache Kafka", "Apache Spark", "Kubernetes"],
        imagePlaceholderId: "project-data-pipeline",
      },
    ],
  },
  certifications: {
    title: "Certificaciones y Logros",
    description:
      "Mi compromiso con el aprendizaje continuo y el desarrollo profesional.",
    certificationList: [
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
    ],
  },
  contact: {
    title: "Ponte en Contacto",
    description:
      "¿Tienes alguna pregunta o quieres que trabajemos juntos? Envíame un mensaje.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu Nombre",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Tu mensaje...",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando...",
  },
  aiAssistant: {
    open: "Abrir Asistente de IA",
    title: "Asistente de Portafolio de IA",
    description: "Hazme preguntas sobre el trabajo de Joao Basanta.",
    initialMessage:
      "¡Hola! Soy el asistente de IA de Joao. Pregúntame cualquier cosa sobre sus habilidades, experiencia o proyectos.",
    errorMessage:
      "Lo siento, encontré un error. Por favor, inténtalo de nuevo.",
    placeholder: "Pregunta sobre un proyecto...",
    send: "Enviar",
  },
};
