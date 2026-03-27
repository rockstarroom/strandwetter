import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-nordsee text-salz hover:bg-petrol shadow-soft",
    secondary:
      "border border-nordsee/20 bg-white text-nordsee hover:bg-sand/30",
    ghost:
      "bg-transparent text-nordsee hover:text-petrol",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}