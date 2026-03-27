import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Button } from "./button";

export function CulinaryPreview() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-[32px]">
            <div
              className="min-h-[460px] bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/culinary/kulinarik.jpg')",
              }}
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Kulinarik"
              title="Genuss, der den Tag auf Borkum ruhig beginnen und entspannt ausklingen lässt"
              text="Frühstück, Kaffee am Nachmittag und stimmungsvolle Abendmomente gehören zu Strandwetter genauso wie Nordseeluft und Dünenwege. Kulinarik soll hier nicht laut sein, sondern warm, hochwertig und ein Teil Deiner Auszeit."
            />

            <div className="flex flex-wrap gap-3">
              <Button href="/kulinarik">Kulinarik entdecken</Button>
              <Button href="/kulinarik/fruehstueck" variant="secondary">
                Frühstück ansehen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}