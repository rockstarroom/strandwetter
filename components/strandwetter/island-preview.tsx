import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Button } from "./button";

export function IslandPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Borkum erleben"
          title="Strand, Dünen, Weite und dieses Gefühl, sofort langsamer zu werden"
          text="Borkum ist mehr als ein Reiseziel. Die Insel ist Bewegung, Ruhe, Wind, Licht und Natur in einem Rhythmus, der sich sofort anders anfühlt. Strandwetter ist der Ausgangspunkt für genau dieses Erlebnis."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] bg-salz p-7 shadow-soft">
            <h3 className="font-display text-3xl text-nordsee">Strand</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Lange Wege am Wasser, klare Luft und Momente, die sofort nach Nordsee klingen.
            </p>
          </div>

          <div className="rounded-[28px] bg-salz p-7 shadow-soft">
            <h3 className="font-display text-3xl text-nordsee">Dünen</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Dünengras, Licht, Weite und die besondere Ruhe einer Insel, die nicht hektisch sein muss.
            </p>
          </div>

          <div className="rounded-[28px] bg-salz p-7 shadow-soft">
            <h3 className="font-display text-3xl text-nordsee">Inselzeit</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Perfekt für Paare, Familien und alle, die einen stilvollen Rückzugsort auf Borkum suchen.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="/borkum-erleben">Borkum entdecken</Button>
        </div>
      </Container>
    </section>
  );
}