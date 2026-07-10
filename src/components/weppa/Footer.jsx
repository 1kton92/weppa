import { Zap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  empresa: [
    { label: "Sobre Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Casos de Éxito", href: "#casos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Tecnologías", href: "#tecnologias" },
  ],
};

export default function Footer() {
  const handleNav = (href) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0F1E 0%, #070B14 100%)" }}
    >
      {/* Aurora accent */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "300px",
          background: "radial-gradient(ellipse, #0066FF 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top CTA Banner */}
        <div
          className="rounded-3xl p-8 lg:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #0066FF15, #00BFA515)", border: "1px solid #0066FF25" }}
        >
          <div>
            <h3 className="text-white font-heading font-bold text-2xl lg:text-3xl mb-2" style={{ fontWeight: 700 }}>
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="text-white/50">Primera consulta gratuita, sin compromiso.</p>
          </div>
          <button
            onClick={() => handleNav("#contacto")}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-all duration-200 hover:scale-105 whitespace-nowrap shadow-lg shadow-blue-500/20"
          >
            Hablar con nosotros
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00BFA5] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-heading font-bold text-xl" style={{ fontWeight: 800 }}>
                Weppa
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Soluciones de software personalizadas para que tu negocio crezca sin límites.
            </p>
          </div>

          {/* Links */}
          <div className="order-2 lg:order-none">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="order-1 lg:order-none">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contacto</h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, value: "contacto@weppa.com.ar" },
                { icon: Phone, value: "+54 9 341 511-5053" },
                { icon: MapPin, value: "Rosario, Argentina" },
              ].map(({ icon: Icon, value }) => (
                <li key={value} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span className="text-white/40 text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6 opacity-30" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:pr-24">
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} Weppa. Todos los derechos reservados.
          </p>
          <p className="text-white/25 text-sm">
            Hecho con ♥ en Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}