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
import { Gallery } from '@/components/sections/Gallery';
import { SocialProof } from '@/components/sections/SocialProof';
import { TrackView } from 'ninetwo-user-tracking';
import { NationalCoverageV2 } from '../sections/national-coverage-v2/NationalCoverageV2';

// Aceita uma prop "city" opcional, caso queira personalizar o texto no futuro
interface LandingPage2Props {
  city?: string;
}

export function LandingPage2Template({ city }: LandingPage2Props) {
  return (
    <main className="min-h-screen bg-[#050505]">
      
      {/* Se quiser passar a cidade para o Hero no futuro: <Lp2Hero city={city} /> */}
      <TrackView eventName="lp2_hero_view" category="Hero" label="Hero LP2">
        <Lp2Hero />
      </TrackView>

      <TrackView eventName="lp2_socialproof_view" category="Soci  al Proof" label="Logos LP2">
        <SocialProof />
      </TrackView>

      <TrackView eventName="lp2_provocation_view" category="Content" label="Provocation LP2">
        <TheProvocation />
      </TrackView>

      <TrackView eventName="lp2_solution_view" category="Content" label="Solution LP2">
        <TheSolution />
      </TrackView>

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
      
      <NationalCoverageV2 />

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