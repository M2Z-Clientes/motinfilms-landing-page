'use client';

import { motion } from 'framer-motion';
import { Crown, Lock, Target } from 'lucide-react';
import CinematicText from '@/components/ui/CinematicText';

export function TheTurnaround() {
  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                MOTIN FILMS: A DIFERENÇA ENTRE <br />
                <span className="text-gray-500 line-through decoration-red-500 decoration-2">"TENTAR VENDER"</span> E <CinematicText text="SER COMPRADO." />
            </h2>
            <p className="text-xl text-gray-300 font-light">
                Nós não somos videomakers com uma câmera na mão. Somos uma potência audiovisual licenciada pela <strong className="text-white">Ancine</strong> e braço estratégico da <strong className="text-white">Catalisti Holding</strong>.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { title: "Percepção de Elite", desc: "Seu cliente aceita pagar mais caro porque sua imagem justifica o preço.", icon: <Crown className="w-8 h-8 text-amber-500" /> },
                { title: "Retenção Brutal", desc: "Roteiros desenhados com gatilhos mentais que prendem a atenção até o fim.", icon: <Lock className="w-8 h-8 text-amber-500" /> },
                { title: "Domínio de Mercado", desc: "Você para de competir e começa a liderar.", icon: <Target className="w-8 h-8 text-amber-500" /> }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors text-center flex flex-col items-center"
                >
                    <div className="p-4 bg-black/40 rounded-full mb-6 border border-white/5 shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-2xl font-light">
                Nós não filmamos "cenas". <span className="font-bold text-white border-b-2 border-white">Nós filmamos autoridade.</span>
            </p>
        </div>

      </div>
    </section>
  );
}