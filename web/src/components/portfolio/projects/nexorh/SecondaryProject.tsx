import { Github, Lock } from "lucide-react";
import { Chat } from "./Chat";
import { TechTag } from "../shared/TechTag";

const STATS = [
    { value: "14", label: "hallazgos remediados", color: "#f59e0b" },
    { value: "3", label: "agentes LLM", color: "#22c55e" },
    { value: "3", label: "servicios desacoplados", color: "#3b82f6" },
];

const TAGS = [
    { label: "Python", abbr: "Py", color: "#ffd43b" },
    { label: "FastAPI", abbr: "FA", color: "#05998b" },
    { label: "LangChain", abbr: "LC", color: "#10b981" },
    { label: "Gemini", abbr: "G", color: "#8ab4f8" },
    { label: "Firestore", abbr: "FS", color: "#ffa000" },
    { label: "Next.js 15", abbr: "▲", color: "#a1a1aa" },
    { label: "Docker", abbr: "D", color: "#2496ed" },
];

export function SecondaryProject() {
    return (
        <div className="flex flex-col gap-8 pt-2">
            <div className="flex items-center gap-5">
                <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Otros proyectos
                </span>
                <span className="h-px flex-1 bg-border" />
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-2xl font-extrabold tracking-tight text-foreground">
                            NexoRH
                        </h4>
                        <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
                            Proyecto heredado
                        </span>
                    </div>
                    <span className="-mt-2 text-[15px] text-muted-foreground">
                        Agente conversacional de RRHH
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                        Los empleados reportan conflictos hablando con un agente en vez
                        de llenar formularios: tres sub-agentes LLM conversan, extraen el
                        contexto de la charla y lo persisten, y con eso se arma el grafo
                        de relaciones laborales del área.
                        <br />
                        Lo tomé heredado — auditoría técnica de 14 hallazgos, refactor de
                        estabilización y puesta en marcha end-to-end.
                    </p>
                    <div className="flex gap-6 py-0.5">
                        {STATS.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-0.5">
                                <span
                                    className="font-mono text-[22px] leading-none font-bold"
                                    style={{
                                        color: `color-mix(in oklab, ${stat.color} 55%, var(--foreground))`,
                                    }}
                                >
                                    {stat.value}
                                </span>
                                <span className="text-[11px] text-muted-foreground">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {TAGS.map((tag) => (
                            <TechTag key={tag.label} {...tag} />
                        ))}
                    </div>
                    <div className="flex items-center gap-4 pt-0.5">
                        <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                            <Lock className="h-3 w-3" />
                            Repositorio privado · a pedido
                        </span>
                        <a
                            href="https://github.com/CowsmonDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 border-b border-border pb-0.5 text-xs text-foreground transition-colors hover:border-primary"
                        >
                            <Github className="h-3 w-3" />
                            Ver perfil en GitHub
                        </a>
                    </div>
                </div>

                <Chat />
            </div>
        </div>
    );
}
