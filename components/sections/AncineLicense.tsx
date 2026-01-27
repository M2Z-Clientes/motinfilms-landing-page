'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function AncineLicense() {
  return (
    <section className="relative h-[200px] md:h-[240px] flex items-center justify-center overflow-hidden border-y border-white/10 group">
      
      {/* --- BACKGROUND IMERSIVO (Parallax & Image) --- */}
      <div className="absolute inset-0 z-0">
        {/* Imagem de Fundo (Lente de Cinema / Set) */}
        <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop" 
            alt="Cinema Background"
            className="w-full h-full object-cover opacity-40 filter grayscale contrast-125"
        />
        
        {/* Overlay Gradiente para leitura */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
        
        {/* Efeito de "Red Flare" (Luz de Cinema) vindo da lateral */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent mix-blend-screen pointer-events-none"></div>
      </div>

      {/* --- EFEITO DE "SCANNER" (Atenção Visual) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
         <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)]"
         />
      </div>

      {/* --- CONTEÚDO --- */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12">
        
        {/* Texto: Produtora Licenciada */}
        <div className="flex items-center gap-4">
            {/* Ícone de Escudo (Autoridade) */}
            <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="p-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
            >
                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>

            <div className="text-center md:text-left">
                <p className="font-mono text-[10px] md:text-xs text-red-500 uppercase tracking-[0.3em] mb-1">
                    Certified Production
                </p>
                <h3 className="text-xl md:text-3xl font-bold text-white tracking-wide">
                    PRODUTORA <span className="text-gray-400">LICENCIADA</span>
                </h3>
            </div>
        </div>

        {/* Divisor Vertical (Apenas Desktop) */}
        <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>

        {/* Logo da ANCINE */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
        >
            {/* SUBSTITUA O SRC ABAIXO PELA SUA LOGO DA ANCINE REAL.
               Usei um placeholder visual, mas apliquei filtros CSS para garantir
               que a logo fique BRANCA (invert) para dar contraste no fundo escuro.
            */}
            <img 
                src="/images/ancine-logo-1.png" 
                alt="Logo Ancine" 
                className="h-14 md:h-20 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            />
            
            {/* Caso não tenha a imagem ainda, este texto serve de placeholder estilizado: */}
            {/* <div className="text-3xl font-black text-white tracking-tighter opacity-80 select-none">
                ANCINE
            </div> 
            */}
        </motion.div>

      </div>
    </section>
  );
}