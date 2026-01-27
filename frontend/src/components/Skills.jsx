/**
 * =============================================================================
 * Skills Section - Sección de habilidades técnicas
 * =============================================================================
 * 
 * Muestra tu stack tecnológico organizado por categorías.
 * Los datos vienen de mock.js -> skills
 * 
 * PARA EDITAR:
 * - Categorías: Modifica el objeto 'skills' en mock.js
 * - Iconos: Cambia los iconos de lucide-react en skillCategories (línea 25)
 * - Títulos: Líneas 26-45
 * =============================================================================
 */

import React from 'react';
import { Monitor, Layers, Server, Wrench } from 'lucide-react';
import { skills } from '../data/mock';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  // ==========================================================================
  // CONFIGURACIÓN DE CATEGORÍAS
  // ==========================================================================
  // Cada categoría tiene: icono, título, items (del mock) y color
  // PARA CAMBIAR ICONOS: Busca en https://lucide.dev/icons/
  const skillCategories = [
    {
      icon: Monitor,        // Icono de monitor/pantalla
      title: 'Frontend',    // Título de la categoría
      items: skills.frontend,  // Array de skills (viene de mock.js)
      color: '#d9fb06'      // Color del icono (verde lima)
    },
    {
      icon: Layers,         // Icono de capas
      title: 'UI Design',
      items: skills.ui,
      color: '#d9fb06'
    },
    {
      icon: Server,         // Icono de servidor
      title: 'Backend (Basic)',
      items: skills.backend,
      color: '#d9fb06'
    },
    {
      icon: Wrench,         // Icono de herramienta
      title: 'Tools',
      items: skills.tools,
      color: '#d9fb06'
    }
  ];

  return (
    <section id="skills" className="bg-[#232523] py-24 md:py-32">
      <div className="max-w-[87.5rem] mx-auto px-6 md:px-10">
        
        {/* ===================================================================
            HEADER DE LA SECCIÓN
            Centrado con animación de entrada
            =================================================================== */}
        <AnimatedSection delay={0}>
          <div className="text-center mb-16">
            {/* Etiqueta superior */}
            <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">Skills</span>
            {/* Título principal */}
            <h2 className="text-[#dfddd6] font-black text-3xl md:text-4xl lg:text-5xl mt-4">
              Tech Stack
            </h2>
            {/* Subtítulo descriptivo */}
            <p className="text-[#888680] text-lg mt-4 max-w-xl mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
        </AnimatedSection>

        {/* ===================================================================
            GRID DE SKILLS
            4 columnas en desktop, 2 en tablet, 1 en móvil
            =================================================================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={100 + (index * 100)} direction="up">
              <div
                className="group bg-[#1a1c1b] p-6 rounded-2xl border border-[#3f4816]/30 hover:border-[#d9fb06]/50 transition-all duration-300 h-full"
              >
                {/* Icono de la categoría */}
                <div className="p-3 bg-[#302f2c] rounded-xl w-fit mb-6 group-hover:bg-[#3f4816]/50 transition-colors duration-300">
                  <category.icon className="text-[#d9fb06]" size={24} />
                </div>

                {/* Título de la categoría */}
                <h3 className="text-[#dfddd6] font-semibold text-lg mb-4">{category.title}</h3>

                {/* Lista de skills */}
                <ul className="space-y-2">
                  {category.items.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-2 text-[#888680]"
                    >
                      {/* Punto verde indicador */}
                      <span className="w-1.5 h-1.5 bg-[#d9fb06] rounded-full" />
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
