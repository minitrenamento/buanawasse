
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ARTIST_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
  };

  return (
    <section id="contato" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Entre em Contacto</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Para agendamento de concertos, parcerias ou dúvidas sobre a loja oficial, utilize os canais abaixo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-amber-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <a href={`mailto:${ARTIST_INFO.contact.email}`} className="text-zinc-400 hover:text-amber-500 transition-colors">
                  {ARTIST_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-amber-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Telefone / WhatsApp</h4>
                <a href={`tel:${ARTIST_INFO.contact.phone}`} className="text-zinc-400 hover:text-amber-500 transition-colors">
                  {ARTIST_INFO.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-amber-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Localização</h4>
                <p className="text-zinc-400">{ARTIST_INFO.contact.address}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/50">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Seu nome"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="seu@email.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Assunto</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none">
                  <option>Booking / Shows</option>
                  <option>Dúvida sobre Compra</option>
                  <option>Imprensa / Media</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Mensagem</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-2">
                <button 
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
                >
                  <Send className="w-5 h-5" />
                  ENVIAR MENSAGEM
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
