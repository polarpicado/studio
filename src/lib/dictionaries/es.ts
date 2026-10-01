export const dictionary = {
  header: {
    nav: [
      { href: "#about", label: "Perfil" },
      { href: "#projects", label: "Proyectos" },
      { href: "#skills", label: "Habilidades" },
      { href: "#certifications", label: "Certificaciones" },
      { href: "#contact", label: "Contacto" },
    ],
  },
  hero: {
    title: "Automatizo procesos con IA y sistemas integrados",
    subtitle:
      "Desarrollo soluciones que conectan chat, datos, tickets y automatización para reducir trabajo manual y escalar operaciones.",
    viewDemo: "Ver demo",
    viewProjects: "Ver proyectos",
    contact: "Contactar",
  },
  about: {
    eyebrow: "Soporte, operaciones y automatización",
    jobTitle: "Especialista en Automatización TI",
    experienceBadge: "+3 años de experiencia en soporte y automatización en entornos corporativos",
    subheadline:
      "Optimizo soporte y operaciones con automatización de tareas, manejo de datos operativos y mejora de procesos.",
    professionalSummary:
      "Automatizo procesos dentro de soporte y operaciones TI para reducir trabajo manual, acelerar tiempos de respuesta y ordenar flujos internos. Trabajo principalmente con Python, PowerShell, VBA, n8n, Excel, CSV/XLSX, Active Directory y flujos ETL ligeros según la necesidad operativa.",
    contactMe: "Conversemos",
    downloadCV: "Descargar CV",
    cvUrl:
      "https://drive.google.com/file/d/1ZvBOkCCZSejsDhNCPDzIzKoOtcli2ESX/view?usp=drive_link",
    focusAreas: [
      "Automatización de soporte",
      "ETL y archivos operativos",
      "Procesos internos con Active Directory",
      "IA aplicada a operaciones",
    ],
  },
  featured: {
    title: "Plataforma de soporte con IA",
    description:
      "Demo funcional compuesta por chat, gestión de tickets y repositorio documental conectados a una API y automatizaciones en ejecución.",
    links: [
      {
        title: "Chat",
        description: "Interacción con agente de IA que responde y automatiza flujos",
        href: "https://caritive-corrosively-natalia.ngrok-free.dev/chat/",
      },
      {
        title: "ServiceDesk",
        description: "Gestión de tickets y operaciones de soporte en tiempo real",
        href: "https://caritive-corrosively-natalia.ngrok-free.dev/servicedesk/",
      },
      {
        title: "Repositorio",
        description:
          "Repositorio documental que alimenta el conocimiento del sistema",
        href: "https://caritive-corrosively-natalia.ngrok-free.dev/repository/",
      },
    ],
  },
  process: {
    title: "Cómo trabajo",
    description:
      "Un proceso simple para pasar de una tarea manual a un flujo que corre solo y se puede confiar.",
    steps: [
      {
        title: "Entiendo el proceso",
        description:
          "Mapeo cómo se hace hoy la tarea, dónde se pierde tiempo y qué datos y sistemas intervienen.",
      },
      {
        title: "Defino el flujo",
        description:
          "Establezco los pasos, las reglas de negocio y los casos borde antes de escribir código.",
      },
      {
        title: "Conecto sistemas e IA",
        description:
          "Integro APIs, bases de datos, n8n y modelos de IA para que el trabajo se haga sin intervención manual.",
      },
      {
        title: "Valido y mejoro",
        description:
          "Pruebo con casos reales, dejo registro de cada ejecución y ajusto hasta que el flujo sea confiable.",
      },
    ],
  },
  skills: {
    title: "Habilidades clave",
    description:
      "Capacidades organizadas según el tipo de problema que resuelvo en entornos de operaciones y soporte.",
    categories: [
      {
        icon: "automation",
        title: "Automatización y scripting",
        description:
          "Scripts y workflows para reemplazar tareas repetitivas y estandarizar procesos internos.",
        items: ["Python", "PowerShell", "VBA", "n8n", "Excel", "CSV/XLSX"],
      },
      {
        icon: "support",
        title: "Soporte TI",
        description:
          "Atención operativa, soporte al usuario y resolución de incidencias con enfoque en mejora continua.",
        items: ["Mesa de ayuda", "ITSM", "Aranda", "Active Directory", "Microsoft 365", "Soporte remoto"],
      },
      {
        icon: "data",
        title: "Datos y ETL",
        description:
          "Extracción, limpieza y transformación de datos para archivos operativos, reportes y seguimiento.",
        items: ["ETL", "SAP", "PowerShell", "VBA", "CSV/XLSX", "Consolidación de datos"],
      },
      {
        icon: "ai",
        title: "IA aplicada",
        description:
          "Uso de asistentes y automatizaciones con IA para soporte N1, consultas internas y productividad.",
        items: ["Gemini", "RAG", "Prompting", "Chatbots", "n8n AI"],
      },
      {
        icon: "infrastructure",
        title: "Infraestructura",
        description:
          "Base técnica para operar usuarios, archivos y servicios de apoyo en entornos corporativos.",
        items: ["Windows", "Linux", "Azure", "Git", "Microsoft 365"],
      },
    ],
  },
  projects: {
    title: "Proyectos clave",
    description:
      "Casos alineados con soporte, operaciones y automatización con impacto medible.",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    resultLabel: "Resultado",
    viewFlow: "Ver cómo funciona",
    flowTitle: "Cómo funciona el flujo",
    openFullImage: "Abrir imagen completa",
    confidential:
      "Proyecto para un cliente: el código y los datos son confidenciales.",
    projectList: [
      {
        id: "chatbot-rag",
        tag: "IA + Automatización",
        title: "Chatbot N1 con IA + RAG",
        summary:
          "Plataforma de soporte con IA, tickets y base de conocimiento conectada a automatizaciones.",
        problem:
          "Las consultas repetitivas consumían tiempo y la información estaba dispersa.",
        solution:
          "Integré chat, ServiceDesk, repositorio, API y n8n para responder y escalar desde un solo flujo.",
        result:
          "Mejor experiencia de soporte N1 y operación lista para demo end-to-end.",
        metrics: [
          { value: "N1", label: "atención automatizada de primer nivel" },
          { value: "E2E", label: "chat, tickets y base conectados" },
        ],
        technologies: ["FastAPI", "n8n", "MongoDB", "Qdrant", "RAG"],
        githubUrl: "https://github.com/polarpicado/Proyecto-Automatizaci-n",
        demoUrl: "https://caritive-corrosively-natalia.ngrok-free.dev/chat/",
      },
      {
        id: "e-invoicing",
        tag: "Automatización + Facturación",
        title: "Emisión automática de boletas electrónicas (SUNAT)",
        summary:
          "Flujo en n8n que convierte las ventas online de una empresa de formación en boletas electrónicas emitidas ante SUNAT, sin trabajo manual.",
        problem:
          "Cada venta de cursos debía emitirse a mano como boleta electrónica, con reglas de IGV distintas para clientes peruanos y extranjeros.",
        solution:
          "Flujo que lee las ventas aprobadas, valida importes, evita duplicados, arma el comprobante UBL 2.1, lo emite vía API y archiva el PDF.",
        result:
          "Alrededor de 200 boletas al mes emitidas automáticamente, con historial de cada emisión y modo simulación para revisar antes de emitir.",
        metrics: [
          { value: "~200/mes", label: "boletas emitidas automáticamente" },
          { value: "IGV + exportación", label: "reglas tributarias según país del cliente" },
        ],
        technologies: ["n8n", "API SUNAT", "Google Sheets", "Hotmart", "UBL 2.1", "Gmail"],
        flowImage: "/project-e-invoicing-flow.webp",
        flowImageAlt: "Flujo en n8n de la emisión de boletas",
        flowSteps: [
          "Lee las ventas aprobadas y las solicitudes manuales desde Google Sheets.",
          "Valida importe, país y documento del comprador.",
          "Descarta duplicados con una tabla de control por transacción.",
          "Aplica IGV para clientes peruanos o exportación para extranjeros y arma el comprobante UBL 2.1.",
          "Obtiene el correlativo y emite la boleta por API.",
          "Consulta el estado ante SUNAT, descarga el PDF y lo envía por correo.",
          "Registra cada emisión en un historial, con modo simulación para revisar antes de emitir.",
        ],
      },
      {
        id: "portfolio-web",
        tag: "Web personal",
        title: "Portafolio Profesional (Next.js)",
        summary:
          "Sitio personal para mostrar experiencia, proyectos, contacto y asistente IA.",
        problem:
          "Necesitaba una presencia profesional clara para reclutadores y líderes técnicos.",
        solution:
          "Construcción de web moderna con secciones de impacto, chat y formulario conectado al backend.",
        result:
          "Portafolio online listo para demo, validación técnica y mejoras continuas.",
        metrics: [
          { value: "Full web", label: "perfil, proyectos y contacto" },
          { value: "IA integrada", label: "chat conectado a n8n + API" },
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind", "API Routes"],
        githubUrl: "https://github.com/polarpicado/studio",
        demoUrl: "https://jbasanta.vercel.app/",
      },
      {
        id: "crocdata-app",
        tag: "AppSheet + datos",
        title: "CrocData App",
        summary:
          "Aplicación para visualizar y explorar datos de cocodrilos como práctica en AppSheet.",
        problem:
          "Quería practicar AppSheet con un caso real y orientado a datos.",
        solution:
          "Diseñé estructura de datos y vistas para consulta rápida de información.",
        result:
          "Proyecto funcional para aprender AppSheet y modelado de datos ligeros.",
        metrics: [
          { value: "AppSheet", label: "práctica de no-code aplicada" },
          { value: "Data", label: "consulta simple y ordenada" },
        ],
        technologies: ["AppSheet", "Data modeling", "No-code"],
        githubUrl: "https://github.com/polarpicado/CrocData-App",
        demoUrl: "https://appsheet.com/start/54307ed6-edf2-4d1b-abd9-3f09b4963e9f",
      },
      {
        id: "frogger-cpp",
        tag: "Primer proyecto",
        title: "Frogger en C++ (Consola)",
        summary:
          "Mi primer proyecto en C++: juego tipo Frogger en consola, sin librerías externas.",
        problem:
          "Quería fortalecer lógica de programación y control del juego desde cero.",
        solution:
          "Implementé movimiento, colisiones y reglas del juego solo con C++ y consola.",
        result:
          "Base sólida en programación estructurada y resolución de problemas.",
        metrics: [
          { value: "C++ puro", label: "sin librerías externas" },
          { value: "Consola", label: "motor simple hecho a mano" },
        ],
        technologies: ["C++", "Consola", "Lógica de juego"],
        githubUrl: "https://github.com/polarpicado/FroggerProyectoCPlusPlus",
      },
    ],
  },
  certifications: {
    title: "Certificaciones relevantes",
    description:
      "Formación continua en automatización, IA aplicada, datos, cloud, ciberseguridad y soporte TI.",
    showMore: "Ver más",
    showLess: "Ver menos",
    certificationList: [
      {
        name: "Business Process Management (BPM) & Robotic Process Automation (RPA)",
        issuer: "New Horizons",
        year: "jun. 2026",
        url: "https://drive.google.com/file/d/1Roqxu6mctfHrOkuHWji4cpv6lqQcNH0F/view",
      },
      {
        name: "n8n: Agentes de IA de Cero a Experto",
        issuer: "A1 Cursos",
        year: "abr. 2026",
        url: "https://drive.google.com/file/d/1P4steAWZ09A0S11m4Qjb66u2HZBA3vJD/view",
      },
      {
        name: "Automatizaciones con n8n e Inteligencia Artificial",
        issuer: "Raiola Networks",
        year: "abr. 2026",
        url: "https://drive.google.com/file/d/1pHdzc8mcTn0ePAjKab1IMFu4wnuvqrOc/view",
      },
      {
        name: "Herramientas Fundamentales de Inteligencia Artificial",
        issuer: "Skill - Centro de capacitación",
        year: "jul. 2026",
        url: "https://drive.google.com/file/d/1OJpxb5s_ISH3cTDfBiwS9m_NDU08hnZG/view",
      },
      {
        name: "Desarrollo con IA",
        issuer: "BIG school",
        year: "oct. 2025",
        url: "https://drive.google.com/file/d/1PYfKwKL8h7XzV2r9xPbWGodx6tRK1tHB/view",
      },
      {
        name: "Fundamentos de ITIL",
        issuer: "Universidad Nacional de Ingeniería",
        year: "ago. 2025",
        url: "https://drive.google.com/file/d/17cJ91QFo3T3NHP-N8Ny8tdbtO7MsSThn/view",
      },
      {
        name: "Data Science 1: Exploratory Data Analysis",
        issuer: "Universidad Nacional de Ingeniería",
        year: "ago. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_263e2acd67e0e3d62edb290d09359470",
      },
      {
        name: "Power BI con Excel",
        issuer: "Municipalidad de Jesús María",
        year: "feb. 2026",
        url: "https://drive.google.com/file/d/1MeajeFVz7Pq-SzwQVHDC9sPYAaYMEmRi/view",
      },
      {
        name: "Cloud Computing: AWS - Azure - Google Cloud",
        issuer: "Universidad Nacional de Ingeniería",
        year: "feb. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_d27ff302798bfde709cac757dee47b82",
      },
      {
        name: "SQL Server",
        issuer: "Skill - Centro de capacitación",
        year: "ago. 2025",
        url: "https://drive.google.com/file/d/1AbKVf9DrLJS3YfmqJfKhfLoDqHm0H9xy/view",
      },
      {
        name: "PostgreSQL",
        issuer: "Skill - Centro de capacitación",
        year: "ago. 2025",
        url: "https://drive.google.com/file/d/1uGspnxkyBrAN1O_pHOXcJcGdNf31nznv/view",
      },
      {
        name: "MySQL",
        issuer: "Skill - Centro de capacitación",
        year: "ago. 2025",
        url: "https://drive.google.com/file/d/17x_3Nn4dw4xCxpYiG26K7y71mRUDFQrf/view",
      },
      {
        name: "Ciberseguridad: CyberSOC",
        issuer: "Universidad Nacional de Ingeniería",
        year: "feb. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_ef22d4272cdc3b1a70acae3e7735565d",
      },
      {
        name: "Ciberseguridad: Ethical Hacking",
        issuer: "Universidad Nacional de Ingeniería",
        year: "feb. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_de5b725afef7fd4ac36e5d6c0bb1e9d4",
      },
      {
        name: "Ciberseguridad: Pentesting contra Aplicaciones Web",
        issuer: "Universidad Nacional de Ingeniería",
        year: "feb. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_6872212f002c6f45e6fd121517c8b6bd",
      },
      {
        name: "Excel Avanzado",
        issuer: "Fundación Telefónica",
        year: "jun. 2025",
        url: "https://drive.google.com/file/d/1uS28hVzxefg2b9iswqMvE_4ATYtQbWsd/view",
      },
      {
        name: "Introducción a Power BI",
        issuer: "Fundación Telefónica",
        year: "jun. 2025",
        url: "https://drive.google.com/file/d/1le3tyCCaVHuM2MKy8kCEmeWlxsseIz5m/view",
      },
      {
        name: "Principios Básicos de Big Data",
        issuer: "Fundación Telefónica",
        year: "jun. 2025",
        url: "https://drive.google.com/file/d/1vAOo6z5p6UlYeEpLRRd_zBJU3OmyOqVV/view",
      },
      {
        name: "Programación con Java Standard",
        issuer: "Fundación Telefónica",
        year: "jun. 2025",
        url: "https://drive.google.com/file/d/1vvIwSY3wWb4Vp-wopdKEFjSM7xoDKvPp/view",
      },
      {
        name: "Python (Basic)",
        issuer: "HackerRank",
        year: "nov. 2022",
        url: "https://www.hackerrank.com/certificates/a634a0c646cd",
      },
      {
        name: "Scrum Fundamentals Certified",
        issuer: "VMEdu.com",
        year: "nov. 2022",
        url: "https://drive.google.com/file/d/1IERXUxMasgtR3hfr5sdoaUlaUHv_LhVb/view",
      },
      {
        name: "Desarrollo de Apps Móviles",
        issuer: "Google España",
        year: "oct. 2022",
        url: "https://drive.google.com/file/d/1yz4P9AaKb_qBqY5znhkk9gPDjlYrDCE0/view",
      },
      {
        name: "AWS Cloud Practitioner Essentials Day",
        issuer: "AWS Training Online",
        year: "oct. 2022",
        url: "https://drive.google.com/file/d/1QvDN5tJirVaD1rhM5ARumkjd_vbKqFBX/view",
      },
      {
        name: "SQL Server For Analytics",
        issuer: "WE Educación Ejecutiva",
        year: "feb. 2022",
        url: "https://drive.google.com/file/d/17oJTITj4dI9OVa4Mltl8jY72e8EINWI5/view",
      },
      {
        name: "Networking Essentials",
        issuer: "Cisco Networking Academy",
        year: "ago. 2021",
        url: "https://drive.google.com/file/d/1ixiHYya6hjOoXvSnhLfJZ45BZI1WBwku/view",
      },
    ],
  },
  contact: {
    title: "Contacto",
    description:
      "Si buscas a alguien que automatice procesos dentro de soporte y operaciones TI, conversemos.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo",
    emailPlaceholder: "tu@email.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntame sobre la oportunidad o necesidad del equipo...",
    sendMessage: "Enviar mensaje",
    whatsappLabel: "Escríbeme por WhatsApp",
    whatsappUrl:
      "https://wa.me/51970645611?text=Hola%20Joao%2C%20vi%20tu%20portafolio%20y%20quiero%20conversar%20sobre%20una%20oportunidad.",
    sending: "Enviando...",
    successTitle: "Mensaje enviado",
    successDescription: "Gracias. El mensaje fue enviado correctamente.",
    errorTitle: "No se pudo enviar",
    errorDescription: "Hubo un problema al enviar el mensaje.",
    validation: {
      name: "El nombre es muy corto.",
      email: "Ingresa un correo válido.",
      message: "El mensaje debe tener al menos 10 caracteres.",
    },
  },
  aiAssistant: {
    open: "Abrir asistente",
    title: "Asistente del portafolio",
    description:
      "Haz preguntas sobre automatización en soporte y operaciones TI, proyectos o experiencia.",
    initialMessage:
      "Estoy listo para resumir experiencia, proyectos y logros de Joao desde un enfoque de automatización en soporte y operaciones TI.",
    errorMessage:
      "No pude responder en este momento. Intenta nuevamente en unos segundos.",
    placeholder: "Pregunta por un proyecto o resultado...",
    send: "Enviar",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    tagline: "Automation is all you need.",
  },
};

