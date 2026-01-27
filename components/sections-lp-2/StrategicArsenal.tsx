'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Monitor, Smartphone, Film, Scissors } from 'lucide-react';

const arsenalItems = [
    {
        title: 'O Filme "Hero"',
        desc: 'Institucional ou Produto. Imagem de cinema para impressionar em site e apresentações.',
        icon: <Film className="w-6 h-6 text-white" />
    },
    {
        title: 'Cortes de Comercial (30s)',
        desc: 'Direto ao ponto. Ideal para inserções em TV e YouTube Ads.',
        icon: <Monitor className="w-6 h-6 text-white" />
    },
    {
        title: 'Cortes de Performance (15s)',
        desc: 'Dinâmicos e ágeis. Projetados para conversão rápida em tráfego pago.',
        icon: <Scissors className="w-6 h-6 text-white" />
    },
    {
        title: 'Adaptação Multi-formato',
        desc: 'Entregamos em Wide (16:9) e Vertical (9:16). Domine Reels e TikTok com qualidade de estúdio.',
        icon: <Smartphone className="w-6 h-6 text-white" />
    }
];

export function StrategicArsenal() {
  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden">
      
      {/* Background Tático Vermelho */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-[#050505] to-[#050505] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444405_1px,transparent_1px),linear-gradient(to_bottom,#ef444405_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
                <span className="text-red-500 font-mono text-xs tracking-widest uppercase mb-2 block">O Diferencial Estratégico</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    MAIS DO QUE UM FILME BONITO. <br />
                    UMA <span className="text-red-500 bg-red-900/10 px-2">MÁQUINA DE ATRAÇÃO.</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    A maioria das produtoras te entrega um vídeo e "boa sorte". Nós entregamos um ecossistema de conteúdo para você dominar todas as telas e esmagar a concorrência no tráfego pago.
                </p>
                <div className="mt-6 inline-block bg-white/5 border border-white/10 px-4 py-2 rounded text-sm text-gray-300">
                    Contratando o filme principal, você garante <span className="text-white font-bold">SEM CUSTO EXTRA:</span>
                </div>
            </div>
            
            <div className="flex-1 w-full grid grid-cols-1 gap-4">
                {arsenalItems.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#0a0a0a] border border-white/10 p-4 md:p-6 rounded flex items-center gap-4 hover:border-red-500/30 transition-colors group"
                    >
                        <div className="p-3 bg-red-900/20 rounded-full text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-lg">{item.title}</h4>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                        <CheckCircle className="ml-auto w-5 h-5 text-green-500 opacity-50" />
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}