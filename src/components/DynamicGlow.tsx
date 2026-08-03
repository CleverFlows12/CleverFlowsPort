import { motion } from 'motion/react';

const ORBS = [
  { color: 'bg-cyan-500/15', size: 'w-[600px] h-[600px]', initial: { x: '10%', y: '10%' }, animate: { x: ['10%', '40%', '10%'], y: ['10%', '30%', '10%'], scale: [1, 1.2, 1] }, duration: 25 },
  { color: 'bg-purple-500/15', size: 'w-[500px] h-[500px]', initial: { x: '60%', y: '50%' }, animate: { x: ['60%', '30%', '60%'], y: ['50%', '80%', '50%'], scale: [1, 0.8, 1] }, duration: 30 },
  { color: 'bg-blue-500/10', size: 'w-[700px] h-[700px]', initial: { x: '20%', y: '70%' }, animate: { x: ['20%', '50%', '20%'], y: ['70%', '40%', '70%'], scale: [1, 1.1, 1] }, duration: 35 },
  { color: 'bg-cyan-400/5', size: 'w-[400px] h-[400px]', initial: { x: '80%', y: '20%' }, animate: { x: ['80%', '50%', '80%'], y: ['20%', '60%', '20%'], scale: [1, 1.3, 1] }, duration: 20 },
];

export default function DynamicGlow() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          initial={orb.initial}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[150px] ${orb.color} ${orb.size} opacity-60 will-change-transform`}
        />
      ))}
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  );
}
