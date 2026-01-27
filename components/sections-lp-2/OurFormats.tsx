'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function OurFormats() {
  const formats = [
    { title: "Institucional de Impacto", desc: "Pare de contar sua história de jeito chato. Transformamos sua trajetória em um épico." },
    { title: "Produto com Desejo", desc: "Luz, ângulo e macro. Fazemos seu produto parecer irresistível na tela." },
    { title: "Cobertura de Eventos", desc: "Mostre o tamanho do seu negócio com a grandiosidade que ele tem." },
    { title: "Publicidade & TV", desc: "Campanhas que fixam na mente e geram conversas." }
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">QUAL A MELHOR ESTRATÉGIA PARA <br />VENCER SEU MERCADO HOJE?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((fmt, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 min-h-[250px] flex flex-col"
                >
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">{fmt.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{fmt.desc}</p>
                    <div className="w-8 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-red-500 transition-all duration-500"></div>
                </motion.div>
            ))}
        </div>

        <div className="mt-12 text-center">
            <Button variant="ghost" className="border border-white/20 text-white hover:bg-white hover:text-black tracking-widest uppercase font-mono px-8 py-6" href="https://motinfilms.com.br/portfolio">
                Ver Portfólio Cinematográfico <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
        </div>

      </div>
    </section>
  );
}