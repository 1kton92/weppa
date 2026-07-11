import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const aurora1Ref = useRef(null);
  const aurora2Ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-svh flex flex-col items-center justify-center overflow-hidden weppa-gradient-hero"
      id="inicio"
    >
      {/* Aurora Blobs */}
      <div
        className="absolute aurora-blur pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #0066FF 0%, transparent 70%)",
          left: `${mousePos.x * 0.5}%`,
          top: `${mousePos.y * 0.5}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 1.5s ease, top 1.5s ease",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute aurora-blur pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #00BFA5 0%, transparent 70%)",
          right: `${(100 - mousePos.x) * 0.4}%`,
          bottom: `${(100 - mousePos.y) * 0.4}%`,
          transform: "translate(50%, 50%)",
          transition: "right 2s ease, bottom 2s ease",
          opacity: 0.2,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 2 === 0 ? "4px" : "6px",
            height: i % 2 === 0 ? "4px" : "6px",
            background: i % 3 === 0 ? "#0066FF" : i % 3 === 1 ? "#00BFA5" : "#D97706",
            left: `${15 + i * 13}%`,
            top: `${20 + (i % 4) * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Big Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-4"
        >
          <span
            className="weppa-text-gradient font-heading"
            style={{ fontSize: "clamp(5rem, 16vw, 14rem)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em" }}
          >
            Weppa
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading text-white leading-[1.05] tracking-tight mb-6"
          style={{ fontWeight: 800 }}
        >
          Tu Tienda Online y
          <br />
          <span className="weppa-text-gradient">Gestión,</span>
          <br />
          Simplificados
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/60 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-body font-light"
        >
          Soluciones de software personalizadas para que tu negocio crezca sin límites
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA with pulse ring */}
          <div className="relative">
            <span className="pulse-ring absolute inset-0 rounded-full border-2 border-[#0066FF]/40 pointer-events-none" />
            <button
              onClick={() => handleScroll("#contacto")}
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0066FF] text-white font-semibold text-base lg:text-lg hover:bg-[#0052CC] transition-all duration-200 hover:scale-105 shadow-2xl shadow-blue-500/30"
            >
              Comenzar Ahora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Secondary CTA — deshabilitado junto con la sección de Casos de Éxito hasta tener casos para mostrar */}
          {/* <button
            onClick={() => handleScroll("#casos")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base lg:text-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
          >
            <Play className="w-4 h-4 fill-current" />
            Ver Casos de Éxito
          </button> */}
        </motion.div>

        {/* Stats bar — deshabilitado hasta tener números reales para mostrar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "50+", label: "Clientes" },
            { value: "10+", label: "Años" },
            { value: "100+", label: "Proyectos" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white" style={{ fontWeight: 700 }}>
                {stat.value}
              </div>
              <div className="text-white/40 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#nosotros")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}