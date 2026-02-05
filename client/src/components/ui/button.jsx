import * as React from "react";

const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "md",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
    };
    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4",
      lg: "h-12 px-6 text-lg",
    };
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
export { Button };
