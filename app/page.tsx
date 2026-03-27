import { Hero } from "@/components/strandwetter/hero";
import { BrandIntro } from "@/components/strandwetter/brand-intro";
import { ExperienceNav } from "@/components/strandwetter/experience-nav";
import { RoomsPreview } from "@/components/strandwetter/rooms-preview";
import { CulinaryPreview } from "@/components/strandwetter/culinary-preview";
import { WellnessPreview } from "@/components/strandwetter/wellness-preview";
import { IslandPreview } from "@/components/strandwetter/island-preview";
import { OffersPreview } from "@/components/strandwetter/offers-preview";
import { SisterBrand } from "@/components/strandwetter/sister-brand";
import { BookingCta } from "@/components/strandwetter/booking-cta";
import { FaqTeaser } from "@/components/strandwetter/faq-teaser";

export default function HomePage() {
  return (
    <main className="bg-salz text-text">
      <Hero />
      <BrandIntro />
      <ExperienceNav />
      <RoomsPreview />
      <CulinaryPreview />
      <WellnessPreview />
      <IslandPreview />
      <OffersPreview />
      <SisterBrand />
      <BookingCta />
      <FaqTeaser />
    </main>
  );
}