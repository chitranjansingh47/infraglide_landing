import React, { useRef, useMemo, useEffect, useState } from "react";
import gsap from "gsap";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  textClassName?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

export function TypingText({
  text,
  speed = 0.03,
  className = "",
  textClassName = "",
  cursor = true,
  onComplete,
}: TypingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Clear references array on each render so we don't accumulate duplicates
  charsRef.current = [];

  const splitText = useMemo(() => {
    return text.split("").map((char, index) => ({
      char,
      id: `char-${index}`,
    }));
  }, [text]);

  // Set up intersection observer to trigger typing only when visible in viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Initialize characters as hidden
      gsap.set(charsRef.current, {
        opacity: 0,
        display: "none",
      });

      // Initialize cursor state
      if (cursor && cursorRef.current) {
        gsap.set(cursorRef.current, { opacity: 1, display: "inline-block" });
      }

      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.();
          // Hide cursor when typing is completed
          if (cursor && cursorRef.current) {
            gsap.set(cursorRef.current, { display: "none" });
          }
        },
      });

      // Animate character reveals
      tl.to(charsRef.current, {
        display: "inline-block",
        opacity: 1,
        duration: 0,
        stagger: speed,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isVisible, text, speed, cursor, onComplete]);

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap items-baseline ${className}`}
      aria-label={text}
    >
      {splitText.map((item, index) => (
        <span
          key={item.id}
          ref={(el) => {
            charsRef.current[index] = el;
          }}
          className={`whitespace-pre ${textClassName}`}
          style={{ opacity: 0, display: "none" }}
        >
          {item.char}
        </span>
      ))}
      {cursor && (
        <span
          ref={cursorRef}
          className="inline-block w-[0.15em] h-[1em] bg-current ml-[2px] align-middle"
          style={{ opacity: 0, display: "none" }}
        />
      )}
    </div>
  );
}
