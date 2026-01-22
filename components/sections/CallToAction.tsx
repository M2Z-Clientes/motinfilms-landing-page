'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Check, Clapperboard, Star } from 'lucide-react';
import { TrackView } from 'ninetwo-user-tracking';
import CinematicText from '../ui/CinematicText'; // Certifique-se de importar o componente criado anteriormente

export function CallToAction() {
  const ctaItems = [
    { text: 'ANÁLISE DE PONTO CEGO', code: 'SCENE_01' },
    { text: 'ROTEIRO DE DIFERENCIAÇÃO', code: 'SCENE_02' },
    { text: 'PLANO DE AÇÃO IMEDIATO', code: 'SCENE_03' },
  ];

  return (
    <TrackView
      eventName="offer_view"
      category="Offer Section"
      label="Pedir Diagnostico Gratuito"
      threshold={0.5}
    >
      <section className="relative py-24 px-4 bg-[#020202] text-white overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
        
        {/* --- CINEMATIC BACKGROUND --- */}
        {/* Perfurações de Filme 35mm nas laterais */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-[#0a0a0a] border-r border-white/10 flex flex-col justify-between py-2 z-10 pointer-events-none">
             {[...Array(20)].map((_, i) => (
                <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>
             ))}
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-[#0a0a0a] border-l border-white/10 flex flex-col justify-between py-2 z-10 pointer-events-none">
             {[...Array(20)].map((_, i) => (
                <div key={i} className="w-4 h-6 mx-auto bg-black rounded-sm opacity-50"></div>
             ))}
        </div>

        {/* Efeito de Projetor (Spotlight) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-white/5 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

        <div className="container mx-auto max-w-4xl relative z-20 text-center">
          
          {/* Label Superior */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-8 border border-white/20 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm"
          >
            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-300">
               OPORTUNIDADE EXCLUSIVA
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            PRONTO PARA O <br className="hidden md:block" />
            <span className="relative inline-block px-2 mx-2">
                {/* Efeito de marca-texto cinematográfico (Luz de fundo) */}
                <div className="absolute inset-0 bg-white/10 -skew-x-12 blur-sm"></div>
                <CinematicText text="CLOSE-UP" speed="medium" />
            </span> 
            DA SUA MARCA?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400 font-light"
          >
            Receba um <span className="text-white font-semibold border-b border-white/30">Diagnóstico de Posicionamento Audiovisual</span> gratuito e descubra o roteiro que falta para o seu sucesso.
          </motion.p>

          {/* O "Script" (Lista de Benefícios) */}
          <div className="relative max-w-xl mx-auto mb-12">
            {/* Visual de Papel/Tablet */}
            <div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>
            
            <motion.div 
                className="relative bg-black/40 border border-white/10 backdrop-blur-md p-8 rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                {/* Linhas decorativas do "Roteiro" */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-500/50 rounded-b-md"></div>

                <div className="space-y-6 text-left">
                    {ctaItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        className="flex items-start gap-4 group"
                    >
                        {/* Checkbox estilo Script */}
                        <div className="mt-1 w-5 h-5 rounded border border-white/30 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            <Check className="w-3 h-3" />
                        </div>
                        <div>
                            <span className="block font-mono text-[10px] text-gray-500 mb-0.5 tracking-wider">{item.code}</span>
                            <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{item.text}</span>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </motion.div>
          </div>

          {/* Botão de Ação Principal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="relative group inline-block"
          >
            {/* Efeito Glow atrás do botão */}
            <div className="absolute inset-0 bg-white rounded-sm blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <Button
              size="lg"
              data-nt-ut-event='click'
              data-nt-ut-category='Offer Section'
              data-nt-ut-label='Pedir Diagnostico Gratuito'
              // Usando classes diretas para garantir o estilo, já que as variantes podem ser limitadas
              className="relative bg-white text-black hover:bg-gray-200 hover:text-black h-16 px-10 text-base md:text-lg tracking-widest font-bold uppercase rounded-sm border-2 border-transparent hover:border-black/10 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Clapperboard className="w-5 h-5 mr-3 group-hover:animate-pulse" />
              Solicitar Diagnóstico
            </Button>
            
            <p className="mt-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest opacity-60">
                Vagas limitadas para este mês
            </p>
          </motion.div>

        </div>
      </section>
    </TrackView>
  );
}