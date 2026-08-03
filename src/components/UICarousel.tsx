import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X, ExternalLink, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { UI_PROJECTS, UIProject, DISCORD_INVITE_URL } from '../data/uiProjects';
import TypewriterText from './TypewriterText';

export default function UICarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeModalProject, setActiveModalProject] = useState<UIProject | null>(null);

  const projects = UI_PROJECTS;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalProject) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject, projects.length]);

  return (
    <section id="showcase" className="py-32 px-4 sm:px-8 max-w-7xl mx-auto relative select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#00e6ff]/10 via-purple-600/5 to-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header Title */}
      <div className="text-center mb-16 relative z-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
          <Layers size={14} className="text-purple-400" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/70">
            Interactive UI Showcase
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-white">
          UI DESIGN <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SHOWCASE</span>
        </h2>
      </div>

      {/* 3D Carousel Wheel Container */}
      <div className="relative h-[380px] sm:h-[480px] md:h-[540px] flex items-center justify-center perspective-[1200px] overflow-hidden rounded-3xl border border-white/10 bg-[#0c0f1d]/90 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-4 sm:p-8">
        
        {/* Navigation Arrow Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous UI design"
          className="absolute left-3 sm:left-8 z-30 p-3 sm:p-4 rounded-full bg-black/80 border border-white/20 text-white hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.8)]"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={nextSlide}
          aria-label="Next UI design"
          className="absolute right-3 sm:right-8 z-30 p-3 sm:p-4 rounded-full bg-black/80 border border-white/20 text-white hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.8)]"
        >
          <ChevronRight size={22} />
        </button>

        {/* Carousel Wheel Items */}
        <div className="relative w-full h-full flex items-center justify-center">
          {projects.map((project, index) => {
            // Calculate distance relative to current active index
            const count = projects.length;
            let offset = index - currentIndex;

            // Handle wrapping for smooth circular wheel
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);

            // Hide cards that are too far away
            if (absOffset > 2) return null;

            // Calculate 3D transforms
            const rotateY = offset * -25; // 3D angle rotation
            const translateX = offset * (window.innerWidth < 640 ? 210 : 340);
            const translateZ = -absOffset * 180;
            const scale = isCenter ? 1 : 0.8 - absOffset * 0.1;
            const opacity = isCenter ? 1 : Math.max(0.2, 0.7 - absOffset * 0.25);
            const zIndex = 20 - absOffset;

            return (
              <motion.div
                key={project.id}
                onClick={() => {
                  if (isCenter) {
                    setActiveModalProject(project);
                  } else {
                    setCurrentIndex(index);
                  }
                }}
                animate={{
                  x: translateX,
                  z: translateZ,
                  rotateY: rotateY,
                  scale: scale,
                  opacity: opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 24,
                }}
                style={{
                  zIndex,
                  transformStyle: 'preserve-3d',
                }}
                className={`absolute w-[280px] sm:w-[460px] md:w-[580px] aspect-[16/10] rounded-2xl cursor-pointer group select-none transition-all duration-500 overflow-hidden ${
                  isCenter
                    ? 'border border-[#9b30ff]/60 shadow-[0_0_45px_rgba(155,48,255,0.4)]'
                    : 'border border-white/10 opacity-70 hover:opacity-100 hover:border-white/30 bg-black/60'
                }`}
              >
                {/* Image Showcase */}
                <div className="relative w-full h-full bg-zinc-950/80 overflow-hidden rounded-2xl z-10 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt="UI Design Showcase"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback image if file is 0-bytes or missing
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80';
                    }}
                  />

                  {/* Subtle Border Specular Glow on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#9b30ff]/20 via-transparent to-[#c56bf0]/20 pointer-events-none" />

                  {/* Clean Zoom Indicator (No Tags or Names) */}
                  {isCenter && (
                    <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 text-[10px] font-mono text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 group-hover:bg-[#9b30ff] group-hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100">
                      <Maximize2 size={11} />
                      <span className="hidden sm:inline">Click to Zoom</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicators & Controls */}
      <div className="flex items-center justify-center gap-3 mt-8 relative z-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? 'w-10 bg-gradient-to-r from-[#c56bf0] to-[#9b30ff] shadow-[0_0_15px_#9b30ff]'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Fullscreen Inspection Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 select-text"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-[#0c0f1d] border border-white/15 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(155,48,255,0.3)] flex flex-col"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/70 text-white/70 hover:text-white hover:bg-white/20 transition-all border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Full Clean Image Showcase */}
              <div className="relative w-full max-h-[75vh] min-h-[50vh] overflow-hidden bg-zinc-950 flex items-center justify-center p-4 z-10">
                <img
                  src={activeModalProject.image}
                  alt="UI Showcase Full View"
                  className="w-full h-full object-contain max-h-[75vh]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80';
                  }}
                />
              </div>

              {/* Modal Footer (Clean CTA without tags or names) */}
              <div className="p-4 sm:p-6 bg-[#0a0d18] border-t border-white/10 flex items-center justify-between gap-4 z-10">
                <span className="text-xs font-mono text-white/50 tracking-wider">
                  CLEVERFLOWS UI SHOWCASE
                </span>

                <a
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold tracking-wide flex items-center gap-2 transition-all shadow-lg"
                >
                  <Sparkles size={14} />
                  <span>Order on Discord</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
