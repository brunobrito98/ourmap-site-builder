import logoImage from "@/assets/ourmap-logo.png";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const textSizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  };

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div 
        className={cn(
          "transition-all duration-300 hover:scale-110 active:scale-105 cursor-pointer",
          sizeClasses[size]
        )}
      >
        <img
          src={logoImage}
          alt="OurMap Logo"
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <span 
          className={cn(
            "font-pacifico text-primary transition-all duration-300 hover:scale-105",
            textSizeClasses[size]
          )}
        >
          OurMap
        </span>
      )}
    </div>
  );
};

export default Logo;
