
import React from 'react';
import { ShoppingBag, Music, User, Search } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenProfile: () => void;
  userProfile: UserProfile;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenProfile, userProfile }) => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music className="w-8 h-8 text-amber-500" />
          <h1 className="text-xl font-bold tracking-tighter text-white uppercase italic">
            Buanawasse <span className="text-amber-500">Mateus</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#loja" className="hover:text-amber-500 transition-colors">LOJA</a>
          <a href="#albuns" className="hover:text-amber-500 transition-colors">ÁLBUNS</a>
          <a href="#biografia" className="hover:text-amber-500 transition-colors">BIOGRAFIA</a>
          <a href="#contato" className="hover:text-amber-500 transition-colors">CONTATO</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors group">
            <Search className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 transition-colors" />
          </button>
          
          <button 
            onClick={onOpenProfile}
            className="flex items-center gap-2 p-1 pl-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-amber-500/50 transition-all group"
          >
            <span className="hidden sm:block text-[10px] font-black text-zinc-400 uppercase tracking-widest pr-1">Perfil</span>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700">
              {userProfile.avatarUrl ? (
                <img src={userProfile.avatarUrl} className="w-full h-full object-cover" alt="" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                  <User className="w-4 h-4 text-zinc-500" />
                </div>
              )}
            </div>
          </button>

          <button 
            onClick={onOpenCart}
            className="relative p-2 bg-zinc-900 border border-zinc-800 rounded-full hover:border-amber-500/50 transition-all group"
          >
            <ShoppingBag className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-zinc-950">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
