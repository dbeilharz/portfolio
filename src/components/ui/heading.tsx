import React from "react";

// Utilities
import { twMerge } from "tailwind-merge";

export type HeadingProps = {
  as?: "h1" | "h2";
  className?: string;
  children: React.ReactNode;
};

export default function Heading({
  as: Tag = "h1",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag
      className={twMerge(
        "font-poppins text-heading text-2xl font-light lg:text-5xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}
