
import React, { useState } from 'react';
import { Album } from '../types';
import { ShoppingCart, ExternalLink, Music } from 'lucide-react';

interface AlbumCardProps {
  album: Album;
  onAddToCart: (item: any) => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, onAddToCart }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group bg-zinc-900/40 rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-500">
      <div className="relative aspect-square overflow-hidden bg-zinc-800/50">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        )}
        
        {!hasError ? (
          <img 
            src={album.coverUrl} 
            alt={album.title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true);
              setIsLoaded(true);
            }}
            className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : (
          <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-700">
            <Music className="w-12 h-12 mb-2" />
            <span className="text-[10px] font-black uppercase tracking-widest">Capa indisponível</span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <button 
            onClick={() => onAddToCart({ id: album.id, type: 'album', title: album.title, price: album.price, coverUrl: album.coverUrl })}
            className="bg-amber-500 p-4 rounded-full text-black hover:bg-white transition-colors transform hover:scale-110 active:scale-95"
          >
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/20 transition-colors transform hover:scale-110 active:scale-95">
            <ExternalLink className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{album.title}</h3>
          <span className="text-zinc-500 text-sm">{album.year}</span>
        </div>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-4 h-10">
          {album.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <span className="text-2xl font-bold text-amber-500">{album.price},00 MT</span>
          <span className="text-xs text-zinc-500 uppercase tracking-widest">{album.tracks.length} MÚSICAS</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
