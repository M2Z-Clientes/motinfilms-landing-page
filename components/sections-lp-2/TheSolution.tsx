'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Crown, ShieldCheck, Gem } from 'lucide-react';
import CinematicText from '@/components/ui/CinematicText';

export function TheSolution() {
  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
        
        {/* Lado Esquerdo: Texto */}
        <div className="flex-1">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">  
                    QUALIDADE CINEMATOGRÁFICA <br />
                    NÃO É LUXO. É <CinematicText text="FERRAMENTA DE VENDAS." className="text-blue-200" />
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Nós não apenas "gravamos vídeos". Nós construímos a aura de autoridade que o seu negócio precisa para cobrar o que vale.
                </p>
                <p className="text-gray-400 leading-relaxed border-l-2 border-blue-500/30 pl-4">
                    Ao contratar a Motin Films, você traz para o seu negócio o peso de uma produtora licenciada pela <strong>Ancine</strong> e a inteligência de mercado da <strong>Catalisti Holding</strong>.
                </p>
            </motion.div>
        </div>

        {/* Lado Direito: Cards de Benefício */}
        <div className="flex-1 w-full space-y-4">
            {[
                { title: "Descola da Concorrência", desc: "Seu cliente percebe imediatamente que você joga em outra liga.", icon: <ArrowUpRight className="text-red-400" /> },
                { title: "Aumenta o Valor Percebido", desc: "Uma estética premium justifica tickets mais altos.", icon: <Gem className="text-red-400" /> },
                { title: "Gera Confiança Instantânea", desc: "Qualidade técnica transmite solidez e profissionalismo.", icon: <ShieldCheck className="text-red-400" /> }
            ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 rounded flex items-start gap-4 hover:bg-white/10 transition-colors"
                >
                    <div className="p-3 bg-black/40 rounded-full border border-white/10">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}