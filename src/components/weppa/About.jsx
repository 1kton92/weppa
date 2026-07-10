import SectionReveal from "./SectionReveal";
import { Check } from "lucide-react";

const differentiators = [
  { text: "Trabajás directo con quien desarrolla tu proyecto", color: "#0066FF" },
  { text: "Precios pensados para pymes", color: "#00BFA5" },
  { text: "Soporte real post-entrega", color: "#D97706" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-[#F8FAFC] pt-28 lg:pt-36 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Block */}
          <div>
            <SectionReveal>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">
                <span className="w-8 h-px bg-[#0066FF]" />
                Sobre Nosotros
              </span>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h2
                className="text-4xl lg:text-5xl font-heading text-[#1E293B] leading-tight mb-6"
                style={{ fontWeight: 700 }}
              >
                Transformamos ideas en
                <span className="weppa-text-gradient"> software que funciona</span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-[#1E293B]/60 text-lg leading-relaxed mb-6">
                En Weppa somos un estudio de productos digitales, apasionado por ayudar a las pymes a crecer y
                evolucionar. Creamos herramientas simples, accesibles y escalables que transforman operaciones
                tradicionales en sistemas digitales eficientes.
              </p>
              <p className="text-[#1E293B]/60 text-lg leading-relaxed mb-6">
                Combinando experiencia en procesos y estrategia con desarrollo tecnológico, nuestras soluciones se
                adaptan con fluidez al día a día de cada negocio, haciendo que la digitalización sea un proceso
                simple, confiable y rentable.
              </p>
              <p className="text-[#1E293B]/60 text-lg leading-relaxed">
                Creemos en soluciones claras, sencillas y pensadas para la vida real de cada pyme.
              </p>
            </SectionReveal>
          </div>

          {/* Differentiators — solo desktop */}
          <div className="hidden lg:grid gap-6">
            {differentiators.map((item, i) => (
              <SectionReveal key={item.text} delay={0.15 * i} direction="left">
                <div
                  className="glass-card-light rounded-2xl p-6 flex items-center gap-6 card-hover-glow transition-all duration-300 group cursor-default"
                  style={{ border: "1px solid rgba(0,102,255,0.08)" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: `${item.color}15` }}
                  >
                    <Check className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div className="text-[#1E293B] font-semibold text-lg leading-snug">{item.text}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}