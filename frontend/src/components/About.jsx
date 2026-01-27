/**
 * =============================================================================
 * About Section - Sección "Sobre mí"
 * =============================================================================
 * 
 * Presenta quién eres como profesional.
 * Incluye texto descriptivo, estadísticas y highlights de tus fortalezas.
 * 
 * PARA EDITAR:
 * - Textos principales: Vienen de mock.js -> aboutText
 * - Estadísticas: Líneas 85-97 (4+ Projects, 2+ Years, etc.)
 * - Highlights: Líneas 45-60 (Clean Code, Design Focus, Performance)
 * =============================================================================
 */

import React from 'react';
import { Code2, Palette, Zap } from 'lucide-react';
import { aboutText } from '../data/mock';
import AnimatedSection from './AnimatedSection';

const About = () => {
  // ==========================================================================
  // HIGHLIGHTS / FORTALEZAS
  // ==========================================================================
  // Cada highlight tiene un icono, título y descripción
  // PARA EDITAR: Cambia los textos o iconos según tus fortalezas
  const highlights = [
    {
      icon: Code2,        // Icono de código (de lucide-react)
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Palette,      // Icono de paleta de colores
      title: 'Design Focus',
      description: 'Creating interfaces that are both beautiful and functional.'
    },
    {
      icon: Zap,          // Icono de rayo/velocidad
      title: 'Performance',
      description: 'Building fast, optimized experiences that users love.'
    }
  ];

  return (
    <section id="about" className="bg-[#1a1c1b] py-24 md:py-32">
      <div className="max-w-[87.5rem] mx-auto px-6 md:px-10">
        
        {/* ===================================================================
            HEADER DE LA SECCIÓN
            Título principal con animación de entrada
            =================================================================== */}
        <AnimatedSection delay={0}>
          <div className="mb-16">
            {/* Etiqueta pequeña en verde */}
            <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">About</span>
            {/* Título principal - EDITA ESTE TEXTO */}
            <h2 className="text-[#dfddd6] font-black text-3xl md:text-4xl lg:text-5xl mt-4 leading-tight">
              Not a student.<br />
              <span className="text-[#888680]">A builder of digital products.</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* -----------------------------------------------------------------
              COLUMNA IZQUIERDA: Textos y estadísticas
              ----------------------------------------------------------------- */}
          <AnimatedSection delay={100} direction="up">
            <div className="space-y-6">
              {/* Texto de introducción (viene de mock.js) */}
              <p className="text-[#dfddd6] text-lg md:text-xl leading-relaxed">
                {aboutText.intro}
              </p>
              {/* Texto principal */}
              <p className="text-[#888680] text-lg leading-relaxed">
                {aboutText.main}
              </p>
              {/* Texto de enfoque */}
              <p className="text-[#888680] text-lg leading-relaxed">
                {aboutText.focus}
              </p>
              
              {/* ---------------------------------------------------------------
                  ESTADÍSTICAS
                  EDITA los números y textos según tu experiencia
                  --------------------------------------------------------------- */}
              <div className="flex gap-12 pt-8 border-t border-[#3f4816]/50 mt-8">
                {/* Estadística 1: Proyectos */}
                <div>
                  <span className="text-[#d9fb06] font-black text-4xl">4+</span>
                  <p className="text-[#888680] text-sm mt-1">Projects</p>
                </div>
                {/* Estadística 2: Años de experiencia */}
                <div>
                  <span className="text-[#d9fb06] font-black text-4xl">2+</span>
                  <p className="text-[#888680] text-sm mt-1">Years Experience</p>
                </div>
                {/* Estadística 3: Dedicación */}
                <div>
                  <span className="text-[#d9fb06] font-black text-4xl">100%</span>
                  <p className="text-[#888680] text-sm mt-1">Dedication</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* -----------------------------------------------------------------
              COLUMNA DERECHA: Cards de highlights/fortalezas
              ----------------------------------------------------------------- */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <AnimatedSection key={index} delay={200 + (index * 100)} direction="left">
                <div 
                  className="group bg-[#302f2c] p-6 rounded-2xl border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icono con efecto hover */}
                    <div className="p-3 bg-[#3f4816]/30 rounded-xl group-hover:bg-[#d9fb06]/10 transition-colors duration-300">
                      <item.icon className="text-[#d9fb06]" size={24} />
                    </div>
                    <div>
                      {/* Título del highlight */}
                      <h3 className="text-[#dfddd6] font-semibold text-lg mb-2">{item.title}</h3>
                      {/* Descripción */}
                      <p className="text-[#888680] text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
