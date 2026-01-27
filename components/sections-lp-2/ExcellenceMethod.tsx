'use client';

import { motion } from 'framer-motion';

export function ExcellenceMethod() {
  const steps = [
    { num: "01", title: "Roteiro Estratégico", desc: "Nossos roteiristas são especialistas em marketing. Eles traduzem negócios complexos em mensagens simples e poderosas." },
    { num: "02", title: "Storyboard & Pré-Produção", desc: "Nada é improvisado. Você aprova a visão antes de ligarmos a câmera." },
    { num: "03", title: "Tecnologia de Ponta", desc: "Drones, Câmeras de Cinema, Iluminação de Estúdio. O mesmo equipamento usado em grandes produções, agora para a sua marca." },
    { num: "04", title: "Pós-Produção Fina", desc: "Color grading, sound design e edição que dão o 'polimento final' de alto padrão." }
  ];

  return (
    <section className="relative py-24 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      
      {/* =======================
          RUNNING BORDERS FX
         ======================= */}
      
      {/* Borda Superior Animada */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5">
        <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-red-500 to-transparent"
        />
      </div>

      {/* Borda Inferior Animada (Direção Oposta) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
        <motion.div 
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-red-500 to-transparent"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-16">
            {/* Lado Esquerdo: Headline */}
            <div className="md:w-1/3">
                <span className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 block">Metodologia</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">DO ROTEIRO À TELA: <br />ZERO DOR DE CABEÇA, 100% DE IMPACTO.</h2>
                <p className="text-gray-400">Sabemos que você não tem tempo a perder. Nossa metodologia foi criada para empresários ocupados que exigem excelência.</p>
            </div>

            {/* Lado Direito: Passos */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 group"
                    >
                        <span className="text-4xl font-mono text-white/10 font-bold group-hover:text-red-900/40 transition-colors">{step.num}</span>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}