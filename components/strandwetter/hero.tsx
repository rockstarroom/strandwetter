import { Container } from "./container";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-nordsee text-salz">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero/strandwetter-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,20,28,0.35),rgba(10,20,28,0.72))]" />
      </div>

      <Container className="relative flex min-h-[92vh] items-end py-16 md:py-20">
        <div className="max-w-[760px]">
          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur">
            Eine Schwesterfirma von Schietwetter
          </div>

          <h1 className="font-display text-5xl leading-[0.95] md:text-7xl xl:text-[88px]">
            Strandwetter
            <span className="mt-2 block font-sans text-lg font-normal tracking-normal text-white/85 md:text-2xl">
              Dein Rückzugsort zwischen Dünen, Nordseeluft und echter Inselruhe auf Borkum
            </span>
          </h1>

          <p className="mt-6 max-w-[640px] text-base leading-8 text-white/80 md:text-lg">
            Stilvoll übernachten, tief durchatmen und Borkum so erleben, wie es sich anfühlen soll:
            ruhig, weit, nordisch und nah am Strand.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/anfrage">Aufenthalt anfragen</Button>
            <Button href="/zimmer" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              Zimmer entdecken
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}