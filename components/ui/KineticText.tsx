'use client';

import React, { useState, useEffect, useMemo } from 'react';

// Definição dos "Estilos de Cinema"
const MOVIE_STYLES = [
  // Estilo Roteiro / Timecode
  "font-mono font-medium tracking-tighter uppercase text-gray-400",
  // Estilo Título Blockbuster
  "font-sans font-black tracking-normal uppercase text-white",
  // Estilo Cinema Clássico / Drama
  "font-serif italic font-light tracking-wide text-gray-200",
  // Estilo "Outline" (Rascunho)
  "font-sans font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 stroke-1 stroke-white decoration-clone", 
];

interface KineticTextProps {
  text: string;
  className?: string;
}

export const KineticText: React.FC<KineticTextProps> = ({ text, className = "" }) => {
  // Quebramos o texto em palavras
  const words = useMemo(() => text.split(" "), [text]);
  
  return (
    <div className={`flex flex-wrap gap-x-3 gap-y-2 justify-center ${className}`}>
      {words.map((word, i) => (
        <WordShifter key={i} word={word} />
      ))}
    </div>
  );
};

// Sub-componente que cuida da animação de cada palavra individualmente
const WordShifter = ({ word }: { word: string }) => {
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    // Define um intervalo aleatório para cada palavra (entre 2s e 5s)
    // Isso cria aquele efeito de "caos organizado" de uma ilha de edição
    const randomInterval = Math.floor(Math.random() * 3000) + 2000;

    const intervalId = setInterval(() => {
      setStyleIndex((prev) => (prev + 1) % MOVIE_STYLES.length);
    }, randomInterval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span 
      className={`transition-all duration-300 ease-in-out transform ${MOVIE_STYLES[styleIndex]}`}
    >
      {word}
    </span>
  );
};

export default KineticText;