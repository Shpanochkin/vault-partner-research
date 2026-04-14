interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="pill bg-vault-primary/15 text-vault-primary border border-vault-primary/30">
          {number}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-vault-muted max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
