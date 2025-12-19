import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Hand, Eye, Droplets, Heart, Star } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Nail Design",
    description: "Unhas artísticas personalizadas com as tendências mais atuais.",
  },
  {
    icon: <Hand className="w-6 h-6" />,
    title: "Manicure & Pedicure",
    description: "Cuidado completo para mãos e pés com produtos premium.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Alongamento",
    description: "Técnicas modernas de alongamento: gel, acrílico e fibra de vidro.",
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Depilação",
    description: "Depilação com cera e técnica egípcia para pele suave.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Sobrancelhas",
    description: "Design de sobrancelhas e brow lamination profissional.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Limpeza de Pele",
    description: "Tratamentos faciais e massagem relaxante.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Nossos Serviços
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Cuidados especiais para
            <span className="italic block">realçar sua beleza</span>
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma variedade de tratamentos personalizados para você se sentir ainda mais bonita.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-elegant p-8 bg-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up delay-500">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 text-primary font-body font-medium link-underline group"
          >
            Ver todos os serviços
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
