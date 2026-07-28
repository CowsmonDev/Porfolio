import { highlights } from "./shared";

export function Highlights() {
    return (
        <div className="mt-6 flex flex-col gap-5 border-t border-border pt-8">
            <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Además de escribir código
            </span>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map(({ icon: Icon, title, description }) => (
                    <div
                        key={title}
                        className="flex flex-col gap-2.5 rounded-xl border border-border bg-card p-5.5"
                    >
                        <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] border border-border bg-secondary text-primary">
                            <Icon className="h-4 w-4" strokeWidth={1.9} />
                        </span>
                        <h4 className="text-[15px] font-bold text-foreground">
                            {title}
                        </h4>
                        <p className="text-[13px] leading-relaxed text-muted-foreground text-pretty">
                            {description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
