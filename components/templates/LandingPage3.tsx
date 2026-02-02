'use client'

import { Lp3Hero } from '@/components/sections-lp-3/Lp3Hero';
import { TheWound } from '@/components/sections-lp-3/TheWound';
import { TheTurnaround } from '@/components/sections-lp-3/TheTurnaround';
import { NoBrainerOffer } from '@/components/sections-lp-3/NoBrainerOffer';
import { EliteSocialProof } from '@/components/sections-lp-3/EliteSocialProof';
import { EffortlessMethod } from '@/components/sections-lp-3/EffortlessMethod';
import { UltimatumFooter } from '@/components/sections-lp-3/UltimatumFooter';
import { Gallery } from '@/components/sections/Gallery';
import { SocialProof } from '@/components/sections/SocialProof';
import { AncineLicense } from '@/components/sections/AncineLicense';
import { TrackView } from 'ninetwo-user-tracking';
import { NationalCoverageV2 } from '../sections/national-coverage-v2/NationalCoverageV2';

interface LandingPage3Props {
  city?: string;
}

export function LandingPage3Template({ city }: LandingPage3Props) {

  // Nota: Você pode passar a prop 'city' para o Lp3Hero se quiser alterar o texto 
  // ex: "Seu concorrente em Curitiba domina o mercado..."

  return (
    <main className="min-h-screen bg-[#050505]">

      <TrackView eventName="lp3_hero_view" category="Hero" label="Hero LP3">
        {/* Se você atualizar o Lp3Hero para aceitar props, passe aqui: city={city} */}
        <Lp3Hero />
      </TrackView>

      {/* Social Proof Global: Validar que não somos amadores logo após o "Choque de Realidade" */}
      <TrackView eventName="lp3_socialproof_view" category="Social Proof" label="Logos LP3">
        <SocialProof />
      </TrackView>

      <TrackView eventName="lp3_pain_view" category="Content" label="The Wound LP3">
        <TheWound />
      </TrackView>

      <TrackView eventName="lp3_solution_view" category="Content" label="The Turnaround LP3">
        <TheTurnaround />
      </TrackView>

      {/* Ancine License aqui ajuda a justificar a "Virada" de autoridade */}
      <AncineLicense />

      <TrackView eventName="lp3_offer_view" category="Conversion" label="No Brainer Offer LP3">
        <NoBrainerOffer />
      </TrackView>

      <NationalCoverageV2 />

      {/* Elite Social Proof (Texto específico da LP3 sobre ROI/Crescimento) */}
      <TrackView eventName="lp3_proof_view" category="Social Proof" label="Elite Proof LP3">
        <EliteSocialProof />
      </TrackView>

      {/* Gallery: O contraste visual final (Qualidade vs Amadorismo) */}
      <TrackView eventName="lp3_gallery_view" category="Gallery" label="Portfolio LP3">
        <Gallery />
      </TrackView>

      <TrackView eventName="lp3_method_view" category="Content" label="Effortless Method LP3">
        <EffortlessMethod />
      </TrackView>

      <TrackView eventName="lp3_cta_view" category="Conversion" label="Ultimatum CTA LP3">
        <UltimatumFooter />
      </TrackView>

    </main>
  );
}