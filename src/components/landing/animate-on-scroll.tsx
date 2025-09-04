"use client";

import { useRef, useEffect, useState, type ReactNode, type ElementType } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  tag?: ElementType;
  delay?: number;
  triggerOnce?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  tag = "div",
  delay = 0,
  triggerOnce = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const Tag = tag;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [triggerOnce]);

  return (
    <Tag
      ref={ref}
      data-state={isVisible ? "open" : "closed"}
      className={className}
      style={{ "--animation-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
