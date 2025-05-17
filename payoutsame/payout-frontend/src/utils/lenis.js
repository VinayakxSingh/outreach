import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

// Sync GSAP's ScrollTrigger with Lenis
lenis.on('scroll', ScrollTrigger.update);

// Proper GSAP ticker setup using timestamp
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // time is in seconds, lenis expects ms
});

// Smooth anchor scrolling
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        lenis.scrollTo(target, {
          offset: -80, // adjust as needed for fixed navbar
        });
      }
    });
  });
};
