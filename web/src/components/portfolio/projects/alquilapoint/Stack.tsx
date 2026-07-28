import { TechTag } from "../shared/TechTag";

const GROUPS = [
    {
        label: "Backend",
        items: [
            { label: "NestJS 11", abbr: "N", color: "#e0234e" },
            { label: "TypeScript", abbr: "TS", color: "#3178c6" },
            { label: "Orval · OpenAPI", abbr: "O", color: "#85ea2d" },
            { label: "CASL", abbr: "C", color: "#f59e0b" },
        ],
    },
    {
        label: "Frontend",
        items: [
            { label: "Next.js 16", abbr: "▲", color: "#a1a1aa" },
            { label: "Tailwind 4", abbr: "T", color: "#38bdf8" },
            { label: "Zustand", abbr: "Zu", color: "#c08552" },
            { label: "Zod", abbr: "Z", color: "#5b8def" },
        ],
    },
    {
        label: "Datos",
        items: [
            { label: "PostgreSQL · TypeORM", abbr: "PG", color: "#5b9bd5" },
            { label: "MongoDB · Mongoose", abbr: "M", color: "#47a248" },
            { label: "Cloudinary", abbr: "CL", color: "#f4b23e" },
        ],
    },
    {
        label: "IA e infraestructura",
        items: [
            { label: "LangChain.js", abbr: "LC", color: "#10b981" },
            { label: "Google Gemini", abbr: "G", color: "#8ab4f8" },
            { label: "Docker Compose", abbr: "D", color: "#2496ed" },
        ],
    },
];

export function Stack() {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-code-bg">
            <div className="flex items-center justify-between gap-3 border-b border-border bg-card px-3.5 py-2.5">
                <span className="font-mono text-[11.5px] font-bold text-foreground">
                    stack.ts
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                    TypeScript end-to-end
                </span>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-4.5 p-5">
                {GROUPS.map((group) => (
                    <div key={group.label} className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                            {group.label}
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <TechTag key={item.label} {...item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
