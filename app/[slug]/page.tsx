import { LandingPage2Template } from '@/components/templates/LandingPage2';
import { notFound } from 'next/navigation';

// Definição da tipagem correta para o Next.js atual
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Função para gerar metadados dinâmicos
export async function generateMetadata({ params }: PageProps) {
  // 1. Aguardamos a resolução da Promise params
  const { slug } = await params;

  // Verifica se o padrão da URL está correto
  if (!slug || !slug.startsWith('produtora-audiovisual-')) {
    return {};
  }

  // Extrai o nome da cidade e formata (ex: "sao-paulo" -> "São Paulo")
  const citySlug = slug.replace('produtora-audiovisual-', '');
  const cityName = citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `Produtora Audiovisual em ${cityName} | Motin Films`,
    description: `A Motin Films atende ${cityName} e todo o Brasil com produções cinematográficas de alto nível.`,
  };
}

// Componente da Página (Deve ser ASYNC agora)
export default async function CityLandingPage({ params }: PageProps) {
  // 2. Aguardamos a resolução da Promise params aqui também
  const { slug } = await params;

  // Lógica de Proteção:
  // Se slug for undefined ou não começar com o prefixo, 404.
  if (!slug || !slug.startsWith('produtora-audiovisual-')) {
    notFound();
  }

  // Extrai a cidade para passar ao template
  const city = slug.replace('produtora-audiovisual-', '');

  return <LandingPage2Template city={city} />;
}