import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import studioImage from "@/assets/studio-interior.jpg";

const values = [
  {
    title: "Excelência",
    description: "Buscamos a perfeição em cada detalhe do nosso trabalho.",
  },
  {
    title: "Cuidado",
    description: "Tratamos cada cliente com carinho e atenção personalizada.",
  },
  {
    title: "Inovação",
    description: "Estamos sempre atualizadas com as últimas tendências.",
  },
  {
    title: "Higiene",
    description: "Seguimos rigorosos protocolos de esterilização e limpeza.",
  },
];

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Ayuri Nails Studio - Maringá PR</title>
        <meta
          name="description"
          content="Conheça a história do Ayuri Nails Studio em Maringá. Um espaço dedicado à beleza feminina com técnicas modernas e atendimento personalizado."
        />
      </Helmet>

      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6 animate-fade-up">
                <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary">
                  Nossa História
                </span>
                <h1 className="heading-display text-foreground">
                  Ayuri Nails
                  <span className="italic block">Studio</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  O Ayuri Nails Studio nasceu da paixão pela arte das unhas e pelo desejo de criar 
                  um espaço onde cada mulher pudesse se sentir especial. Fundado por Ayuri, o studio 
                  se tornou referência em Maringá pela qualidade e criatividade dos seus trabalhos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa missão é proporcionar uma experiência única de autocuidado, combinando 
                  técnicas modernas, produtos de alta qualidade e um atendimento acolhedor. 
                  Acreditamos que unhas bem cuidadas são uma forma de expressão e empoderamento feminino.
                </p>
              </div>
              <div className="relative animate-fade-up delay-200">
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={studioImage}
                    alt="Ayuri Nails Studio - Interior do Salão"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/50 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
              <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Nossos Valores
              </span>
              <h2 className="heading-section text-foreground">
                O que nos move
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="card-elegant p-6 bg-card text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Nossa Missão
              </span>
              <blockquote className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
                "Transformar cada atendimento em um momento especial de autocuidado, 
                realçando a beleza natural de cada mulher através da arte das unhas."
              </blockquote>
              <p className="mt-6 text-muted-foreground">— Ayuri, Fundadora</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;
