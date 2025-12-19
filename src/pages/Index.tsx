import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ayuri Nails Studio | Nail Design & Beleza Feminina em Maringá</title>
        <meta
          name="description"
          content="Ayuri Nails Studio em Maringá-PR: unhas artísticas, manicure, pedicure, depilação, sobrancelhas e limpeza de pele. Agende seu horário!"
        />
        <meta
          name="keywords"
          content="unhas, nail design, manicure, pedicure, depilação, sobrancelha, limpeza de pele, beleza feminina, Maringá, PR"
        />
        <link rel="canonical" href="https://ayurinailsstudio.com.br" />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
        <AboutPreview />
        <TestimonialsPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
