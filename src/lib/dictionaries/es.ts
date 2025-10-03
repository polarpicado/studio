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
      `<p>Soy un Ingeniero de Sistemas y Experto en Automatización orientado a resultados, con una pasión por construir <strong>soluciones en la nube eficientes, escalables y robustas</strong>.</p>
       <p>Mi experiencia radica en el uso de <strong>Python, n8n y diversas tecnologías en la nube</strong> para optimizar procesos, automatizar flujos de trabajo complejos y mejorar el rendimiento del sistema.</p>
       <p>Me encanta resolver problemas complejos y estoy dedicado al aprendizaje y la mejora continuos en el mundo de la tecnología en constante evolución.</p>`,
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
        logo_light: "https://i.postimg.cc/1zz7QfwL/camposol-black.png",
        logo_dark: "https://i.postimg.cc/k55YmBK0/camposol-white.png",
      },
      {
        role: "Practicante de Soporte e Incidencias",
        company: "ALIGNET",
        period: "sept. 2022 - ago. 2023",
        description:
          "Aptitudes: Python, Computación en la nube, Soporte técnico, Metodologías ágiles, Control de versiones, Amazon Web Services (AWS).",
        logo_light: "https://i.postimg.cc/NjDCS19P/alignet-black.png",
        logo_dark: "https://i.postimg.cc/rppZkK5L/alignet-white.png",
      },
      {
        role: "Líder del equipo de sistemas",
        company: "Agencia Consigue Ventas Online",
        period: "abr. 2022 - jun. 2022",
        description:
          "Aptitudes: Microsoft Excel, Desarrollo web, Metodologías ágiles, Liderazgo, Trabajo en equipo, Dirección y desarrollo de equipos de trabajo.",
        logo_light: "https://i.postimg.cc/cJJkSrwP/consigueventasonline-black.png",
        logo_dark: "https://i.postimg.cc/bvvVhs1y/consigueventasonline-white.png",
      },
      {
        role: "Desarrollador Backend Laravel",
        company: "Agencia Consigue Ventas Online",
        period: "mar. 2022 - abr. 2022",
        description:
          "Aptitudes: Desarrollo web, Metodologías ágiles, Control de versiones, Microsoft SQL Server.",
        logo_light: "https://i.postimg.cc/cJJkSrwP/consigueventasonline-black.png",
        logo_dark: "https://i.postimg.cc/bvvVhs1y/consigueventasonline-white.png",
      },
      {
        role: "Desarrollador de software",
        company: "Grupo Casza",
        period: "mar. 2021 - oct. 2021",
        description:
          "Aptitudes: Linux, Computación en la nube, Desarrollo web, Metodologías ágiles, Microsoft SQL Server, Programación lógica, Python, Django, MySQL, SQL, JavaScript, Amazon Web Services (AWS).",
        logo_light: "https://i.postimg.cc/cJ5940cS/grupocasza-black.png",
        logo_dark: "https://i.postimg.cc/QMn4xhqD/grupocasza-white.png",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    description:
      "Estos son algunos de los proyectos en los que estoy orgulloso de haber trabajado.",
    projectList: [
      {
        id: "itsm-dashboard",
        title: "ITSM-Dashboard",
        description: "Dashboard de IT Service Management con SQL, Python y Power BI.",
        technologies: ["Python", "SQL", "Power BI", "HTML/CSS/JS", "Firebase"],
        githubUrl: "https://github.com/polarpicado/ITSM-Dashboard",
      },
      {
        id: "crocdata-app",
        title: "CrocData-App",
        description:
          "Aplicación en AppSheet para gestionar y visualizar observaciones de cocodrilos a partir de datos abiertos del gobierno de Perú.",
        technologies: ["AppSheet", "Google Sheets"],
        githubUrl: "https://github.com/polarpicado/CrocData-App",
      },
      {
        id: "portfoliochat-n8n",
        title: "PortfolioChat-n8n",
        description:
          "Chatbot creado con n8n, Gemini AI y Google Sheets. Embebido en una web personal como asistente virtual.",
        technologies: ["n8n", "Gemini AI", "Google Sheets"],
        githubUrl: "https://github.com/polarpicado/PortfolioChat-n8n",
        youtubeUrl: "https://www.youtube.com/watch?v=9ORxHFfZh_8"
      },
      {
        id: "n8n-formsaver",
        title: "n8n-FormSaver",
        description:
          "Workflow en n8n para guardar datos de formularios web en Google Sheets sin usar bases de datos.",
        technologies: ["WebHooks", "Google Sheets"],
        githubUrl: "https://github.com/polarpicado/n8n-FormSaver",
      },
      {
        id: "frogger-cpp",
        title: "FroggerProyectoCPlusPlus",
        description: "Recreación del clásico juego Frogger utilizando C++ puro, sin bibliotecas externas, para demostrar un profundo conocimiento de los fundamentos de la programación y la lógica de juegos. Desarrollado en el IDE Zinjal.",
        technologies: ["C++"],
        githubUrl: "https://github.com/polarpicado/FroggerProyectoCPlusPlus",
      },
    ],
  },
  certifications: {
    title: "Certificaciones y Logros",
    description:
      "Mi compromiso con el aprendizaje continuo y el desarrollo profesional.",
    certificationList: [
      { name: 'CIENCIA DE DATOS 1: EXPLORATORY DATA ANALYSIS', issuer: 'Universidad Nacional de Ingeniería', year: 'ago. 2025', url: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_263e2acd67e0e3d62edb290d09359470' },
      { name: 'Fundamentos de ITIL', issuer: 'Universidad Nacional de Ingeniería', year: 'ago. 2025', url: 'https://drive.google.com/file/d/17cJ91QFo3T3NHP-N8Ny8tdbtO7MsSThn/view' },
      { name: 'MySQL', issuer: 'Skill - Centro de capacitación', year: 'ago. 2025', url: 'https://drive.google.com/file/d/17x_3Nn4dw4xCxpYiG26K7y71mRUDFQrf/view' },
      { name: 'PostgreSQL', issuer: 'Skill - Centro de capacitación', year: 'ago. 2025', url: 'https://drive.google.com/file/d/1uGspnxkyBrAN1O_pHOXcJcGdNf31nznv/view' },
      { name: 'SQL Server', issuer: 'Skill - Centro de capacitación', year: 'ago. 2025', url: 'https://drive.google.com/file/d/1AbKVf9DrLJS3YfmqJfKhfLoDqHm0H9xy/view' },
      { name: 'Excel Avanzado', issuer: 'Fundación Telefónica', year: 'jun. 2025', url: 'https://drive.google.com/file/d/1uS28hVzxefg2b9iswqMvE_4ATYtQbWsd/view' },
      { name: 'Introducción a Power BI', issuer: 'Fundación Telefónica', year: 'jun. 2025', url: 'https://drive.google.com/file/d/1le3tyCCaVHuM2MKy8kCEmeWlxsseIz5m/view' },
      { name: 'Principios Básicos de Big Data', issuer: 'Fundación Telefónica', year: 'jun. 2025', url: 'https://drive.google.com/file/d/1vAOo6z5p6UlYeEpLRRd_zBJU3OmyOqVV/view' },
      { name: 'Programación con Java Standard', issuer: 'Fundación Telefónica', year: 'jun. 2025', url: 'https://drive.google.com/file/d/1vvIwSY3wWb4Vp-wopdKEFjSM7xoDKvPp/view' },
      { name: 'CIBERSEGURIDAD: CYBERSOC', issuer: 'Universidad Nacional de Ingeniería', year: 'feb. 2025', url: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_ef22d4272cdc3b1a70acae3e7735565d' },
      { name: 'CIBERSEGURIDAD: ETHICAL HACKING', issuer: 'Universidad Nacional de Ingeniería', year: 'feb. 2025', url: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_de5b725afef7fd4ac36e5d6c0bb1e9d4' },
      { name: 'CIBERSEGURIDAD: PENTESTING CONTRA APLICACIONES WEB', issuer: 'Universidad Nacional de Ingeniería', year: 'feb. 2025', url: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_6872212f002c6f45e6fd121517c8b6bd' },
      { name: 'CLOUD COMPUTING: AWS - AZURE - GOOGLE CLOUD', issuer: 'Universidad Nacional de Ingeniería', year: 'feb. 2025', url: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_d27ff302798bfde709cac757dee47b82' },
      { name: 'Python(Basic)', issuer: 'HackerRank', year: 'nov. 2022', url: 'https://www.hackerrank.com/certificates/a634a0c646cd' },
      { name: 'Scrum Fundamentals Certified', issuer: 'Vabro.ai and VMEdu.com', year: 'nov. 2022', url: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-JoaoBasanta-950646.pdf' },
      { name: 'AWS Cloud Practitioner Essentials Day', issuer: 'AWS Training Online', year: 'oct. 2022', url: 'https://drive.google.com/file/d/1QvDN5tJirVaD1rhM5ARumkjd_vbKqFBX/view' },
      { name: 'Desarrollo de Apps Móviles', issuer: 'Google Actívate', year: 'oct. 2022', url: 'https://drive.google.com/file/d/1yz4P9AaKb_qBqY5znhkk9gPDjlYrDCE0/view' },
      { name: 'Creación de WebService API REST con Laravel', issuer: 'Udemy', year: 'mar. 2022', url: 'https://www.udemy.com/certificate/UC-2812b7fc-d9c1-42d8-8dd2-8c9a45537d73/' },
      { name: 'C# esencial', issuer: 'LinkedIn', year: 'feb. 2022', url: 'https://drive.google.com/file/d/1K1wfk3-wjV_v5RkwHGM03UZBPhRtw_lO/view' },
      { name: 'SQL Server For Analytics', issuer: 'WE Educación Ejecutiva', year: 'feb. 2022', url: 'https://drive.google.com/file/d/17oJTITj4dI9OVa4Mltl8jY72e8EINWI5/view' },
      { name: 'Worpress Básico', issuer: 'Fundación Telefónica', year: 'feb. 2022', url: 'https://www.linkedin.com/company/10331361/' },
      { name: 'Fundamentos de big data', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://drive.google.com/file/d/1y79hbL95OU389zXnBfc3bcr112vjGdIp/view?usp=sharing' },
      { name: 'Fundamentos de la atención al cliente para profesionales IT', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://drive.google.com/file/d/1m0gvsLF8E36G1k4Baj_szOH-nWrl0CDg/view' },
      { name: 'Fundamentos de la programación: Diseño orientado a objetos', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://drive.google.com/file/d/181FMlP08vQuKRBhigeY_wm-MhtyQkd6P/view' },
      { name: 'Fundamentos de las matemáticas para programación', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://drive.google.com/file/d/1Ke3us8uIUiDef7y9MnwNPh-eiyGy-Jj1/view' },
      { name: 'Pensamiento computacional', issuer: 'LinkedIn', year: 'ene. 2022', url: 'https://drive.google.com/file/d/1CFeuBh-2wR9u5NJU2X1OVeU57CIRqDnH/view' },
      { name: 'Git y Github Práctico', issuer: 'Udemy', year: 'dic. 2021', url: 'https://www.udemy.com/certificate/UC-b7bf336d-db00-4adc-bca8-2a0574add0f7/' },
      { name: 'Office Intermedio', issuer: 'Fundación Telefónica', year: 'dic. 2021', url: 'https://drive.google.com/file/d/1raf9DjwzjidK5vJDfUX269G0tqfFJ7Fo/view' },
      { name: 'Introducción a Azure', issuer: 'Udemy', year: 'nov. 2021', url: 'https://www.udemy.com/certificate/UC-b6dd2676-e711-485a-81a4-fb627e234ecc/' },
      { name: 'Introducción al Desarrollo Web I', issuer: 'Google Actívate', year: 'ago. 2021', url: 'https://drive.google.com/file/d/1lYLwwpDHuvrkJYcPmq6cKVmw9A1oQCg-/view' },
      { name: 'Networking Essentials', issuer: 'Cisco Networking Academy', year: 'ago. 2021', url: 'https://drive.google.com/file/d/1ixiHYya6hjOoXvSnhLfJZ45BZI1WBwku/view' },
      { name: 'CCNAv7: Switching, Routing and Wireless Essentials', issuer: 'Cisco Networking Academy', year: 'jul. 2021', url: 'https://drive.google.com/drive/folders/12LkLpynB88eJFRsdCnwIBcFi0Q-ba5ac?usp=sharing' },
      { name: 'Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean', issuer: 'Fundación Telefónica', year: 'abr. 2021', url: 'https://drive.google.com/file/d/1yfwp0uNPBuVEFRpys6H7Tu19fudznEud/view' },
      { name: 'Introduction to Cibersecurity', issuer: 'Cisco Networking Academy', year: 'abr. 2021', url: 'https://drive.google.com/file/d/1v7DsVr_ToLsDu0Zna0HVro0tJCHD_BCc/view' },
      { name: 'Get Connected', issuer: 'Cisco Networking Academy', year: 'mar. 2021', url: 'https://drive.google.com/file/d/1lJfCtP5RWEwJHTvZTZYnyxDO4NEBcJWo/view' },
      { name: 'La ciencia de datos: Poder en los números', issuer: 'Laureate Education, Inc.', year: 'mar. 2021', url: 'https://drive.google.com/file/d/1L2JUk4QWEKkBrqGLXPHhT_M5mrvG_CKy/view' },
      { name: 'NDG Linux Unhatched', issuer: 'Cisco Networking Academy', year: 'feb. 2021', url: 'https://drive.google.com/file/d/1QqwFsvCWxBGQYuUgCoMIMB5gpSDBscv2/view' },
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

    

    
