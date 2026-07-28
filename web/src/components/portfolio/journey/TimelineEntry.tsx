import type { Experience } from "./shared";

interface TimelineEntryProps {
    experience: Experience;
}

export function TimelineEntry({ experience }: TimelineEntryProps) {
    const { years, months, title, organization, description, tags, isCurrent } =
        experience;

    return (
        <div className="grid grid-cols-[84px_28px_1fr] items-start md:grid-cols-[118px_34px_1fr]">
            {/* Fechas */}
            <div className="flex flex-col items-end gap-1.5 pb-11 text-right">
                <span
                    className={`font-mono text-[13px] font-bold ${
                        isCurrent ? "text-foreground" : "text-muted-foreground"
                    }`}
                >
                    {years}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                    {months}
                </span>
                {isCurrent && (
                    <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-primary/45 bg-primary/12 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wide text-primary">
                        <span className="block h-[5px] w-[5px] rounded-full bg-primary" />
                        Más reciente
                    </span>
                )}
            </div>

            {/* Punto y línea */}
            <div className="flex flex-col items-center self-stretch">
                <span
                    className={`mt-[3px] block h-[13px] w-[13px] shrink-0 rounded-full border-2 border-secondary dark:border-[#151515] ${
                        isCurrent
                            ? "bg-primary shadow-[0_0_0_4px_rgba(161,18,59,0.18)]"
                            : "bg-muted-foreground"
                    }`}
                />
                <span className="block w-px flex-1 bg-border" />
            </div>

            {/* Contenido */}
            <div className="flex flex-col gap-2 pb-11 pl-1">
                <h3 className="text-[19px] leading-tight font-bold text-foreground">
                    {title}
                </h3>
                <span className="text-sm font-medium text-primary">
                    {organization}
                </span>
                <p className="mt-1 max-w-190 text-[14.5px] leading-relaxed text-muted-foreground text-pretty">
                    {description}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-[5px] border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
