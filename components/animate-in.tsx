"use client";

import { useInView } from "@/hooks/use-in-view";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "fade-in-scale" | "fade-in-from-left" | "fade-in-from-right";
  delay?: number;
  triggerOnScroll?: boolean;
}

export function AnimateIn({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  triggerOnScroll = true,
}: AnimateInProps) {
  const { ref, isInView } = useInView();

  const shouldAnimate = triggerOnScroll ? isInView : true;

  return (
    <div
      ref={ref}
      className={`opacity-0 ${shouldAnimate ? `animate-${animation}` : ""} ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
