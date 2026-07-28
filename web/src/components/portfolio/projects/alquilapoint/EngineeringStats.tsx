const STATS = [
    { value: "15", label: "ADRs registradas", color: "#f59e0b" },
    { value: "4", label: "RFCs de refactor", color: "#a855f7" },
    { value: "4", label: "Microservicios", color: "#3b82f6" },
    { value: "2", label: "Migraciones de base de datos", color: "#22c55e" },
];

export function EngineeringStats() {
    return (
        <div className="grid grid-cols-[auto_repeat(4,1fr)] items-center rounded-xl border border-border bg-card">
            <div className="flex max-w-58 flex-col gap-1.5 border-r border-border px-5.5 py-4.5">
                <span className="inline-flex items-center gap-1.5 font-mono text-[13px] font-bold tracking-widest text-primary uppercase">
                    <span className="block h-1.5 w-1.5 rounded-full bg-primary" />
                    Ingeniería
                </span>
                <span className="text-sm leading-snug text-muted-foreground">
                    Decisiones documentadas y un sistema que evolucionó.
                </span>
            </div>
            {STATS.map((stat, i) => (
                <div
                    key={stat.label}
                    className={`flex flex-col gap-1.5 px-5.5 py-4.5 ${
                        i < STATS.length - 1 ? "border-r border-border" : ""
                    }`}
                >
                    <span className="font-mono text-[34px] leading-none font-bold tracking-tight text-foreground">
                        {stat.value}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground">
                        <span
                            className="block h-1.5 w-1.5 shrink-0 rounded-[2px]"
                            style={{ background: stat.color }}
                        />
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
