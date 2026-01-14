
import React, { useState } from 'react';
import { Play, Anchor, Music, ArrowRight, Waves } from 'lucide-react';
import { ARTIST_INFO } from '../constants';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background: The Beautiful Beach of Cabo Delgado */}
      <div className="absolute inset-0 z-0 bg-zinc-900">
        {!hasError ? (
          <img 
            src={ARTIST_INFO.images.heroBg} 
            alt="Praia de Cabo Delgado"
            loading="eager"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-[2500ms] ease-out ${isLoaded ? 'opacity-50 scale-105' : 'opacity-0 scale-100'}`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-amber-900/20 flex items-center justify-center">
             <Waves className="w-20 h-20 text-zinc-800" />
          </div>
        )}
        
        {/* Cinematic Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-5 items-center gap-12 pt-20">
        {/* Content */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.4em] mb-8 uppercase shadow-xl">
            <Waves className="w-3 h-3" />
            O Som de Cabo Delgado
          </div>
          
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-[0.85] tracking-tighter">
            BUANAWASSE <br/>
            <span className="text-amber-500 font-sans font-black italic">MATEUS</span>
          </h2>
          
          <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            A harmonia perfeita entre o mar de <span className="text-white font-bold italic">Pemba</span> e os ritmos que conquistaram Moçambique.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <button className="w-full sm:w-auto bg-amber-500 hover:bg-white text-black px-12 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/40">
              <Play className="w-5 h-5 fill-current" />
              OUVIR AGORA
            </button>
            <button className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all">
              CATÁLOGO <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Visual Focus */}
        <div className={`lg:col-span-2 relative flex justify-center lg:justify-end transition-all duration-[1500ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative w-72 md:w-80 lg:w-[420px]">
            <div className="absolute -inset-6 bg-amber-500/10 rounded-[4rem] blur-3xl"></div>
            <div className="relative aspect-[4/5] bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] group">
              <img 
                src={ARTIST_INFO.images.artistHero} 
                alt="Buanawasse Mateus" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1523944339743-0fe06f079239?auto=format&fit=crop&q=80&w=800';
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6s]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="flex items-center gap-3 text-amber-500 mb-2">
                  <Music className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Artista Original</span>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase italic tracking-tighter">Orgulho de Moçambique</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
