import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) => {
  const baseStyles =
    "transition-all cursor-pointer inline-block rounded-lg px-5 py-3";

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white"
      : "border border-primary text-primary";

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  // If an href is provided render as an anchor tag
  if (href) {
    return (
      <a href={href} className={combinedClassName} {...(props as any)}>
        {children}
      </a>
    );
  }

  // Otherwise, render as a standard button
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
