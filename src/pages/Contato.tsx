import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Instagram, ArrowRight } from "lucide-react";
import fachadaImage from "@/assets/fachada.png";
import ayuriIcon from "@/assets/ayuri-icon.ico";

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Ayuri Nails Studio</title>
        <meta
          name="description"
          content="Entre em contato com o Ayuri Nails Studio em Maringá. Endereço: R. Santos Dumont, 3054 - Sala A, Zona 01. WhatsApp: (44) 99897-6408."
        />
        <link rel="icon" href={ayuriIcon} />
      </Helmet>

      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section
          className="section-padding bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(12, 14, 18, 0.70), rgba(12, 14, 18, 0.70)), url(${fachadaImage})`,
          }}
        >
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Contato
              </span>
              <h1 className="heading-display text-white mb-6">
                Fale
                <span className="italic block">conosco</span>
              </h1>
              <p className="text-white text-lg">
                Estamos prontas para atender você! Entre em contato pelo WhatsApp 
                ou venha nos visitar em nosso studio.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="card-elegant p-8 bg-card animate-fade-up">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-2">
                        Endereço
                      </h3>
                      <p className="text-muted-foreground">
                        R. Santos Dumont, 3054 - Sala A<br />
                        Zona 01, Maringá - PR<br />
                        CEP: 87013-050
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant p-8 bg-card animate-fade-up delay-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center text-primary flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-2">
                        WhatsApp
                      </h3>
                      <a
                        href="https://api.whatsapp.com/send/?phone=5544998976408&text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        (44) 99897-6408
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        Clique para iniciar uma conversa
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant p-8 bg-card animate-fade-up delay-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center text-primary flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-2">
                        Horário de Funcionamento
                      </h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta - 8h às 19h<br />
                        Sábado - 8h às 17h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant p-8 bg-card animate-fade-up delay-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center text-primary flex-shrink-0">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-2">
                        Instagram
                      </h3>
                      <a
                        href="https://instagram.com/ayurinailsstudio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        @ayurinailsstudio
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        Siga-nos para novidades e inspirações
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="animate-fade-up delay-200">
                <div className="card-elegant overflow-hidden h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.0731968689847!2d-51.93756068502!3d-23.4206789846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0b5c2c0c0c1%3A0x5c0c0c0c0c0c0c0c!2sR.%20Santos%20Dumont%2C%203054%20-%20Zona%2001%2C%20Maring%C3%A1%20-%20PR%2C%2087013-050!5e0!3m2!1spt-BR!2sbr!4v1702900000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Ayuri Nails Studio"
                  />
                </div>
              </div>
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
                Clique no botão abaixo e fale diretamente conosco pelo WhatsApp. 
                Responderemos rapidamente!
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5544998976408&text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group text-lg"
              >
                <Phone size={20} />
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

export default Contato;
