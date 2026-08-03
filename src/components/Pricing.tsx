import { motion } from 'motion/react';
import { useState } from 'react';
import { Copy, Check, MessageSquare } from 'lucide-react';
import { PRICING_DATA } from '../data/pricing';
import TypewriterText from './TypewriterText';
import TiltCard from './TiltCard';

function PricingCard({ tier, index }: { tier: typeof PRICING_DATA[0], index: number }) {
  const [copied, setCopied] = useState(false);
  const discordId = 'clever.flows12';

  const handleOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(discordId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 + 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard maxTilt={10}>
        <div className="glass-card p-10 md:p-12 flex flex-col gap-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all duration-700 relative group overflow-hidden shadow-2xl h-full justify-between">
          {/* Subtle Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00e6ff]/5 via-transparent to-[#a855f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="text-center relative">
            <h3 className="text-3xl font-display font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">{tier.name}</h3>
            <div className="w-12 h-1 bg-[#00e6ff]/40 mx-auto mt-4 rounded-full group-hover:w-20 group-hover:bg-[#a855f7] transition-all duration-500" />
          </div>

          <div className="space-y-6 flex-grow relative">
            {tier.items.map((item) => (
              <div key={item.label} className="flex items-end gap-3 group/item">
                <span className="text-base font-medium text-white/70 group-hover/item:text-white transition-colors">{item.label}</span>
                <div className="flex-grow border-b border-dashed border-white/10 mb-2 group-hover/item:border-white/30 transition-colors" />
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold font-mono gradient-text">{item.price}</span>
                  <span className="text-[10px] font-mono text-white/30 uppercase">R$</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 text-center relative">
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 group-hover:text-white/60 transition-colors">{tier.footer}</p>
          </div>

          <button 
            onClick={handleOrder}
            className="w-full py-4 rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white hover:text-black font-mono font-bold tracking-[0.25em] uppercase text-[10px] z-10 transition-all duration-500 flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(0,230,255,0.1)]"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400 group-hover:text-emerald-600" />
                <span className="text-emerald-400 group-hover:text-emerald-700">Discord Copied!</span>
              </>
            ) : (
              <>
                <MessageSquare size={14} className="text-cyan-400 group-hover:text-black transition-colors" />
                <span>Order via Discord</span>
              </>
            )}
          </button>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Section Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-[#00e6ff]/10 to-[#a855f7]/10 blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-center mb-20 md:mb-28 relative z-10"
      >
        <h2 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter gradient-text">
          <TypewriterText text="PRICING" />
        </h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-white/50 text-lg md:text-xl font-light tracking-widest flex items-center gap-3">
            Payments accepted in <span className="gradient-text font-bold tracking-normal">ROBUX</span>
          </p>
          <div className="px-6 py-2 rounded-full glass-card border border-white/10 bg-white/[0.02] text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Discord: clever.flows12</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
        {PRICING_DATA.map((tier, i) => (
          <PricingCard key={tier.name} tier={tier} index={i} />
        ))}
      </div>
    </section>
  );
}
