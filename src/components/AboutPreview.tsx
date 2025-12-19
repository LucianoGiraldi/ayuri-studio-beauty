import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import studioImage from "@/assets/studio-interior.jpg";

const features = [
  "Ambiente acolhedor e higienizado",
  "Produtos de alta qualidade",
  "Atendimento personalizado",
  "Profissionais qualificadas",
];

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={studioImage}
                alt="Ayuri Nails Studio - Interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/50 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-up delay-200">
            <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary">
              Sobre Nós
            </span>
            <h2 className="heading-section text-foreground">
              Um espaço dedicado à
              <span className="italic block">sua beleza</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O Ayuri Nails Studio nasceu do amor pela arte das unhas e pela beleza feminina. 
              Nossa missão é proporcionar uma experiência única de autocuidado, onde cada cliente 
              se sinta especial e acolhida.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com técnicas modernas e produtos de qualidade, transformamos suas unhas em 
              verdadeiras obras de arte. Venha conhecer nosso espaço em Maringá!
            </p>

            {/* Features */}
            <ul className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-4">
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-primary font-body font-medium link-underline group"
              >
                Conheça nossa história
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
