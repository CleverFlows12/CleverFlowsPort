import { motion } from 'motion/react';
import { ExternalLink, Youtube } from 'lucide-react';
import { TOOLS_DATA } from '../data/tools';
import TypewriterText from './TypewriterText';

export default function ExperienceBar() {
  const duplicatedTools = [...TOOLS_DATA, ...TOOLS_DATA, ...TOOLS_DATA];

  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      {/* Section Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#00e6ff]/10 to-[#a855f7]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tighter gradient-text">
            <TypewriterText text="MASTERED TOOLS" />
          </h2>
          <div className="hidden sm:block h-[1px] flex-1 bg-white/10 mb-2" />
          <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.4em] mb-1">
            Blender • Roblox Studio • Figma
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden group z-10">
        {/* Row A: Left to Right */}
        <div className="flex gap-6 whitespace-nowrap">
          <div className="flex gap-6 animate-marquee-left py-4" style={{ animationDuration: '60s' }}>
            {duplicatedTools.map((tool, index) => (
              <motion.div
                key={`row-a-${tool.name}-${index}`}
                whileHover={{ y: -8, scale: 1.05 }}
                className="w-64 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 px-5 flex items-center gap-4 group/card relative overflow-hidden rounded-full hover:border-[#00e6ff]/40 transition-all duration-500 cursor-pointer shadow-lg"
                onClick={() => window.open(tool.link, '_blank')}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${tool.accentColor}, transparent 70%)` }}
                />
                
                <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-md group-hover/card:bg-white/20 transition-all duration-500" />
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-7 h-7 object-contain relative z-10 group-hover/card:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex flex-col gap-0.5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold tracking-tight text-white/90 group-hover/card:text-white transition-colors">{tool.name}</span>
                    <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">{tool.years}</span>
                  </div>
                  <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover/card:text-[#00e6ff] transition-colors">{tool.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row B: Right to Left */}
        <div className="flex gap-6 whitespace-nowrap">
          <div className="flex gap-6 animate-marquee-right py-4" style={{ animationDuration: '60s' }}>
            {duplicatedTools.map((tool, index) => (
              <motion.div
                key={`row-b-${tool.name}-${index}`}
                whileHover={{ y: -8, scale: 1.05 }}
                className="w-64 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 px-5 flex items-center gap-4 group/card relative overflow-hidden rounded-full hover:border-[#a855f7]/40 transition-all duration-500 cursor-pointer shadow-lg"
                onClick={() => window.open(tool.link, '_blank')}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${tool.accentColor}, transparent 70%)` }}
                />
                
                <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-md group-hover/card:bg-white/20 transition-all duration-500" />
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-7 h-7 object-contain relative z-10 group-hover/card:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex flex-col gap-0.5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold tracking-tight text-white/90 group-hover/card:text-white transition-colors">{tool.name}</span>
                    <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">{tool.years}</span>
                  </div>
                  <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/30 group-hover/card:text-[#a855f7] transition-colors">{tool.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Gradients for Fade Effect */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
