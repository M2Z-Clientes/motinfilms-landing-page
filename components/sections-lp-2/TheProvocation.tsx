'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, EyeOff, XCircle } from 'lucide-react';

const painPoints = [
    {
        title: "O Risco da Invisibilidade",
        desc: "Fazer o que todo mundo faz te joga na vala comum das commodities. Se não há diferenciação visual, a única briga que sobra é a do menor preço.",
        icon: <EyeOff className="w-8 h-8 text-gray-500" />
    },
    {
        title: "A Guerra da Atenção",
        desc: "O público ignora o 'médio'. Apenas o extraordinário retém a atenção. Vídeos mornos são 'scrollados' em menos de 1 segundo.",
        icon: <XCircle className="w-8 h-8 text-gray-500" />
    },
    {
        title: "O Custo da Baixa Qualidade",
        desc: "Um vídeo ruim custa mais caro que uma superprodução, porque ele queima a credibilidade que você levou anos para construir.",
        icon: <TrendingDown className="w-8 h-8 text-red-500" />
    }
];

export function TheProvocation() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-4xl">
            <div className="flex items-center gap-2 mb-6 opacity-80">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span className="font-mono text-xs text-yellow-500 tracking-[0.2em] uppercase">Market Reality Check</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                SEU CONCORRENTE ESTÁ FAZENDO "VÍDEOS". <br />
                <span className="text-red-500">VOCÊ DEVERIA ESTAR FAZENDO CINEMA.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                A dura verdade do digital é: a percepção de valor do seu cliente é definida nos primeiros 3 segundos. 
                Se a sua empresa usa vídeos amadores ou imagens genéricas, você está comunicando inconscientemente que seu produto é "básico".
            </p>
        </div>

        {/* Grid de Pontos de Dor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-[#050505] border border-white/10 p-8 hover:border-red-900/50 transition-colors group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                        {point.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">{point.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                </motion.div>
            ))}
        </div>

        <div className="mt-12 text-center border-t border-white/5 pt-8">
            <p className="text-xl md:text-2xl font-light text-white">
                A Motin Films é a linha que separa as marcas que brigam por preço das <span className="text-white font-bold bg-white/10 px-2 py-0.5">marcas que são desejadas.</span>
            </p>
        </div>

      </div>
    </section>
  );
}