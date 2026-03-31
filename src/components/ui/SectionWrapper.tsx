interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className = "",
  innerClassName = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className={`max-w-6xl mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
}
