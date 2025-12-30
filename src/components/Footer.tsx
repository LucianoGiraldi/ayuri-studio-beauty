import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Ayuri Nails Studio" className="h-16 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando a beleza das suas mãos com cuidado, técnica e elegância. 
              Seu momento de autocuidado começa aqui.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/ayurinailsstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5544998976408&text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Sobre Nós", path: "/sobre" },
                { name: "Serviços", path: "/servicos" },
                { name: "Portfólio", path: "/portfolio" },
                { name: "Blog", path: "/blog" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 link-underline w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium">Serviços</h4>
            <nav className="flex flex-col gap-3">
              {[
                "Nail Design",
                "Manicure & Pedicure",
                "Alongamento de Unhas",
                "Depilação",
                "Sobrancelhas",
                "Limpeza de Pele",
              ].map((service) => (
                <span
                  key={service}
                  className="text-muted-foreground text-sm"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-medium">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  R. Santos Dumont, 3054 - Sala A<br />
                  Zona 01, Maringá - PR<br />
                  87013-050
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/5544998976408"
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  (44) 99897-6408
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Seg -Sex: 8h às 19h<br />
                  Sáb: 8h às 17h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Ayuri Nails Studio. Todos os direitos reservados.
          </p>
          <a
            href="https://lp.buenomaestri.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-xs hover:text-foreground transition-colors duration-300 link-underline"
          >
            Desenvolvido por Bueno & Maestri
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
