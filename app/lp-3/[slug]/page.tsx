// Supondo que você criou o template da LP3
import { LandingPage3Template } from '@/components/templates/LandingPage3'; 
import { notFound } from 'next/navigation';
import { getCityFromSlug } from '@/utils/city-slug';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// SEO Dinâmico para LP3 (Copywriting mais agressivo)
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cityName = getCityFromSlug(slug);

  if (!cityName) return {};

  return {
    title: `Vídeos que Vendem em ${cityName} | Motin Films`,
    description: `Pare de perder dinheiro com vídeos amadores em ${cityName}. A Motin Films entrega autoridade e ROI.`,
  };
}

export default async function Lp3CityPage({ params }: PageProps) {
  const { slug } = await params;
  const cityName = getCityFromSlug(slug);

  if (!cityName) {
    notFound();
  }

  // Renderiza o Template da LP3 passando a cidade
  return <LandingPage3Template city={cityName} />;
}