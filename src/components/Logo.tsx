import { cn } from "@/lib/utils";
import logoImage from "@/assets/ourmap-logo.png";
import { useNavigate } from "react-router-dom";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const navigate = useNavigate();

  const sizes = {
    sm: { container: "w-12 h-12", text: "text-2xl" },
    md: { container: "w-20 h-20", text: "text-4xl" },
    lg: { container: "w-28 h-28", text: "text-5xl" },
  };

  const currentSize = sizes[size];

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div 
      className={cn("inline-flex items-center gap-3 cursor-pointer group", className)}
      onClick={handleClick}
      data-testid="logo"
    >
      <div className="relative transition-all duration-300 group-hover:scale-110 group-active:scale-95">
        <img 
          src={logoImage} 
          alt="OurMap Logo" 
          className={cn(
            "object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300",
            currentSize.container
          )}
        />
      </div>
      {showText && (
        <span 
          className={cn(
            "font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent pb-1",
            currentSize.text
          )}
          style={{ fontFamily: "'Pacifico', cursive", lineHeight: "1.5" }}
          data-testid="text-logo"
        >
          OurMap
        </span>
      )}
    </div>
  );
};

export default Logo;
