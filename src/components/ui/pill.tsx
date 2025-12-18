// Utilties
import { twMerge } from "tailwind-merge";

export type PillProps = {
  className?: string;
  children: string;
};

export default function Pill({ className, children }: PillProps) {
  return (
    <div
      className={twMerge(
        "btn text-primary border-primary border text-xs md:text-sm lg:text-base",
        className
      )}
    >
      {children}
    </div>
  );
}
