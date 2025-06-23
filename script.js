 // Système de curseur avancé
 const cursor = document.querySelector('.cursor');
 const cursorTrail = document.querySelector('.cursor-trail');
 let mouseX = 0, mouseY = 0;
 let trailX = 0, trailY = 0;

 document.addEventListener('mousemove', (e) => {
     mouseX = e.clientX;
     mouseY = e.clientY;
 });

 function animateCursor() {
     cursor.style.left = mouseX + 'px';
     cursor.style.top = mouseY + 'px';
     
     trailX += (mouseX - trailX) * 0.1;
     trailY += (mouseY - trailY) * 0.1;
     
     cursorTrail.style.left = trailX + 'px';
     cursorTrail.style.top = trailY + 'px';
     
     requestAnimationFrame(animateCursor);
 }
 animateCursor();

 // Effets hover avancés
 const interactives = document.querySelectorAll('a, button, .menu-card');
 interactives.forEach(el => {
     el.addEventListener('mouseenter', () => {
         cursor.style.transform = 'translate(-50%, -50%) scale(2)';
         cursor.style.opacity = '0.8';
     });
     
     el.addEventListener('mouseleave', () => {
         cursor.style.transform = 'translate(-50%, -50%) scale(1)';
         cursor.style.opacity = '1';
     });
 });

 // Générateur d'éléments flottants
 function createFloatingElements() {
     const container = document.querySelector('.floating-elements');
     
     for (let i = 0; i < 30; i++) {
         const element = document.createElement('div');
         element.className = 'floating-element';
         element.style.left = Math.random() * 100 + '%';
         element.style.top = Math.random() * 100 + '%';
         element.style.animationDelay = Math.random() * 8 + 's';
         element.style.animationDuration = (Math.random() * 6 + 6) + 's';
         container.appendChild(element);
     }
 }

 // Indicateur de scroll avancé
 function updateScrollProgress() {
     const scrolled = window.pageYOffset;
     const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
     const progress = (scrolled / maxHeight) * 100;
     document.querySelector('.scroll-progress').style.width = progress + '%';
 }

 // Intersection Observer pour animations
 const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -100px 0px'
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         }
     });
 }, observerOptions);

 // Observer tous les éléments animés
 const animatedElements = document.querySelectorAll(
     '.section-title, .about-content, .about-visual, .menu-card, .contact-container'
 );
 
 animatedElements.forEach(el => observer.observe(el));

 // Délais d'animation pour les cartes menu
 const menuCards = document.querySelectorAll('.menu-card');
 menuCards.forEach((card, index) => {
     card.style.transitionDelay = `${index * 0.15}s`;
 });

 // Navigation smooth avec easing
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             const targetPosition = target.offsetTop - 100;
             window.scrollTo({
                 top: targetPosition,
                 behavior: 'smooth'
             });
         }
     });
 });

 // Effets de parallaxe avancés
 let ticking = false;
 
 function updateParallax() {
     const scrolled = window.pageYOffset;
     const rate = scrolled * -0.3;
     
     // Parallaxe hero
     const heroBg = document.querySelector('.hero-bg');
     if (heroBg) {
         heroBg.style.transform = `translateY(${rate}px)`;
     }
     
     // Parallaxe éléments flottants
     const floatingElements = document.querySelectorAll('.floating-element');
     floatingElements.forEach((element, index) => {
         const speed = 0.1 + (index % 3) * 0.05;
         element.style.transform = `translateY(${scrolled * speed}px)`;
     });
     
     ticking = false;
 }

 function requestTick() {
     if (!ticking) {
         requestAnimationFrame(updateParallax);
         ticking = true;
     }
 }

 // Event listeners
 window.addEventListener('scroll', () => {
     updateScrollProgress();
     requestTick();
 });

 // Navigation background dynamique
 window.addEventListener('scroll', () => {
     const nav = document.querySelector('nav');
     if (window.scrollY > 100) {
         nav.style.background = 'rgba(255, 255, 0, 0.2)';
         nav.style.backdropFilter = 'blur(25px)';
     } else {
         nav.style.background = 'rgba(255, 255, 0, 0.1)';
         nav.style.backdropFilter = 'blur(20px)';
     }
 });

 // Générateur de grille dynamique
 function createDynamicGrid() {
     const grids = document.querySelectorAll('.grid-bg');
     grids.forEach(grid => {
         const gridSize = Math.random() * 30 + 40;
         grid.style.backgroundSize = `${gridSize}px ${gridSize}px`;
         
         // Animation de la grille
         let offset = 0;
         setInterval(() => {
             offset += 0.5;
             grid.style.backgroundPosition = `${offset}px ${offset}px`;
         }, 100);
     });
 }

 // Effet de scan futuriste
 function createScanEffect() {
     const scanLines = document.createElement('div');
     scanLines.style.cssText = `
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         pointer-events: none;
         z-index: 5;
         background: repeating-linear-gradient(
             0deg,
             transparent,
             transparent 2px,
             rgba(255, 255, 0, 0.02) 2px,
             rgba(255, 255, 0, 0.02) 4px
         );
         animation: scanMove 3s linear infinite;
     `;
     
     const style = document.createElement('style');
     style.textContent = `
         @keyframes scanMove {
             0% { transform: translateY(-100%); }
             100% { transform: translateY(100vh); }
         }
     `;
     document.head.appendChild(style);
     document.body.appendChild(scanLines);
 }

 // Effets sonores visuels (simulation)
 function createAudioVisualizer() {
     const visualizer = document.createElement('div');
     visualizer.style.cssText = `
         position: fixed;
         bottom: 2rem;
         right: 2rem;
         width: 200px;
         height: 60px;
         background: rgba(255, 255, 0, 0.1);
         border: 1px solid rgba(255, 255, 0, 0.2);
         border-radius: 10px;
         backdrop-filter: blur(10px);
         display: flex;
         align-items: end;
         padding: 10px;
         gap: 3px;
         z-index: 1000;
     `;

     // Créer des barres d'audio
     for (let i = 0; i < 20; i++) {
         const bar = document.createElement('div');
         bar.style.cssText = `
             width: 4px;
             background: linear-gradient(to top, #FFFF00, #FFE600);
             border-radius: 2px;
             transition: height 0.1s ease;
         `;
         
         // Animation aléatoire des barres
         setInterval(() => {
             const height = Math.random() * 40 + 5;
             bar.style.height = height + 'px';
         }, Math.random() * 200 + 100);
         
         visualizer.appendChild(bar);
     }

     document.body.appendChild(visualizer);
 }

 // Particules interactives
 function createInteractiveParticles() {
     const particleContainer = document.createElement('div');
     particleContainer.style.cssText = `
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         pointer-events: none;
         z-index: 3;
     `;

     document.body.appendChild(particleContainer);

     const particles = [];
     
     for (let i = 0; i < 15; i++) {
         const particle = document.createElement('div');
         particle.style.cssText = `
             position: absolute;
             width: 6px;
             height: 6px;
             background: radial-gradient(circle, #FFFF00, transparent);
             border-radius: 50%;
             opacity: 0.8;
             box-shadow: 0 0 15px rgba(255, 255, 0, 0.8);
         `;
         
         particleContainer.appendChild(particle);
         particles.push({
             element: particle,
             x: Math.random() * window.innerWidth,
             y: Math.random() * window.innerHeight,
             vx: (Math.random() - 0.5) * 2,
             vy: (Math.random() - 0.5) * 2
         });
     }

     function animateParticles() {
         particles.forEach(particle => {
             particle.x += particle.vx;
             particle.y += particle.vy;

             if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
             if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

             particle.element.style.left = particle.x + 'px';
             particle.element.style.top = particle.y + 'px';

             // Interaction avec la souris
             const dx = mouseX - particle.x;
             const dy = mouseY - particle.y;
             const distance = Math.sqrt(dx * dx + dy * dy);

             if (distance < 100) {
                 particle.x -= dx * 0.02;
                 particle.y -= dy * 0.02;
                 particle.element.style.opacity = '1';
                 particle.element.style.transform = 'scale(1.5)';
             } else {
                 particle.element.style.opacity = '0.6';
                 particle.element.style.transform = 'scale(1)';
             }
         });

         requestAnimationFrame(animateParticles);
     }

     animateParticles();
 }

 // Mode sombre/clair futuriste
 function toggleFuturisticMode() {
     const body = document.body;
     const isDark = body.classList.contains('light-mode');
     
     if (isDark) {
         body.classList.remove('light-mode');
     } else {
         body.classList.add('light-mode');
         // Styles pour le mode clair
         document.documentElement.style.setProperty('--noir-profond', '#F5F5F5');
         document.documentElement.style.setProperty('--jaune-pur', '#0A0A0A');
         setTimeout(() => {
             document.documentElement.style.setProperty('--noir-profond', '#0A0A0A');
             document.documentElement.style.setProperty('--jaune-pur', '#FFFF00');
             body.classList.remove('light-mode');
         }, 1000);
     }
 }

 // Effet de glitch sur le titre
 function createGlitchEffect() {
     const title = document.querySelector('.hero-title');
     
     setInterval(() => {
         if (Math.random() > 0.95) {
             title.style.textShadow = `
                 ${Math.random() * 10 - 5}px 0 #ff0000,
                 ${Math.random() * 10 - 5}px 0 #00ff00,
                 0 0 20px var(--jaune-glow),
                 0 0 40px var(--jaune-glow),
                 0 0 80px rgba(255, 255, 0, 0.5)
             `;
             
             setTimeout(() => {
                 title.style.textShadow = `
                     0 0 20px var(--jaune-glow),
                     0 0 40px var(--jaune-glow),
                     0 0 80px rgba(255, 255, 0, 0.5)
                 `;
             }, 100);
         }
     }, 2000);
 }

 // Effet de typing pour les textes
 function createTypingEffect() {
     const subtitle = document.querySelector('.hero-subtitle');
     const originalText = subtitle.textContent;
     subtitle.textContent = '';
     
     setTimeout(() => {
         let i = 0;
         const typing = setInterval(() => {
             subtitle.textContent += originalText[i];
             i++;
             if (i >= originalText.length) {
                 clearInterval(typing);
             }
         }, 100);
     }, 2000);
 }

 // Initialisation complète
 document.addEventListener('DOMContentLoaded', () => {
     createFloatingElements();
     createDynamicGrid();
     createScanEffect();
     createAudioVisualizer();
     createInteractiveParticles();
     createGlitchEffect();
     createTypingEffect();
     
     // Ajout du bouton toggle mode (easter egg)
     const toggleButton = document.createElement('button');
     toggleButton.textContent = '◐';
     toggleButton.style.cssText = `
         position: fixed;
         top: 50%;
         right: 2rem;
         transform: translateY(-50%);
         width: 50px;
         height: 50px;
         border: 2px solid var(--jaune-pur);
         background: var(--glass);
         color: var(--jaune-pur);
         border-radius: 50%;
         cursor: pointer;
         backdrop-filter: blur(10px);
         font-size: 1.5rem;
         z-index: 1000;
         transition: all 0.3s ease;
     `;
     
     toggleButton.addEventListener('click', toggleFuturisticMode);
     toggleButton.addEventListener('mouseenter', () => {
         toggleButton.style.transform = 'translateY(-50%) scale(1.1) rotate(180deg)';
         toggleButton.style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.5)';
     });
     toggleButton.addEventListener('mouseleave', () => {
         toggleButton.style.transform = 'translateY(-50%) scale(1) rotate(0deg)';
         toggleButton.style.boxShadow = 'none';
     });
     
     document.body.appendChild(toggleButton);
 });

 // Performance optimization
 let rafId;
 function optimizedScroll() {
     if (rafId) return;
     rafId = requestAnimationFrame(() => {
         updateScrollProgress();
         requestTick();
         rafId = null;
     });
 }

 window.addEventListener('scroll', optimizedScroll, { passive: true });

 // Gestion du redimensionnement
 window.addEventListener('resize', () => {
     // Recalculer les positions des particules
     const particles = document.querySelectorAll('.floating-element');
     particles.forEach(particle => {
         particle.style.left = Math.random() * 100 + '%';
     });
 });