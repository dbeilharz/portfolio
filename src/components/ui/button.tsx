import React from "react";
import { Link } from "react-router";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  className = "",
  ...props
}) => {
  const baseStyles =
    "transition-all cursor-pointer inline-block rounded-lg px-5 py-3";

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white"
      : "border border-primary text-primary";

  const sizeStyles = size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "";

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  // Internal Route
  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...(props as any)}>
        {children}
      </Link>
    );
  }

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
