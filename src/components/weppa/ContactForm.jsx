import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionReveal from "./SectionReveal";

const schema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  phone: z.string().min(6, "Ingresa un teléfono válido").optional().or(z.literal("")),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [focusedFields, setFocusedFields] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const fieldProps = (field, placeholder) => {
    const { onBlur, ...rest } = register(field);
    return {
      ...rest,
      placeholder: focusedFields[field] ? "" : placeholder,
      onFocus: () => setFocusedFields((prev) => ({ ...prev, [field]: true })),
      onBlur: (e) => {
        onBlur(e);
        setFocusedFields((prev) => ({ ...prev, [field]: false }));
      },
    };
  };

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          time: new Date().toLocaleString("es-AR"),
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl bg-white border text-[#1E293B] placeholder-[#94A3B8] text-base font-body transition-all duration-200 outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent ${
      errors[field] ? "border-red-400 focus:ring-red-400" : "border-border hover:border-[#0066FF]/40"
    }`;

  return (
    <section id="contacto" className="bg-white pt-0 pb-28 lg:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionReveal className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#0066FF]" />
            Contacto
            <span className="w-8 h-px bg-[#0066FF]" />
          </span>
          <h2
            className="text-4xl lg:text-5xl font-heading text-[#1E293B] leading-tight max-w-2xl mx-auto"
            style={{ fontWeight: 700 }}
          >
            ¿Listo para transformar
            <span className="weppa-text-gradient"> tu negocio?</span>
          </h2>
          <p className="text-[#1E293B]/55 text-lg mt-4 max-w-lg mx-auto">
            Cuéntanos tu idea, nos encantaría ayudarte a hacerla realidad
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <SectionReveal className="lg:col-span-2" direction="right">
            <div className="space-y-8">
              <div className="hidden lg:block">
                <h3
                  className="text-2xl font-heading font-bold text-[#1E293B] mb-3"
                  style={{ fontWeight: 700 }}
                >
                  Hablemos de tu proyecto
                </h3>
                <p className="text-[#1E293B]/55 leading-relaxed">
                  Ya sea que estés comenzando desde cero o necesites mejorar tu sistema actual, estamos aquí para
                  ayudarte.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "contacto@weppa.com.ar", color: "#0066FF" },
                  {
                    icon: Phone,
                    label: "Teléfono",
                    value: "+54 9 341 511-5053",
                    color: "#00BFA5",
                    href: "https://wa.me/5493415115053",
                  },
                  { icon: MapPin, label: "Ubicación", value: "Rosario, Argentina", color: "#D97706", hideOnMobile: true },
                ].map(({ icon: Icon, label, value, color, href, hideOnMobile }) => (
                  <div key={label} className={`items-center gap-4 ${hideOnMobile ? "hidden lg:flex" : "flex"}`}>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs text-[#1E293B]/40 uppercase tracking-wide">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1E293B] font-medium text-sm hover:text-[#00BFA5] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-[#1E293B] font-medium text-sm">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Right: Form */}
          <SectionReveal className="lg:col-span-3" direction="left">
            <div className="rounded-3xl p-8 lg:p-10 bg-[#F8FAFC] border border-border/50">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-[#00BFA5] mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-[#1E293B] mb-2" style={{ fontWeight: 700 }}>
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-[#1E293B]/60 mb-6">
                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                        Nombre*
                      </label>
                      <input
                        {...fieldProps("name", "Juan García")}
                        className={inputClass("name")}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                        Email *
                      </label>
                      <input
                        {...fieldProps("email", "juan@tuempresa.com")}
                        type="email"
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                      Teléfono
                    </label>
                    <input
                      {...fieldProps("phone", "+54 9 11 1234-5678")}
                      className={inputClass("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                      Cuéntanos tu proyecto *
                    </label>
                    <textarea
                      {...fieldProps("message", "Necesito una tienda online para vender ropa, con carrito de compras y pagos con tarjeta...")}
                      rows={4}
                      className={`${inputClass("message")} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-sm text-red-500 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Hubo un problema al enviar el mensaje. Intenta nuevamente.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-[#0066FF] text-white font-semibold text-base hover:bg-[#0052CC] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-500/20"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Consulta
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}