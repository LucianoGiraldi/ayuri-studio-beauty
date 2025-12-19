import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carolina Santos",
    role: "Cliente há 2 anos",
    content: "O Ayuri Nails Studio é simplesmente incrível! A Ayuri tem um talento único para criar designs personalizados. Saio de lá me sentindo uma nova mulher.",
    rating: 5,
  },
  {
    name: "Mariana Oliveira",
    role: "Cliente fiel",
    content: "Ambiente super aconchegante e atendimento impecável. Minhas unhas nunca ficaram tão bonitas! Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Cliente VIP",
    content: "Já experimentei diversos salões, mas o Ayuri Nails é diferente. A qualidade dos produtos e o carinho no atendimento fazem toda a diferença.",
    rating: 5,
  },
];

const TestimonialsPreview = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Depoimentos
          </span>
          <h2 className="heading-section text-foreground mb-4">
            O que nossas clientes
            <span className="italic block">estão dizendo</span>
          </h2>
          <p className="text-muted-foreground">
            A satisfação das nossas clientes é nossa maior recompensa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elegant p-8 bg-card relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center">
                  <span className="font-display text-sm text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display text-sm font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up delay-300">
          <Link
            to="/depoimentos"
            className="inline-flex items-center gap-2 text-primary font-body font-medium link-underline group"
          >
            Ver mais depoimentos
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
