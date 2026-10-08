import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({ children, href, variant = "primary", className = "", onClick, type = "button" }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-[14px] md:text-[15px] font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
  
  const variants = {
    primary: "bg-primary text-white shadow-btn-primary hover:bg-primary-hover hover:scale-[1.02]",
    secondary: "bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-light",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
