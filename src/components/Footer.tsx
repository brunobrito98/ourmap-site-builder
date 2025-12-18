import { Instagram, Mail } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start">
            <span 
              className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent pb-1"
              style={{ fontFamily: "'Pacifico', cursive", lineHeight: "1.5" }}
            >
              OurMap
            </span>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Produto</h3>
            <ul className="space-y-2">
              <li>
                <a href="/funcionalidades" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="https://app.ourmap.com.br" className="text-muted-foreground hover:text-primary transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                  Baixar App
                </a>
              </li>
              <li>
                <a href="/manuais" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Manuais
                </a>
              </li>
              <li>
                <a href="/suporte" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Conecte-se</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} OurMap. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              suporte@ourmap.com.br
            </p>
          </div>
          <div className="flex gap-6">
            <a href="/politica-de-privacidade" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Termos
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
