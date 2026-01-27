/**
 * =============================================================================
 * FOOTER - Pie de página del portafolio
 * =============================================================================
 * 
 * Contiene logo, copyright, links a redes sociales y botón para volver arriba.
 * 
 * PARA EDITAR:
 * - Links sociales: Los datos vienen de mock.js -> personalInfo
 * - Año del copyright: Se genera automáticamente
 * =============================================================================
 */

import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  // Año actual para el copyright (se actualiza automáticamente)
  const currentYear = new Date().getFullYear();

  // Función para hacer scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1c1b] border-t border-[#3f4816]/30">
      <AnimatedSection delay={0}>
        <div className="max-w-[87.5rem] mx-auto px-6 md:px-10 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* -----------------------------------------------------------------
                LOGO Y COPYRIGHT
                El logo usa el primer nombre de personalInfo
                ----------------------------------------------------------------- */}
            <div className="flex flex-col items-center md:items-start gap-2">
              {/* Logo clickeable que lleva al inicio */}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                className="text-[#d9fb06] font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
              >
                {personalInfo.name.split(' ')[0]}<span className="text-[#888680]">.</span>
              </a>
              {/* Texto de copyright */}
              <p className="text-[#888680] text-sm">
                © {currentYear} {personalInfo.name} {personalInfo.lastName}. Todos los derechos reservados.
              </p>
            </div>

            {/* -----------------------------------------------------------------
                LINKS DE REDES SOCIALES
                Email, LinkedIn y GitHub
                ----------------------------------------------------------------- */}
            <div className="flex items-center gap-4">
              {/* Botón Email - abre cliente de correo */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-[#302f2c] rounded-xl text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816]/50 transition-all duration-300"
                title="Email"
              >
                <Mail size={20} />
              </a>
              
              {/* Botón LinkedIn - abre en nueva pestaña */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#302f2c] rounded-xl text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816]/50 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              {/* Botón GitHub - abre en nueva pestaña */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#302f2c] rounded-xl text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816]/50 transition-all duration-300"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            </div>

            {/* -----------------------------------------------------------------
                BOTÓN VOLVER ARRIBA
                Hace scroll suave hasta el inicio de la página
                ----------------------------------------------------------------- */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#888680] hover:text-[#d9fb06] transition-colors group"
            >
              <span className="text-sm font-medium">Volver arriba</span>
              <div className="p-2 bg-[#302f2c] rounded-lg group-hover:bg-[#3f4816]/50 transition-colors">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;
