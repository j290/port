/**
 * =============================================================================
 * AnimatedSection - Componente wrapper para animaciones de scroll
 * =============================================================================
 * 
 * Envuelve cualquier contenido y le aplica animaciones suaves al entrar
 * en el viewport. Estilo "jazz" - elegante, profesional, sin ser agresivo.
 * 
 * PROPS:
 * - children: Contenido a animar
 * - delay: Retraso antes de la animación (ms), default: 0
 * - direction: Dirección de entrada ('up', 'down', 'left', 'right'), default: 'up'
 * - className: Clases CSS adicionales
 * - once: Si la animación solo se ejecuta una vez, default: true
 * 
 * USO:
 * <AnimatedSection delay={200} direction="up">
 *   <h1>Este título aparece con animación</h1>
 * </AnimatedSection>
 * =============================================================================
 */

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  once = true 
}) => {
  // Hook que detecta cuando el elemento es visible
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: once });

  // Configuración de transformaciones según dirección
  const getTransform = () => {
    const distance = 40; // Distancia de desplazamiento en píxeles
    switch (direction) {
      case 'up':    return `translateY(${distance}px)`;
      case 'down':  return `translateY(-${distance}px)`;
      case 'left':  return `translateX(${distance}px)`;
      case 'right': return `translateX(-${distance}px)`;
      default:      return `translateY(${distance}px)`;
    }
  };

  // Estilos de la animación
  const animationStyles = {
    // Estado inicial (antes de ser visible)
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0)' : getTransform(),
    // Transición suave estilo jazz - ease-out con duración larga
    transition: `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, 
                 transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
  };

  return (
    <div ref={ref} style={animationStyles} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
