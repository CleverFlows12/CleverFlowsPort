import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UICarousel from './components/UICarousel';
import Contact from './components/Contact';
import DynamicGlow from './components/DynamicGlow';
import GradientHorizon from './components/GradientHorizon';
import Loader from './components/Loader';
import { DISCORD_INVITE_URL } from './data/uiProjects';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-[#040714] bg-sleek-grid overflow-x-hidden text-white font-sans selection:bg-purple-500/30">
      {/* 3D Preloader Animation */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Sleek Spotlight Flares Atmospheric Background */}
      <GradientHorizon />
      
      {/* Dynamic Section Ambient Glow */}
      <DynamicGlow />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <UICarousel />
        <Contact />
        
        <footer className="py-16 border-t border-white/10 relative overflow-hidden bg-black/80 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#00e6ff]" />
                <span className="text-base font-display font-bold tracking-[0.2em] text-white">
                  CLEVER<span className="gradient-text">FLOWS</span>
                </span>
              </div>
              <p className="text-[11px] font-mono text-white/40 tracking-wider">
                Dedicated UI Designer • Game HUDs & Interfaces
              </p>
            </div>

            <a 
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-[#00e6ff] hover:text-black hover:border-transparent transition-all duration-300 text-[11px] font-mono uppercase tracking-[0.25em] text-white/80 group font-semibold shadow-lg"
            >
              <MessageSquare size={14} className="text-[#00e6ff] group-hover:text-black transition-colors" />
              <span>Join Discord</span>
            </a>

            <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
              © {new Date().getFullYear()} CLEVERFLOWS UI ARCHIVE
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
