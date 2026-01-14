
import React, { useRef, useState } from 'react';
import { X, Camera, Save, User, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onUpdate: (updatedProfile: UserProfile) => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, profile, onUpdate }) => {
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [isSaving, setIsSaving] = useState(false);
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
    setIsSaving(true);
    
    // Simulando um pequeno delay de salvamento para feedback visual
    setTimeout(() => {
      onUpdate(formData);
      setIsSaving(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in-up">
        <div className="p-8 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div>
            <h2 className="text-2xl font-serif text-white uppercase italic tracking-tight">Dados do <span className="text-amber-500">Perfil</span></h2>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Conectado à alma de Pemba</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Avatar Upload with Preview */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-500/20 p-1 bg-zinc-800 shadow-inner group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                {formData.avatarUrl ? (
                  <img 
                    src={formData.avatarUrl} 
                    className="w-full h-full object-cover rounded-full group-hover:opacity-75 transition-opacity"
                    alt="Avatar"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-600">
                    <User className="w-12 h-12" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-full">
                   <Camera className="w-8 h-8 text-white" />
                </div>
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
            <div className="text-center">
              <span className="text-white font-bold block">{formData.name || 'Seu Nome'}</span>
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Clique para carregar foto</span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">
                <User className="w-3 h-3 text-amber-500" /> Nome Completo
              </label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-amber-500/50 outline-none transition-all text-sm"
                placeholder="Ex: Mateus da Costa"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">
                <Mail className="w-3 h-3 text-amber-500" /> Email
              </label>
              <input 
                type="email" 
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-amber-500/50 outline-none transition-all text-sm"
                placeholder="seu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-2">
                <FileText className="w-3 h-3 text-amber-500" /> Minha Bio
              </label>
              <textarea 
                value={formData.bio}
                onChange={e => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                rows={2}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-amber-500/50 outline-none transition-all text-sm resize-none"
                placeholder="Fã numero 1..."
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSaving}
            className={`w-full ${isSaving ? 'bg-zinc-700' : 'bg-amber-500 hover:bg-white'} text-black py-5 rounded-[1.5rem] font-black flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-2xl shadow-amber-500/10`}
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <>
                <Save className="w-5 h-5" />
                SALVAR PERFIL
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
