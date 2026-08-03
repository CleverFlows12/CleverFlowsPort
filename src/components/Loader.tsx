import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Box, Sparkles } from 'lucide-react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 200);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center p-8 select-none"
        >
          {/* Subtle Background Glow behind loader */}
          <div className="absolute w-96 h-96 bg-gradient-to-r from-[#00e6ff]/20 to-[#a855f7]/20 blur-[120px] rounded-full pointer-events-none" />

          {/* 3D Spinning Hex/Cube Wireframe Icon */}
          <div className="relative mb-12">
            <motion.div
              animate={{ rotateY: 360, rotateX: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ transformStyle: 'preserve-3d', perspective: 600 }}
              className="w-24 h-24 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-2xl border border-[#00e6ff]/40 shadow-[0_0_30px_#00e6ff22] transform rotate-45" />
              <div className="absolute inset-2 rounded-2xl border border-[#a855f7]/40 shadow-[0_0_30px_#a855f722] transform -rotate-12" />
              <Box className="w-10 h-10 text-white animate-pulse" />
            </motion.div>
            
            <motion.div
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 text-[#00e6ff]"
            >
              <Sparkles size={18} />
            </motion.div>
          </div>

          {/* Brand & Status */}
          <div className="flex flex-col items-center gap-2 mb-8 text-center">
            <h1 className="text-2xl font-display font-bold tracking-[0.3em] text-white">
              CLEVER<span className="gradient-text">FLOWS</span>
            </h1>
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e6ff] animate-ping" />
              <span>3D Engine & Asset Loader</span>
            </p>
          </div>

          {/* Progress Bar Container */}
          <div className="w-72 md:w-96 space-y-3">
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden p-[1px] relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00e6ff] via-[#3b82f6] to-[#a855f7] rounded-full shadow-[0_0_15px_#00e6ff]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="flex justify-between items-center text-[11px] font-mono text-white/50">
              <span className="tracking-widest">INITIALIZING...</span>
              <span className="text-[#00e6ff] font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
