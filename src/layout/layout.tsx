import React from "react";

// Utilities
import { twMerge } from "tailwind-merge";

export type WrapperProps = {
  as?: "section" | "header" | "footer" | "div";
  className?: string;
  bgClassName?: string;
  children?: React.ReactNode;
};

export default function Wrapper({
  as: Tag = "section",
  className,
  bgClassName,
  children,
}: WrapperProps) {
  return (
    <Tag className={twMerge("flex justify-center", bgClassName)}>
      <div
        className={twMerge(
          "flex w-full max-w-360 flex-col gap-8 px-10 py-8 lg:px-20 lg:py-12",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
