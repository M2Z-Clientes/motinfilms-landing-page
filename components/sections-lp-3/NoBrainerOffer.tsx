'use client';

import { motion } from 'framer-motion';
import { Zap, Smartphone, BrainCircuit, Check } from 'lucide-react';

export function NoBrainerOffer() {
  const bonuses = [
    { title: "Cortes de 30s e 15s", desc: "Editados especificamente para tráfego pago.", icon: <Zap className="w-6 h-6" /> },
    { title: "Formatos Verticais", desc: "Para você invadir o celular do seu cliente (Reels/TikTok).", icon: <Smartphone className="w-6 h-6" /> },
    { title: "Roteiro de Conversão", desc: "Estratégia pura aplicada a cada frame.", icon: <BrainCircuit className="w-6 h-6" /> },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white border-t border-white/5 overflow-hidden">
      
      {/* Efeito de "Ouro/Valor" no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/5 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
                <div className="inline-block px-3 py-1 bg-green-900/20 border border-green-500/30 rounded mb-4">
                    <span className="text-green-400 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                        <Check className="w-3 h-3" /> ROI Positivo
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    A ÚNICA PRODUTORA QUE <br />
                    <span className="text-green-500">PAGA O PRÓPRIO INVESTIMENTO.</span>
                </h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    Outras produtoras te entregam um arquivo de vídeo e somem. <strong className="text-white">Nós entregamos uma máquina de vendas.</strong>
                </p>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Sabe por que somos a escolha óbvia? Porque pensamos como investidores, não como artistas.
                </p>
                <div className="p-6 bg-white/5 border-l-4 border-green-500 rounded-r">
                    <p className="text-white italic">"Você não está comprando um vídeo. Está comprando o ativo digital mais poderoso que sua empresa terá."</p>
                </div>
            </div>

            <div className="lg:w-1/2 w-full">
                <div className="bg-[#050505] border border-white/10 p-8 rounded-xl relative">
                    <div className="absolute -top-4 -right-4 bg-red-600 text-white font-bold px-4 py-2 rounded shadow-lg transform rotate-3">
                        VOCÊ GANHA
                    </div>
                    
                    <h3 className="text-xl font-bold mb-6 text-gray-200">Ao fechar o Filme Principal, você recebe um arsenal:</h3>
                    
                    <div className="space-y-4">
                        {bonuses.map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-white/5 rounded hover:bg-white/10 transition-colors"
                            >
                                <div className="p-2 bg-black rounded text-amber-400 border border-amber-500/20">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}