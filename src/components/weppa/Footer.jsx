import { Zap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  empresa: [
    { label: "¿Quiénes somos?", href: "#nosotros" },
    { label: "¿Qué ofrecemos?", href: "#servicios" },
    { label: "¿Cómo trabajamos?", href: "#proceso" },
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
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="hidden lg:block">
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
          <div className="hidden lg:block">
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
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contacto</h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, value: "contacto@weppa.com.ar" },
                { icon: Phone, value: "+54 9 341 511-5053", href: "https://wa.me/5493415115053" },
                { icon: MapPin, value: "Rosario, Argentina" },
              ].map(({ icon: Icon, value, href }) => (
                <li key={value} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 text-sm whitespace-nowrap hover:text-white transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-white/40 text-sm whitespace-nowrap">{value}</span>
                  )}
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