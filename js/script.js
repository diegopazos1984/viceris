<!DOCTYPE html>ón de GSAP
<html lang="es">gin(ScrollTrigger);
<head>
    <meta charset="UTF-8">agón
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dragon Particle Collider</title>
    <link rel="stylesheet" href="css/styles.css">
</head> gsap.to('.dragon-structure', {
<body>      motionPath: {
    <div class="animation-container">
        <div class="scene">y: 0},
            <svg class="shape-container technical-grid" viewBox="0 0 4000 3000">
                <!-- Definiciones -->
                <defs>: 100, y: 50},
                    <!-- Grid técnico base mejorado -->
                    <pattern id="techGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect width="20" height="20" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/>
                        <line class="grid-line" x1="0" y1="0" x2="20" y2="20"/>
                        <line class="grid-line" x1="20" y1="0" x2="0" y2="20"/>
                    </pattern>
                    -1,
                    <!-- Gradiente para efectos de energía -->
                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#4f9;stop-opacity:0.6"/>
                        <stop offset="100%" style="stop-color:#0ff;stop-opacity:0.6"/>
                    </linearGradient>{
                    ",
                    <!-- Símbolo para nodos de energía -->
                    <symbol id="energyNode" viewBox="0 0 20 20">
                        <!-- Círculo exterior con efecto de resplandor -->
                        <circle class="node-outer" cx="10" cy="10" r="8" 
                            fill="none" 
                            stroke="url(#energyGradient)" 
                            stroke-width="0.5"
                            opacity="0.4"/>e energía
                        <!-- Círculo interior pulsante -->
                        <circle class="node-inner" cx="10" cy="10" r="4" 
                            fill="url(#energyGradient)" 
                            opacity="0.3"/>
                        <!-- Punto central -->
                        <circle class="node-core" cx="10" cy="10" r="2" 
                            fill="#4f9" 
                            opacity="0.6"/>
                    </symbol>
                    
                    <!-- Símbolo para detalles del ala -->
                    <symbol id="wingStructure" viewBox="0 0 200 200">
                        <path class="tech-shape wing-frame" d="M0,0 C50,-100 100,-150 200,-200 L100,-100 L50,-50 Z"/>
                        <g class="wing-details">
                            <line class="tech-line" x1="0" y1="0" x2="200" y2="-200"/>
                            <line class="tech-line" x1="50" y1="-50" x2="150" y2="-150"/>
                        </g>
                    </symbol>
        this.button.addEventListener('click', () => this.toggleTransformation());
                    <!-- Máscara para el efecto de energía -->andleHover(true));
                    <mask id="energyMask">eout', () => this.handleHover(false));
                        <rect width="100%" height="100%" fill="white"/>
                        <path d="M100,300 Q500,200 900,300" fill="black"/>
                    </mask>{
        this.isActive = !this.isActive;
                    <!-- Gradiente radial para el resplandor de los nodos -->
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" style="stop-color:#4f9;stop-opacity:0.8"/>
                        <stop offset="100%" style="stop-color:#4f9;stop-opacity:0"/>
                    </radialGradient>
                </defs>vateTransformation();
        }
                <!-- Estructura del dragón con nuevo tamaño -->
                <g class="dragon-structure" transform="scale(1.5) translate(400, 400)">
                    <!-- Cuerpo principal -->
                    <path class="tech-shape dragon-body" d="
                        M100,300 e', {
                        C400,100 800,500 1200,300 
                        C1600,100 1800,500 2000,300
                    " fill="url(#techGrid)"/>
                    ower2.inOut"
                    <!-- Estructura interna -->
                    <g class="internal-structure">
                        <path class="tech-line spine" d="M100,300 Q500,200 900,300"/>
                        -nodes use', {
                        <!-- Líneas de construcción -->
                        <g class="construction-lines">
                            <line class="tech-line" x1="400" y1="100" x2="400" y2="500"/>
                            <line class="tech-line" x1="800" y1="50" x2="800" y2="550"/>
                            <line class="tech-line" x1="1200" y1="100" x2="1200" y2="500"/>
                            <line class="tech-line" x1="1600" y1="50" x2="1600" y2="550"/>
                        </g>
                    </g>ma de partículas
        gsap.to('.particle-system', {
                    <!-- Dentro de dragon-structure, después del cuerpo principal -->
                    <g class="dragon-details">
                        <!-- Cabeza del dragón con detalles técnicos -->
                        <g class="dragon-head">
                            <path class="tech-shape head-main" d="
                                M50,300 C30,280 20,260 30,240
                                C40,220 60,210 80,220
                                C100,230 110,250 100,270 Z
                            "/>
                            <!-- Detalles de la cabeza -->
                            <circle class="tech-shape eye" cx="70" cy="240" r="5"/>
                            <path class="tech-shape mandible" d="M60,260 C70,270 90,270 100,260"/>
                        </g>

                        <!-- Alas biomecánicas -->
                        <g class="dragon-wings">
                            <!-- Ala izquierda -->
                            <g class="wing left-wing">
                                <path class="tech-shape wing-frame" d="
                                    M400,300 C450,200 500,150 600,100
                                    L500,200 L450,250 Z
                                "/>
                                <g class="wing-details">
                                    <line class="tech-line" x1="400" y1="300" x2="600" y2="100"/>
                                    <line class="tech-line" x1="450" y1="250" x2="550" y2="150"/>
                                </g>
                            </g>
                            <!-- Ala derecha (espejo) -->
                            <g class="wing right-wing" transform="scale(-1,1) translate(-1000,0)">
                                <!-- Misma estructura que el ala izquierda -->
                            </g>
                        </g>
            duration: 1.5,
                        <!-- Circuitos de energía -->
                        <g class="energy-circuits">
                            <path class="circuit-line" d="M100,300 Q300,280 500,300 Q700,320 900,300"/>
                            <path class="circuit-line" d="M200,250 Q400,230 600,250 Q800,270 1000,250"/>
                        </g>es use', {
            scale: 1,
                        <!-- Nodos de energía mejorados -->
                        <g class="energy-nodes">
                            <use href="#energyNode" x="300" y="300" class="node node-1"/>
                            <use href="#energyNode" x="500" y="300" class="node node-2"/>
                            <use href="#energyNode" x="700" y="300" class="node node-3"/>
                            <use href="#energyNode" x="400" y="400" class="node node-4"/>
                            <use href="#energyNode" x="600" y="400" class="node node-5"/>
                        </g>ystem', {
                    </g>
            duration: 0.5
                    <!-- Sistema de partículas -->
                    <g class="particle-system" opacity="0">
                        <!-- Anillos del colisionador -->
                        <g class="collider-rings">);
                            <circle class="ring outer-ring" cx="500" cy="500" r="400"/>
                            <circle class="ring inner-ring" cx="500" cy="500" r="300"/>
                            <circle class="ring core-ring" cx="500" cy="500" r="200"/>
                        </g>
                        
                        <!-- Trayectorias de partículas -->
                        <g class="particle-paths">
                            <path class="collision-path" d="M100,500 Q500,100 900,500"/>
                            <path class="collision-path" d="M100,500 Q500,900 900,500"/>
                            <path class="collision-path" d="M500,100 Q900,500 500,900"/>
                            <path class="collision-path" d="M500,100 Q100,500 500,900"/>
                        </g>ing ? 0.5 : 0,
                        ering ? 1.2 : 1,
                        <!-- Partículas -->
                        <g class="particles">
                            <circle class="particle template" r="2" cx="0" cy="0"/>
                        </g>
                    </g>
                </g>l objeto dragonAnimations
            </svg>trol = {
        </div>
    </div>ne: null,
    <button class="tech-button" id="transformButton">
        <svg class="button-svg" viewBox="0 0 100 100">
            <circle class="button-glow" cx="50" cy="50" r="45"/>
            <path class="button-border" d="M20,20 L80,20 L80,80 L20,80 Z"/>
            <line class="button-line" x1="35" y1="50" x2="65" y2="50"/>
            <line class="button-line" x1="50" y1="35" x2="50" y2="65"/>
        </svg>
        <span class="button-text">Transform</span>
    </button>ent.addEventListener('keydown', (e) => {
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js"></script>is.speed + 0.2, 2);
    <script src="js/script.js"></script>         this.updateSpeed();
</body>     } else if (e.key === 'ArrowDown') {
</html>                this.speed = Math.max(this.speed - 0.2, 0.5);

                this.updateSpeed();
            }
        });
    },

    updateSpeed() {
        gsap.to(this.timeline, {
            timeScale: this.speed,
            duration: 0.3
        });
    }
};

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    dragonAnimations.init();
    transformButton.init();
    animationControl.init();
});

// Animación principal del dragón
const mainTimeline = gsap.timeline({, 0.4);
    repeat: -1,or: rgba(255, 255, 255, 1);
    defaults: { ease: "none" }5, 255, 0.9);
}); --glow-color: rgba(0, 255, 255, 0.6);
}
// Movimiento fluido del dragón
gsap.to('.dragon-structure', {
    y: "+=30",vw;
    rotation: "+=2",
    duration: 3,#000;
    repeat: -1,idden;
    yoyo: true,ex;
    ease: "power1.inOut"ter;
}); align-items: center;
    padding: 0;
// Efecto de perspectiva mejorado
document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    width: 100%;
    gsap.to('.dragon-structure', {
        rotateY: mouseX * 45,
        rotateX: mouseY * 25,
        duration: 1.5,r;
        ease: "power2.out"
    });
});
.technical-grid {
// Animación de las escamas
gsap.to('.scale', {
    scale: 1.2,tyle: preserve-3d;
    duration: 1,solute;
    stagger: {
        each: 0.2,
        repeat: -1,slate(-50%, -50%);
        yoyo: true,;
        from: "center"
    },
    ease: "sine.inOut"
});id-line {
    stroke: var(--line-color);
// Animación de las líneas de construcción
gsap.to('.construction-lines line', {
    strokeDashoffset: 20,
    duration: 2,
    repeat: -1,
    ease: "none",
    stagger: {r(--shape-color);
        each: 0.1,6;
        from: "random"w(0 0 30px var(--glow-color));
    }
});
.dragon-body {
// Parallax en las escamas
gsap.to('.scales-technical', {px var(--accent-color));
    x: mouseX * 20,
    y: mouseY * 20,
    duration: 1,
    ease: "power2.out"e-color);
}); stroke-width: 4;
    stroke-dasharray: 12,6;
// Pulso en la columna vertebral
gsap.to('.spine', {
    strokeWidth: "+=1",
    filter: "drop-shadow(0 0 15px rgba(0,255,255,0.5))",
    duration: 1,: 3;
    repeat: -1,array: 15,7;
    yoyo: true,
    ease: "sine.inOut"
});
.scale {
// Función para crear partículas
function createParticles(total) {
    const particles = [];
    const container = document.querySelector('.particles');
    const template = container.querySelector('.particle');
    stroke-dasharray: 5,3;
    for(let i = 0; i < total; i++) {
        const particle = template.cloneNode();
        container.appendChild(particle);
        particles.push(particle);
    }ransform-origin: center center;
    return particles;form 0.8s ease;
}

// Efecto de perspectiva en el colisionador
document.addEventListener('mousemove', (e) => {px);
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
.particle {
    gsap.to('.collider-rings', {
        rotateY: mouseX * 20,px var(--accent-color));
        rotateX: mouseY * 20,
        duration: 1,
        ease: "power2.out"
    });l: none;
}); stroke: var(--shape-color);
    stroke-width: 2;
// Actualizar el efecto de brillo en las líneas
gsap.to('.tech-line', {(0 0 25px var(--accent-color));
    filter: "drop-shadow(0 0 20px rgba(0,255,255,0.8))",
    duration: 1,
    repeat: -1, {
    yoyo: true,
    stagger: {r(--accent-color);
        each: 0.1,2;
        from: "random"20,10;
    }pacity: 0.8;
});

// Mejorar el brillo del núcleo
gsap.to('.core-ring', {
    filter: "drop-shadow(0 0 30px rgba(0,255,255,1))",
    scale: 1.1,
    opacity: 1,
    duration: 0.5,
    repeat: -1,h: 3;
    yoyo: true,array: 15,7;
    ease: "sine.inOut"
});
.particle-paths path {
// Aumentar el brillo de las partículas,255,255,0.6));
gsap.to('.particle', {
    filter: "drop-shadow(0 0 15px rgba(0,255,255,1))",
    scale: 1.5,
    duration: 1,-shadow(0 0 20px var(--accent-color));
    repeat: -1,
    yoyo: true,
    stagger: {
        each: 0.05,ent-color);
        from: "random"
    }ilter: drop-shadow(0 0 10px var(--accent-color));
});

// Animación de las alas
gsap.to('.wing', {2;
    rotateY: 15,-shadow(0 0 25px var(--glow-color));
    rotateX: 5,
    duration: 2,
    repeat: -1,ine {
    yoyo: true,array: 8,4;
    ease: "sine.inOut",
    stagger: {
        each: 0.5
    }uit-line {
}); stroke: var(--accent-color);
    stroke-width: 1;
// Pulso en los nodos de energía
gsap.to('.node', {
    scale: 1.5,p-shadow(0 0 15px var(--accent-color));
    opacity: 0.8,
    duration: 1,
    repeat: -1,
    yoyo: true,-accent-color);
    stagger: {op-shadow(0 0 15px var(--accent-color));
        each: 0.3,eFloat 4s infinite alternate;
        from: "center"w(0 0 5px rgba(68, 255, 153, 0.3));
    }
});
.node-inner {
// Flujo de energía en los circuitos;
gsap.to('.circuit-line', {
    strokeDashoffset: 20,
    duration: 1.5,at {
    repeat: -1,
    ease: "none",: translateY(0);
    stagger: {
        each: 0.2
    }   transform: translateY(-10px);
}); }
}
// Parpadeo del ojo
gsap.to('.eye', {lse {
    scale: 0.8,
    opacity: 0.5,0.3;
    duration: 0.1,
    repeat: -1,
    repeatDelay: 3,
    yoyo: true,: 0.6;
    ease: "none"
}); }
    100% {
// Movimiento de la mandíbula
gsap.to('.mandible', {
    scaleY: 0.9,
    duration: 0.5,
    repeat: -1,
    yoyo: true, el botón técnico */
    ease: "power1.inOut",
    repeatDelay: 2d;
}); bottom: 50px;
    left: 50%;
// Agregar el evento del botón);
document.querySelector('.tech-button').addEventListener('click', () => {
    // Rotar las líneas del botón
    gsap.to('.button-line:first-child', {
        rotation: 45,
        transformOrigin: 'center',
        duration: 0.3
    });
    gsap.to('.button-line:last-child', {
        rotation: -45,
        transformOrigin: 'center',
        duration: 0.3
    });
    
    // Iniciar la transformación
    transformToCollider();
}); stroke: var(--shape-color);
    stroke-width: 3;    filter: drop-shadow(0 0 15px var(--glow-color));}.button-line {    stroke: var(--accent-color);    stroke-width: 3;    transition: all 0.3s ease;}.tech-button:hover .button-border {    filter: drop-shadow(0 0 15px var(--accent-color));}.tech-button:hover .button-line {    stroke: var(--shape-color);    filter: drop-shadow(0 0 8px var(--glow-color));}.button-text {    position: absolute;    bottom: -30px;    left: 50%;    transform: translateX(-50%);    color: var(--shape-color);    font-size: 16px;    opacity: 0;    transition: opacity 0.3s ease;}.tech-button:hover .button-text {    opacity: 1;}


















































































});    });        scale: 1        opacity: 0,        duration: 0.3,    gsap.to('.button-glow', {document.getElementById('transformButton').addEventListener('mouseout', function() {});    });        scale: 1.2        opacity: 0.5,        duration: 0.3,    gsap.to('.button-glow', {document.getElementById('transformButton').addEventListener('mouseover', function() {// Efecto de hover en el botón});    }        gsap.killTweensOf('.collider-rings circle');        // Detener animaciones de los anillos                });            opacity: 0            duration: 0.5,        gsap.to('.particle-system', {                });            ease: "power1.out"            stagger: 0.1,            opacity: 0.4,            scale: 1,            duration: 1,        gsap.to('.energy-nodes use', {                });            ease: "power2.inOut"            rotate: 0,            scale: 1.5,            duration: 1.5,        gsap.to('.dragon-structure', {        // Revertir transformaciones    } else {        });            stagger: 0.2            ease: "none",            repeat: -1,            transformOrigin: "center",            rotate: 360,            duration: 2,        gsap.to('.collider-rings circle', {        // Animar anillos del colisionador                });            opacity: 1            duration: 0.5,        gsap.to('.particle-system', {        // Mostrar sistema de partículas                });            ease: "power1.out"            stagger: 0.1,            opacity: 0.8,            scale: 1.5,            duration: 1,        gsap.to('.energy-nodes use', {        // Animar nodos de energía                });            ease: "power2.inOut"            rotate: 360,            scale: 2,            duration: 1.5,        gsap.to('.dragon-structure', {        // Transformación activada    if (this.classList.contains('active')) {    // Animación del dragón        this.classList.toggle('active');    // Toggle clase activa en el botóndocument.getElementById('transformButton').addEventListener('click', function() {.button-glow {
    fill: none;
    stroke: var(--accent-color);
    stroke-width: 2;
    opacity: 0;
    transform-origin: center;
}

.tech-button.active .button-glow {
    animation: glowPulse 2s infinite;
}

@keyframes glowPulse {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.1);
    }
    100% {
        opacity: 0;
        transform: scale(0.8);
    }
}

.tech-button.active .button-line {
    stroke: var(--accent-color);
    filter: drop-shadow(0 0 10px var(--accent-color));
}

// Registrar el plugin MotionPath
gsap.registerPlugin(MotionPathPlugin);

document.addEventListener('DOMContentLoaded', () => {
    // Animación básica del dragón
    gsap.to('.dragon-structure', {
        duration: 2,
        y: '+=20',
        rotation: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Animación de los nodos de energía
    gsap.to('.node', {
        duration: 1,
        scale: 1.2,
        opacity: 0.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.2
    });

    // Animación de las líneas técnicas
    gsap.to('.tech-line', {
        duration: 1.5,
        opacity: 0.3,
        repeat: -1,
        yoyo: true,
        stagger: 0.1
    });
});

// Registrar plugins necesarios
gsap.registerPlugin(MotionPathPlugin);

// Objeto principal de animaciones del dragón
const dragonAnimations = {
    init() {
        // Animación orbital
        this.setupOrbitalMovement();
        // Animación flotante
        this.setupFloatingMovement();
        // Animación de nodos
        this.setupEnergyNodes();
        // Animación de líneas
        this.setupTechnicalLines();
        // Efecto de perspectiva
        this.setupMousePerspective();
        // Animaciones responsivas
        this.setupResponsiveAnimations();
    },

    setupOrbitalMovement() {
        gsap.to('.dragon-structure', {
            motionPath: {
                path: [
                    {x: 0, y: 0},
                    {x: 300, y: -150},  // Aumentado el rango de movimiento
                    {x: 0, y: -300},
                    {x: -300, y: -150},
                    {x: 0, y: 0}
                ],
                curviness: 2,
                autoRotate: false
            },
            duration: 20,  // Más lento para un movimiento más majestuoso
            repeat: -1,
            ease: "none"
        });
    },

    setupFloatingMovement() {
        gsap.to('.dragon-structure', {
            y: "+=50",  // Aumentado el rango de flotación
            rotation: "+=5",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    },

    setupEnergyNodes() {
        gsap.to('.node', {
            scale: 1.2,
            opacity: 0.8,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
            ease: "sine.inOut"
        });
    },

    setupTechnicalLines() {
        gsap.to('.tech-line', {
            opacity: 0.3,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            stagger: 0.1
        });
    },

    setupMousePerspective() {
        document.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
            
            gsap.to('.dragon-structure', {
                rotateY: mouseX * 15,
                rotateX: mouseY * 10,
                duration: 1,
                ease: "power2.out"
            });
        });
    },

    setupResponsiveAnimations() {
        const mediaQuery = window.matchMedia('(min-width: 1200px)');
        
        const updateAnimationScale = (e) => {
            const scale = e.matches ? 4.5 : 3.5; // Aumentado para que sea más grande
            const amplitude = e.matches ? 50 : 30;
            
            gsap.to('.dragon-structure', {
                scale: scale,
                y: `+=${amplitude}`,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        };

        mediaQuery.addListener(updateAnimationScale);
        updateAnimationScale(mediaQuery);
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    dragonAnimations.init();
});
