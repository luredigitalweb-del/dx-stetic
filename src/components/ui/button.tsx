import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // CTA primário — vermelho da marca
        default:
          "bg-brand-red text-white shadow-red-glow hover:bg-brand-red-dark focus-visible:ring-brand-red focus-visible:ring-offset-white",
        // CTA WhatsApp — verde
        whatsapp:
          "bg-brand-neon text-black shadow-lg shadow-brand-neon/30 hover:bg-brand-neon-dark focus-visible:ring-brand-neon focus-visible:ring-offset-white",
        // botão branco (para usar sobre fundos vermelhos/escuros)
        light:
          "bg-white text-brand-red shadow-soft hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-brand-red",
        // contorno em fundo claro
        outline:
          "border-2 border-brand-ink/15 bg-transparent text-brand-ink hover:border-brand-ink hover:bg-brand-ink hover:text-white focus-visible:ring-brand-ink focus-visible:ring-offset-white",
        // contorno em fundo escuro/foto
        outlineLight:
          "border-2 border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-brand-ink focus-visible:ring-white focus-visible:ring-offset-transparent",
        ghost: "text-brand-ink hover:bg-brand-cloud",
      },
      size: {
        default: "h-11 px-5 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
