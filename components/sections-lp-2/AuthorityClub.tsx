'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const logos = [
  '/images/logos_marcas/mercedes-logo.png', // Ajuste os caminhos conforme seus arquivos reais ou use placeholders
  '/images/logos_marcas/sony-logo.png',
  '/images/logos_marcas/wb-logo.png',
  '/images/logos_marcas/unimed-logo.png',
  '/images/logos_marcas/electrolux-logo.png',
  '/images/logos_marcas/itaipu-logo.png'
];

export function AuthorityClub() {
  return (
    <section className="relative py-20 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-white">
            JUNTE-SE ÀS MARCAS QUE <span className="text-red-500">NÃO ACEITAM O "BÁSICO"</span>
        </h2>

        {/* Logo Grid (Simples e Elegante) */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Substitua por imagens reais. Usando texto como placeholder caso imagem falhe */}
             {logos.map((src, i) => (
                 <div key={i} className="h-12 w-32 relative flex items-center justify-center">
                    {/* Placeholder visual se não tiver a imagem */}
                    <div className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 uppercase">{src.split('/')[3]?.replace('-logo.png','')}</div>
                 </div>
             ))}
        </div>

        {/* Depoimento Featured */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-[#050505] border border-white/10 p-8 md:p-12 relative rounded-sm"
        >
            <Quote className="absolute top-8 left-8 w-8 h-8 text-white/10" />
            <p className="text-xl md:text-2xl text-gray-200 font-light italic mb-6 relative z-10">
                "Resultados comprovados por quem mais entende. Ficamos super satisfeitos com a produção, atendimento e suporte impecáveis."
            </p>
            <div className="flex flex-col items-center">
                <span className="font-bold text-white tracking-widest uppercase">Diretoria ENAF</span>
                <span className="text-xs text-gray-500 font-mono mt-1">Evento Nacional de Atividade Física</span>
            </div>
        </motion.div>

      </div>
    </section>
  );
}