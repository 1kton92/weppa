import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Palette, Code2, Rocket, ChevronDown } from "lucide-react";
import SectionReveal from "./SectionReveal";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultoría",
    description:
      "Entendemos tu negocio, tus objetivos y los procesos que necesitas mejorar. Definimos juntos el alcance y la solución ideal.",
    color: "#0066FF",
  },
  {
    icon: Palette,
    number: "02",
    title: "Diseño",
    description:
      "Creamos prototipos y wireframes para que puedas ver y aprobar el producto antes de escribir la primera línea de código.",
    color: "#00BFA5",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desarrollo",
    description:
      "Nuestro equipo construye tu solución con las mejores tecnologías. Recibes actualizaciones semanales del progreso.",
    color: "#0066FF",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Lanzamiento & Soporte",
    description:
      "Desplegamos tu solución, capacitamos a tu equipo y te acompañamos con soporte continuo para que todo funcione perfecto.",
    color: "#00BFA5",
  },
];

export default function Process() {
  const lineRef = useRef(null);
  const inView = useInView(lineRef, { once: true, margin: "-100px" });
  const [openStep, setOpenStep] = useState(0);

  return (
    <section id="proceso" className="bg-white pt-0 pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionReveal className="text-center mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#0066FF]" />
            Proceso de Trabajo
            <span className="w-8 h-px bg-[#0066FF]" />
          </span>
          <h2
            className="text-4xl lg:text-5xl font-heading text-[#1E293B] leading-tight max-w-2xl mx-auto"
            style={{ fontWeight: 700 }}
          >
            De la idea al producto en
            <span className="weppa-text-gradient"> 4 pasos claros</span>
          </h2>
        </SectionReveal>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block" ref={lineRef}>
          {/* Connecting Line */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border/60 -translate-y-1/2" />
            <motion.div
              className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-[#0066FF] to-[#00BFA5] -translate-y-1/2"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
            {/* Traveling dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0066FF] shadow-lg shadow-blue-500/50"
              initial={{ left: "0%" }}
              animate={inView ? { left: "100%" } : { left: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="group text-center"
                >
                  {/* Icon Circle */}
                  <div className="relative flex items-center justify-center mx-auto mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 text-xs font-bold font-heading"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-heading font-bold text-[#1E293B] mb-3"
                    style={{ fontWeight: 700 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#1E293B]/55 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, #0066FF, #00BFA5)" }}
          />
          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isOpen = openStep === i;
              return (
                <SectionReveal key={step.title} delay={0.1 * i} direction="left">
                  <div className="flex gap-6 pl-14 relative">
                    {/* Icon on line */}
                    <div
                      className="absolute left-0 z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                        backgroundColor: "#fff",
                        backgroundBlendMode: "normal",
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenStep(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex-1 text-left"
                    >
                      <span className="text-xs font-bold" style={{ color: step.color }}>
                        {step.number}
                      </span>
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className="text-lg font-heading font-bold text-[#1E293B] mb-2"
                          style={{ fontWeight: 700 }}
                        >
                          {step.title}
                        </h3>
                        <ChevronDown
                          className="w-5 h-5 shrink-0 text-[#1E293B]/40 transition-transform duration-300"
                          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </div>
                      <div
                        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                        style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
                      >
                        <p className="text-[#1E293B]/55 text-base leading-relaxed pb-1">
                          {step.description}
                        </p>
                      </div>
                    </button>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}