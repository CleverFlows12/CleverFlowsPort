import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Folder, ChevronRight, X, ExternalLink } from 'lucide-react';
import { VAULT_DATA, YOUTUBE_CHANNEL_URL } from '../assets/vault/animations';
import TypewriterText from './TypewriterText';
import TiltCard from './TiltCard';

// Folder Syncing: Automatically pick up images dropped into these folders
const GFX_MODULES = import.meta.glob('../assets/vault/GFX/*.{png,jpg,jpeg,svg,webp}', { eager: true });
const UI_MODULES = import.meta.glob('../assets/vault/UI Designing/*.{png,jpg,jpeg,svg,webp}', { eager: true });

export default function Vault() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  // Process folder images into the same format as VAULT_DATA
  const syncedFolders = useMemo(() => {
    const gfx = Object.entries(GFX_MODULES).map(([path, module], index) => ({
      id: index + 100, // Offset to avoid ID collision
      title: path.split('/').pop()?.split('.')[0] || 'Image',
      img: (module as any).default || module,
      link: YOUTUBE_CHANNEL_URL
    }));

    const ui = Object.entries(UI_MODULES).map(([path, module], index) => ({
      id: index + 200,
      title: path.split('/').pop()?.split('.')[0] || 'Image',
      img: (module as any).default || module,
      link: YOUTUBE_CHANNEL_URL
    }));

    return {
      GFX: gfx,
      'UI Designing': ui
    };
  }, []);

  // Combine synced folders with the script-based Animations
  const ALL_VAULT_DATA = {
    ...syncedFolders,
    Animations: VAULT_DATA.Animations
  };

  const folderKeys = Object.keys(ALL_VAULT_DATA);

  return (
    <section id="vault" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Section Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#00e6ff]/10 to-[#a855f7]/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20 md:mb-28 relative z-10"
      >
        <h2 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter gradient-text">
          <TypewriterText text="THE VAULT" />
        </h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-white/40 text-lg md:text-xl font-light tracking-widest uppercase">
            3D Assets, GFX & UI Portfolio
          </p>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full glass-card border-white/10 bg-white/[0.02]">
            <div className="w-2 h-2 rounded-full bg-[#00e6ff] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
              Folder <span className="gradient-text font-bold">Sync Active</span>
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
        {folderKeys.map((folder, index) => (
          <motion.div
            key={folder}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard onClick={() => setActiveFolder(folder)} maxTilt={12}>
              <div className="glass-card p-12 md:p-16 flex flex-col items-center gap-8 cursor-pointer group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00e6ff]/10 via-transparent to-[#a855f7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00e6ff] blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                  <Folder size={84} className="text-white/20 group-hover:text-[#00e6ff] transition-all duration-500 transform group-hover:scale-110" strokeWidth={1} />
                </div>

                <div className="text-center space-y-4 relative">
                  <h3 className="text-2xl md:text-3xl font-display font-bold tracking-[0.2em] text-white/90 group-hover:text-white transition-colors">[{folder}]</h3>
                  <div className="flex items-center justify-center gap-2 text-white/30 group-hover:gradient-text transition-all duration-500">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
                      {folder === 'Animations' ? 'Watch Channel' : 'Explore Assets'}
                    </span>
                    <ChevronRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeFolder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-8 md:p-20 bg-black/95 backdrop-blur-3xl"
          >
            <div className="w-full max-w-7xl h-full flex flex-col">
              <div className="flex items-center justify-between mb-16">
                <div className="space-y-3">
                  <h4 className="text-6xl font-display font-bold tracking-tighter">{activeFolder}</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-[#00e6ff]" />
                    <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.4em]">
                      {activeFolder === 'Animations' ? 'YouTube Archive' : 'Local Sync Folder'}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveFolder(null)}
                  className="w-20 h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-500 group"
                >
                  <X size={32} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 overflow-y-auto pr-4 custom-scrollbar">
                {(ALL_VAULT_DATA as any)[activeFolder].length === 0 ? (
                  <div className="col-span-full flex flex-col items-center justify-center py-20 text-white/20">
                    <Folder size={64} strokeWidth={0.5} className="mb-6" />
                    <p className="text-xl font-mono uppercase tracking-widest">Folder is empty</p>
                    <p className="text-sm mt-2">Drop images into /src/assets/vault/{activeFolder}/</p>
                  </div>
                ) : (
                  (ALL_VAULT_DATA as any)[activeFolder].map((item: any, i: number) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="aspect-[16/10] glass-card overflow-hidden group relative cursor-pointer"
                      onClick={() => item.link && window.open(item.link, '_blank')}
                    >
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                        <h5 className="text-3xl font-bold mb-4 tracking-tight">{item.title}</h5>
                        <div className="flex items-center gap-3 gradient-text">
                          <span className="text-xs font-mono uppercase tracking-widest">
                            {activeFolder === 'Animations' ? 'Watch on YouTube' : 'View Project'}
                          </span>
                          <ExternalLink size={14} />
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
