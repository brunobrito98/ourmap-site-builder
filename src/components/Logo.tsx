import { cn } from "@/lib/utils";
import logoImage from "@/assets/ourmap-logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { container: "w-12 h-12", text: "text-2xl" },
    md: { container: "w-20 h-20", text: "text-4xl" },
    lg: { container: "w-28 h-28", text: "text-5xl" },
  };

  const currentSize = sizes[size];

  return (
    <div className={cn("flex flex-col items-center gap-3 group cursor-pointer", className)}>
      <div className="relative transition-all duration-300 group-hover:scale-110 group-active:scale-105">
        <img 
          src={logoImage} 
          alt="OurMap Logo" 
          className={cn(
            "object-contain",
            currentSize.container
          )}
        />
      </div>

      {showText && (
        <span 
          className={cn(
            "font-pacifico bg-gradient-to-r from-[#E4405F] via-[#D91E52] to-[#C71F5C] bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105",
            currentSize.text
          )}
        >
          OurMap
        </span>
      )}
    </div>
  );
};

export default Logo;
