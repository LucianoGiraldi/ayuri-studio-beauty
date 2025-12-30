import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ayuriIcon from "@/assets/ayuri-icon.ico";

const faqs = [
  {
    question: "Como faço para agendar um horário?",
    answer: "Você pode agendar seu horário entrando em contato pelo WhatsApp (44) 99897-6408. Respondemos rapidamente e encontramos o melhor horário para você!",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos pagamento em dinheiro, cartões de crédito e débito, e Pix. Escolha a forma mais conveniente para você.",
  },
  {
    question: "Quanto tempo dura o alongamento de unhas?",
    answer: "O alongamento em gel dura em média de 3 a 4 semanas, dependendo dos cuidados e do crescimento natural das suas unhas. Recomendamos manutenção a cada 2-3 semanas.",
  },
  {
    question: "Vocês trabalham com unhas encravadas?",
    answer: "Sim, trabalhamos com tratamento de unhas encravadas. Porém, casos mais severos podem requerer avaliação de um podólogo. Agende uma consulta para avaliarmos seu caso.",
  },
  {
    question: "Posso levar meu próprio esmalte?",
    answer: "Claro! Você pode trazer seu esmalte favorito. Porém, temos uma variedade incrível de cores e marcas premium à sua disposição.",
  },
  {
    question: "Quanto tempo dura cada procedimento?",
    answer: "O tempo varia conforme o serviço: manicure simples (40-50 min), esmaltação em gel (1h), alongamento (2-3h), design de sobrancelhas (30-40 min). Informe-se ao agendar.",
  },
  {
    question: "Vocês fazem atendimento a domicílio?",
    answer: "No momento, atendemos apenas em nosso studio na R. Santos Dumont, 3054 - Sala A, Zona 01. Nosso espaço foi preparado especialmente para proporcionar a melhor experiência.",
  },
  {
    question: "É necessário agendar com antecedência?",
    answer: "Sim, recomendamos agendar com pelo menos 1-2 dias de antecedência, especialmente para finais de semana e procedimentos mais longos como alongamento.",
  },
  {
    question: "Vocês atendem gestantes?",
    answer: "Sim! Atendemos gestantes com todo carinho. Utilizamos produtos seguros e oferecemos conforto especial durante o atendimento.",
  },
  {
    question: "Como funciona a limpeza de pele?",
    answer: "Nossa limpeza de pele inclui análise da pele, higienização, esfoliação, extração de cravos, máscara hidratante e massagem facial relaxante. O procedimento leva cerca de 1h.",
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | Ayuri Nails Studio</title>
        <meta
          name="description"
          content="Tire suas dúvidas sobre os serviços do Ayuri Nails Studio em Maringá. Perguntas frequentes sobre agendamento, procedimentos e mais."
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
                FAQ
              </span>
              <h1 className="heading-display text-foreground mb-6">
                Perguntas
                <span className="italic block">Frequentes</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
                Não encontrou o que procura? Entre em contato conosco!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="card-elegant bg-card px-6 border-none animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <AccordionTrigger className="font-display text-lg text-foreground hover:text-primary hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <h2 className="heading-section text-foreground mb-6">
                Ainda tem dúvidas?
              </h2>
              <p className="text-muted-foreground mb-8">
                Entre em contato pelo WhatsApp e teremos prazer em ajudar!
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5544998976408&text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20de%20tirar%20algumas%20duvidas%20&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
