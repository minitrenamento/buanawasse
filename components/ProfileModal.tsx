
import React, { useRef, useState } from 'react';
import { X, Camera, Save, User, Mail, FileText } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onUpdate: (updatedProfile: UserProfile) => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, profile, onUpdate }) => {
  const [formData, setFormData] = useState<UserProfile>(profile);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, avatarUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-[2.5rem] shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="p-8 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div>
            <h2 className="text-2xl font-serif text-white uppercase italic">Meu Perfil <span className="text-amber-500">Fã</span></h2>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Membro da Família Buanawasse</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-amber-500/30 p-1">
                <img 
                  src={formData.avatarUrl || 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=300'} 
                  className="w-full h-full object-cover rounded-full"
                  alt="Avatar"
                />
              </div>
              <button 
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 bg-amber-500 text-black p-2 rounded-full border-4 border-zinc-900 hover:scale-110 transition-transform shadow-lg"
              >
                <Camera className="w-4 h-4" />
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                className="hidden" 
                accept="image/*"
              />
            </div>
            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Alterar Fotografia</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">
                <User className="w-3 h-3 text-amber-500" /> Nome Completo
              </label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm"
                placeholder="Como devemos chamar você?"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">
                <Mail className="w-3 h-3 text-amber-500" /> Endereço de Email
              </label>
              <input 
                type="email" 
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">
                <FileText className="w-3 h-3 text-amber-500" /> Sobre Mim
              </label>
              <textarea 
                value={formData.bio}
                onChange={e => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                rows={3}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm resize-none"
                placeholder="Fale um pouco sobre sua paixão pela música de Pemba..."
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-amber-500 hover:bg-white text-black py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-2xl shadow-amber-500/20"
          >
            <Save className="w-5 h-5" />
            GUARDAR ALTERAÇÕES
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
