import Link from "next/link";
import { Container } from "./container";
import { experienceItems } from "@/lib/strandwetter-data";

export function ExperienceNav() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {experienceItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[28px] border border-border bg-salz p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <h3 className="font-display text-3xl text-nordsee">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              <span className="mt-5 inline-flex text-sm font-medium text-petrol transition group-hover:translate-x-1">
                Mehr entdecken →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}