import { Star, TrendingUp } from "lucide-react";
import SectionReveal from "./SectionReveal";

const cases = [
  {
    company: "FoodMarket Pro",
    industry: "Alimentación & Retail",
    metric: "+45%",
    metricLabel: "Ventas Online",
    metricColor: "#00BFA5",
    description:
      "Weppa construyó nuestra tienda online desde cero. En 3 meses ya teníamos más pedidos de los que imaginábamos. El proceso fue claro y el equipo estuvo siempre presente.",
    name: "Daniela Romero",
    role: "Fundadora & CEO",
    initials: "DR",
    avatarColor: "#0066FF",
    tag: "Ecommerce",
  },
  {
    company: "LogiTrans SA",
    industry: "Logística & Transporte",
    metric: "-30%",
    metricLabel: "Costos Operativos",
    metricColor: "#0066FF",
    description:
      "El sistema de gestión que desarrollaron automatizó procesos que antes hacíamos a mano. Ahorramos tiempo, dinero y errores. Una inversión que ya se pagó sola.",
    name: "Martín Vega",
    role: "Director de Operaciones",
    initials: "MV",
    avatarColor: "#00BFA5",
    tag: "Software de Gestión",
  },
  {
    company: "MedCenter Clinic",
    industry: "Salud & Bienestar",
    metric: "3×",
    metricLabel: "Eficiencia Admin.",
    metricColor: "#D97706",
    description:
      "Necesitábamos un sistema para gestionar turnos, historial de pacientes y pagos. Weppa entendió nuestro negocio a la perfección y entregó exactamente lo que necesitábamos.",
    name: "Valentina Cruz",
    role: "Administradora General",
    initials: "VC",
    avatarColor: "#D97706",
    tag: "Software a Medida",
  },
  {
    company: "Estudio Bloom",
    industry: "Diseño & Creatividad",
    metric: "+60%",
    metricLabel: "Leads Digitales",
    metricColor: "#00BFA5",
    description:
      "Nuestra presencia digital era inexistente. Hoy tenemos un sitio web que convierte y un sistema que automatiza el 80% de las consultas. Recomiendo Weppa sin dudarlo.",
    name: "Federico Soto",
    role: "Socio Fundador",
    initials: "FS",
    avatarColor: "#0066FF",
    tag: "Consultoría Digital",
  },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="bg-[#F8FAFC] py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#0066FF]" />
            Casos de Éxito
            <span className="w-8 h-px bg-[#0066FF]" />
          </span>
          <h2
            className="text-4xl lg:text-5xl font-heading text-[#1E293B] leading-tight max-w-2xl mx-auto"
            style={{ fontWeight: 700 }}
          >
            Resultados reales para
            <span className="weppa-text-gradient"> negocios reales</span>
          </h2>
          <p className="text-[#1E293B]/55 text-lg mt-4 max-w-xl mx-auto">
            Empresas que confiaron en Weppa y transformaron su operación
          </p>
        </SectionReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <SectionReveal key={c.company} delay={0.12 * i}>
              <div className="group relative bg-white rounded-3xl p-8 border border-border/50 card-hover-glow hover:border-blue-200/50 transition-all duration-300 hover:-translate-y-1 cursor-default">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
                      style={{ background: `${c.metricColor}15`, color: c.metricColor }}
                    >
                      {c.tag}
                    </span>
                    <div className="text-[#1E293B] font-heading font-bold text-lg">{c.company}</div>
                    <div className="text-[#1E293B]/40 text-sm">{c.industry}</div>
                  </div>

                  {/* KPI Badge */}
                  <div
                    className="flex flex-col items-center justify-center rounded-2xl px-4 py-3 text-center min-w-[80px]"
                    style={{ background: `${c.metricColor}12`, border: `1px solid ${c.metricColor}30` }}
                  >
                    <TrendingUp className="w-4 h-4 mb-1" style={{ color: c.metricColor }} />
                    <span
                      className="text-2xl font-heading font-bold leading-none"
                      style={{ color: c.metricColor, fontWeight: 800 }}
                    >
                      {c.metric}
                    </span>
                    <span className="text-xs mt-1" style={{ color: c.metricColor }}>
                      {c.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="section-divider mb-6 opacity-50" />

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
                  ))}
                </div>

                {/* Testimony */}
                <p className="text-[#1E293B]/65 text-base leading-relaxed mb-6 italic">
                  "{c.description}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: `linear-gradient(135deg, ${c.avatarColor}, ${c.avatarColor}90)` }}
                  >
                    {c.initials}
                  </div>
                  <div>
                    <div className="text-[#1E293B] font-semibold text-sm">{c.name}</div>
                    <div className="text-[#1E293B]/40 text-xs">{c.role}</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}