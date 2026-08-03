import { useState } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Projects');

  const navItems = [
    { name: 'About', href: '#hero' },
    { name: 'Projects', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
    >
      {/* Sleek Floating Pill Container (Matching Reference Image) */}
      <div className="flex items-center gap-6 px-7 py-2.5 rounded-2xl bg-[#0a0d1d]/80 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] pointer-events-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className="relative flex flex-col items-center text-xs font-sans tracking-wide transition-all duration-200"
            >
              <span className={isActive ? 'text-white font-medium' : 'text-white/60 hover:text-white'}>
                {item.name}
              </span>
              {isActive && (
                <motion.span 
                  layoutId="activeDot"
                  className="w-1 h-1 rounded-full bg-white mt-1 shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                />
              )}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
