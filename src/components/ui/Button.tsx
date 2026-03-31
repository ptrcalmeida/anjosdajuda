import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "donate" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#7E22CE] text-white hover:bg-[#6B21A8] focus-visible:ring-[#7E22CE]",
  donate:
    "bg-[#FF6B4A] text-white hover:bg-[#E55530] focus-visible:ring-[#FF6B4A]",
  outline:
    "border-2 border-[#7E22CE] text-[#7E22CE] bg-transparent hover:bg-[#F3E8FF] focus-visible:ring-[#7E22CE]",
  ghost:
    "text-[#7E22CE] bg-transparent hover:bg-[#F3E8FF] focus-visible:ring-[#7E22CE]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center gap-2 rounded-lg font-semibold",
          "transition-colors duration-150 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
