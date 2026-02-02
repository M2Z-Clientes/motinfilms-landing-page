import { LandingPage2Template } from '@/components/templates/LandingPage2'; // Seu template da LP2
import { notFound } from 'next/navigation';
import { getCityFromSlug } from '@/utils/city-slug';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// SEO Dinâmico para LP2
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cityName = getCityFromSlug(slug);

  if (!cityName) return {};

  return {
    title: `Produtora Audiovisual em ${cityName} | Motin Films`,
    description: `Produção de vídeo de alta performance em ${cityName}. Certificação Ancine e Estratégia de Martech.`,
  };
}

export default async function Lp2CityPage({ params }: PageProps) {
  const { slug } = await params;
  const cityName = getCityFromSlug(slug);

  // Se a URL não seguir o padrão "produtora-audiovisual-[cidade]", retorna 404
  if (!cityName) {
    notFound();
  }

  // Renderiza o Template da LP2 passando a cidade
  return <LandingPage2Template city={cityName} />;
}