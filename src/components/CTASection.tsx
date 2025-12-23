import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-10 animate-fade-up">
            <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Agende seu horário
            </span>
            <h2 className="heading-section text-foreground mb-4">
              Pronta para transformar
              <span className="italic block">suas unhas?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Entre em contato conosco e agende seu horário. 
              Estamos esperando você para uma experiência única de beleza!
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/5544998976408"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 group text-lg animate-fade-up delay-200"
          >
            <Phone size={20} />
            Agendar pelo WhatsApp
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-up delay-300">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-display font-medium text-foreground mb-2">Localização</h4>
              <p className="text-muted-foreground text-sm">
                R. Santos Dumont, 3054<br />Sala A - Zona 01, Maringá
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Clock className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-display font-medium text-foreground mb-2">Horário</h4>
              <p className="text-muted-foreground text-sm">
                Seg - Sex: 8h às 19h<br />
                Sáb: 8h às 17h<br />
                Domingo: Fechado
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-display font-medium text-foreground mb-2">Contato</h4>
              <p className="text-muted-foreground text-sm">
                WhatsApp:<br />(44) 99897-6408
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
