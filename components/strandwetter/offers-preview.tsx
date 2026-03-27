import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Button } from "./button";
import { offerItems } from "@/lib/strandwetter-data";

export function OffersPreview() {
  return (
    <section className="bg-salz py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Angebote"
          title="Saisonale Auszeiten, die Lust auf ein paar Tage Borkum machen"
          text="Von der kurzen Nordsee-Auszeit bis zum Herbstaufenthalt mit klarer Luft und ruhiger Inselstimmung: Die Angebote von Strandwetter machen den Weg zur Anfrage leichter und emotionaler."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {offerItems.map((offer) => (
            <article
              key={offer.title}
              className="rounded-[28px] border border-border bg-white p-6 shadow-soft"
            >
              <span className="inline-flex rounded-full bg-sand/40 px-3 py-1 text-xs uppercase tracking-[0.16em] text-petrol">
                {offer.label}
              </span>

              <h3 className="mt-5 font-display text-3xl text-nordsee">
                {offer.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {offer.text}
              </p>

              <div className="mt-6">
                <Button href={offer.href} variant="secondary">
                  Angebot ansehen
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}