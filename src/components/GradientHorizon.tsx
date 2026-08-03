import { motion } from 'motion/react';

export default function GradientHorizon() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Cyber Dot Grid Overlay */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-60" />

      {/* Dimmed Atmospheric Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[140%] h-[500px] bg-gradient-to-b from-[#00e6ff]/5 via-[#a855f7]/5 to-transparent blur-[140px] rounded-[100%]" />

      {/* Horizon Flare Line */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.98, 1.02, 0.98] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#00e6ff]/60 to-transparent shadow-[0_0_15px_rgba(0,230,255,0.4)]"
      />

      {/* 3D Perspective Grid Plane */}
      <div 
        className="absolute top-[32%] left-0 right-0 bottom-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 230, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 35px',
          transform: 'perspective(600px) rotateX(70deg)',
          transformOrigin: 'top center',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
        }}
      />
    </div>
  );
}
