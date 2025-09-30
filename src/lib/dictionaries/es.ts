export const dictionary = {
  header: {
    nav: [
      { href: "#about", label: "Sobre mí" },
      { href: "#experience", label: "Experiencia" },
      { href: "#skills", label: "Habilidades" },
      { href: "#projects", label: "Proyectos" },
      { href: "#certifications", label: "Certificaciones" },
      { href: "#contact", label: "Contacto" },
    ],
  },
  about: {
    jobTitle: "Ingeniero de Sistemas Computacionales",
    professionalSummary:
      "Soy un Ingeniero de Sistemas y Experto en Automatización orientado a resultados, con una pasión por construir soluciones en la nube eficientes, escalables y robustas. Mi experiencia radica en el uso de Python, n8n y diversas tecnologías en la nube para optimizar procesos, automatizar flujos de trabajo complejos y mejorar el rendimiento del sistema. Me encanta resolver problemas complejos y estoy dedicado al aprendizaje y la mejora continuos en el mundo de la tecnología en constante evolución.",
    contactMe: "Contáctame",
    downloadCV: "Currículo",
    english: "Inglés",
    spanish: "Español",
  },
  skills: {
    title: "Habilidades Clave",
    description: "Un resumen de las tecnologías y metodologías que domino.",
    skillList: [
      { id: "python", name: "Python", description: "Django, Scripting" },
      { id: "n8n", name: "n8n", description: "Flujos de Automatización" },
      { id: "cloud", name: "Cloud & DevOps", description: "AWS, Azure, Git" },
      { id: "databases", name: "Bases de Datos", description: "MySQL, SQL Server, PostgreSQL" },
      { id: "containerization", name: "ITSM & Soporte", description: "ITIL, Soporte Técnico" },
      { id: "cicd", name: "Gestión", description: "Metodologías Ágiles, Scrum" },
      { id: "code", name: "Análisis & Data", description: "Excel, Power BI, Big Data" },
    ],
  },
  experience: {
    title: "Experiencia Laboral",
    description: "Mi trayectoria profesional y roles clave.",
    experienceList: [
      {
        role: "Analista de operaciones de TI",
        company: "Camposol",
        period: "ago. 2023 - jun. 2025",
        description:
          "Aptitudes: Computación en la nube, Microsoft Excel, Soporte técnico, Python, Aranda, Active Directory, Microsoft Azure.",
      },
      {
        role: "Practicante de Soporte e Incidencias",
        company: "ALIGNET",
        period: "sept. 2022 - ago. 2023",
        description:
          "Aptitudes: Python, Computación en la nube, Soporte técnico, Metodologías ágiles, Control de versiones, Amazon Web Services (AWS).",
      },
      {
        role: "Líder del equipo de sistemas",
        company: "Agencia Consigue Ventas Online",
        period: "abr. 2022 - jun. 2022",
        description:
          "Aptitudes: Microsoft Excel, Desarrollo web, Metodologías ágiles, Liderazgo, Trabajo en equipo, Dirección y desarrollo de equipos de trabajo.",
      },
      {
        role: "Desarrollador Backend Laravel",
        company: "Agencia Consigue Ventas Online",
        period: "mar. 2022 - abr. 2022",
        description:
          "Aptitudes: Desarrollo web, Metodologías ágiles, Control de versiones, Microsoft SQL Server.",
      },
      {
        role: "Desarrollador de software",
        company: "Grupo Casza",
        period: "mar. 2021 - oct. 2021",
        description:
          "Aptitudes: Linux, Computación en la nube, Desarrollo web, Metodologías ágiles, Microsoft SQL Server, Programación lógica, Python, Django, MySQL, SQL, JavaScript, Amazon Web Services (AWS).",
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
      { name: 'CIENCIA DE DATOS 1: EXPLORATORY DATA ANALYSIS', issuer: 'Universidad Nacional de Ingeniería', year: 'ago. 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'Fundamentos de ITIL', issuer: 'Universidad Nacional de Ingeniería', year: 'ago. 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'MySQL', issuer: 'Skill - Centro de capacitación', year: 'ago. 2025', url: 'https://www.linkedin.com/company/77859874/' },
      { name: 'PostgreSQL', issuer: 'Skill - Centro de capacitación', year: 'ago. 2025', url: 'https://www.linkedin.com/company/77859874/' },
      { name: 'SQL Server', issuer: 'Skill - Centro de capacitación', year: 'ago. 2025', url: 'https://www.linkedin.com/company/77859874/' },
      { name: 'Excel Avanzado', issuer: 'Fundación Telefónica', year: 'jun. 2025', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Introducción a Power BI', issuer: 'Fundación Telefónica', year: 'jun. 2025', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Principios Básicos de Big Data', issuer: 'Fundación Telefónica', year: 'jun. 2025', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Programación con Java Standard', issuer: 'Fundación Telefónica', year: 'jun. 2025', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'CIBERSEGURIDAD: CYBERSOC', issuer: 'Universidad Nacional de Ingeniería', year: 'feb. 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'CIBERSEGURIDAD: ETHICAL HACKING', issuer: 'Universidad Nacional de Ingeniería', year: 'feb. 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'CIBERSEGURIDAD: PENTESTING CONTRA APLICACIONES WEB', issuer: 'Universidad Nacional de Ingeniería', year: 'feb. 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'CLOUD COMPUTING: AWS - AZURE - GOOGLE CLOUD', issuer: 'Universidad Nacional de Ingeniería', year: 'feb. 2025', url: 'https://www.linkedin.com/company/1017841/' },
      { name: 'Python(Basic)', issuer: 'HackerRank', year: 'nov. 2022', url: 'https://www.linkedin.com/company/435210/' },
      { name: 'Scrum Fundamentals Certified', issuer: 'Vabro.ai and VMEdu.com', year: 'nov. 2022', url: 'https://www.linkedin.com/company/2881003/' },
      { name: 'AWS Cloud Practitioner Essentials Day', issuer: 'AWS Training Online', year: 'oct. 2022', url: 'https://www.linkedin.com/company/82109295/' },
      { name: 'Desarrollo de Apps Móviles', issuer: 'Google Actívate', year: 'oct. 2022', url: 'https://www.linkedin.com/company/10195133/' },
      { name: 'Creación de WebService API REST con Laravel', issuer: 'Udemy', year: 'mar. 2022', url: 'https://www.linkedin.com/company/822535/' },
      { name: 'C# esencial', issuer: 'LinkedIn', year: 'feb. 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'SQL Server For Analytics', issuer: 'WE Educación Ejecutiva', year: 'feb. 2022', url: 'https://www.linkedin.com/company/27218428/' },
      { name: 'Worpress Básico', issuer: 'Fundación Telefónica', year: 'feb. 2022', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Fundamentos de big data', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Fundamentos de la atención al cliente para profesionales IT', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Fundamentos de la programación: Diseño orientado a objetos', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Fundamentos de las matemáticas para programación', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Pensamiento computacional', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://www.linkedin.com/company/1337/' },
      { name: 'Git y Github Práctico', issuer: 'Udemy', year: 'dic. 2021', url: 'https://www.linkedin.com/company/822535/' },
      { name: 'Office Intermedio', issuer: 'Fundación Telefónica', year: 'dic. 2021', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Introducción a Azure', issuer: 'Udemy', year: 'nov. 2021', url: 'https://www.linkedin.com/company/822535/' },
      { name: 'Introducción al Desarrollo Web I', issuer: 'Google Actívate', year: 'ago. 2021', url: 'https://www.linkedin.com/company/10195133/' },
      { name: 'Networking Essentials', issuer: 'Cisco Networking Academy', year: 'ago. 2021', url: 'https://www.linkedin.com/company/16202254/' },
      { name: 'CCNAv7: Switching, Routing and Wireless Essentials', issuer: 'Cisco Networking Academy', year: 'jul. 2021', url: 'https://www.linkedin.com/company/16202254/' },
      { name: 'Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean', issuer: 'Fundación Telefónica', year: 'abr. 2021', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Introduction to Cibersecurity', issuer: 'Cisco Networking Academy', year: 'abr. 2021', url: 'https://www.linkedin.com/company/16202254/' },
      { name: 'Get Connected', issuer: 'Cisco Networking Academy', year: 'mar. 2021', url: 'https://www.linkedin.com/company/16202254/' },
      { name: 'La ciencia de datos: Poder en los números', issuer: 'Laureate Education, Inc.', year: 'mar. 2021', url: 'https://www.linkedin.com/company/164689/' },
      { name: 'NDG Linux Unhatched', issuer: 'Cisco Networking Academy', year: 'feb. 2021', url: 'https://www.linkedin.com/company/16202254/' },
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

    