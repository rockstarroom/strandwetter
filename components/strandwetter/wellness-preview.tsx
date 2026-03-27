import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Button } from "./button";

export function WellnessPreview() {
  return (
    <section className="bg-[#EAE3D8] py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Ruhe & Entspannung"
              title="Wenn Wind, Strand und Sauna zusammenkommen, wird Auszeit spürbar"
              text="Strandwetter ist ein Ort für Inselruhe. Nach langen Spaziergängen am Meer, klarer Luft und einem Tag zwischen Strand und Dünen schafft der Ruhebereich den passenden Gegenpol: warm, leise und entschleunigend."
            />

            <div className="flex flex-wrap gap-3">
              <Button href="/hotel/sauna-entspannung">Mehr zur Entspannung</Button>
              <Button href="/anfrage" variant="secondary">
                Aufenthalt anfragen
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px]">
            <div
              className="min-h-[460px] bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/wellness/sauna.jpg')",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}