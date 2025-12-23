import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import ayuriIcon from "@/assets/ayuri-icon.ico";

const blogPosts = [
  {
    id: 1,
    title: "Tendências de Nail Art para 2026",
    excerpt: "Descubra as principais tendências de nail art que vão dominar o ano. Das cores minimalistas às estampas ousadas, inspire-se!",
    date: "01 Out 2025",
    category: "Tendências",
    readTime: "5 min",
    url: "https://stealthelook.com.br/as-nail-arts-tendencia-do-verao-2026-que-estao-bombando-entre-as-estilosas/",
  },
  {
    id: 2,
    title: "Como Manter suas Unhas Saudáveis",
    excerpt: "Dicas essenciais para manter suas unhas fortes e bonitas entre as visitas ao salão. Cuidados diários que fazem a diferença.",
    date: "09 Mai 2025",
    category: "Cuidados",
    readTime: "4 min",
    url: "https://www.nutren.com.br/mulher/artigos/cuidados-com-a-pele/deix-sua-unha-forte?amp=",
  },
  {
    id: 3,
    title: "Alongamento de Unhas: Qual é o Melhor para Você?",
    excerpt: "Gel, acrílico ou fibra de vidro? Entenda as diferenças entre os tipos de alongamento e escolha o ideal para seu estilo de vida.",
    date: "06 Jul 2025",
    category: "Dicas",
    readTime: "6 min",
    url: "https://tatianagabbi.com.br/unhas-de-gel-acrilico-ou-fibra-qual-a-melhor-opcao-para-voce/#:~:text=Qual%20%C3%A9%20a%20melhor%20op%C3%A7%C3%A3o,que%20aplicadas%20e%20removidas%20corretamente.",
  },
  {
    id: 4,
    title: "Brow Lamination: O Que Você Precisa Saber",
    excerpt: "Tudo sobre o tratamento que deixa suas sobrancelhas alinhadas e com volume natural por semanas.",
    date: "03 Jan 2025",
    category: "Sobrancelhas",
    readTime: "4 min",
    url: "https://vermonth.com.br/brow-lamination-tudo-o-que-voce-precisa-saber/",
  },
  {
    id: 5,
    title: "Cores de Esmalte para Cada Ocasião",
    excerpt: "Do trabalho ao casamento, saiba como escolher a cor de esmalte perfeita para cada momento especial da sua vida.",
    date: "23 Out 2025",
    category: "Cores",
    readTime: "5 min",
    url: "https://stealthelook.com.br/7-cores-de-esmalte-chiques-que-combinam-com-tudo/",
  },
  {
    id: 6,
    title: "Os Benefícios da Limpeza de Pele Regular",
    excerpt: "Entenda por que manter uma rotina de limpeza de pele profissional é essencial para a saúde e beleza do seu rosto.",
    date: "23 Fev 2025",
    category: "Skincare",
    readTime: "7 min",
    url: "https://tulipia.com.br/blog/bem-estar-e-saude/os-beneficios-e-a-importancia-da-limpeza-de-pele-tudo-o-que-voce-precisa-saber",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Ayuri Nails Studio</title>
        <meta
          name="description"
          content="Blog do Ayuri Nails Studio: dicas de beleza, tendências de nail art, cuidados com unhas e muito mais. Fique por dentro das novidades!"
        />
        <meta
          name="keywords"
          content="blog beleza, dicas unhas, tendências nail art, cuidados beleza feminina"
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
                Blog
              </span>
              <h1 className="heading-display text-foreground mb-6">
                Dicas & 
                <span className="italic block">Tendências</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Fique por dentro das últimas tendências, dicas de cuidados e novidades 
                do mundo da beleza.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="card-elegant overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                    aria-label={`Abrir postagem ${post.title}`}
                  >
                    {/* Category Badge */}
                    <div className="p-6 pb-0">
                      <span className="inline-block px-3 py-1 bg-accent/50 text-accent-foreground text-xs font-body tracking-wide rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <h2 className="font-display text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-muted-foreground text-xs">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <span className="text-muted-foreground text-xs">
                          {post.readTime} de leitura
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <h2 className="heading-section text-foreground mb-6">
                Quer mais dicas?
              </h2>
              <p className="text-muted-foreground mb-8">
                Siga-nos no Instagram para conteúdos exclusivos e novidades diárias!
              </p>
              <a
                href="https://instagram.com/ayurinailsstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Seguir no Instagram
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

export default Blog;
