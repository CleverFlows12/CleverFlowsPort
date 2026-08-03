import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy } from 'lucide-react';
import { DISCORD_INVITE_URL, DISCORD_USERNAME } from '../data/uiProjects';

// Official Discord Brand Icon
function DiscordIcon({ className = "w-8 h-8 text-[#5865F2]" }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 127.14 96.36">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a73.57,73.57,0,0,0,64.32,0c.87.69,1.76,1.37,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-18.91-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74C48.86,40.24,54,46,53.89,53C53.89,60,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74C91.14,40.24,96.28,46,96.17,53C96.17,60,91.14,65.69,84.69,65.69Z" />
    </svg>
  );
}

// Wizard Star Avatar Icon
function WizardAvatar() {
  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-0.5 flex items-center justify-center overflow-hidden shrink-0 border-2 border-white/20 shadow-lg">
      <div className="w-full h-full rounded-full bg-gradient-to-b from-indigo-500 to-purple-800 flex items-center justify-center relative">
        <span className="absolute top-1 text-yellow-300 text-xs animate-bounce">★</span>
        <svg className="w-10 h-10 text-amber-200" viewBox="0 0 24 24" fill="currentColor">
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
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-pink-500 p-0.5 flex items-center justify-center overflow-hidden shrink-0 border-2 border-white/20 shadow-lg">
      <div className="w-full h-full rounded-full bg-gradient-to-b from-purple-700 to-fuchsia-900 flex items-center justify-center text-white font-bold font-display text-xl tracking-tighter">
        CF
      </div>
    </div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyTag = () => {
    navigator.clipboard.writeText(DISCORD_USERNAME);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenDiscordServer = () => {
    window.open(DISCORD_INVITE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-white/50 mb-3">
          Contact Me
        </div>

        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white uppercase">
          GET IN <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">TOUCH</span>
        </h2>
      </motion.div>

      {/* 2 Fat Discord Pill Buttons (Matching Uploaded Image) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 max-w-2xl mx-auto">
        
        {/* Fat Button 1: User Direct Handle Button */}
        <button
          onClick={handleCopyTag}
          className="w-full sm:w-1/2 bg-[#424349] hover:bg-[#4d4e55] border border-white/10 hover:border-purple-500/40 rounded-[40px] p-3 sm:p-4 px-6 flex items-center justify-between gap-4 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.5)] group hover:scale-[1.03] active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <WizardAvatar />
            <div className="flex flex-col items-start">
              <span className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight group-hover:text-purple-300 transition-colors">
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

          <DiscordIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#5865F2] shrink-0 group-hover:rotate-12 transition-transform duration-300" />
        </button>

        {/* Fat Button 2: Join Discord Server Button */}
        <button
          onClick={handleOpenDiscordServer}
          className="w-full sm:w-1/2 bg-[#424349] hover:bg-[#4d4e55] border border-white/10 hover:border-purple-500/40 rounded-[40px] p-3 sm:p-4 px-6 flex items-center justify-between gap-4 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.5)] group hover:scale-[1.03] active:scale-[0.98]"
        >
          <div className="flex items-center gap-4">
            <ServerAvatar />
            <div className="flex flex-col items-start">
              <span className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight group-hover:text-purple-300 transition-colors">
                Discord Server
              </span>
              <span className="text-[10px] font-mono text-white/50">
                Join Community
              </span>
            </div>
          </div>

          <DiscordIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#5865F2] shrink-0 group-hover:rotate-12 transition-transform duration-300" />
        </button>

      </div>
    </section>
  );
}
