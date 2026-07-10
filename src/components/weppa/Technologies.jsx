import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "./SectionReveal";

const techs = [
  { name: "React", color: "#61DAFB", bg: "#61DAFB15", abbr: "Re" },
  { name: "Node.js", color: "#68A063", bg: "#68A06315", abbr: "No" },
  { name: "Python", color: "#3572A5", bg: "#3572A515", abbr: "Py" },
  { name: "PostgreSQL", color: "#336791", bg: "#33679115", abbr: "PG" },
  { name: "AWS", color: "#FF9900", bg: "#FF990015", abbr: "AWS" },
  { name: "Docker", color: "#2496ED", bg: "#2496ED15", abbr: "Do" },
  { name: "TypeScript", color: "#3178C6", bg: "#3178C615", abbr: "TS" },
  { name: "Next.js", color: "#000000", bg: "#00000015", abbr: "Nx" },
  { name: "MongoDB", color: "#47A248", bg: "#47A24815", abbr: "Mg" },
  { name: "Redis", color: "#DC382D", bg: "#DC382D15", abbr: "Rd" },
  { name: "GraphQL", color: "#E535AB", bg: "#E535AB15", abbr: "GQ" },
  { name: "Stripe", color: "#635BFF", bg: "#635BFF15", abbr: "St" },
];

export default function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="tecnologias"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0F1E 0%, #0F172A 100%)" }}
    >
      {/* Aurora bg */}
      <div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, #0066FF 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.15,
        }}
      />
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "500px",
          height: "300px",
          background: "radial-gradient(ellipse, #00BFA5 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.12,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#0066FF]" />
            Stack Tecnológico
            <span className="w-8 h-px bg-[#0066FF]" />
          </span>
          <h2
            className="text-4xl lg:text-5xl font-heading text-white leading-tight"
            style={{ fontWeight: 700 }}
          >
            Construido con las
            <span className="weppa-text-gradient"> Mejores Tecnologías</span>
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-xl mx-auto">
            Usamos herramientas de clase mundial para garantizar rendimiento, escalabilidad y seguridad
          </p>
        </SectionReveal>

        {/* Tech Badges */}
        <div ref={ref} className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="group glass-card rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-300 hover:border-white/20"
            >
              {/* Logo circle */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm font-heading transition-all duration-300"
                style={{
                  background: tech.bg,
                  border: `1px solid ${tech.color}30`,
                  color: tech.color,
                  filter: "grayscale(60%)",
                }}
              >
                <span className="group-hover:opacity-100 transition-all" style={{ color: tech.color }}>
                  {tech.abbr}
                </span>
              </div>
              <span className="text-white/50 text-xs font-medium group-hover:text-white/80 transition-colors text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}