import React from "react";
import { Link, type LinkProps } from "react-router";

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
      ? "bg-primary text-white hover:bg-black/80"
      : "border border-primary text-primary hover:bg-primary hover:text-white";

  let sizeStyles = "";
  if (size === "sm") {
    sizeStyles = "text-sm";
  } else if (size === "lg") {
    sizeStyles = "text-lg";
  }

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  // Internal Route
  if (to) {
    const linkProps = { ...props } as Omit<LinkProps, "to" | "className">;

    return (
      <Link to={to} className={combinedClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  // If an href is provided render as an anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
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
