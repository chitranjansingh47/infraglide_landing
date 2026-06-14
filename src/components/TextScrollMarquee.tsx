import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useLayoutEffect(() => {
    // Small timeout to guarantee measurements occur after DOM rendering settles
    const timer = setTimeout(() => {
      if (!containerRef.current || !trackRef.current || !triggerRef.current)
        return;

      const ctx = gsap.context(() => {
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

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
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
          {/* Segment 1: Every node, */}
          <SplitText
            className="text-[10vh] md:text-[14vh] font-black tracking-tighter leading-none"
            children="Every node,"
          />

          {/* Node SVG Conjunction */}
          <div className="mx-6 md:mx-10 self-center flex items-center justify-center shrink-0">
            <div className="w-[10vh] h-[10vh] md:w-[14vh] md:h-[14vh] rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-lg">
              <svg className="w-[60%] h-[60%] text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="50" cy="50" r="14" fill="currentColor" fillOpacity="0.2" />
                <circle cx="50" cy="20" r="8" fill="currentColor" />
                <circle cx="20" cy="70" r="8" fill="currentColor" />
                <circle cx="80" cy="70" r="8" fill="currentColor" />
                <line x1="50" y1="34" x2="50" y2="28" />
                <line x1="28" y1="64" x2="42" y2="56" />
                <line x1="72" y1="64" x2="58" y2="56" />
              </svg>
            </div>
          </div>

          {/* Segment 2: every edge, */}
          <SplitText
            className="text-[10vh] md:text-[14vh] font-light tracking-tight leading-none italic text-white/95"
            style={{ fontFamily: "Georgia, serif" }}
            children="every edge,"
          />

          {/* Edge SVG Wave Connector */}
          <div className="mx-8 md:mx-14 self-center flex items-center justify-center shrink-0">
            <svg className="w-[16vh] h-[8vh] md:w-[24vh] md:h-[10vh] text-white/40" viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M10 20 C 40 5, 120 35, 150 20" strokeDasharray="6 6" />
              <circle cx="10" cy="20" r="4" fill="currentColor" />
              <circle cx="150" cy="20" r="4" fill="currentColor" />
            </svg>
          </div>

          {/* Segment 3: every cloud, */}
          <SplitText
            className="text-[10vh] md:text-[14vh] font-black uppercase tracking-tighter leading-none"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.75)",
              color: "transparent",
            }}
            children="every cloud,"
          />

          {/* Cloud SVG Badge */}
          <div className="mx-6 md:mx-10 self-center flex items-center justify-center shrink-0">
            <div className="w-[10vh] h-[10vh] md:w-[14vh] md:h-[14vh] rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-500 shadow-lg">
              <svg className="w-[55%] h-[55%] text-white/95" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.47 0-.89.09-1.3.27A6.47 6.47 0 0 0 12 9a6.5 6.5 0 0 0-6.4 5.3A4.5 4.5 0 0 0 2 18.5C2 21 4 22 6.5 22h11c1.9 0 3.5-1.3 3.5-3z" />
              </svg>
            </div>
          </div>

          {/* Spacer Dot-Line */}
          <div className="mx-6 md:mx-10 w-[15vw] h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent self-center shrink-0" />

          {/* Segment 4: one */}
          <SplitText
            className="text-[10vh] md:text-[14vh] font-medium tracking-tight leading-none text-white/90 ml-6"
            children="one"
          />

          {/* Segment 5: playful canvas. */}
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
