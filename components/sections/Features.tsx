'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button'; // Seu botão existente
import { ArrowLeft, ArrowRight, AlertCircle, Play, Sparkles, Zap, Aperture } from 'lucide-react';
import { clsx } from 'clsx';
import CinematicText from '../ui/CinematicText'; // Certifique-se do caminho

// Componente visual auxiliar: Cantos de Viewfinder
const ViewfinderCorners = () => (
  <>
    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white/30" />
    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white/30" />
    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white/30" />
    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white/30" />
  </>
);

export function Features() {
  const painPoints = [
    {
      title: 'COMUNICAÇÃO_AMADORA', // Formato de arquivo
      description: 'Vídeos sem direção clara afastam clientes. O público percebe a falta de acabamento como falta de credibilidade.',
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      cta: 'CORRIGIR ROTEIRO',
      event: 'click',
      category: 'Pain Points',
      label: 'Diferenciacao',
    },
    {
      title: 'OPORTUNIDADES_PERDIDAS',
      description: 'Conteúdo genérico vira paisagem. Sem retenção visual, seus leads escorrem pelos dedos antes do CTA.',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      cta: 'CRIAR AUTENTICIDADE',
      event: 'click',
      category: 'Pain Points',
      label: 'Posicionamento',
    },
  ];

  const solutions = [
    {
      title: 'Roteiro Estratégico',
      subtitle: 'SCENE 01 - CONCEPT',
      description: 'Não filmamos apenas, contamos histórias. Criamos narrativas que conectam com sua audiência e impulsionam seus objetivos de negócio.',
      icon: <Sparkles className="w-10 h-10 text-white" />,
    },
    {
      title: 'Captação Dinâmica',
      subtitle: 'SCENE 02 - PRODUCTION',
      description: 'Tecnologia de ponta (Cinema Line) e iluminação narrativa para capturar cada momento com impacto visual de Hollywood.',
      icon: <Aperture className="w-10 h-10 text-white" />,
    },
    {
      title: 'Edição High-End',
      subtitle: 'SCENE 03 - POST-PROD',
      description: 'Color grading, sound design imersivo e cortes rítmicos. Transformamos bruto em obra de arte.',
      icon: <Play className="w-10 h-10 text-white" />,
    },
  ];

  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentSolutionIndex((prevIndex) => (prevIndex + 1) % solutions.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSolutionIndex((prevIndex) =>
      prevIndex === 0 ? solutions.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 bg-[#050505] text-gray-100 overflow-hidden">
      
      {/* --- CINEMATIC BACKGROUND LAYERS --- */}
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay z-10"></div>
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-10"></div>
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-20 px-6">
        
        {/* --- HEADER: PAIN POINTS --- */}
        <div className="mb-24">
            <div className="flex items-center gap-4 mb-8 opacity-70">
                <div className="h-[1px] w-12 bg-gray-500"></div>
                <span className="font-mono text-xs tracking-[0.3em] text-gray-400 uppercase">Input Log: Market Challenges</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            {painPoints.map((point, idx) => (
                <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
                >
                <ViewfinderCorners />
                
                {/* Header do Card estilo "Arquivo" */}
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-black/40 border border-white/10 rounded-full">
                        {point.icon}
                    </div>
                    <span className="font-mono text-[10px] text-red-500/70 border border-red-900/30 px-2 py-1 rounded bg-red-900/10">
                        ERROR_LOG_0{idx + 1}
                    </span>
                </div>

                <h3 className="font-mono text-xl text-white mb-3 tracking-tight group-hover:text-red-400 transition-colors">
                    {point.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-gray-700 pl-4">
                    {point.description}
                </p>

                <Button
                    variant="ghost" // Ajuste conforme seu componente Button
                    className="w-full border border-white/20 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-widest"
                    data-nt-ut-event={point.event}
                    data-nt-ut-category={point.category}
                >
                    {point.cta}
                </Button>
                </motion.div>
            ))}
            </div>
        </div>

        {/* --- TRANSITION TITLE --- */}
        <div className="text-center mb-16 relative">
             <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>
             <span className="bg-[#050505] px-6 relative z-10">
                <span className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white block md:inline">
                    COMO A MOTIN
                </span>
                <span className="block md:inline md:ml-4 text-3xl md:text-5xl lg:text-6xl">
                     {/* CinematicText entra aqui para dar o impacto visual */}
                    <CinematicText text="TRANSFORMA O CAOS." speed="fast" />
                </span>
             </span>
        </div>

        {/* --- SOLUTIONS CAROUSEL (MONITOR STYLE) --- */}
        <div className="relative max-w-4xl mx-auto">
          {/* UI do Monitor de Câmera */}
          <div className="absolute -top-6 left-0 flex gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            <span className="font-mono text-[10px] text-red-500 tracking-widest">REC</span>
            <span className="font-mono text-[10px] text-gray-500 ml-4">ISO 800</span>
            <span className="font-mono text-[10px] text-gray-500 ml-2">4K RAW</span>
          </div>

          <div className="border-y border-white/20 bg-black/40 backdrop-blur-md relative overflow-hidden h-[450px] md:h-[400px] flex items-center justify-center">
             {/* Crosshair Center */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[1px] h-full bg-white"></div>
                <div className="h-[1px] w-full bg-white absolute"></div>
             </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSolutionIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full px-8 md:px-20 text-center relative z-20"
              >
                <div className="inline-flex items-center justify-center p-4 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  {solutions[currentSolutionIndex].icon}
                </div>
                
                <p className="font-mono text-xs text-blue-400 mb-2 tracking-[0.2em] uppercase">
                    {solutions[currentSolutionIndex].subtitle}
                </p>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
                    {solutions[currentSolutionIndex].title}
                </h3>
                
                <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                    {solutions[currentSolutionIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons (Floating) */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-all hover:scale-110 z-30"
                aria-label="Previous solution"
            >
                <ArrowLeft className="w-8 h-8" />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white transition-all hover:scale-110 z-30"
                aria-label="Next solution"
            >
                <ArrowRight className="w-8 h-8" />
            </button>
          </div>

          {/* Timeline / Pagination */}
          <div className="flex justify-center items-center gap-1 mt-6">
            {solutions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentSolutionIndex ? 1 : -1);
                  setCurrentSolutionIndex(idx);
                }}
                className={clsx(
                  'h-1 transition-all duration-300',
                  currentSolutionIndex === idx ? 'w-12 bg-white shadow-[0_0_10px_white]' : 'w-4 bg-gray-700 hover:bg-gray-600'
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}