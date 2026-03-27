import Image from "next/image";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Button } from "./button";
import { roomItems } from "@/lib/strandwetter-data";

export function RoomsPreview() {
  return (
    <section className="bg-salz py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Zimmer & Suiten"
          title="Räume für Inselruhe, Licht und entspannte Tage"
          text="Ob Wochenende zu zweit, Familienzeit oder besondere Auszeit: Die Zimmer und Suiten von Strandwetter verbinden nordische Klarheit mit Ruhe, Wärme und einem Aufenthalt, der sich leicht anfühlt."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {roomItems.map((room) => (
            <article
              key={room.title}
              className="overflow-hidden rounded-[28px] bg-white shadow-soft"
            >
              <div className="relative h-[320px] w-full">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-3xl text-nordsee">{room.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{room.text}</p>

                <ul className="mt-5 space-y-2 text-sm text-text">
                  {room.facts.map((fact) => (
                    <li key={fact}>• {fact}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button href={room.href} variant="secondary">
                    Zimmer ansehen
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/zimmer">Alle Zimmer entdecken</Button>
        </div>
      </Container>
    </section>
  );
}