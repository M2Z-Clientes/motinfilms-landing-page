'use client'

import { Lp2Hero } from '@/components/sections-lp-2/Lp2Hero';
import { TheProvocation } from '@/components/sections-lp-2/TheProvocation';
import { TheSolution } from '@/components/sections-lp-2/TheSolution';
import { AuthorityClub } from '@/components/sections-lp-2/AuthorityClub';
import { StrategicArsenal } from '@/components/sections-lp-2/StrategicArsenal';
import { OurFormats } from '@/components/sections-lp-2/OurFormats';
import { ExcellenceMethod } from '@/components/sections-lp-2/ExcellenceMethod';
import { FinalCTA } from '@/components/sections-lp-2/FinalCTA';
import { AncineLicense } from '@/components/sections/AncineLicense';
import { NationalCoverage } from '@/components/sections/NationalCoverage';
import { Gallery } from '@/components/sections/Gallery'; // Importado
import { SocialProof } from '@/components/sections/SocialProof'; // Importado
import { TrackView } from 'ninetwo-user-tracking';

export default function LandingPage2() {
  return (
    <main className="min-h-screen bg-[#050505]">

      <TrackView eventName="lp2_hero_view" category="Hero" label="Hero LP2">
        <Lp2Hero />
      </TrackView>

      {/* Social Proof Global: Validação imediata após a promessa */}
      <TrackView eventName="lp2_socialproof_view" category="Social Proof" label="Logos LP2">
        <SocialProof />
      </TrackView>

      <TrackView eventName="lp2_provocation_view" category="Content" label="Provocation LP2">
        <TheProvocation />
      </TrackView>

      <TrackView eventName="lp2_solution_view" category="Content" label="Solution LP2">
        <TheSolution />
      </TrackView>

      {/* Authority Club (Específico da LP2 com depoimento focado) */}
      <TrackView eventName="lp2_authority_view" category="Social Proof" label="Authority LP2">
        <AuthorityClub />
      </TrackView>

      <TrackView eventName="lp2_arsenal_view" category="Content" label="Strategic Arsenal LP2">
        <StrategicArsenal />
      </TrackView>
      
      <AncineLicense />

      <TrackView eventName="lp2_formats_view" category="Content" label="Formats LP2">
        <OurFormats />
      </TrackView>
      
      <NationalCoverage />

      {/* Gallery Global: Prova visual antes da metodologia */}
      <TrackView eventName="lp2_gallery_view" category="Gallery" label="Portfolio LP2">
        <Gallery />
      </TrackView>

      <TrackView eventName="lp2_methodology_view" category="Content" label="Methodology LP2">
        <ExcellenceMethod />
      </TrackView>

      <TrackView eventName="lp2_cta_view" category="Conversion" label="Final CTA LP2">
        <FinalCTA />
      </TrackView>

    </main>
  );
}