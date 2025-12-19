import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Sparkles, Hand, Eye, Droplets, Heart, Star, Scissors, Sun } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Nail Design",
    description: "Unhas artísticas personalizadas com as tendências mais atuais. Trabalhamos com esmaltes, géis e técnicas especiais para criar designs únicos.",
    features: ["Decoração artística", "Nail art temática", "Francesinha moderna", "Pedrarias e adesivos"],
  },
  {
    icon: <Hand className="w-8 h-8" />,
    title: "Manicure & Pedicure",
    description: "Cuidado completo para mãos e pés com produtos premium. Cutilagem perfeita e esmaltação de longa duração.",
    features: ["Cutilagem perfeita", "Hidratação profunda", "Esmalte tradicional ou gel", "Tratamento para unhas fracas"],
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Alongamento de Unhas",
    description: "Técnicas modernas de alongamento para unhas longas e resistentes. Escolha entre diferentes formatos e tamanhos.",
    features: ["Gel moldado", "Acrílico", "Fibra de vidro", "Manutenção mensal"],
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Depilação",
    description: "Depilação profissional com cera e técnica egípcia para uma pele suave e livre de pelos por mais tempo.",
    features: ["Depilação com cera", "Técnica egípcia", "Buço e axila", "Pernas completas"],
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Design de Sobrancelhas",
    description: "Modelagem profissional de sobrancelhas para realçar seu olhar. Técnicas que valorizam o formato do seu rosto.",
    features: ["Design personalizado", "Brow lamination", "Henna", "Correção de falhas"],
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Limpeza de Pele",
    description: "Tratamentos faciais completos para uma pele limpa, saudável e radiante. Massagem relaxante inclusa.",
    features: ["Limpeza profunda", "Extração de cravos", "Máscara hidratante", "Massagem facial"],
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Esmaltação em Gel",
    description: "Esmaltação em gel de alta durabilidade. Cores vibrantes que duram semanas sem descascar.",
    features: ["Durabilidade de 3 semanas", "Secagem rápida UV", "Cores variadas", "Acabamento brilhante"],
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Spa das Mãos",
    description: "Tratamento completo de spa para suas mãos. Relaxe enquanto cuidamos da sua beleza.",
    features: ["Esfoliação", "Hidratação intensiva", "Massagem relaxante", "Parafina"],
  },
];

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Serviços | Ayuri Nails Studio - Maringá PR</title>
        <meta
          name="description"
          content="Conheça todos os serviços do Ayuri Nails Studio: unhas, depilação, sobrancelhas, limpeza de pele e muito mais. Agende seu horário em Maringá!"
        />
        <meta
          name="keywords"
          content="manicure Maringá, pedicure, alongamento de unhas, depilação, design de sobrancelhas, limpeza de pele"
        />
      </Helmet>

      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Nossos Serviços
              </span>
              <h1 className="heading-display text-foreground mb-6">
                Cuidados especiais para
                <span className="italic block">realçar sua beleza</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Oferecemos uma variedade de tratamentos personalizados, todos realizados com 
                produtos de alta qualidade e técnicas modernas.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group card-elegant p-8 bg-card animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg bg-accent/50 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="space-y-4">
                      <h2 className="font-display text-xl font-medium text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-muted-foreground text-xs flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
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
                Pronta para agendar?
              </h2>
              <p className="text-muted-foreground mb-8">
                Entre em contato conosco pelo WhatsApp e agende seu horário. 
                Estamos esperando você!
              </p>
              <a
                href="https://wa.me/5544998976408"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Agendar pelo WhatsApp
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Servicos;
