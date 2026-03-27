import Link from "next/link";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { faqItems } from "@/lib/strandwetter-data";

export function FaqTeaser() {
  return (
    <section className="bg-salz py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Wichtige Fragen zu Deinem Aufenthalt"
          text="Die wichtigsten Antworten rund um Zimmer, Anfrage, Familienaufenthalt und Entspannung auf einen Blick."
        />

        <div className="grid gap-4">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-[24px] border border-border bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-medium text-nordsee">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/faq" className="text-sm font-medium text-petrol transition hover:text-nordsee">
            Alle Fragen ansehen →
          </Link>
        </div>
      </Container>
    </section>
  );
}