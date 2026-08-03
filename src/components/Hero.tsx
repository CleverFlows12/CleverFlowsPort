import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, ArrowUpRight } from 'lucide-react';
import { DISCORD_INVITE_URL, DISCORD_USERNAME } from '../data/uiProjects';

// Official Discord Brand Icon
function DiscordIcon({ className = "w-8 h-8 text-[#5865F2]" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 127.14 96.36">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a73.57,73.57,0,0,0,64.32,0c.87.69,1.76,1.37,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-18.91-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74C48.86,40.24,54,46,53.89,53C53.89,60,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74C91.14,40.24,96.28,46,96.17,53C96.17,60,91.14,65.69,84.69,65.69Z" />
    </svg>
  );
}

// Wizard Star Roblox Avatar Icon
function WizardAvatar() {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-0.5 flex items-center justify-center overflow-hidden shrink-0 border-2 border-white/20 shadow-lg">
      <div className="w-full h-full rounded-full bg-gradient-to-b from-indigo-500 to-purple-800 flex items-center justify-center relative">
        <span className="absolute top-1 text-yellow-300 text-[10px] animate-bounce">★</span>
        <svg className="w-8 h-8 text-amber-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 9h16L12 2z" fill="#7e22ce" />
          <path d="M12 2l-2 5h4l-2-5z" fill="#facc15" />
          <rect x="6" y="10" width="12" height="10" rx="3" fill="#fed7aa" />
          <circle cx="9" cy="14" r="1" fill="#1e1b4b" />
          <circle cx="15" cy="14" r="1" fill="#1e1b4b" />
          <path d="M10 17c1 1 3 1 4 0" stroke="#1e1b4b" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}

// Server Avatar Icon
function ServerAvatar() {
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-pink-500 p-0.5 flex items-center justify-center overflow-hidden shrink-0 border-2 border-white/20 shadow-lg">
      <div className="w-full h-full rounded-full bg-gradient-to-b from-purple-700 to-fuchsia-900 flex items-center justify-center text-white font-bold font-display text-lg tracking-tighter">
        CF
      </div>
    </div>
  );
}

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyHandle = () => {
    navigator.clipboard.writeText(DISCORD_USERNAME);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenDiscordServer = () => {
    window.open(DISCORD_INVITE_URL, '_blank', 'noopener,noreferrer');
  };

  const scrollToShowcase = () => {
    document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] w-full pt-32 pb-16 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center text-center select-none">
      
      {/* Background Spotlight Radial Flares */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-purple-500/15 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center space-y-6 max-w-4xl w-full"
      >
        {/* Sleek Uppercase Eyebrow (Matching Reference Image) */}
        <div className="text-[11px] font-mono tracking-[0.3em] text-white/60 uppercase">
          DYNAMIC ROBLOX UI & INTERFACE DESIGN
        </div>

        {/* Sleek Headline with Lavender Text (Matching Reference Image) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold text-white tracking-tight leading-[1.15] max-w-3xl">
          Transforming Concepts into <br className="hidden sm:inline" />
          Seamless <span className="text-[#c084fc]">User Experiences</span>
        </h1>

        {/* Subtitle Line (Matching Reference Image) */}
        <p className="text-white/70 text-base sm:text-lg font-light tracking-wide max-w-xl">
          Hi! I'm CleverFlows, a Dedicated UI Designer creating Roblox & vector game interfaces.
        </p>

        {/* Sleek CTA Button (Matching "See my work ↗" from Reference Image) */}
        <div className="pt-2 pb-6">
          <button
            onClick={scrollToShowcase}
            className="px-6 py-3 rounded-xl bg-[#0e1329] hover:bg-[#151b38] border border-white/10 hover:border-purple-500/40 text-white text-xs font-medium tracking-wide flex items-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] group"
          >
            <span>See my work</span>
            <ArrowUpRight size={15} className="text-white/70 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 2 Fat Clean Discord Buttons (Matching User's Reference Screenshot) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-2xl pt-2">
          
          {/* Fat Button 1: User Direct Handle Button */}
          <button
            onClick={handleCopyHandle}
            className="w-full sm:w-1/2 bg-[#3f4148] hover:bg-[#494b53] border border-white/10 hover:border-purple-500/40 rounded-[36px] p-3 px-5 flex items-center justify-between gap-4 transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.5)] group hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <WizardAvatar />
              <div className="flex flex-col items-start">
                <span className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  {DISCORD_USERNAME}
                </span>
                <span className="text-[10px] font-mono text-white/50 flex items-center gap-1">
                  {copied ? (
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <Check size={11} /> Copied Handle!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy size={11} /> Click to Copy
                    </span>
                  )}
                </span>
              </div>
            </div>

            <DiscordIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#5865F2] shrink-0 group-hover:rotate-12 transition-transform duration-300" />
          </button>

          {/* Fat Button 2: Join Discord Server Button */}
          <button
            onClick={handleOpenDiscordServer}
            className="w-full sm:w-1/2 bg-[#3f4148] hover:bg-[#494b53] border border-white/10 hover:border-purple-500/40 rounded-[36px] p-3 px-5 flex items-center justify-between gap-4 transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.5)] group hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <ServerAvatar />
              <div className="flex flex-col items-start">
                <span className="text-lg sm:text-xl font-bold font-sans text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  Discord Server
                </span>
                <span className="text-[10px] font-mono text-white/50">
                  Join Community
                </span>
              </div>
            </div>

            <DiscordIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#5865F2] shrink-0 group-hover:rotate-12 transition-transform duration-300" />
          </button>

        </div>
      </motion.div>

    </section>
  );
}
