import { cn } from "@/lib/utils";
import { MapPin, PartyPopper, Calendar } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { container: "w-12 h-12", icon: 20, decorative: 12, text: "text-2xl" },
    md: { container: "w-20 h-20", icon: 32, decorative: 18, text: "text-4xl" },
    lg: { container: "w-28 h-28", icon: 44, decorative: 24, text: "text-5xl" },
  };

  const currentSize = sizes[size];

  return (
    <div className={cn("flex flex-col items-center gap-3 group cursor-pointer", className)}>
      {/* Logo Icon */}
      <div className="relative transition-all duration-300 group-hover:scale-110 group-active:scale-105">
        {/* Background rounded square with gradient */}
        <div 
          className={cn(
            "relative rounded-3xl bg-gradient-to-br from-primary via-[#E85D75] to-[#E4405F] shadow-lg group-hover:shadow-[var(--shadow-glow)] transition-all duration-300",
            currentSize.container
          )}
        >
          {/* Main pin icon in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin 
              size={currentSize.icon} 
              className="text-white fill-white"
              strokeWidth={2.5}
            />
          </div>
          
          {/* Decorative icons - top left */}
          <div className="absolute top-[15%] left-[12%]">
            <PartyPopper 
              size={currentSize.decorative} 
              className="text-white/90"
              strokeWidth={2}
            />
          </div>
          
          {/* Decorative icons - top right */}
          <div className="absolute top-[15%] right-[12%]">
            <Calendar 
              size={currentSize.decorative} 
              className="text-white/90"
              strokeWidth={2}
            />
          </div>
        </div>
      </div>

      {/* Text */}
      {showText && (
        <span 
          className={cn(
            "font-pacifico text-primary transition-all duration-300 group-hover:scale-105",
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
