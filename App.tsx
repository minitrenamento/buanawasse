
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AlbumCard from './components/AlbumCard';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ChatAssistant from './components/ChatAssistant';
import ProfileModal from './components/ProfileModal';
import { ALBUMS, ARTIST_INFO } from './constants';
import { CartItem, UserProfile } from './types';
import { Music, Disc, Star, Instagram, Facebook, Youtube, Play, ArrowRight, Camera, MapPin, Heart, Waves } from 'lucide-react';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [bioImgLoaded, setBioImgLoaded] = useState(false);
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Fã de Pemba',
    email: 'fa@exemplo.mz',
    avatarUrl: '',
    bio: 'Apaixonado pelos ritmos de Cabo Delgado.'
  });

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => [...prev, item]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const featuredTracks = ALBUMS.flatMap(album => album.tracks).slice(0, 8);

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-amber-500 selection:text-black">
      <Header 
        cartCount={cartItems.length} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenProfile={() => setIsProfileOpen(true)}
        userProfile={userProfile}
      />
      
      <main>
        <Hero />

        {/* Pemba Landscapes Section - High Impact Visual */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <img 
            src={ARTIST_INFO.images.landscape} 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            alt="Pemba Landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950"></div>
          <div className="relative z-10 text-center px-4">
            <div className="inline-flex items-center gap-3 text-amber-500 mb-6">
              <Waves className="w-6 h-6 animate-bounce" />
              <span className="font-black tracking-[0.4em] text-xs uppercase">Cabo Delgado • Onde a música nasce</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tighter">O Ritmo que <br/><span className="text-amber-500 italic">Vem do Mar</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">As harmonias de Buanawasse Mateus são reflexos do sol, das ondas e da gente de Pemba.</p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 border-y border-zinc-900 bg-zinc-900/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            <div className="flex flex-col items-center text-center group">
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] mb-6 group-hover:bg-amber-500 transition-all duration-500 shadow-2xl">
                <Disc className="w-8 h-8 text-amber-500 group-hover:text-black" />
              </div>
              <span className="text-5xl font-black text-white tracking-tighter">03</span>
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Álbuns Oficiais</span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] mb-6 group-hover:bg-amber-500 transition-all duration-500 shadow-2xl">
                <Music className="w-8 h-8 text-amber-500 group-hover:text-black" />
              </div>
              <span className="text-5xl font-black text-white tracking-tighter">09</span>
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Singles</span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] mb-6 group-hover:bg-amber-500 transition-all duration-500 shadow-2xl">
                <Star className="w-8 h-8 text-amber-500 group-hover:text-black" />
              </div>
              <span className="text-5xl font-black text-white tracking-tighter uppercase">95K</span>
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Fãs em Moçambique</span>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] mb-6 group-hover:bg-amber-500 transition-all duration-500 shadow-2xl">
                <Heart className="w-8 h-8 text-amber-500 group-hover:text-black" />
              </div>
              <span className="text-5xl font-black text-white tracking-tighter">AFRO</span>
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">Cultura Viva</span>
            </div>
          </div>
        </section>

        {/* Albums Grid */}
        <section id="albuns" className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <div className="max-w-2xl">
                <div className="w-24 h-1 bg-amber-500 mb-10"></div>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Nossa <span className="text-amber-500 italic">Música</span></h2>
                <p className="text-zinc-400 text-xl font-light leading-relaxed">Coleções exclusivas que capturam a essência sonora de Cabo Delgado.</p>
              </div>
              <button className="flex items-center gap-4 text-amber-500 font-black hover:gap-8 transition-all text-xs tracking-[0.4em] uppercase py-4 border-b border-amber-500/20">
                VER CATÁLOGO COMPLETO <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {ALBUMS.map(album => (
                <AlbumCard key={album.id} album={album} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tracks */}
        <section id="loja" className="py-32 px-4 bg-zinc-900/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">Melhores de <span className="text-amber-500">Pemba</span></h2>
              <p className="text-zinc-500 text-lg font-light tracking-widest uppercase">Ouça a pureza da alma africana.</p>
            </div>
            
            <div className="space-y-4">
              {featuredTracks.map((track, idx) => (
                <div key={track.id} className="group flex items-center justify-between p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 hover:bg-zinc-900 border border-white/5 hover:border-amber-500/20 transition-all duration-500">
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-zinc-800 font-black text-3xl group-hover:text-amber-500 transition-colors">0{idx + 1}</span>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform">
                      <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
                      <button className="absolute inset-0 bg-amber-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                        <Play className="w-8 h-8 text-black fill-current" />
                      </button>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl md:text-2xl group-hover:text-amber-500 transition-colors">{track.title}</h4>
                      <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-black mt-1">Buanawasse Mateus Official</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-10">
                    <span className="text-zinc-700 text-[10px] hidden sm:block font-mono tracking-widest">{track.duration}</span>
                    <button 
                      onClick={() => handleAddToCart({ id: track.id, type: 'track', title: track.title, price: track.price, coverUrl: track.coverUrl })}
                      className="bg-zinc-800 hover:bg-amber-500 text-white hover:text-black px-6 md:px-10 py-4 rounded-xl text-[10px] font-black transition-all active:scale-95 shadow-lg"
                    >
                      {track.price} MT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="py-16 border-t border-zinc-900 text-center bg-zinc-950">
        <div className="flex items-center justify-center gap-2 mb-6">
           <Music className="w-6 h-6 text-amber-500" />
           <span className="text-white font-black tracking-tighter uppercase italic">Buanawasse <span className="text-amber-500">Mateus</span></span>
        </div>
        <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase">&copy; 2025 Buanawasse Mateus. Todos os direitos reservados.</p>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={handleRemoveFromCart} 
      />
      
      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={userProfile}
        onUpdate={setUserProfile}
      />
      
      <ChatAssistant />
    </div>
  );
};

export default App;
