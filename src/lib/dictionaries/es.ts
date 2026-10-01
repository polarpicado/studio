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
        tag: "IA + Automatizacion",
        title: "Chatbot N1 con IA + RAG",
        summary:
          "Plataforma de soporte con IA, tickets y base de conocimiento conectada a automatizaciones.",
        problem:
          "Las consultas repetitivas consumian tiempo y la informacion estaba dispersa.",
        solution:
          "Integre chat, ServiceDesk, repository, API y n8n para responder y escalar desde un solo flujo.",
        result:
          "Mejor experiencia de soporte N1 y operacion lista para demo end-to-end.",
        metrics: [
          { value: "N1", label: "atencion automatizada de primer nivel" },
          { value: "E2E", label: "chat, tickets y base conectados" },
        ],
        technologies: ["FastAPI", "n8n", "MongoDB", "Qdrant", "RAG"],
        githubUrl: "https://github.com/polarpicado/Proyecto-Automatizaci-n",
        demoUrl: "https://caritive-corrosively-natalia.ngrok-free.dev/chat/",
      },
      {
        id: "e-invoicing",
        tag: "Automatizacion + Facturacion",
        title: "Emision automatica de boletas electronicas (SUNAT)",
        summary:
          "Flujo en n8n que convierte las ventas online de una empresa de formacion en boletas electronicas emitidas ante SUNAT, sin trabajo manual.",
        problem:
          "Cada venta de cursos debia emitirse a mano como boleta electronica, con reglas de IGV distintas para clientes peruanos y extranjeros.",
        solution:
          "Flujo que lee las ventas aprobadas, valida importes, evita duplicados, arma el comprobante UBL 2.1, lo emite via API y archiva el PDF.",
        result:
          "Alrededor de 200 boletas al mes emitidas automaticamente, con historial de cada emision y modo simulacion para revisar antes de emitir.",
        metrics: [
          { value: "~200/mes", label: "boletas emitidas automaticamente" },
          { value: "IGV + exportacion", label: "reglas tributarias segun pais del cliente" },
        ],
        technologies: ["n8n", "API SUNAT", "Google Sheets", "Hotmart", "UBL 2.1", "Gmail"],
      },
      {
        id: "portfolio-web",
        tag: "Web personal",
        title: "Portafolio Profesional (Next.js)",
        summary:
          "Sitio personal para mostrar experiencia, proyectos, contacto y asistente IA.",
        problem:
          "Necesitaba una presencia profesional clara para reclutadores y lideres tecnicos.",
        solution:
          "Construccion de web moderna con secciones de impacto, chat y formulario conectado al backend.",
        result:
          "Portafolio online listo para demo, validacion tecnica y mejoras continuas.",
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
          "Aplicacion para visualizar y explorar datos de cocodrilos como practica en AppSheet.",
        problem:
          "Queria practicar AppSheet con un caso real y orientado a datos.",
        solution:
          "Disene estructura de datos y vistas para consulta rapida de informacion.",
        result:
          "Proyecto funcional para aprender AppSheet y modelado de datos ligeros.",
        metrics: [
          { value: "AppSheet", label: "practica de no-code aplicada" },
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
          "Mi primer proyecto en C++: juego tipo Frogger en consola, sin librerias externas.",
        problem:
          "Queria fortalecer logica de programacion y control del juego desde cero.",
        solution:
          "Implemente movimiento, colisiones y reglas del juego solo con C++ y consola.",
        result:
          "Base solida en programacion estructurada y resolucion de problemas.",
        metrics: [
          { value: "C++ puro", label: "sin librerias externas" },
          { value: "Consola", label: "motor simple hecho a mano" },
        ],
        technologies: ["C++", "Consola", "Logica de juego"],
        githubUrl: "https://github.com/polarpicado/FroggerProyectoCPlusPlus",
      },
    ],
  },
  certifications: {
    title: "Certificaciones relevantes",
    description:
      "Formacion continua en automatizacion, IA aplicada, datos, cloud, ciberseguridad y soporte TI.",
    showMore: "Ver mas",
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
        issuer: "Skill - Centro de capacitacion",
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
        issuer: "Universidad Nacional de Ingenieria",
        year: "ago. 2025",
        url: "https://drive.google.com/file/d/17cJ91QFo3T3NHP-N8Ny8tdbtO7MsSThn/view",
      },
      {
        name: "Data Science 1: Exploratory Data Analysis",
        issuer: "Universidad Nacional de Ingenieria",
        year: "ago. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_263e2acd67e0e3d62edb290d09359470",
      },
      {
        name: "Power BI con Excel",
        issuer: "Municipalidad de Jesus Maria",
        year: "feb. 2026",
        url: "https://drive.google.com/file/d/1MeajeFVz7Pq-SzwQVHDC9sPYAaYMEmRi/view",
      },
      {
        name: "Cloud Computing: AWS - Azure - Google Cloud",
        issuer: "Universidad Nacional de Ingenieria",
        year: "feb. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_d27ff302798bfde709cac757dee47b82",
      },
      {
        name: "SQL Server",
        issuer: "Skill - Centro de capacitacion",
        year: "ago. 2025",
        url: "https://drive.google.com/file/d/1AbKVf9DrLJS3YfmqJfKhfLoDqHm0H9xy/view",
      },
      {
        name: "PostgreSQL",
        issuer: "Skill - Centro de capacitacion",
        year: "ago. 2025",
        url: "https://drive.google.com/file/d/1uGspnxkyBrAN1O_pHOXcJcGdNf31nznv/view",
      },
      {
        name: "MySQL",
        issuer: "Skill - Centro de capacitacion",
        year: "ago. 2025",
        url: "https://drive.google.com/file/d/17x_3Nn4dw4xCxpYiG26K7y71mRUDFQrf/view",
      },
      {
        name: "Ciberseguridad: CyberSOC",
        issuer: "Universidad Nacional de Ingenieria",
        year: "feb. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_ef22d4272cdc3b1a70acae3e7735565d",
      },
      {
        name: "Ciberseguridad: Ethical Hacking",
        issuer: "Universidad Nacional de Ingenieria",
        year: "feb. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_de5b725afef7fd4ac36e5d6c0bb1e9d4",
      },
      {
        name: "Ciberseguridad: Pentesting contra Aplicaciones Web",
        issuer: "Universidad Nacional de Ingenieria",
        year: "feb. 2025",
        url: "https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_6872212f002c6f45e6fd121517c8b6bd",
      },
      {
        name: "Excel Avanzado",
        issuer: "Fundacion Telefonica",
        year: "jun. 2025",
        url: "https://drive.google.com/file/d/1uS28hVzxefg2b9iswqMvE_4ATYtQbWsd/view",
      },
      {
        name: "Introduccion a Power BI",
        issuer: "Fundacion Telefonica",
        year: "jun. 2025",
        url: "https://drive.google.com/file/d/1le3tyCCaVHuM2MKy8kCEmeWlxsseIz5m/view",
      },
      {
        name: "Principios Basicos de Big Data",
        issuer: "Fundacion Telefonica",
        year: "jun. 2025",
        url: "https://drive.google.com/file/d/1vAOo6z5p6UlYeEpLRRd_zBJU3OmyOqVV/view",
      },
      {
        name: "Programacion con Java Standard",
        issuer: "Fundacion Telefonica",
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
        name: "Desarrollo de Apps Moviles",
        issuer: "Google Espana",
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
        issuer: "WE Educacion Ejecutiva",
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
    messagePlaceholder: "Cuentame sobre la oportunidad o necesidad del equipo...",
    sendMessage: "Enviar mensaje",
    whatsappLabel: "Escribeme por WhatsApp",
    whatsappUrl:
      "https://wa.me/51970645611?text=Hola%20Joao%2C%20vi%20tu%20portafolio%20y%20quiero%20conversar%20sobre%20una%20oportunidad.",
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

