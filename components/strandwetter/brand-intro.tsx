import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export function BrandIntro() {
  return (
    <section className="bg-salz py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <SectionHeading
            eyebrow="Norddeutsche Markenwelt"
            title="Ein Hotel, das sich wie Borkum anfühlt"
            text="Strandwetter übersetzt die norddeutsche DNA von Schietwetter in einen Ort für Auszeit, Ruhe und echtes Küstengefühl. Kein austauschbares Hotel, sondern eine stilvolle Schwesterfirma mit Charakter, Klarheit und Nähe zu Strand und Dünen."
          />

          <div className="rounded-[28px] bg-surface p-7 shadow-soft">
            <p className="text-sm uppercase tracking-[0.16em] text-petrol">
              Was Strandwetter besonders macht
            </p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-text">
              <li>Nordisch-elegante Atmosphäre statt Standard-Hoteloptik</li>
              <li>Markenfit zu Schietwetter ohne Shop-Anmutung</li>
              <li>Ruhe, Strandnähe und Inselgefühl als Erlebnis</li>
              <li>Ideal für Paare, Familien und stilvolle Kurzurlaube</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}