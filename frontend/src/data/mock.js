/**
 * =============================================================================
 * MOCK DATA - DATOS DEL PORTAFOLIO
 * =============================================================================
 * 
 * Este archivo contiene toda la información personal y de proyectos.
 * Modifica estos datos para personalizar tu portafolio.
 * 
 * GUÍA DE EDICIÓN:
 * - personalInfo: Tu información de contacto y redes sociales
 * - aboutText: Los textos de la sección "About"
 * - skills: Tus habilidades técnicas organizadas por categoría
 * - projects: Tus proyectos (la parte más importante)
 * =============================================================================
 */

// =============================================================================
// INFORMACIÓN PERSONAL
// =============================================================================
// Modifica estos campos con tu información de contacto
export const personalInfo = {
  name: "Jose Fernando",           // Tu nombre (aparece en el logo y footer)
  lastName: "Moreno Meneses",      // Tu apellido (aparece en el footer)
  role: "Frontend / Web Developer", // Tu rol profesional (aparece en el hero)
  tagline: "React, modern UI, real-world projects.", // Frase corta descriptiva
  email: "jfmm8995@gmail.com",     // Tu correo (sección contact y footer)
  linkedin: "https://linkedin.com/in/jose-fernando-moreno-meneses-3a519a33a", // URL completa de LinkedIn
  github: "https://github.com/j290"     // URL de tu perfil de GitHub
};

// =============================================================================
// TEXTOS DE LA SECCIÓN ABOUT
// =============================================================================
// Estos textos aparecen en la sección "About" del portafolio
export const aboutText = {
  intro: "I'm a web developer focused on creating clean, functional and scalable websites.",
  main: "I work with React and modern web technologies to turn ideas into real, usable products.",
  focus: "I care about performance, design consistency and user experience."
};

// =============================================================================
// HABILIDADES / SKILLS
// =============================================================================
// Organiza tus habilidades por categoría
// Puedes agregar o quitar elementos de cada array
export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React"],  // Tecnologías frontend
  ui: ["Responsive design", "Minimal interfaces"],    // Habilidades de UI/UX
  backend: ["APIs", "Auth", "Data handling"],         // Conocimientos backend
  tools: ["Git", "GitHub", "Figma", "Vercel"]        // Herramientas que usas
};

// =============================================================================
// PROYECTOS
// =============================================================================
// Esta es la sección MÁS IMPORTANTE de tu portafolio.
// Cada proyecto tiene las siguientes propiedades:
//
// id:          Identificador único (número)
// title:       Nombre del proyecto
// type:        Categoría/tipo de proyecto
// description: Descripción breve del proyecto
// features:    Array con las características principales
// tech:        Array con las tecnologías usadas
// image:       URL de la imagen/screenshot del proyecto
// liveDemo:    URL del sitio en vivo (null si no hay demo disponible)
// code:        URL del repositorio en GitHub (null si es privado)
// isReal:      true = proyecto real, false = concepto/ficticio
// isCompany:   true = proyecto para empresa (sin demo público)
// =============================================================================

export const projects = [
  {
    id: 1,
    title: "EFFITECH",
    type: "Enterprise Web Solution",
    description: "Complete web identity developed for a technology efficiency company. Professional solution with clean interfaces, performance optimization and modern aesthetics. Built for real business operations.",
    features: ["Enterprise UI", "Performance optimized", "Corporate identity", "Internal tools"],
    tech: ["React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1611134612965-d0ba82a139b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHw0fHxsYXB0b3AlMjBzY3JlZW58ZW58MHx8fGJsYWNrfDE3Njk0NjE2MTl8MA&ixlib=rb-4.1.0&q=85",
    // =====================================================================
    // EFFITECH: Proyecto para empresa - Sin demo público disponible
    // =====================================================================
    liveDemo: null,  // null = No hay demo público (es proyecto empresarial)
    code: null,      // null = Código privado/confidencial
    isReal: true,    // Es un proyecto REAL para una empresa
    isCompany: true  // Marca que es proyecto empresarial (sin acceso público)
  },
  {
    id: 2,
    title: "Admin Dashboard",
    type: "Web App / Admin Panel",
    description: "Functional admin dashboard concept for managing users, metrics and content. Built with real authentication and data visualization.",
    features: ["Login / auth", "Charts & stats", "CRUD structure"],
    tech: ["React", "Mock API"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxhZG1pbiUyMGRhc2hib2FyZHxlbnwwfHx8YmxhY2t8MTc2OTQ2MTYyNXww&ixlib=rb-4.1.0&q=85",
    // =====================================================================
    // EDITA ESTOS LINKS CON TUS URLs REALES:
    // =====================================================================
    liveDemo: "https://admin-dashboard-jqda.onrender.com",          // <-- Cambia por tu URL de demo
    code: "https://github.com/j290/admin-dashboard", // <-- Cambia por tu repo
    isReal: false,  // Proyecto conceptual/demo
    isCompany: false
  },
   {
    id: 3,
    title: "Overload",
    type: "Brand Website / Concept Store based on real brand",
    description: "Digital identity and web concept for an underground clothing brand. Focused on minimal design, strong typography and brand presence. (This is just a mock)",
    features: ["Landing page", "Brand storytelling", "Responsive layout"],
    tech: ["React", "CSS / Tailwind"],
    image: "https://images.unsplash.com/photo-1649442279057-d793bd554d82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBzY3JlZW58ZW58MHx8fGJsYWNrfDE3Njk0NjE2MTl8MA&ixlib=rb-4.1.0&q=85",
    // =====================================================================
    // EDITA ESTOS LINKS CON TUS URLs REALES:
    // =====================================================================
    liveDemo: "https://overload-8qu2.onrender.com",  // <-- Cambia por tu URL de demo
    code: "https://github.com/j290/overload",       // <-- Cambia por tu repo de GitHub
    isReal: true,
    isCompany: false
  },
  {
    id: 4,
    title: "Product Landing",
    type: "Conversion Landing Page",
    description: "High-conversion landing page for a digital product. Optimized layout with strong call-to-actions and responsive sections.",
    features: ["Call to action", "Responsive sections", "Optimized layout"],
    tech: ["React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1649698145660-d30f91023b52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxsYXB0b3AlMjBzY3JlZW58ZW58MHx8fGJsYWNrfDE3Njk4NjE2MTl8MA&ixlib=rb-4.1.0&q=85",
    // =====================================================================
    // EDITA ESTOS LINKS CON TUS URLs REALES:
    // =====================================================================
    liveDemo: "https://tu-landing.vercel.app",            // <-- Cambia por tu URL de demo
    code: "https://github.com/tu-usuario/product-landing", // <-- Cambia por tu repo
    isReal: false,  // Proyecto conceptual/demo
    isCompany: false
  }
  
];

// =============================================================================
// CONFIGURACIÓN DE ANIMACIONES
// =============================================================================
// Controla el comportamiento de las animaciones en el sitio
export const animationConfig = {
  // Duración base de las animaciones (en milisegundos)
  duration: 800,
  // Delay entre elementos que aparecen en secuencia
  staggerDelay: 100,
  // Distancia de desplazamiento para animaciones de entrada
  translateDistance: 30,
  // Curva de aceleración (ease-out para efecto suave estilo jazz)
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
};
