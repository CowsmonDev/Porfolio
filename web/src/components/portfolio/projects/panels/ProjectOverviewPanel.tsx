"use client";

import { Button } from "@/components/ui/button";
import {
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, ExternalLink, Github } from "lucide-react";

export function ProjectOverviewPanel() {
    return (
        <div className="flex flex-col justify-center h-full gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <CardHeader className="p-0">
                <CardTitle className="text-3xl text-foreground">
                    Ecosistema Distribuido de Alquileres
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mt-4">
                    Plataforma de microservicios diseñada con NestJS. Implementa
                    persistencia políglota (MongoDB + PostgreSQL) para separar
                    la identidad flexible de la rigurosidad financiera.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                            Persistencia Políglota (Mongo & Postgres)
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                            Esquemas Polimórficos Dinámicos
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">
                            Resolución de Conflictos Distribuida
                        </span>
                    </div>
                </div>
                <Separator className="my-2" />
                <div className="flex gap-3">
                    <Button size="lg" className="w-full sm:w-auto">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Arquitectura
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full sm:w-auto"
                    >
                        <Github className="w-4 h-4 mr-2" />
                        Código Fuente
                    </Button>
                </div>
            </CardContent>
        </div>
    );
}
