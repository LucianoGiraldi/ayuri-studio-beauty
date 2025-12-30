import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";
import ayuriIcon from "@/assets/ayuri-icon.ico";

const testimonials = [
  {
    name: "Carolina Santos",
    role: "Cliente há 2 anos",
    content: "O Ayuri Nails Studio é simplesmente incrível! A Ayuri tem um talento único para criar designs personalizados. Saio de lá me sentindo uma nova mulher. O ambiente é super aconchegante e a atenção aos detalhes é impressionante.",
    rating: 5,
  },
  {
    name: "Mariana Oliveira",
    role: "Cliente fiel",
    content: "Ambiente super aconchegante e atendimento impecável. Minhas unhas nunca ficaram tão bonitas! Recomendo de olhos fechados para todas as mulheres que buscam qualidade e carinho.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Cliente VIP",
    content: "Já experimentei diversos salões, mas o Ayuri Nails é diferente. A qualidade dos produtos e o carinho no atendimento fazem toda a diferença. Minha experiência sempre supera as expectativas.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Cliente desde 2023",
    content: "A melhor decisão que tomei foi começar a fazer minhas unhas aqui. O alongamento ficou perfeito e muito natural. A Ayuri é uma verdadeira artista!",
    rating: 5,
  },
  {
    name: "Beatriz Mendes",
    role: "Cliente satisfeita",
    content: "Adoro a variedade de designs e as tendências que a Ayuri sempre traz. Cada visita é uma experiência única. O studio é lindo e super higiênico.",
    rating: 5,
  },
  {
    name: "Amanda Rodrigues",
    role: "Cliente indicada",
    content: "Fui indicada por uma amiga e me tornei cliente fiel. O atendimento é impecável, os produtos são de primeira qualidade e o resultado sempre fica incrível!",
    rating: 5,
  },
];

const Depoimentos = () => {
  return (
    <>
      <Helmet>
        <title>Depoimentos | Ayuri Nails Studio</title>
        <meta
          name="description"
          content="Veja o que nossas clientes dizem sobre o Ayuri Nails Studio. Depoimentos reais de mulheres que amam nossos serviços de beleza em Maringá."
        />
        <link rel="icon" href={ayuriIcon} />
      </Helmet>

      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Depoimentos
              </span>
              <h1 className="heading-display text-foreground mb-6">
                O que nossas clientes
                <span className="italic block">estão dizendo</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                A satisfação das nossas clientes é nossa maior recompensa. 
                Confira alguns depoimentos de quem já viveu a experiência Ayuri Nails.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card-elegant p-8 bg-card relative animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-accent" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center">
                      <span className="font-display text-lg text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-display font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <h2 className="heading-section text-foreground mb-6">
                Faça parte da nossa comunidade
              </h2>
              <p className="text-muted-foreground mb-8">
                Venha viver a experiência Ayuri Nails Studio e seja nossa próxima cliente satisfeita!
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5544998976408&text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Agendar meu horário
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Depoimentos;
