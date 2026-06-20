import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import awsCanvasBgUrl from "@/assets/aws_canvas_bg.png";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

// Helper component to split text into characters for staggering animation
const SplitText = ({ children, className = "", style }: SplitTextProps) => {
  const words = children.split(" ");
  return (
    <span className={`inline-flex items-baseline ${className}`} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          className="split-word inline-flex items-baseline mr-[0.25em]"
        >
          {word.split("").map((char, j) => (
            <span key={j} className="split-char inline-block select-none">
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default function TextScrollMarquee() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const canvasTriggerRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    let ctx: gsap.Context | null = null;

    // Small timeout to guarantee measurements occur after DOM rendering settles
    const timer = setTimeout(() => {
      if (!containerRef.current || !trackRef.current || !triggerRef.current)
        return;

      ctx = gsap.context(() => {
        const trackWidth = trackRef.current?.offsetWidth || 0;
        const viewportWidth = containerRef.current?.offsetWidth || 0;
        const scrollDistance = trackWidth - viewportWidth;

        if (scrollDistance <= 0) return;

        // 1. Pin the viewport and translate the track horizontally
        const scrollTween = gsap.to(trackRef.current, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${Math.max(scrollDistance, viewportWidth)}`,
            invalidateOnRefresh: true,
          },
        });

        // 2. Character-split stagger animation
        const words = gsap.utils.toArray(".split-word") as HTMLElement[];
        words.forEach((word) => {
          const chars = word.querySelectorAll(".split-char");
          gsap.from(chars, {
            yPercent: 85,
            opacity: 0,
            rotateX: -70,
            stagger: 0.04,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: word,
              containerAnimation: scrollTween,
              start: "left 95%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }, triggerRef);
    }, 100);

    // Refresh ScrollTrigger when fonts load to ensure layout calculations are correct
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div
      ref={triggerRef}
      className="relative w-full overflow-hidden z-30"
      style={{
        height: "100vh",
        backgroundColor: "#8A53D6",
      }}
    >
      {/* 1. Dotted Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.45) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 2. Full-screen Blur Layer to soften the grid under the text */}
      <div
        className="absolute inset-0 pointer-events-none backdrop-blur-[6px] z-10"
        style={{
          background: "radial-gradient(circle at center, transparent 35%, rgba(138, 83, 214, 0.2) 100%)",
        }}
      />

      {/* 3. The Marquee Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center overflow-hidden z-20"
      >
        <div
          ref={trackRef}
          className="flex flex-nowrap items-center whitespace-nowrap pl-16 pr-32 w-max text-white"
          style={{
            fontFamily: '"Cabinet Grotesk", "Satoshi", ui-sans-serif, system-ui, sans-serif',
          }}
        >

          {/* Segment 1: Cloud? */}
          <SplitText
            className="text-[10vh] md:text-[14vh] font-black tracking-tighter leading-none"
            children="Cloud?"
          />

          {/* Spacer Dot-Line */}
          <div className="mx-6 md:mx-10 w-[15vw] h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent self-center shrink-0" />

          {/* Segment 2: one — used as canvas scroll trigger */}
          <span ref={canvasTriggerRef} className="inline-flex items-baseline">
            <SplitText
              className="text-[10vh] md:text-[14vh] font-medium tracking-tight leading-none text-white/90 ml-6"
              children="one"
            />
          </span>

          {/* Segment 3: playful canvas. */}
          <SplitText
            className="text-[11vh] md:text-[15vh] font-serif italic font-semibold leading-none mx-4 pr-16"
            style={{ fontFamily: "Georgia, serif" }}
            children="playful canvas."
          />
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </div>
  );
}
