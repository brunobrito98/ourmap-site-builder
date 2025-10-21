import { cn } from "@/lib/utils";
import logoImage from "@/assets/ourmap-logo.png";
import { useNavigate } from "react-router-dom";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, showText = false, size = "md" }: LogoProps) => {
  const navigate = useNavigate();

  const sizes = {
    sm: { container: "w-12 h-12" },
    md: { container: "w-20 h-20" },
    lg: { container: "w-28 h-28" },
  };

  const currentSize = sizes[size];

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div 
      className={cn("inline-block cursor-pointer group", className)}
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
    </div>
  );
};

export default Logo;
