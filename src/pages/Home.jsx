import Navbar from "@/components/weppa/Navbar";
import Hero from "@/components/weppa/Hero";
import About from "@/components/weppa/About";
import Services from "@/components/weppa/Services";
// Deshabilitado temporalmente hasta tener casos de éxito para mostrar. Reactivar import + <CaseStudies /> abajo.
// import CaseStudies from "@/components/weppa/CaseStudies";
import Process from "@/components/weppa/Process";
// Deshabilitado temporalmente. Reactivar import + <Technologies /> abajo.
// import Technologies from "@/components/weppa/Technologies";
import ContactForm from "@/components/weppa/ContactForm";
import Footer from "@/components/weppa/Footer";
import FloatingCTA from "@/components/weppa/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-svh bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <CaseStudies /> */}
        <Process />
        {/* <Technologies /> */}
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}