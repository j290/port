/**
 * =============================================================================
 * SECCIÓN DE CONTACTO - Formulario con EmailJS
 * =============================================================================
 * 
 * Esta sección permite a los visitantes enviarte mensajes directamente
 * a tu correo electrónico usando EmailJS (servicio gratuito).
 * 
 * CONFIGURACIÓN DE EMAILJS:
 * 1. Crea cuenta gratis en https://www.emailjs.com
 * 2. Añade tu servicio de email (Gmail recomendado)
 * 3. Crea una plantilla de email
 * 4. Copia tus credenciales en las constantes de abajo (líneas 30-32)
 * 
 * PARA EDITAR:
 * - Títulos y textos: Busca los comentarios "TEXTO EDITABLE"
 * - Email/LinkedIn/GitHub: Viene de mock.js -> personalInfo
 * =============================================================================
 */

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, ArrowUpRight, Loader2, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import AnimatedSection from './AnimatedSection';
import emailjs from '@emailjs/browser';

// =============================================================================
// CONFIGURACIÓN DE EMAILJS - ¡EDITA ESTOS VALORES!
// =============================================================================
// Obtén estos valores en https://www.emailjs.com -> Dashboard
const EMAILJS_SERVICE_ID = 'service_cb3a6hm';    // Ej: 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_elq9u9a';  // Ej: 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'JFncqhpi8WPWIxqzc';    // Ej: 'abcdefghijklmnop'

const Contact = () => {
  const { toast } = useToast();
  
  // ==========================================================================
  // ESTADO DEL FORMULARIO
  // ==========================================================================
  const [formData, setFormData] = useState({
    name: '',     // Nombre del visitante
    email: '',    // Email del visitante
    message: ''   // Mensaje
  });
  const [isSubmitting, setIsSubmitting] = useState(false);  // Estado de envío
  const [isSuccess, setIsSuccess] = useState(false);        // Mensaje enviado exitosamente

  // ==========================================================================
  // MANEJADORES DE EVENTOS
  // ==========================================================================
  
  // Actualizar campos del formulario cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Enviar formulario usando EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    
    try {
      // =====================================================================
      // ENVIAR EMAIL CON EMAILJS
      // =====================================================================
      // Los parámetros de la plantilla deben coincidir con tu plantilla en EmailJS
      // Plantilla sugerida: {{from_name}}, {{from_email}}, {{message}}
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,      // Nombre del remitente
          from_email: formData.email,    // Email del remitente
          message: formData.message,     // Contenido del mensaje
          to_email: personalInfo.email,  // Tu email (destino)
        },
        EMAILJS_PUBLIC_KEY
      );
      
      // Mostrar notificación de éxito
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarme. Te responderé pronto.",
      });
      
      // Limpiar formulario y mostrar estado de éxito
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(true);
      
      // Resetear estado de éxito después de 3 segundos
      setTimeout(() => setIsSuccess(false), 3000);
      
    } catch (error) {
      // Mostrar error si falla el envío
      console.error('Error enviando mensaje:', error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Intenta de nuevo o escríbeme directamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#232523] py-24 md:py-32">
      <div className="max-w-[87.5rem] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* -----------------------------------------------------------------
              COLUMNA IZQUIERDA: Información de contacto
              ----------------------------------------------------------------- */}
          <AnimatedSection delay={0} direction="up">
            <div>
              {/* Etiqueta de sección */}
              <span className="text-[#d9fb06] text-sm font-semibold uppercase tracking-widest">
                Contacto
              </span>
              
              {/* TEXTO EDITABLE: Título principal */}
              <h2 className="text-[#dfddd6] font-black text-3xl md:text-4xl lg:text-5xl mt-4 leading-tight">
                ¿Buscas un desarrollador<br />
                <span className="text-[#888680]">para tu próximo proyecto?</span>
              </h2>
              
              {/* TEXTO EDITABLE: Subtítulo */}
              <p className="text-[#888680] text-lg mt-6 max-w-md">
                Hablemos. Siempre estoy abierto a discutir nuevos proyectos e ideas creativas.
              </p>

              {/* ---------------------------------------------------------------
                  LINKS DE CONTACTO DIRECTO
                  Email, LinkedIn y GitHub - los datos vienen de mock.js
                  --------------------------------------------------------------- */}
              <div className="mt-10 space-y-4">
                {/* Link de Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center gap-4 p-4 bg-[#1a1c1b] rounded-xl border border-[#3f4816]/30 hover:border-[#d9fb06]/50 transition-all duration-300"
                >
                  <div className="p-3 bg-[#302f2c] rounded-lg group-hover:bg-[#3f4816]/50 transition-colors">
                    <Mail className="text-[#d9fb06]" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#888680] text-sm">Email</p>
                    <p className="text-[#dfddd6] font-medium">{personalInfo.email}</p>
                  </div>
                  <ArrowUpRight className="text-[#888680] group-hover:text-[#d9fb06] transition-colors" size={20} />
                </a>

                {/* Link de LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-[#1a1c1b] rounded-xl border border-[#3f4816]/30 hover:border-[#d9fb06]/50 transition-all duration-300"
                >
                  <div className="p-3 bg-[#302f2c] rounded-lg group-hover:bg-[#3f4816]/50 transition-colors">
                    <Linkedin className="text-[#d9fb06]" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#888680] text-sm">LinkedIn</p>
                    <p className="text-[#dfddd6] font-medium">Jose Fernando Moreno</p>
                  </div>
                  <ArrowUpRight className="text-[#888680] group-hover:text-[#d9fb06] transition-colors" size={20} />
                </a>

                {/* Link de GitHub - NUEVO */}
                <a
                  href="https://github.com/j290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-[#1a1c1b] rounded-xl border border-[#3f4816]/30 hover:border-[#d9fb06]/50 transition-all duration-300"
                >
                  <div className="p-3 bg-[#302f2c] rounded-lg group-hover:bg-[#3f4816]/50 transition-colors">
                    <Github className="text-[#d9fb06]" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#888680] text-sm">GitHub</p>
                    <p className="text-[#dfddd6] font-medium">j290</p>
                  </div>
                  <ArrowUpRight className="text-[#888680] group-hover:text-[#d9fb06] transition-colors" size={20} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* -----------------------------------------------------------------
              COLUMNA DERECHA: Formulario de contacto
              ----------------------------------------------------------------- */}
          <AnimatedSection delay={200} direction="left">
            <div className="bg-[#1a1c1b] p-8 rounded-2xl border border-[#3f4816]/30">
              <h3 className="text-[#dfddd6] font-semibold text-xl mb-6">Envía un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Campo: Nombre */}
                <div>
                  <label htmlFor="name" className="text-[#888680] text-sm mb-2 block">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    disabled={isSubmitting}
                    className="bg-[#302f2c] border-[#3f4816]/50 text-[#dfddd6] placeholder:text-[#888680]/50 focus:border-[#d9fb06] focus:ring-[#d9fb06]/20 h-12 rounded-xl disabled:opacity-50"
                  />
                </div>

                {/* Campo: Email */}
                <div>
                  <label htmlFor="email" className="text-[#888680] text-sm mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    disabled={isSubmitting}
                    className="bg-[#302f2c] border-[#3f4816]/50 text-[#dfddd6] placeholder:text-[#888680]/50 focus:border-[#d9fb06] focus:ring-[#d9fb06]/20 h-12 rounded-xl disabled:opacity-50"
                  />
                </div>

                {/* Campo: Mensaje */}
                <div>
                  <label htmlFor="message" className="text-[#888680] text-sm mb-2 block">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-[#302f2c] border-[#3f4816]/50 text-[#dfddd6] placeholder:text-[#888680]/50 focus:border-[#d9fb06] focus:ring-[#d9fb06]/20 rounded-xl resize-none disabled:opacity-50"
                  />
                </div>

                {/* Botón de envío */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold h-12 rounded-full transition-all duration-300 ${
                    isSuccess 
                      ? 'bg-green-500 text-white hover:bg-green-500' 
                      : 'bg-[#d9fb06] text-[#1a1c1b] hover:opacity-90'
                  } disabled:opacity-50`}
                >
                  {isSubmitting ? (
                    // Estado: Enviando
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : isSuccess ? (
                    // Estado: Enviado con éxito
                    <>
                      <CheckCircle size={18} className="mr-2" />
                      ¡Mensaje Enviado!
                    </>
                  ) : (
                    // Estado: Normal
                    <>
                      <Send size={18} className="mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
