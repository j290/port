/**
 * =============================================================================
 * useScrollAnimation - Hook para animaciones al hacer scroll
 * =============================================================================
 * 
 * Este hook detecta cuando un elemento entra en el viewport y activa
 * animaciones suaves estilo "jazz" - elegantes y profesionales.
 * 
 * USO:
 * const { ref, isVisible } = useScrollAnimation();
 * <div ref={ref} className={isVisible ? 'animate-in' : 'animate-out'}>
 * 
 * OPCIONES:
 * - threshold: Porcentaje del elemento visible para activar (0-1)
 * - triggerOnce: Si true, la animación solo se ejecuta una vez
 * =============================================================================
 */

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  // Estado que indica si el elemento es visible
  const [isVisible, setIsVisible] = useState(false);
  
  // Referencia al elemento DOM
  const ref = useRef(null);

  useEffect(() => {
    // Configuración del observer
    const observerOptions = {
      threshold: options.threshold || 0.1,  // 10% visible por defecto
      rootMargin: options.rootMargin || '0px 0px -50px 0px' // Margen inferior
    };

    // Callback cuando el elemento entra/sale del viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Si triggerOnce es true, dejamos de observar después de la primera vez
          if (options.triggerOnce !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.triggerOnce === false) {
          setIsVisible(false);
        }
      });
    }, observerOptions);

    // Observar el elemento
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return { ref, isVisible };
};

export default useScrollAnimation;
