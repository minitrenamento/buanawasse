
import { Album } from './types';

export const ALBUMS: Album[] = [
  {
    id: 'nrima-nmotcha-2025',
    title: 'Nrima Nmotcha',
    year: 2025,
    coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    price: 100,
    description: 'Lançado em Outubro de 2025. O single fenomenal que conquistou Moçambique com seu ritmo contagiante.',
    tracks: [
      { id: 't-nm', title: 'Nrima Nmotcha', duration: '3:52', price: 60, previewUrl: '#', albumId: 'nrima-nmotcha-2025', coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'ep-2025-5min',
    title: '5 em 5 Minutos (EP)',
    year: 2025,
    coverUrl: 'https://images.unsplash.com/photo-1514320298574-2b9d5353940c?auto=format&fit=crop&q=80&w=800',
    price: 350,
    description: 'Lançado em Maio de 2025. Uma jornada de ritmos intensos, incluindo o hit "Kihotcha".',
    tracks: [
      { id: 't-5min', title: '5 em 5 Minutos', duration: '3:45', price: 50, previewUrl: '#', albumId: 'ep-2025-5min', coverUrl: 'https://images.unsplash.com/photo-1514320298574-2b9d5353940c?auto=format&fit=crop&q=80&w=800' },
      { id: 't-kihotcha', title: 'Kihotcha (feat. AZ Khinera)', duration: '4:12', price: 50, previewUrl: '#', albumId: 'ep-2025-5min', coverUrl: 'https://images.unsplash.com/photo-1514320298574-2b9d5353940c?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'sucessos-retro',
    title: 'Ukupuela & Hits',
    year: 2024,
    coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
    price: 600,
    description: 'A coleção definitiva dos sucessos que pararam Moçambique entre 2022 e 2024.',
    tracks: [
      { id: 't-ukupuela', title: 'Ukupuela', duration: '4:05', price: 50, previewUrl: '#', albumId: 'sucessos-retro', coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800' },
    ]
  }
];

export const ARTIST_INFO = {
  name: 'Buanawasse Mateus',
  bio: 'Buanawasse Mateus é a voz prodígio de Pemba, fundindo a alma de Cabo Delgado com os ritmos globais. Sua música é uma celebração da identidade moçambicana, elevando o nome de Moçambique ao cenário internacional.',
  images: {
    heroBg: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1600', // Praia de Pemba / Cabo Delgado
    artistHero: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800', // Retrato Estilizado
    bio: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000', // Cultura / Instrumentos
    landscape: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200', // Outra vista da costa
    heritage: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&q=80&w=1200', // Textura Cultural
    gallery: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1514525253361-b83f85f553c0?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&q=80&w=600'
    ]
  },
  contact: {
    email: 'booking@buanawassemateus.com',
    phone: '+258 86 231 4261',
    address: 'Pemba - Cabo Delgado, Moçambique'
  },
  socials: {
    instagram: '@buanawasse_mateus',
    facebook: 'Buanawasse Official',
    youtube: 'BuanawasseMateusVEVO'
  }
};
