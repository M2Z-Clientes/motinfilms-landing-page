'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import CinematicText from '@/components/ui/CinematicText';
import Image from 'next/image';
import { triggerRdStationPopup } from '@/utils/RDStation';
import { ShieldCheck, TrendingUp, AlertOctagon } from 'lucide-react';

export function Lp3Hero() {
  const videoUrl = "https://motinfilms.com.br/Showreel.mp4"; 

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-[#050505] py-20 md:py-10">
      
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover opacity-20 pointer-events-none filter grayscale contrast-125"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8 flex flex-col items-center">
        <div className="max-w-5xl space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
             <Image width="180" height="180" src="/images/motin-logo-white.webp" alt="Motin Films" className="mx-auto w-24 md:w-32 opacity-70" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl"
          >
            ENQUANTO VOCÊ ECONOMIZA NO VÍDEO, <br />
            SEU CONCORRENTE <CinematicText text="DOMINA O MERCADO" className="text-red-500" speed="fast" /> COM A NOSSA AJUDA.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            A era do amadorismo acabou. Ou sua marca tem <span className="text-white font-bold">qualidade de cinema</span>, ou ela é invisível. Pare de ser ignorado no feed e comece a ser desejado.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 py-4"
          >
            <span className="flex items-center gap-2 text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest bg-white/5 px-3 py-1 rounded border border-white/10">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Certificação Ancine
            </span>
            <span className="flex items-center gap-2 text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest bg-white/5 px-3 py-1 rounded border border-white/10">
                <TrendingUp className="w-4 h-4 text-blue-500" /> Estratégia de Martech
            </span>
            <span className="flex items-center gap-2 text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest bg-white/5 px-3 py-1 rounded border border-white/10">
                <AlertOctagon className="w-4 h-4 text-red-500" /> Não é gasto, é investimento
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pb-4"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 font-bold tracking-widest uppercase shadow-[0_0_40px_rgba(255,255,255,0.2)] h-auto whitespace-normal text-center"
              onClick={triggerRdStationPopup}
            >
              QUERO PARAR DE PERDER VENDAS
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}