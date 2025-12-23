import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Instagram, ArrowRight } from "lucide-react";
import ayuriIcon from "@/assets/ayuri-icon.ico";
import NailArt from "@/assets/nail-art.jpg";
import Sobrancelha from "@/assets/design-sobrancelha.jpg";
import EsmaltacaoGel from "@/assets/esmaltacao-gel.jpg";
import decoracao from "@/assets/decoracao-exclusiva.jpg";
import Vermelha from "@/assets/vermelha.jpg";
import limpezapele from "@/assets/limpeza-pele.mp4";



const portfolioItems = [
  { image: NailArt, title: "Nail Art Elegante", category: "Nail Design" },
  { image: Sobrancelha, title: "Design de Sobrancelha", category: "Sobrancelhas" },
  { image: EsmaltacaoGel, title: "Esmaltação em Gel", category: "Gel" },
  { image: Vermelha, title: "Esmaltação em gel com glitter", category: "Nail Design" },
  { image: decoracao, title: "Decoração Exclusiva", category: "Nail Design" },
  { image: limpezapele, title: "Limpeza de pele", category: "Serviços" },
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfólio | Ayuri Nails Studio </title>
        <meta
          name="description"
          content="Veja nossos trabalhos de nail design, alongamento de unhas e muito mais. Inspiração para suas unhas no Ayuri Nails Studio em Maringá."
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
                Portfólio
              </span>
              <h1 className="heading-display text-foreground mb-6">
                Nossos
                <span className="italic block">trabalhos</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Confira alguns dos nossos trabalhos e inspire-se para sua próxima visita.
                Siga-nos no Instagram para ver ainda mais!
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-lg overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.image.toLowerCase().endsWith(".mp4") ? (
                    <video
                      src={item.image}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      playsInline
                      loop
                      muted
                      controls
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                    <div>
                      <span className="text-primary-foreground/80 text-xs uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-display text-lg text-primary-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Instagram CTA */}
            <div className="text-center mt-16 animate-fade-up">
              <p className="text-muted-foreground mb-6">
                Quer ver mais dos nossos trabalhos? Siga-nos no Instagram!
              </p>
              <a
                href="https://instagram.com/ayurinailsstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                <Instagram size={20} />
                Seguir @ayurinailsstudio
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

export default Portfolio;
