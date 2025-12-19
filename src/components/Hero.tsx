import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-nails.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ayuri Nails Studio - Unhas perfeitas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-2 animate-fade-up">
            <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary">
              Beleza & Elegância
            </span>
            <h1 className="heading-display text-foreground leading-tight">
              Transforme suas
              <span className="block italic text-primary">unhas em arte</span>
            </h1>
          </div>

          <p className="text-elegant text-muted-foreground max-w-lg animate-fade-up delay-200">
            Descubra a experiência única do Ayuri Nails Studio. 
            Cuidado personalizado, técnicas modernas e resultados que encantam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <a
              href="https://wa.me/5544998976408"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              Agendar Horário
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="https://instagram.com/ayurinailsstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              Ver Trabalhos
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-8 animate-fade-up delay-400">
            {[
              { value: "500+", label: "Clientes Felizes" },
              { value: "5+", label: "Anos de Experiência" },
              { value: "100%", label: "Satisfação" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block font-display text-2xl md:text-3xl font-medium text-foreground">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-xs tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
