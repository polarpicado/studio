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
      "Desarrollo soluciones que conectan chat, datos, tickets y automatizacion para reducir trabajo manual y escalar operaciones.",
    viewDemo: "Ver demo",
    viewProjects: "Ver proyectos",
    contact: "Contactar",
  },
  about: {
    eyebrow: "Soporte, operaciones y automatizacion",
    jobTitle: "Especialista en Automatizacion TI",
    experienceBadge: "+3 anos de experiencia en soporte y automatizacion en entornos corporativos",
    subheadline:
      "Optimizo soporte y operaciones con automatizacion de tareas, manejo de datos operativos y mejora de procesos.",
    professionalSummary:
      "Automatizo procesos dentro de soporte y operaciones TI para reducir trabajo manual, acelerar tiempos de respuesta y ordenar flujos internos. Trabajo principalmente con Python, PowerShell, VBA, n8n, Excel, CSV/XLSX, Active Directory y flujos ETL ligeros segun la necesidad operativa.",
    contactMe: "Conversemos",
    downloadCV: "Descargar CV",
    cvUrl:
      "https://drive.google.com/file/d/1ZvBOkCCZSejsDhNCPDzIzKoOtcli2ESX/view?usp=drive_link",
    focusAreas: [
      "Automatizacion de soporte",
      "ETL y archivos operativos",
      "Procesos internos con Active Directory",
      "IA aplicada a operaciones",
    ],
  },
  featured: {
    title: "Plataforma de soporte con IA",
    description:
      "Demo funcional compuesta por chat, gestion de tickets y repositorio documental conectados a una API y automatizaciones en ejecucion.",
    links: [
      {
        title: "Chat",
        description: "Interaccion con agente de IA que responde y automatiza flujos",
        href: "https://caritive-corrosively-natalia.ngrok-free.dev/chat/",
      },
      {
        title: "ServiceDesk",
        description: "Gestion de tickets y operaciones de soporte en tiempo real",
        href: "https://caritive-corrosively-natalia.ngrok-free.dev/servicedesk/",
      },
      {
        title: "Repository",
        description:
          "Repositorio documental que alimenta el conocimiento del sistema",
        href: "https://caritive-corrosively-natalia.ngrok-free.dev/repository/",
      },
    ],
  },
  metrics: {
    items: [
      {
        label: "Tiempo ahorrado",
        value: "6h -> 30 min",
        description: "Automatizacion de reportes operativos y consolidacion de datos.",
      },
      {
        label: "Reduccion manual",
        value: "-75%",
        description: "Procesos ETL y tareas repetitivas integradas con SAP y hojas de control.",
      },
      {
        label: "Provision interna",
        value: "3h -> 10 s",
        description:
          "Generacion automatica de firmas corporativas a partir de Active Directory.",
      },
      {
        label: "Eficiencia",
        value: "-83.3%",
        description:
          "Ejecuciones repetitivas reducidas con scripts Python y automatizacion programada.",
      },
    ],
  },
  skills: {
    title: "Habilidades clave",
    description:
      "Capacidades organizadas segun el tipo de problema que resuelvo en entornos de operaciones y soporte.",
    categories: [
      {
        icon: "automation",
        title: "Automatizacion y scripting",
        description:
          "Scripts y workflows para reemplazar tareas repetitivas y estandarizar procesos internos.",
        items: ["Python", "PowerShell", "VBA", "n8n", "Excel", "CSV/XLSX"],
      },
      {
        icon: "support",
        title: "Soporte TI",
        description:
          "Atencion operativa, soporte al usuario y resolucion de incidencias con enfoque en mejora continua.",
        items: ["Mesa de ayuda", "ITSM", "Aranda", "Active Directory", "Microsoft 365", "Soporte remoto"],
      },
      {
        icon: "data",
        title: "Datos y ETL",
        description:
          "Extraccion, limpieza y transformacion de datos para archivos operativos, reportes y seguimiento.",
        items: ["ETL", "SAP", "PowerShell", "VBA", "CSV/XLSX", "Consolidacion de datos"],
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
          "Base tecnica para operar usuarios, archivos y servicios de apoyo en entornos corporativos.",
        items: ["Windows", "Linux", "Azure", "Git", "Microsoft 365"],
      },
    ],
  },
  projects: {
    title: "Proyectos clave",
    description:
      "Casos alineados con soporte, operaciones y automatizacion con impacto medible.",
    problemLabel: "Problema",
    solutionLabel: "Solucion",
    resultLabel: "Resultado",
    projectList: [
      {
        id: "chatbot-rag",
        tag: "Soporte N1 + IA",
        title: "Chatbot N1 con IA + RAG",
        summary:
          "Asistente para resolver consultas frecuentes y apoyar la atencion inicial de soporte.",
        problem:
          "El equipo recibia consultas repetitivas y la informacion estaba dispersa en documentos y bases internas.",
        solution:
          "Centralice respuestas con n8n, Gemini y RAG para consultar una base de conocimiento y responder al instante.",
        result:
          "Reduje la atencion manual de consultas repetitivas y acelere el soporte de primer nivel.",
        metrics: [
          { value: "-75%", label: "menos consultas manuales repetitivas" },
          { value: "24/7", label: "atencion automatizada inicial" },
        ],
        technologies: ["n8n", "Gemini AI", "RAG", "Google Sheets"],
        githubUrl: "https://github.com/polarpicado/PortfolioChat-n8n",
        youtubeUrl: "https://www.youtube.com/watch?v=9ORxHFfZh_8",
      },
      {
        id: "sap-etl",
        tag: "Datos + SAP",
        title: "Automatizacion ETL para SAP",
        summary:
          "Flujo ETL para extraer, transformar y consolidar informacion operativa desde SAP hacia reportes de uso diario.",
        problem:
          "La consolidacion de datos desde SAP demandaba trabajo manual, validaciones repetitivas y tiempos altos de cierre.",
        solution:
          "Reduje pasos manuales con un flujo ETL apoyado en PowerShell, VBA y archivos CSV/XLSX para limpiar, homologar y consolidar datos operativos.",
        result:
          "Reduje la carga manual y deje un proceso mas estable y trazable para el equipo.",
        metrics: [
          { value: "-75%", label: "reduccion del trabajo manual" },
          { value: "ETL", label: "flujo estable para consolidacion operativa" },
        ],
        technologies: ["PowerShell", "VBA", "SAP", "ETL", "CSV/XLSX"],
      },
      {
        id: "report-automation",
        tag: "Reporting",
        title: "Automatizacion de reportes operativos",
        summary:
          "Generacion automatica de reportes para seguimiento de indicadores y gestion diaria.",
        problem:
          "La construccion de reportes tomaba horas entre copias manuales, limpieza y armado de archivos.",
        solution:
          "Reduje trabajo manual con scripts y plantillas para generar reportes listos para revision.",
        result:
          "Reduje el tiempo de elaboracion de reportes y mejore su frecuencia de actualizacion.",
        metrics: [
          { value: "6h -> 30 min", label: "tiempo de generacion" },
          { value: "diario", label: "ritmo de actualizacion mas consistente" },
        ],
        technologies: ["Python", "Excel", "VBA", "CSV/XLSX"],
        githubUrl: "https://github.com/polarpicado/ITSM-Dashboard",
      },
      {
        id: "signature-generator",
        tag: "Soporte interno",
        title: "Generador de firmas con Active Directory",
        summary:
          "Automatizacion para crear firmas corporativas usando datos centralizados de usuarios.",
        problem:
          "La configuracion de firmas tomaba demasiado tiempo y se hacia manualmente por cada usuario.",
        solution:
          "Automatice la generacion de firmas usando datos de Active Directory y una plantilla unica.",
        result:
          "Reduje el tiempo de provision y elimine errores frecuentes de copiado manual.",
        metrics: [
          { value: "3h -> 10 s", label: "tiempo de configuracion por usuario" },
          { value: "0 retrabajo", label: "por errores de copiado manual" },
        ],
        technologies: ["PowerShell", "Active Directory", "HTML", "Automatizacion"],
      },
    ],
  },
  certifications: {
    title: "Certificaciones relevantes",
    description:
      "Formacion continua alineada con datos, cloud, ciberseguridad y soporte TI.",
    showMore: "Ver mas",
    showLess: "Ver menos",
    certificationList: [
      {
        name: "Data Science 1: Exploratory Data Analysis",
        issuer: "Universidad Nacional de Ingenieria",
        year: "ago. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_263e2acd67e0e3d62edb290d09359470",
      },
      {
        name: "Fundamentos de ITIL",
        issuer: "Universidad Nacional de Ingenieria",
        year: "ago. 2025",
        url: "https://drive.google.com/file/d/17cJ91QFo3T3NHP-N8Ny8tdbtO7MsSThn/view",
      },
      {
        name: "Cloud Computing: AWS - Azure - Google Cloud",
        issuer: "Universidad Nacional de Ingenieria",
        year: "feb. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_d27ff302798bfde709cac757dee47b82",
      },
      {
        name: "Power BI",
        issuer: "Fundacion Telefonica",
        year: "jun. 2025",
        url: "https://drive.google.com/file/d/1le3tyCCaVHuM2MKy8kCEmeWlxsseIz5m/view",
      },
      {
        name: "Excel Avanzado",
        issuer: "Fundacion Telefonica",
        year: "jun. 2025",
        url: "https://drive.google.com/file/d/1uS28hVzxefg2b9iswqMvE_4ATYtQbWsd/view",
      },
      {
        name: "Python (Basic)",
        issuer: "HackerRank",
        year: "nov. 2022",
        url: "https://www.hackerrank.com/certificates/a634a0c646cd",
      },
      {
        name: "Scrum Fundamentals Certified",
        issuer: "Vabro.ai and VMEdu.com",
        year: "nov. 2022",
        url: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-JoaoBasanta-950646.pdf",
      },
      {
        name: "AWS Cloud Practitioner Essentials Day",
        issuer: "AWS Training Online",
        year: "oct. 2022",
        url: "https://drive.google.com/file/d/1QvDN5tJirVaD1rhM5ARumkjd_vbKqFBX/view",
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
    messagePlaceholder: "Cuentame sobre la oportunidad o necesidad del equipo...",
    sendMessage: "Enviar mensaje",
    whatsappLabel: "Escribeme por WhatsApp",
    whatsappUrl:
      "https://wa.me/?text=Hola%20Joao%2C%20vi%20tu%20portafolio%20y%20quiero%20conversar%20sobre%20una%20oportunidad.",
    sending: "Enviando...",
    successTitle: "Mensaje enviado",
    successDescription: "Gracias. El mensaje fue enviado correctamente.",
    errorTitle: "No se pudo enviar",
    errorDescription: "Hubo un problema al enviar el mensaje.",
    validation: {
      name: "El nombre es muy corto.",
      email: "Ingresa un correo valido.",
      message: "El mensaje debe tener al menos 10 caracteres.",
    },
  },
  aiAssistant: {
    open: "Abrir asistente",
    title: "Asistente del portafolio",
    description:
      "Haz preguntas sobre automatizacion en soporte y operaciones TI, proyectos o experiencia.",
    initialMessage:
      "Estoy listo para resumir experiencia, proyectos y logros de Joao desde un enfoque de automatizacion en soporte y operaciones TI.",
    errorMessage:
      "No pude responder en este momento. Intenta nuevamente en unos segundos.",
    placeholder: "Pregunta por un proyecto o resultado...",
    send: "Enviar",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    tagline: "Portafolio orientado a reclutadores y lideres de operaciones TI.",
  },
};

