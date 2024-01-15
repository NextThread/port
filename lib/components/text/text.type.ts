import type { HTMLAttributes, PropsWithChildren } from "react";

export type TextProps = PropsWithChildren & HTMLAttributes<HTMLParagraphElement> & {
  type?: "p" | "h3" | "h2" | "h1";
  color?: "white" | "black" | "gray" | "red" | "green" | "cyan" | "yellow";
  size?: "small" | "base" | "large" | "xl" | "2xl" | "3xl";
}