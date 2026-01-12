import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuLayoutGrid, LuMaximize, LuInfinity, LuInstagram, LuTwitter, LuFacebook, LuMusic } from 'react-icons/lu';
import { Reveal } from '@/components/motion/Reveal';
import { SignatureEffect } from '@/components/effects/SignatureEffect';
import { SignatureInteraction } from '@/components/effects/SignatureInteraction';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#030303] text-[#F3F3F3] font-['Manrope'] overflow-x-hidden selection:bg-purple-900 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Syne:wght@400;700;800&display=swap');
        
        .font-display {
          font-family: 'Syne', sans-serif;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #111;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>

      <SignatureInteraction type="sticky-progress" />

      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 bg-black z-[100] flex justify-center items-center"
            exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1] } }}
          >
            <motion.h1 
              className="font-display text-4xl md:text-6xl tracking-widest text-white uppercase"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Aura
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-bold tracking-tighter uppercase">
          Aura<span className="text-purple-500">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase">
          <a href="#rooms" className="hover:text-purple-400 transition-colors">Rooms</a>
          <a href="#events" className="hover:text-purple-400 transition-colors">Lineup</a>
          <a href="#reservations" className="hover:text-purple-400 transition-colors">VIP</a>
        </div>
        <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-xs font-bold uppercase tracking-wider">
          Book Table
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <SignatureInteraction type="parallax" className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract dark neon atmosphere" 
            className="w-full h-full object-cover opacity-60 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#030303]" />
        </SignatureInteraction>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
          <Reveal>
            <p className="text-sm md:text-base font-bold tracking-[0.3em] text-purple-400 uppercase mb-4">
              Dallas, Texas
            </p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.9] tracking-tight mix-blend-overlay">
              Five Worlds<br/>
              <span className="text-white opacity-90">One Night</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col items-center mt-12 gap-4">
            <p className="max-w-md text-gray-400 font-light leading-relaxed">
              An immersive multi-sensory complex featuring five distinct sonic environments. The new standard for nightlife in Dallas.
            </p>
            <div className="h-16 w-[1px] bg-gradient-to-b from-purple-500 to-transparent mt-8" />
          </Reveal>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Choose Your <span className="text-purple-500">Frequency</span>.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Aura isn't just a club; it's a labyrinth of experiences. From the pounding bass of the Mainframe to the open-air serenity of the Zenith Patio, we have curated five distinct atmospheres under one roof.
            </p>
            <div className="flex gap-8 pt-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <LuLayoutGrid className="text-2xl text-purple-400" />
                  <span className="block font-display text-3xl">5</span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Rooms</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <LuMaximize className="text-2xl text-purple-400" />
                  <span className="block font-display text-3xl">30k</span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Sq Ft</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <LuInfinity className="text-2xl text-purple-400" />
                  <span className="block font-display text-3xl">∞</span>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Possibilities</span>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2} className="relative h-[500px] w-full">
            <div className="absolute inset-0 bg-purple-900/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1618176580469-cd6065538355?q=80&w=1956&auto=format&fit=crop" 
              alt="Abstract architectural details"
              className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
            />
          </Reveal>
        </div>
      </section>

      {/* The Rooms Section */}
      <section id="rooms" className="py-12 bg-neutral-900/30">
        <div className="px-6 mb-12 flex items-end justify-between max-w-7xl mx-auto relative">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white/10 select-none pointer-events-none absolute left-0 right-0 text-center -translate-y-1/2">
            Destinations
          </h2>
          <h3 className="relative z-10 font-display text-3xl text-white">The Spaces</h3>
          <span className="hidden md:block text-xs uppercase tracking-widest text-gray-500">Scroll to explore</span>
        </div>

        <div className="flex flex-col gap-1">
          {/* Room 1: The Mainframe */}
          <div className="group relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center border-t border-white/5">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" 
                alt="Main room lights" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            </div>
            <div className="relative z-10 text-center space-y-2 pointer-events-none">
              <span className="block text-xs font-bold tracking-[0.5em] text-purple-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                Electronic / House
              </span>
              <SignatureEffect effect="text-outline" className="block font-display text-6xl md:text-8xl font-black uppercase group-hover:text-white transition-colors duration-500">
                Mainframe
              </SignatureEffect>
              <p className="text-sm text-gray-300 max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                State of the art audio. Immersive lasers. The heartbeat of Aura.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            {/* Room 2: The Vault */}
            <div className="group relative h-[50vh] overflow-hidden border-t border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2068&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700"
                alt="Industrial texture"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-display text-4xl font-bold uppercase mb-2">The Vault</h3>
                <p className="text-sm text-gray-400">Industrial Techno. Raw Concrete. Underground.</p>
              </div>
            </div>

            {/* Room 3: Velvet Lounge */}
            <div className="group relative h-[50vh] overflow-hidden border-t border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1541423485072-233c7f3b890a?q=80&w=1932&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700"
                alt="Red velvet texture"
              />
              <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-display text-4xl font-bold uppercase mb-2">Velvet Room</h3>
                <p className="text-sm text-gray-400">R&B. Hip-Hop. Plush Interiors.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            {/* Room 4: Onyx Bar */}
            <div className="group relative h-[50vh] overflow-hidden border-t border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1570559784382-74d115168058?q=80&w=2072&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700"
                alt="Cocktail bar"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-display text-4xl font-bold uppercase mb-2">Onyx Bar</h3>
                <p className="text-sm text-gray-400">Craft Cocktails. Social. Gold & Marble.</p>
              </div>
            </div>

            {/* Room 5: Zenith Patio */}
            <div className="group relative h-[50vh] overflow-hidden border-t border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1505307520601-50e4ae2254e4?q=80&w=2066&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700"
                alt="City skyline night"
              />
              <div className="absolute bottom-8 left-8">
                <h3 className="font-display text-4xl font-bold uppercase mb-2">Zenith Patio</h3>
                <p className="text-sm text-gray-400">Open Air. Skyline Views. Chill Beats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lineup / Events Minimal */}
      <section id="events" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Residencies</span>
            </h2>
          </Reveal>
          <a href="#" className="hidden md:block text-sm uppercase tracking-widest hover:text-purple-400 transition-colors mt-4 md:mt-0">
            View Full Calendar -&gt;
          </a>
        </div>

        <div className="space-y-4">
          {/* Event Item 1 */}
          <Reveal>
            <SignatureEffect effect="glass-panel" className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer group">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center justify-center w-16 h-16 border border-white/20 rounded-full font-display">
                  <span className="text-xs text-gray-400 uppercase">Jan</span>
                  <span className="text-xl font-bold">12</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors">KØSMOS</h3>
                  <p className="text-gray-400 text-sm">Mainframe • Melodic Techno</p>
                </div>
              </div>
              <button className="px-6 py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Tickets
              </button>
            </SignatureEffect>
          </Reveal>

          {/* Event Item 2 */}
          <Reveal delay={0.1}>
            <SignatureEffect effect="glass-panel" className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer group">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center justify-center w-16 h-16 border border-white/20 rounded-full font-display">
                  <span className="text-xs text-gray-400 uppercase">Jan</span>
                  <span className="text-xl font-bold">14</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors">VELVET NIGHTS</h3>
                  <p className="text-gray-400 text-sm">Velvet Room • R&B Showcase</p>
                </div>
              </div>
              <button className="px-6 py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Tickets
              </button>
            </SignatureEffect>
          </Reveal>

          {/* Event Item 3 */}
          <Reveal delay={0.2}>
            <SignatureEffect effect="glass-panel" className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer group">
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center justify-center w-16 h-16 border border-white/20 rounded-full font-display">
                  <span className="text-xs text-gray-400 uppercase">Jan</span>
                  <span className="text-xl font-bold">19</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-purple-400 transition-colors">SYNTHETIC</h3>
                  <p className="text-gray-400 text-sm">The Vault • Industrial / Bass</p>
                </div>
              </div>
              <button className="px-6 py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Tickets
              </button>
            </SignatureEffect>
          </Reveal>
        </div>
      </section>

      {/* VIP / Reservation CTA */}
      <section id="reservations" className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2070&auto=format&fit=crop" 
            alt="Champagne atmosphere" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />
        </div>

        <Reveal className="relative z-10 text-center max-w-2xl px-6 space-y-8">
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase">
            Elevate Your <br/><span className="text-purple-500">Night</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Experience Aura from the best seats in the house. Premium bottle service, private tables, and dedicated hosts.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <SignatureEffect effect="btn-glow" as="button" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200">
              Book Bottle Service
            </SignatureEffect>
            <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              View Menu
            </button>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-20 pb-12 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="font-display text-2xl font-bold uppercase">Aura.</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dallas' premier nightlife destination. Five worlds, one night.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Location</h5>
            <address className="text-gray-500 not-italic space-y-2 text-sm">
              <p>2099 Elm Street</p>
              <p>Deep Ellum</p>
              <p>Dallas, TX 75201</p>
            </address>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Hours</h5>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li><span className="text-white">Thu:</span> 10pm - 2am</li>
              <li><span className="text-white">Fri:</span> 10pm - 4am</li>
              <li><span className="text-white">Sat:</span> 10pm - 4am</li>
              <li><span className="text-white">Sun:</span> 9pm - 2am</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Connect</h5>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><LuInstagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><LuMusic size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><LuTwitter size={20} /></a>
            </div>
            <div className="mt-8">
              <input type="email" placeholder="Join the Guestlist" className="bg-transparent border-b border-gray-700 w-full py-2 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; 2024 Aura Dallas. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
