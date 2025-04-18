"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && !window.lenisInstance) {
      const lenis = new Lenis({
        // Softer scrolling parameters
        delay:1.3,
        duration: 1.4, // Increased duration for slower, smoother scrolling
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(3, -10 * t)), // Smoother easing function
        smoothWheel: true,
        wheelMultiplier: 1.3, // Reduced wheel sensitivity
        touchMultiplier: 1, // Slightly increased touch sensitivity
        infinite: false,
        smoothTouch: true, // Enable smooth scrolling on touch devices
        normalizeWheel: true, // Better handling of different wheel inputs
      });

      window.lenisInstance = lenis;

      // Add momentum effect for extra smoothness
      let momentum = 0;
      const friction = 0.07;
      const maxMomentum = 0.4;

      function raf(time) {
        lenis.raf(time);
        
        // Apply momentum effect
        if (Math.abs(momentum) > 0.001) {
          lenis.scrollTo(lenis.targetScroll + momentum, { immediate: true });
          momentum *= (1 - friction);
        } else {
          momentum = 0;
        }
        
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Add momentum on wheel events for extra smoothness
      const handleWheel = (e) => {
        momentum = Math.max(-maxMomentum, Math.min(maxMomentum, momentum + e.deltaY * 0.0005));
      };

      window.addEventListener('wheel', handleWheel, { passive: true });

      const handleBeforeUnload = () => {
        sessionStorage.setItem('scrollPosition', lenis.scroll);
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('beforeunload', handleBeforeUnload);
        if (window.lenisInstance === lenis) {
          lenis.destroy();
          window.lenisInstance = null;
        }
      };
    }

    const restoreScroll = () => {
      if (window.lenisInstance) {
        const savedPosition = sessionStorage.getItem('scrollPosition');
        if (savedPosition) {
          window.lenisInstance.scrollTo(parseFloat(savedPosition), {
            immediate: false, // Changed to false for smooth restoration
            lock: false,
            force: false,
          });
          sessionStorage.removeItem('scrollPosition');
        }
      }
    };

    restoreScroll();
  }, [pathname]);

  return <>{children}</>;
}