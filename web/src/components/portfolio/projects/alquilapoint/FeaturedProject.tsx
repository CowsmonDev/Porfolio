"use client";

import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Architecture } from "./Architecture";
import { Calendar } from "./Calendar";
import { Chat } from "./Chat";
import { EngineeringStats } from "./EngineeringStats";
import { Stack } from "./Stack";

const REPO_URL = "https://github.com/CowsmonDev/ApiAlquileres/tree/DevOps";

export function FeaturedProject() {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-end justify-between gap-16 lg:flex-row">
                <div className="flex max-w-190 flex-col gap-3.5">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/45 bg-primary/12 px-2.5 py-0.5 font-mono text-[11px] font-bold tracking-wider text-primary uppercase">
                            Proyecto destacado
                        </span>
                        <span className="font-mono text-xs tracking-wide text-muted-foreground">
                            2025 — 2026
                        </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-3xl leading-tight font-extrabold tracking-tight text-foreground">
                            AlquilaPoint
                        </h3>
                        <span className="text-[17px] font-medium text-muted-foreground">
                            Plataforma full-stack de gestión de alquileres
                        </span>
                    </div>
                    <p className="max-w-180 text-base leading-relaxed text-muted-foreground text-pretty">
                        Cubre el ciclo completo de una propiedad en alquiler: alta de
                        edificios y unidades, dueños y managers con permisos
                        diferenciados, reservas que se formalizan en contratos, check-in
                        / check-out y seguimiento de pagos con comprobantes.
                        <br />
                        Sobre eso, un asistente de IA conversacional responde en
                        lenguaje natural sobre el portfolio de cada usuario.
                    </p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-3">
                    <Button
                        className="h-11 px-5 shadow-[0_4px_14px_0_rgba(161,18,59,0.35)]"
                        onClick={() => window.open(REPO_URL, "_blank")}
                    >
                        <Github className="mr-2 h-4 w-4" />
                        Ver Repositorio
                    </Button>
                    <span className="text-right font-mono text-xs text-muted-foreground">
                        Monorepo · 4 microservicios NestJS · Next.js 16
                    </span>
                </div>
            </div>

            <div className="grid items-stretch gap-4 lg:grid-cols-[1.95fr_1fr]">
                <Calendar />
                <Chat />
            </div>

            <EngineeringStats />

            <div className="grid items-stretch gap-4 lg:grid-cols-2">
                <Architecture />
                <Stack />
            </div>
        </div>
    );
}
