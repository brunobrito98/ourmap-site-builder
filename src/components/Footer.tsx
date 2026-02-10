import { Instagram, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { openAppStore } from "@/lib/openAppStore";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <span
              className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent pb-1"
              style={{ fontFamily: "'Pacifico', cursive", lineHeight: "1.5" }}
            >
              OurMap
            </span>
            <p className="text-muted-foreground text-center md:text-left max-w-xs leading-relaxed">
              Transforme sua cidade em um mapa de oportunidades e experiências únicas.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground tracking-tight">Produto</h3>
            <ul className="space-y-3">
              <li>
                <a href="/funcionalidades" className="text-muted-foreground hover:text-primary transition-colors text-base font-medium hover:translate-x-1 inline-block duration-200">
                  Funcionalidades
                </a>
              </li>
              <li>
                <button onClick={() => openAppStore()} className="text-muted-foreground hover:text-primary transition-colors text-base font-medium hover:translate-x-1 inline-block duration-200 cursor-pointer bg-transparent border-none p-0">
                  Baixar App
                </button>
              </li>
              <li>
                <a href="/manuais" className="text-muted-foreground hover:text-primary transition-colors text-base font-medium hover:translate-x-1 inline-block duration-200">
                  Manuais
                </a>
              </li>
              <li>
                <a href="/suporte" className="text-muted-foreground hover:text-primary transition-colors text-base font-medium hover:translate-x-1 inline-block duration-200">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground tracking-tight">Conecte-se</h3>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/app.ourmap"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:suporte@ourmap.com.br"
                className="w-12 h-12 rounded-xl bg-card border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm font-medium">
              © {currentYear} OurMap. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="/politica-de-privacidade" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Privacidade
            </a>
            <a href="/termos-de-uso" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Termos
            </a>
            <a href="/politica-de-privacidade" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
