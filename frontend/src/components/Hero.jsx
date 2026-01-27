/**
 * =============================================================================
 * Hero Section - Sección principal del portafolio
 * =============================================================================
 * 
 * Esta es la primera sección que ven los visitantes.
 * Incluye el headline principal, subtitulo y botones de acción.
 * 
 * ANIMACIONES:
 * - Entrada escalonada de elementos (staggered animation)
 * - Efecto jazz: suave, elegante, profesional
 * 
 * PARA EDITAR:
 * - Headline: Líneas 65-70 (texto grande en verde lima)
 * - Subtitulo: Línea 73 (usa personalInfo del mock.js)
 * - Botones: Líneas 77-90 (View Projects y Contact Me)
 * =============================================================================
 */

import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  // ==========================================================================
  // ESTADO PARA ANIMACIONES DE ENTRADA
  // ==========================================================================
  // isLoaded: controla cuándo empiezan las animaciones iniciales
  const [isLoaded, setIsLoaded] = useState(false);

  // Activar animaciones después de que el componente se monte
  useEffect(() => {
    // Pequeño delay para asegurar que el DOM está listo
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ==========================================================================
  // FUNCIONES DE NAVEGACIÓN
  // ==========================================================================
  // Scroll suave hacia la sección de proyectos
  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll suave hacia la sección de contacto
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ==========================================================================
  // ESTILOS DE ANIMACIÓN INLINE (Jazz Style)
  // ==========================================================================
  // Curva de animación suave, profesional
  const jazzyTransition = 'all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

  return (
    <section className="min-h-screen bg-[#1a1c1b] flex items-center relative overflow-hidden">
      {/* ===================================================================
          ELEMENTOS DECORATIVOS DE FONDO
          Dos círculos con blur que dan profundidad visual
          =================================================================== */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -right-20 w-96 h-96 bg-[#3f4816]/20 rounded-full blur-3xl"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s'
          }}
        />
        <div 
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#3f4816]/10 rounded-full blur-3xl"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'scale(1)' : 'scale(0.8)',
            transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s'
          }}
        />
      </div>

      {/* ===================================================================
          CONTENIDO PRINCIPAL DEL HERO
          =================================================================== */}
      <div className="max-w-[87.5rem] mx-auto px-6 md:px-10 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          
          {/* -----------------------------------------------------------------
              BADGE "Available for projects"
              Indicador verde pulsante que muestra disponibilidad
              ----------------------------------------------------------------- */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#302f2c] rounded-full mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: `${jazzyTransition} 0ms`
            }}
          >
            {/* Punto verde animado */}
            <span className="w-2 h-2 bg-[#d9fb06] rounded-full animate-pulse" />
            <span className="text-[#888680] text-sm font-medium">Available for projects</span>
          </div>

          {/* -----------------------------------------------------------------
              HEADLINE PRINCIPAL
              Texto grande e impactante - EDITA AQUÍ tu mensaje principal
              ----------------------------------------------------------------- */}
          <h1 
            className="text-[#dfddd6] font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight mb-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
              transition: `${jazzyTransition} 150ms`
            }}
          >
            {/* LÍNEA 1: Texto blanco */}
            Building functional<br />
            {/* LÍNEA 2: Texto blanco */}
            web products with<br />
            {/* LÍNEA 3: Texto VERDE LIMA - destaca "clean design" */}
            <span className="text-[#d9fb06]">clean design</span> and<br />
            {/* LÍNEA 4: Texto GRIS - "real purpose" */}
            <span className="text-[#888680]">real purpose.</span>
          </h1>

          {/* -----------------------------------------------------------------
              SUBTÍTULO
              Muestra tu rol y tagline (viene de mock.js -> personalInfo)
              ----------------------------------------------------------------- */}
          <p 
            className="text-[#888680] text-lg md:text-xl font-medium mb-10 max-w-2xl"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: `${jazzyTransition} 300ms`
            }}
          >
            {personalInfo.role} — {personalInfo.tagline}
          </p>

          {/* -----------------------------------------------------------------
              BOTONES CTA (Call To Action)
              - View Projects: Botón principal verde
              - Contact Me: Botón secundario con borde
              ----------------------------------------------------------------- */}
          <div 
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: `${jazzyTransition} 450ms`
            }}
          >
            {/* BOTÓN PRIMARIO - View Projects */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center bg-[#d9fb06] text-[#1a1c1b] font-semibold text-base px-8 py-4 rounded-full hover:scale-[1.02] hover:opacity-90 transition-all duration-300"
            >
              View Projects
            </button>
            
            {/* BOTÓN SECUNDARIO - Contact Me */}
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center border border-[#d9fb06] text-[#d9fb06] font-semibold text-base px-8 py-4 rounded-full hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* -------------------------------------------------------------------
            INDICADOR DE SCROLL
            Flecha animada que indica que hay más contenido abajo
            Solo visible en pantallas medianas y grandes (md:flex)
            Posicionado más abajo para mejor visibilidad
            ------------------------------------------------------------------- */}
        <div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: `${jazzyTransition} 700ms`
          }}
        >
          <span className="text-[#888680] text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="text-[#d9fb06] animate-bounce" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
