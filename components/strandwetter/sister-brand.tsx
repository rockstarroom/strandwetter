import { Container } from "./container";
import { Button } from "./button";

export function SisterBrand() {
  return (
    <section className="bg-nordsee py-20 text-salz md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.18em] text-sand">
              by Schietwetter
            </span>

            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Strandwetter trägt die norddeutsche Handschrift von Schietwetter weiter
            </h2>

            <p className="mt-6 max-w-[720px] text-base leading-8 text-white/80">
              Die Verbindung ist bewusst: Schietwetter steht für Küste, Charakter und norddeutsches Lebensgefühl.
              Strandwetter übersetzt genau diese Haltung in einen Ort, an dem Du ankommen, abschalten und Borkum stilvoll erleben kannst.
            </p>

            <div className="mt-8">
              <Button href="/schietwetter" variant="secondary" className="border-white/25 bg-transparent text-white hover:bg-white/10">
                Mehr zur Markenwelt
              </Button>
            </div>
          </div>

          <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.16em] text-sand">
              Markenwerte
            </p>

            <ul className="mt-5 space-y-4 text-base leading-7 text-white/85">
              <li>Norddeutsche Identität</li>
              <li>Hochwertige, klare Gestaltung</li>
              <li>Küste, Wetter und Ruhe als Erlebnis</li>
              <li>Repräsentativer Ort für Kunden und Marke</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}