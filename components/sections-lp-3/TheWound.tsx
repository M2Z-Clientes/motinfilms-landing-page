'use client';

import { motion } from 'framer-motion';
import { XCircle, DollarSign, Frown, TrendingDown } from 'lucide-react';

export function TheWound() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Lado Esquerdo: Texto de Impacto */}
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-red-950/30 border border-red-900/50 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-red-400 font-mono text-xs uppercase tracking-widest">Alerta de Prejuízo</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    QUANTO DINHEIRO VOCÊ JÁ <span className="text-red-500 bg-red-900/10 px-2">QUEIMOU</span> COM VÍDEOS QUE NINGUÉM ASSISTE?
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Sejamos francos: postar vídeo "mais ou menos" não é marketing. <strong className="text-white">É desperdício.</strong> O seu cliente leva menos de 3 segundos para julgar se sua empresa é séria ou amadora.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-red-600 pl-4 bg-white/5 p-4 rounded-r-md">
                    Se o seu vídeo tem áudio ruim, imagem lavada ou roteiro fraco, a mensagem que você passa é clara: <span className="text-white italic">"Meu produto não vale o seu dinheiro".</span>
                </p>
            </div>

            {/* Lado Direito: Lista de Dores */}
            <div className="flex-1 w-full space-y-4">
                {[
                    { text: "Você posta e o engajamento é pífio.", icon: <Frown className="w-6 h-6 text-red-500" /> },
                    { text: "Seus anúncios no tráfego pago não convertem.", icon: <DollarSign className="w-6 h-6 text-red-500" /> },
                    { text: "Você vê empresas menores parecendo maiores que a sua.", icon: <TrendingDown className="w-6 h-6 text-red-500" /> },
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#050505] border border-red-900/20 p-6 rounded flex items-center gap-4 hover:border-red-500/50 transition-colors group"
                    >
                        <div className="p-3 bg-red-950/20 rounded-full group-hover:bg-red-900/30 transition-colors">
                            <XCircle className="w-6 h-6 text-red-500" />
                        </div>
                        <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{item.text}</p>
                    </motion.div>
                ))}
                
                <div className="mt-8 text-center md:text-left pt-4">
                    <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">
                        A culpa não é do algoritmo. A culpa é da sua <span className="text-white border-b border-red-500">qualidade visual.</span>
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}