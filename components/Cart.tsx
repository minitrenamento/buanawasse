
import React from 'react';
import { X, Trash2, CreditCard, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-zinc-900 h-full shadow-2xl flex flex-col animate-slide-in">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Seu Carrinho</h2>
          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
            <X className="w-6 h-6 text-zinc-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p>O seu carrinho está vazio.</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 bg-zinc-800/50 p-3 rounded-xl border border-zinc-700/50">
                <img src={item.coverUrl} className="w-16 h-16 rounded-lg object-cover" alt="" />
                <div className="flex-1">
                  <h4 className="font-bold text-white leading-tight">{item.title}</h4>
                  <p className="text-xs text-zinc-500 uppercase">{item.type === 'album' ? 'Álbum Completo' : 'Single'}</p>
                  <p className="text-amber-500 font-bold mt-1">{item.price},00 MT</p>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="self-center p-2 text-zinc-500 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-zinc-800/30 border-t border-zinc-800">
            <div className="flex justify-between items-center mb-6">
              <span className="text-zinc-400">Total</span>
              <span className="text-3xl font-bold text-white">{total},00 MT</span>
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-400 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95">
              <CreditCard className="w-5 h-5" />
              FINALIZAR COMPRA
            </button>
            <p className="text-[10px] text-center text-zinc-500 mt-4 uppercase tracking-widest">
              Pagamento seguro via M-Pesa & Cartão de Crédito
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
