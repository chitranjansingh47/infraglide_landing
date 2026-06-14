import { createFileRoute, Link } from '@tanstack/react-router'
import { useRef, useEffect } from 'react'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})

function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseEnter = () => {
      container.style.setProperty('--mouse-opacity', '1');
    };

    const handleMouseLeave = () => {
      container.style.setProperty('--mouse-opacity', '0');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const posts = [
    {
      title: "How we built real-time drift detection for AWS",
      excerpt: "A deep dive into our polling architecture, state parsing, and how we achieve sub-second drift detection across thousands of resources.",
      date: "May 20, 2026",
      author: "Sarah Chen",
      category: "Engineering"
    },
    {
      title: "Infrastructure as Code is dead. Long live Infrastructure as Diagram.",
      excerpt: "Why the future of DevOps belongs to visual collaboration tools, and how generative AI is bridging the gap between design and deployment.",
      date: "May 15, 2026",
      author: "Alex Rivera",
      category: "Thought Leadership"
    },
    {
      title: "Announcing Infraglide for Azure",
      excerpt: "You asked, we delivered. Full support for Microsoft Azure is now available in beta, with over 150 supported resources.",
      date: "May 2, 2026",
      author: "David Kim",
      category: "Product Updates"
    }
  ];

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-5xl mx-auto">
        {/* Header container with interactive cursor blur layer */}
        <div ref={containerRef} className="mb-20 text-center relative select-none">
          {/* Text wrapper at z-20 to keep it crisp and readable above the blur overlay */}
          <div className="relative z-20">
            <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              The Infraglide <span className="ig-metallic">Blog.</span>
            </h1>
            <p className="text-[var(--ig-muted)] text-xl max-w-2xl mx-auto font-medium">
              Engineering deep dives, product updates, and thoughts on the future of cloud computing.
            </p>
          </div>

          {/* Masked backdrop blur overlay that blurs the dot grid canvas underneath */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
            style={{
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              opacity: 'var(--mouse-opacity, 0)',
              maskImage: 'radial-gradient(circle 200px at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 25%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle 200px at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 25%, transparent 100%)',
            }}
          />
        </div>

        <div className="relative z-20 grid gap-8">
          {posts.map((post, i) => (
            <article key={i} className="ig-card rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:border-[#8A53D6]/40 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.15)] group relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] text-[10px] font-bold uppercase tracking-wider text-[#8A53D6]">
                  {post.category}
                </div>
                <div className="flex items-center gap-4 text-sm text-[var(--ig-dim)]">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--ig-text)] mb-4 group-hover:text-[#8A53D6] transition-colors">{post.title}</h2>
              <p className="text-[var(--ig-muted)] text-lg leading-relaxed mb-8">{post.excerpt}</p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-[#8A53D6] font-semibold hover:text-[#a574f9] transition-colors">
                Read article <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
