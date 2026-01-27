'use client';

import { motion } from 'framer-motion';
import { PenTool, Clapperboard, Video, CheckSquare } from 'lucide-react';

export function EffortlessMethod() {
  const steps = [
    { title: "Nós escrevemos", desc: "Roteiristas de marketing criam a narrativa.", icon: <PenTool className="w-6 h-6" /> },
    { title: "Nós dirigimos", desc: "Direção de arte cinematográfica.", icon: <Clapperboard className="w-6 h-6" /> },
    { title: "Nós produzimos", desc: "Equipamento de ponta (Drones, Cinema Cams).", icon: <Video className="w-6 h-6" /> },
    { title: "Você aprova", desc: "E recebe os créditos pela nova imagem da empresa.", icon: <CheckSquare className="w-6 h-6" />, highlight: true },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="text-center mb-16">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-widest mb-2 block">Processo Simplificado</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                NÓS FAZEMOS O TRABALHO DURO. <br />
                VOCÊ COLHE OS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">LUCROS.</span>
            </h2>
            <p className="text-gray-400 text-lg">"Ah, mas gravar dá trabalho..." <strong className="text-white">Não com a gente.</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-8 border rounded-lg flex flex-col items-center text-center transition-all hover:-translate-y-1 ${step.highlight ? 'bg-white text-black border-white' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                >
                    <div className={`p-3 rounded-full mb-4 ${step.highlight ? 'bg-black text-white' : 'bg-black/40 text-gray-300'}`}>
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className={`text-sm ${step.highlight ? 'text-gray-600' : 'text-gray-400'}`}>{step.desc}</p>
                </motion.div>
            ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xl font-bold tracking-wider text-gray-300">ZERO DOR DE CABEÇA. MÁXIMA PERFORMANCE.</p>
        </div>

      </div>
    </section>
  );
}