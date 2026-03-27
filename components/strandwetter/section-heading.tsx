type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-10 flex max-w-[760px] flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-petrol">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="font-display text-4xl leading-tight text-nordsee md:text-5xl">
        {title}
      </h2>

      {text ? (
        <p className="text-base leading-8 text-muted md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}