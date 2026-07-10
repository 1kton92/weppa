import { ShoppingCart, BarChart2, Headphones, Check, ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";

const services = [
  {
    icon: ShoppingCart,
    color: "#0066FF",
    gradient: "from-blue-500/10 to-blue-600/5",
    borderHover: "hover:border-blue-400/40",
    glowClass: "card-hover-glow",
    title: "Tu tienda online, lista",
    description:
      "Sistema modular que incluye catálogo de productos, stock en tiempo real, gestión de pedidos, usuarios, clientes, reportes y workflows. Customizable según la industria y los procesos de cada negocio.",
    features: [],
  },
  {
    icon: BarChart2,
    color: "#00BFA5",
    gradient: "from-teal-500/10 to-teal-600/5",
    borderHover: "hover:border-teal-400/40",
    glowClass: "teal-hover-glow",
    title: "Soluciones a medida",
    description:
      "Cuando tu operación necesita funcionalidades específicas, desarrollamos una solución exclusiva para la realidad de tu negocio. Analizamos tus procesos, diseñamos el flujo ideal y construimos un sistema totalmente personalizado.",
    features: [],
  },
  {
    icon: Headphones,
    color: "#D97706",
    gradient: "from-amber-500/10 to-amber-600/5",
    borderHover: "hover:border-amber-400/40",
    glowClass: "amber-hover-glow",
    title: "Mantenimiento y soporte",
    description:
      "Todos nuestros servicios incluyen un servicio de mantenimiento que cubre el hosting, seguridad, monitoreo y asistencia continua para garantizar estabilidad y evolución del sistema.",
    features: [],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white pt-0 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#0066FF]" />
            Nuestros Servicios
            <span className="w-8 h-px bg-[#0066FF]" />
          </span>
          <h2
            className="text-4xl lg:text-5xl font-heading text-[#1E293B] leading-tight max-w-2xl mx-auto"
            style={{ fontWeight: 700 }}
          >
            Todo lo que tu negocio necesita para
            <span className="weppa-text-gradient"> crecer</span>
          </h2>
        </SectionReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <SectionReveal key={svc.title} delay={0.15 * i}>
                <div
                  className={`group relative h-full rounded-3xl border border-border/60 bg-white p-8 flex flex-col ${svc.glowClass} ${svc.borderHover} transition-all duration-300 hover:-translate-y-1 cursor-default`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    style={{ border: `1px solid ${svc.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: svc.color }} />
                  </div>

                  {/* Text */}
                  <h3
                    className="text-xl font-heading font-bold text-[#1E293B] mb-3"
                    style={{ fontWeight: 700 }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-[#1E293B]/55 text-base leading-relaxed mb-6">{svc.description}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: `${svc.color}15` }}
                        >
                          <Check className="w-3 h-3" style={{ color: svc.color }} />
                        </span>
                        <span className="text-sm text-[#1E293B]/60">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-auto flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group/btn"
                    style={{ color: svc.color }}
                  >
                    Más información
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}