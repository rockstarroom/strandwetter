import { Container } from "./container";
import { Button } from "./button";

export function BookingCta() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="rounded-[36px] bg-surface px-6 py-10 shadow-soft md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-sm uppercase tracking-[0.18em] text-petrol">
                Anfrage
              </span>
              <h2 className="mt-3 font-display text-4xl leading-tight text-nordsee md:text-5xl">
                Bereit für ein paar Tage Strandwetter auf Borkum?
              </h2>
              <p className="mt-4 max-w-[760px] text-base leading-8 text-muted">
                Ob spontane Auszeit, Paarurlaub, Familienzeit oder ruhiges Wochenende am Meer:
                Frag Deinen Aufenthalt direkt an und plane Deine Zeit zwischen Strand, Dünen und nordischer Ruhe.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/anfrage" className="w-full lg:w-auto">
                Aufenthalt anfragen
              </Button>
              <Button href="/angebote" variant="secondary" className="w-full lg:w-auto">
                Angebote ansehen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}