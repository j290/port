/**
 * =============================================================================
 * Projects Section - Sección de proyectos (LA MÁS IMPORTANTE)
 * =============================================================================
 * 
 * Muestra tu portfolio de trabajos. Esta es la sección que más importa
 * a las empresas que quieren contratarte.
 * 
 * PARA EDITAR PROYECTOS:
 * - Ve a mock.js y modifica el array 'projects'
 * - Cada proyecto tiene: title, description, tech, image, liveDemo, code
 * - liveDemo: null = no hay demo (muestra "Private Project")
 * - code: null = código privado (oculta el botón de GitHub)
 * - isCompany: true = proyecto empresarial (badge especial)
 * =============================================================================
 */

import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Lock, Building2 } from 'lucide-react';
import { projects } from '../data/mock';
import AnimatedSection from './AnimatedSection';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Badge } from './ui/badge';

const Projects = () => {
  // ==========================================================================
  // ESTADO PARA EL MODAL DE DETALLES
  // ==========================================================================
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Abrir modal con los detalles del proyecto
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="bg-[#1a1c1b] py-24 md:py-32">
      <div className="max-w-[87.5rem] mx-auto px-6 md:px-10">
        
        {/* ===================================================================
            HEADER DE LA SECCIÓN
            =================================================================== */}
        <AnimatedSection delay={0}>
          <div className="mb-16">
            <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">Work</span>
            <h2 className="text-[#dfddd6] font-black text-3xl md:text-4xl lg:text-5xl mt-4">
              Selected Projects
            </h2>
            <p className="text-[#888680] text-lg mt-4 max-w-xl">
              Real projects and functional concepts that showcase my skills.
            </p>
          </div>
        </AnimatedSection>

        {/* ===================================================================
            GRID DE PROYECTOS
            2 columnas en desktop, 1 en móvil
            =================================================================== */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              delay={100 + (index * 150)} 
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div
                className="group bg-[#302f2c] rounded-2xl overflow-hidden border border-[#3f4816]/30 hover:border-[#d9fb06]/30 transition-all duration-500 h-full flex flex-col"
              >
                {/* ---------------------------------------------------------------
                    IMAGEN DEL PROYECTO
                    Con overlay gradient y badges
                    --------------------------------------------------------------- */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay oscuro con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b]/80 to-transparent" />
                  
                  {/* BADGE: Tipo de proyecto (esquina superior izquierda) */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#1a1c1b]/80 text-[#dfddd6] text-xs font-medium px-3 py-1 rounded-full border-none">
                      {project.type}
                    </Badge>
                  </div>

                  {/* BADGE: Proyecto empresarial o concepto (esquina superior derecha) */}
                  <div className="absolute top-4 right-4">
                    {project.isCompany ? (
                      // Badge para proyectos empresariales (EFFITECH)
                      <Badge className="bg-[#d9fb06]/90 text-[#1a1c1b] text-xs font-semibold px-3 py-1 rounded-full border-none flex items-center gap-1">
                        <Building2 size={12} />
                        Enterprise
                      </Badge>
                    ) : !project.isReal ? (
                      // Badge para proyectos concepto/demo
                      <Badge className="bg-[#3f4816]/80 text-[#d9fb06] text-xs font-medium px-3 py-1 rounded-full border-none">
                        Concept
                      </Badge>
                    ) : null}
                  </div>
                </div>

                {/* ---------------------------------------------------------------
                    CONTENIDO DEL PROYECTO
                    Título, descripción, tech stack y botones
                    --------------------------------------------------------------- */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Título del proyecto */}
                  <h3 className="text-[#dfddd6] font-bold text-xl mb-2">{project.title}</h3>
                  
                  {/* Descripción breve */}
                  <p className="text-[#888680] text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Aviso especial para proyectos empresariales */}
                  {project.isCompany && (
                    <div className="flex items-center gap-2 text-[#888680] text-xs mb-4 bg-[#1a1c1b]/50 px-3 py-2 rounded-lg">
                      <Lock size={12} />
                      <span>Private enterprise project — no public demo available</span>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[#d9fb06] text-xs font-medium px-3 py-1 bg-[#3f4816]/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ---------------------------------------------------------------
                      BOTONES DE ACCIÓN
                      View Details + Live Demo + GitHub
                      --------------------------------------------------------------- */}
                  <div className="flex items-center gap-4 mt-auto">
                    {/* Botón Ver Detalles */}
                    <button
                      onClick={() => openProjectModal(project)}
                      className="flex items-center gap-2 text-[#dfddd6] text-sm font-medium hover:text-[#d9fb06] transition-colors"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </button>
                    
                    <div className="flex items-center gap-3 ml-auto">
                      {/* BOTÓN LIVE DEMO - Solo si hay URL */}
                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#3f4816]/30 rounded-lg hover:bg-[#d9fb06] hover:text-[#1a1c1b] text-[#888680] transition-all duration-300"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      ) : (
                        // Si no hay demo, mostrar icono deshabilitado
                        <span
                          className="p-2 bg-[#3f4816]/20 rounded-lg text-[#888680]/50 cursor-not-allowed"
                          title="No public demo available"
                        >
                          <Lock size={18} />
                        </span>
                      )}
                      
                      {/* BOTÓN GITHUB - Solo si hay URL */}
                      {project.code ? (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#3f4816]/30 rounded-lg hover:bg-[#d9fb06] hover:text-[#1a1c1b] text-[#888680] transition-all duration-300"
                          title="View Code"
                        >
                          <Github size={18} />
                        </a>
                      ) : (
                        // Si no hay código público, no mostrar nada
                        null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* =====================================================================
          MODAL DE DETALLES DEL PROYECTO
          Se abre al hacer clic en "View Details"
          ===================================================================== */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#1a1c1b] border-[#3f4816] max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-[#dfddd6] text-2xl font-bold flex items-center gap-3">
                  {selectedProject.title}
                  {/* Badge de Enterprise en el modal */}
                  {selectedProject.isCompany && (
                    <Badge className="bg-[#d9fb06] text-[#1a1c1b] text-xs font-semibold px-2 py-0.5 rounded-full border-none">
                      Enterprise
                    </Badge>
                  )}
                </DialogTitle>
                <DialogDescription className="text-[#888680]">
                  {selectedProject.type}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                {/* Imagen del proyecto */}
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Descripción completa */}
                <p className="text-[#dfddd6] text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Aviso para proyectos empresariales */}
                {selectedProject.isCompany && (
                  <div className="flex items-start gap-3 text-[#888680] text-sm mb-6 bg-[#302f2c] p-4 rounded-xl border border-[#3f4816]/30">
                    <Building2 size={20} className="text-[#d9fb06] mt-0.5" />
                    <div>
                      <p className="font-medium text-[#dfddd6] mb-1">Enterprise Project</p>
                      <p>This project was developed for a company. Due to confidentiality agreements, no public demo or source code is available.</p>
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-[#dfddd6] font-semibold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-[#888680]">
                        <span className="w-1.5 h-1.5 bg-[#d9fb06] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-[#dfddd6] font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-[#d9fb06] text-sm font-medium px-4 py-2 bg-[#3f4816]/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-4">
                  {/* Botón Live Demo */}
                  {selectedProject.liveDemo ? (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#d9fb06] text-[#1a1c1b] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex-1 inline-flex items-center justify-center gap-2 bg-[#302f2c] text-[#888680] font-semibold px-6 py-3 rounded-full cursor-not-allowed">
                      <Lock size={18} />
                      Private Project
                    </div>
                  )}
                  
                  {/* Botón GitHub */}
                  {selectedProject.code ? (
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 border border-[#d9fb06] text-[#d9fb06] font-semibold px-6 py-3 rounded-full hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  ) : (
                    <div className="flex-1 inline-flex items-center justify-center gap-2 border border-[#3f4816] text-[#888680] font-semibold px-6 py-3 rounded-full cursor-not-allowed">
                      <Lock size={18} />
                      Private Code
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
