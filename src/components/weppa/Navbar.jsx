import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Bienvenidos", href: "#inicio" },
  { label: "¿Quiénes somos?", href: "#nosotros" },
  { label: "¿Qué ofrecemos?", href: "#servicios" },
  // { label: "Casos de Éxito", href: "#casos" }, // deshabilitado junto con la sección hasta tener casos para mostrar
  { label: "¿Cómo trabajamos?", href: "#proceso" },
  // { label: "Tecnologías", href: "#tecnologias" }, // deshabilitado junto con la sección
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-[border-color,box-shadow] duration-500 [transform:translateZ(0)] will-change-transform ${
          scrolled ? "shadow-sm border-b border-border/40" : "border-b border-transparent"
        }`}
      >
        {/* Blur layer: always mounted, only opacity toggles so the compositor never has to
            create/destroy the backdrop-filter layer mid-scroll (avoids mobile repaint glitch) */}
        <div
          className={`absolute inset-0 nav-blur transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Plain div, no Framer Motion: any transform Framer Motion leaves inline after
            animating desyncs the mobile touch hit-region from the visible button (same
            bug class as the earlier backdrop-filter glitch), so the entrance slide/fade
            was removed entirely rather than patched. */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`flex items-center gap-2 group transition-transform duration-300 md:translate-y-0 ${
                scrolled ? "translate-y-0" : "translate-y-2"
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00BFA5] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span
                className={`text-xl font-800 tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-[#1E293B]" : "text-white"
                }`}
                style={{ fontWeight: 700, fontFamily: "'Comfortaa', sans-serif" }}
              >
                weppa
              </span>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-base font-medium transition-colors duration-200 hover:text-[#0066FF] ${
                    scrolled ? "text-[#1E293B]/70" : "text-white/80"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNav("#contacto")}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0066FF] text-white text-sm font-semibold hover:bg-[#0052CC] transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Contacto
              </button>
              <button
                type="button"
                className={`md:hidden pt-8 pr-8 pb-4 pl-4 -mt-6 -mr-6 -mb-2 -ml-2 rounded-lg transition-colors [touch-action:manipulation] ${
                  scrolled ? "text-[#1E293B]" : "text-white"
                }`}
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                {mobileOpen ? (
                  <X className={`w-7 h-7 transition-transform duration-300 ${scrolled ? "translate-y-0" : "translate-y-2"}`} />
                ) : (
                  <Menu className={`w-7 h-7 transition-transform duration-300 ${scrolled ? "translate-y-0" : "translate-y-2"}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 nav-blur border-b border-border/40 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-base font-medium text-[#1E293B]/80 hover:text-[#0066FF] transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contacto")}
                className="mt-2 w-full py-3 rounded-full bg-[#0066FF] text-white font-semibold text-sm hover:bg-[#0052CC] transition-colors"
              >
                Contacto
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}