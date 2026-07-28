const SERVICES = [
    { name: "ms-properties", desc: "alquileres", color: "#f59e0b" },
    { name: "ms-payments", desc: "pagos", color: "#3b82f6" },
    { name: "ms-users", desc: "auth · roles", color: "#a855f7" },
    { name: "ms-chat", desc: "asistente IA", color: "#22c55e" },
];

function ServiceBox({ name, desc, color }: (typeof SERVICES)[number]) {
    return (
        <div
            className="flex flex-col gap-0.5 rounded-md border px-2 py-2 text-center"
            style={{ borderColor: `${color}45`, backgroundColor: `${color}14` }}
        >
            <span
                className="font-mono text-[10.5px] font-bold"
                style={{ color: `color-mix(in oklab, ${color} 55%, var(--foreground))` }}
            >
                {name}
            </span>
            <span className="text-[9.5px] text-muted-foreground">{desc}</span>
        </div>
    );
}

function DbBox({ label, color }: { label: string; color: string }) {
    return (
        <div
            className="w-full rounded-md border border-dashed px-2 py-2 text-center font-mono text-[11px]"
            style={{
                borderColor: `${color}55`,
                color: `color-mix(in oklab, ${color} 55%, var(--foreground))`,
            }}
        >
            {label}
        </div>
    );
}

export function Architecture() {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-code-bg">
            <div className="flex items-center justify-between gap-3 border-b border-border bg-card px-3.5 py-2.5">
                <span className="font-mono text-[11.5px] font-bold text-foreground">
                    arquitectura · docker-compose.yml
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                    monorepo · 4 servicios
                </span>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-2.5 p-5">
                <span className="font-mono text-[11px] text-muted-foreground">
                    // cómo se comunican
                </span>

                <div className="rounded-md border border-border bg-card px-2.5 py-2 text-center">
                    <span className="font-mono text-[11.5px] font-semibold text-foreground">
                        web · Next.js 16
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] text-muted-foreground">
                        App Router · clientes Orval
                    </span>
                </div>

                <div className="flex flex-col items-center gap-0">
                    <span className="block h-3 w-px bg-border" />
                    <span className="rounded-full border border-border bg-card px-2 py-0.5 font-mono text-[9.5px] text-muted-foreground">
                        REST · JWT
                    </span>
                    <span className="block h-3 w-px bg-border" />
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {SERVICES.map((s) => (
                        <ServiceBox key={s.name} {...s} />
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col items-center gap-2">
                        <span className="block h-3 w-px bg-border" />
                        <DbBox label="PostgreSQL · TypeORM" color="#5b9bd5" />
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="block h-3 w-px bg-border" />
                        <DbBox label="MongoDB · Mongoose" color="#47a248" />
                    </div>
                </div>

                <div className="mt-0.5 flex items-center gap-2 border-t border-border pt-1.5">
                    <span className="block h-px w-3.5 shrink-0 bg-border" />
                    <span className="text-[11px] leading-relaxed text-muted-foreground">
                        ms-chat consulta a los demás servicios por HTTP para responder
                        solo con datos que el usuario puede ver.
                    </span>
                </div>
            </div>
        </div>
    );
}
